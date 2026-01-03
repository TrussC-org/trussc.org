// TrussSketch URL Shortener Worker
// Stores compressed code in KV and provides short URLs

const SKETCH_URL = 'https://trussc.org/sketch/';

// Generate a random short ID (URL-safe, auto-increase length on collision)
function generateId(length = 6) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let id = '';
    for (let i = 0; i < length; i++) {
        id += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return id;
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

                // Generate unique ID (auto-increase length on collision)
                let id;
                let attempts = 0;
                let length = 6;
                do {
                    // Increase length after several collisions
                    if (attempts >= 5) length = 7;
                    if (attempts >= 8) length = 8;

                    id = generateId(length);
                    const existing = await env.SKETCHES.get(id);
                    if (!existing) break;
                    attempts++;
                } while (attempts < 12);

                if (attempts >= 12) {
                    return new Response(JSON.stringify({ error: 'Failed to generate ID' }), {
                        status: 500,
                        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
                    });
                }

                // Store in KV (expire after 10 years)
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
