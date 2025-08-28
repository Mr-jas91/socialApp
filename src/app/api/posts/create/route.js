export async function POST(req) {
    const body = await req.json().catch(() => ({}));
    // In Step 3, we’ll validate with Zod and store in DB, then schedule.
    return Response.json({ created: true, post: body }, { status: 201 });
  }
  