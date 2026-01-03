// TrussSketch URL Shortener Worker
// Stores compressed code in KV and provides short URLs

const SKETCH_URL = 'https://trussc.org/sketch/';

// Generate deterministic ID from content hash (same code = same URL)
async function generateHashId(content) {
    const encoder = new TextEncoder();
    const data = encoder.encode(content);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = new Uint8Array(hashBuffer);
    // Convert to URL-safe base64 and take first 8 chars
    const base64 = btoa(String.fromCharCode(...hashArray))
        .replace(/\+/g, '-')
        .replace(/\//g, '_')
        .replace(/=/g, '');
    return base64.substring(0, 8);
}

// CORS headers for API requests
const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
};

export default {
    async fetch(request, env) {
        const url = new URL(request.url);
        const path = url.pathname;

        // Handle CORS preflight
        if (request.method === 'OPTIONS') {
            return new Response(null, { headers: corsHeaders });
        }

        // POST /api/shorten - create short URL
        if (path === '/api/shorten' && request.method === 'POST') {
            try {
                const { code } = await request.json();
                if (!code || typeof code !== 'string') {
                    return new Response(JSON.stringify({ error: 'Missing code' }), {
                        status: 400,
                        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
                    });
                }

                // Generate deterministic ID from content hash
                const id = await generateHashId(code);

                // Store in KV (expire after 10 years)
                // Same content will overwrite with same data, which is fine
                await env.SKETCHES.put(id, code, { expirationTtl: 10 * 365 * 24 * 60 * 60 });

                return new Response(JSON.stringify({ id, url: `https://trussc.org/s/${id}` }), {
                    headers: { ...corsHeaders, 'Content-Type': 'application/json' }
                });
            } catch (e) {
                return new Response(JSON.stringify({ error: e.message }), {
                    status: 500,
                    headers: { ...corsHeaders, 'Content-Type': 'application/json' }
                });
            }
        }

        // GET /s/:id - redirect to full URL
        if (path.startsWith('/s/')) {
            const id = path.substring(3);
            if (!id) {
                return Response.redirect(SKETCH_URL, 302);
            }

            const code = await env.SKETCHES.get(id);
            if (!code) {
                // Not found - redirect to sketch page with error
                return Response.redirect(SKETCH_URL + '?error=notfound', 302);
            }

            // Redirect to sketch with compressed code in hash
            return Response.redirect(SKETCH_URL + '#' + code, 302);
        }

        // Not found
        return new Response('Not Found', { status: 404 });
    }
};
