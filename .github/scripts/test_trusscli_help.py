"""Offline regression tests for nightly help capture and its revision gate."""

import importlib.util
import json
from pathlib import Path
import subprocess
import tempfile
import unittest
from unittest.mock import patch


SPEC = importlib.util.spec_from_file_location(
    "trusscli_help", Path(__file__).with_name("trusscli-help.py")
)
help_tool = importlib.util.module_from_spec(SPEC)
SPEC.loader.exec_module(help_tool)


class HelpTests(unittest.TestCase):
    def test_documented_commands_only(self):
        text = "Usage:\n  cli <command>\n\nCommands:\n  zoo <path>  Z\n  alpha  A\n\nOptions:\n  --help  H\n"
        self.assertEqual(help_tool.command_names(text, required=True), ["alpha", "zoo"])
        self.assertEqual(help_tool.command_names("Usage: cli zoo\n"), [])

    def test_missing_empty_or_changed_command_section_fails(self):
        for text in ["Usage: cli\n", "Commands:\n\n", "Commands:\n * changed format\n"]:
            with self.subTest(text=text), self.assertRaises(ValueError):
                help_tool.command_names(text, required=True)

    def test_command_on_several_lines_is_listed_once(self):
        text = "Commands:\n  cache <command>  C\n  cache remove <spec>  R\n  alpha  A\n\n"
        self.assertEqual(help_tool.command_names(text, required=True), ["alpha", "cache"])

    def test_subcommand_repeating_parent_list_is_not_descended(self):
        group = "Usage: cli group\n\nCommands:\n  list  L\n  remove <spec>  R\n  remove --addon <spec>  A\n\n"
        responses = {
            (): "Commands:\n  group <command>  G\n  group remove <spec>  R\n\n",
            ("group",): group,
            ("group", "list"): group.replace("cli group", "cli group list", 1),
            ("group", "remove"): group.replace("cli group", "cli group remove", 1),
        }
        calls = []

        def run(args, **kwargs):
            calls.append(tuple(args[1:-1]))
            return subprocess.CompletedProcess(args, 0, responses[tuple(args[1:-1])])

        with patch.object(help_tool.subprocess, "run", side_effect=run):
            data = help_tool.capture(Path("cli"), "abc")
        self.assertEqual(sorted(data["commands"]), ["", "group", "group list", "group remove"])
        self.assertEqual(calls.count(("group", "remove")), 1)

    def test_capture_nested_help_and_preserve_text(self):
        responses = {
            (): "Commands:\n  group  Group\n  zed  Zed\n\n",
            ("group",): "Usage: cli group\n\nCommands:\n  child <arg>  Child\n\n",
            ("group", "child"): "Usage: cli group child\n\nUnicode: 日本語\n",
            ("zed",): "Usage: cli zed\n",
        }

        def run(args, **kwargs):
            self.assertEqual(args[-1], "--help")
            self.assertTrue(kwargs["check"])
            return subprocess.CompletedProcess(args, 0, responses[tuple(args[1:-1])])

        with patch.object(help_tool.subprocess, "run", side_effect=run):
            data = help_tool.capture(Path("cli"), "abc")
        self.assertEqual(data["trussc_commit"], "abc")
        self.assertEqual(data["commands"], {" ".join(k): v for k, v in responses.items()})

    def test_non_help_output_is_skipped(self):
        responses = {
            (): "Commands:\n  version  V\n  zed  Z\n\n",
            ("version",): "cli v1 (built today) /some/path\n",
            ("zed",): "Usage: cli zed\n",
        }

        def run(args, **kwargs):
            return subprocess.CompletedProcess(args, 0, responses[tuple(args[1:-1])])

        with patch.object(help_tool.subprocess, "run", side_effect=run):
            data = help_tool.capture(Path("cli"), "abc")
        self.assertEqual(sorted(data["commands"]), ["", "zed"])

    def test_failed_or_empty_help_fails(self):
        with patch.object(help_tool.subprocess, "run", side_effect=subprocess.CalledProcessError(1, "cli")):
            with self.assertRaises(subprocess.CalledProcessError):
                help_tool.capture(Path("cli"), "abc")
        with patch.object(help_tool.subprocess, "run", return_value=subprocess.CompletedProcess("cli", 0, "")):
            with self.assertRaises(ValueError):
                help_tool.capture(Path("cli"), "abc")

    def test_revision_gate(self):
        with tempfile.TemporaryDirectory() as directory:
            marker = Path(directory) / "help.json"
            self.assertTrue(help_tool.should_run(marker, "abc"))
            marker.write_text(json.dumps({"trussc_commit": "abc"}), encoding="utf-8")
            self.assertFalse(help_tool.should_run(marker, "abc"))
            self.assertTrue(help_tool.should_run(marker, "def"))
            self.assertTrue(help_tool.should_run(marker, "abc", force=True))
            marker.write_text("broken", encoding="utf-8")
            with self.assertRaises(json.JSONDecodeError):
                help_tool.should_run(marker, "abc")


if __name__ == "__main__":
    unittest.main()
