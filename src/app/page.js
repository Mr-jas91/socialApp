import Link from "next/link";

export default function HomePage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <header className="mb-12">
        <h1 className="text-4xl font-bold">Social Media Manager</h1>
        <p className="mt-3 text-gray-600">
          Plan, schedule, and analyze posts across WhatsApp, Instagram, and Facebook.
        </p>
      </header>

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="rounded-2xl border bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold">All-in-one Dashboard</h2>
          <p className="mt-2 text-sm text-gray-600">
            Draft posts, schedule content, and track performance.
          </p>
        </div>
        <div className="rounded-2xl border bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold">Meta Webhooks</h2>
          <p className="mt-2 text-sm text-gray-600">
            Real-time events from Facebook/Instagram/WhatsApp Business.
          </p>
        </div>
      </div>

      <div className="mt-10">
        <Link
          href="/dashboard"
          className="inline-flex items-center rounded-xl bg-black px-5 py-3 text-white transition hover:opacity-90"
        >
          Go to Dashboard
        </Link>
      </div>

      <footer className="mt-16 text-sm text-gray-500">
        Tip: Set your Meta Webhook URL to <code>/api/webhook</code>.
      </footer>
    </main>
  );
}

