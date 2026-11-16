#!/usr/bin/env python3
"""Capture documented trusscli help, or decide whether nightly work is needed."""

import argparse
import json
from pathlib import Path
import re
import subprocess
import sys


def command_names(help_text, *, required=False):
    # printTopHelp()/printAddonHelp() document one command per indented line.
    # Stop at the blank line so examples/options cannot become commands.
    match = re.search(r"^Commands:\n((?:[^\n]+\n)*)", help_text, re.MULTILINE)
    if match is None:
        if required:
            raise ValueError("trusscli help has no Commands: section")
        return []
    names = []
    for line in match[1].splitlines():
        entry = re.fullmatch(r"  ([a-z][a-z0-9-]*)(?:\s+.*)?", line)
        if entry is None:
            raise ValueError(f"Unrecognized Commands: entry: {line!r}")
        names.append(entry[1])
    if not names or len(names) != len(set(names)):
        raise ValueError("Commands: section is empty or contains duplicates")
    return sorted(names)


def capture(binary, commit):
    commands = {}

    def visit(parts):
        result = subprocess.run(
            [str(binary), *parts, "--help"], check=True,
            stdout=subprocess.PIPE, encoding="utf-8",
        )
        if not result.stdout.strip():
            raise ValueError(f"Empty help for {' '.join(parts) or 'top level'}")
        # A command that ignores --help runs instead and may print paths or
        # dates; keep it out of the file so it can't leak or churn.
        if parts and not result.stdout.startswith("Usage:"):
            print(f"::warning::skipped '{' '.join(parts)}': --help output does not start with Usage:",
                  file=sys.stderr)
            return
        commands[" ".join(parts)] = result.stdout
        for name in command_names(result.stdout, required=not parts):
            visit([*parts, name])

    visit([])
    return {"trussc_commit": commit, "commands": commands}


def should_run(marker, commit, force=False):
    if force or not marker.exists():
        return True
    return json.loads(marker.read_text(encoding="utf-8")).get("trussc_commit") != commit


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    actions = parser.add_subparsers(dest="action", required=True)
    save = actions.add_parser("capture")
    save.add_argument("--binary", type=Path, required=True)
    save.add_argument("--commit", required=True)
    save.add_argument("--output", type=Path, required=True)
    gate = actions.add_parser("should-run")
    gate.add_argument("--marker", type=Path, required=True)
    gate.add_argument("--commit", required=True)
    gate.add_argument("--force", action="store_true")
    args = parser.parse_args()
    if args.action == "should-run":
        print(str(should_run(args.marker, args.commit, args.force)).lower())
    else:
        data = capture(args.binary.resolve(), args.commit)
        args.output.write_text(
            json.dumps(data, ensure_ascii=False, indent=2, sort_keys=True) + "\n",
            encoding="utf-8",
        )


if __name__ == "__main__":
    main()
