
  export default function PostCard({ post }) {
    const badge =
      post.status === "published"
        ? "bg-green-100 text-green-700"
        : post.status === "scheduled"
        ? "bg-blue-100 text-blue-700"
        : post.status === "failed"
        ? "bg-red-100 text-red-700"
        : "bg-gray-100 text-gray-700";
  
    return (
      <div className="rounded-2xl border bg-white p-4 shadow-sm">
        <div className="mb-2 flex items-center justify-between">
          <div className="text-sm capitalize text-gray-500">{post.platform}</div>
          <span className={`rounded-full px-2 py-1 text-xs ${badge}`}>{post.status}</span>
        </div>
        <p className="text-sm">{post.text}</p>
        <div className="mt-3 text-xs text-gray-500">
          {post.scheduledAt ? `Scheduled: ${post.scheduledAt}` : "Not scheduled"}
        </div>
  
        <div className="mt-4 flex gap-2">
          <button className="rounded-xl border px-3 py-1.5 text-sm hover:bg-gray-50">Edit</button>
          <button className="rounded-xl bg-black px-3 py-1.5 text-sm text-white hover:opacity-90">
            Publish
          </button>
        </div>
      </div>
    );
  }
  