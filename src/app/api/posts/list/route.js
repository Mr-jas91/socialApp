export async function GET() {
    const posts = [
      { id: "1", platform: "facebook", text: "Hello FB!", status: "scheduled", scheduledAt: "2025-08-25 10:00" },
      { id: "2", platform: "instagram", text: "IG reel drop 🎥", status: "draft", scheduledAt: null },
    ];
    return Response.json({ posts });
  }
  