import PostCard from "@/components/post-card";

const MOCK_POSTS = [
  {
    id: "1",
    platform: "facebook",
    text: "Hello FB!",
    status: "scheduled",
    scheduledAt: "2025-08-25 10:00",
  },
  {
    id: "2",
    platform: "instagram",
    text: "IG reel drop 🎥",
    status: "draft",
    scheduledAt: null,
  },
  {
    id: "3",
    platform: "whatsapp",
    text: "Promo broadcast",
    status: "published",
    scheduledAt: "2025-08-10 09:00",
  },
];

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen flex-col">
     

      <div className="flex flex-1">
        {/* Sidebar (hidden on mobile, slide-in if needed) */}
        

        {/* Main content */}
        <main className="flex-1 p-6 bg-gray-50">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-2xl font-bold">Dashboard Overview</h1>
            <p className="mt-1 text-gray-600">
              Track your scheduled, published, and draft posts at a glance.
            </p>
          </div>

          {/* Analytics / Stats */}
          <div className="mb-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl bg-white p-6 shadow hover:shadow-md transition">
              <div className="text-sm text-gray-500">Scheduled</div>
              <div className="mt-2 text-3xl font-semibold text-blue-600">12</div>
            </div>
            <div className="rounded-2xl bg-white p-6 shadow hover:shadow-md transition">
              <div className="text-sm text-gray-500">Published (7d)</div>
              <div className="mt-2 text-3xl font-semibold text-green-600">34</div>
            </div>
            <div className="rounded-2xl bg-white p-6 shadow hover:shadow-md transition">
              <div className="text-sm text-gray-500">Avg Engagement</div>
              <div className="mt-2 text-3xl font-semibold text-purple-600">4.8%</div>
            </div>
            <div className="rounded-2xl bg-white p-6 shadow hover:shadow-md transition">
              <div className="text-sm text-gray-500">Connected Accounts</div>
              <div className="mt-2 text-3xl font-semibold text-orange-600">3</div>
            </div>
          </div>

          {/* Recent / Upcoming Posts */}
          <section>
            <h2 className="mb-4 text-xl font-semibold">Recent / Upcoming Posts</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {MOCK_POSTS.map((p) => (
                <PostCard key={p.id} post={p} />
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
