/**
 * META WEBHOOK VERIFY (GET)
 * Meta calls GET with hub.mode, hub.verify_token, hub.challenge.
 * Respond with hub.challenge if your verify token matches.
 */
export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const mode = searchParams.get("hub.mode");
  const token = searchParams.get("hub.verify_token");
  const challenge = searchParams.get("hub.challenge");

  if (mode === "subscribe" && token === process.env.META_VERIFY_TOKEN) {
    return new Response(challenge ?? "", {
      status: 200,
      headers: { "Content-Type": "text/plain" }
    });
  }
  return new Response("Forbidden", { status: 403 });
}

/**
 * META WEBHOOK EVENTS (POST)
 * You’ll receive objects for Facebook/Instagram/WhatsApp.
 * For now, just log & 200. Later we’ll route to handlers and persist in DB.
 */
export async function POST(req) {
  try {
    const payload = await req.json();
    // eslint-disable-next-line no-console
    console.log("Meta Webhook Event:", JSON.stringify(payload, null, 2));
    return Response.json({ received: true });
  } catch (e) {
    return new Response("Bad Request", { status: 400 });
  }
}
