import Navbar from "@/components/Navbar";
import Notifications from "@/components/Notifications";
import PostCard from "@/components/PostCard";

type PostData = {
  avatarLabel: string;
  name: string;
  handle: string;
  meta: string;
  text: string;
  images?: string[];
  likes?: string;
  comments?: string;
  shares?: string;
};

const POSTS: Record<string, PostData> = {
  "1": {
    avatarLabel: "JD",
    name: "Johndoughnut",
    handle: "@johnnylovesdoughnuts",
    meta: "Nov 29, 1998",
    text: "Day 2 Of Our Technical workshop In progress With 35+ devs and designers this morning\nStay tuned for more updates",
    images: ["/img/suibanner.jpg", "/img/suibanner.jpg"],
    likes: "345K",
    comments: "345K",
    shares: "345K",
  },
  "2": {
    avatarLabel: "MM",
    name: "Mr-monkey-JJ",
    handle: "@monkeylovesdoughnuts",
    meta: "Nov 30, 2000",
    text: "Sui is a new layer-1 chain that promises to operate at a speed and scale previously thought unattainable...",
    images: ["/img/suibanner.jpg", "/img/suibanner.jpg"],
    likes: "10M",
    comments: "345K",
    shares: "345K",
  },
};

const POSTS_BY_SLUG: Record<string, PostData> = {
  "day-2-workshop": {
    avatarLabel: "JD",
    name: "Johndoughnut",
    handle: "@johnnylovesdoughnuts",
    meta: "Nov 29, 1998",
    text: "Day 2 Of Our Technical workshop In progress With 35+ devs and designers this morning\nStay tuned for more updates",
    images: ["/img/suibanner.jpg", "/img/suibanner.jpg"],
    likes: "345K",
    comments: "345K",
    shares: "345K",
  },
  "sui-layer1-overview": {
    avatarLabel: "MM",
    name: "Mr-monkey-JJ",
    handle: "@monkeylovesdoughnuts",
    meta: "Nov 30, 2000",
    text: "Sui is a new layer-1 chain that promises to operate at a speed and scale previously thought unattainable...",
    images: ["/img/suibanner.jpg", "/img/suibanner.jpg"],
    likes: "10M",
    comments: "345K",
    shares: "345K",
  },
};

export default function PostDetailPage({ params }: { params: { id: string } }) {
  const key = params.id;
  const post = POSTS[key] ?? POSTS_BY_SLUG[key] ?? {
    avatarLabel: "JD",
    name: "Sample Post",
    handle: "@sample",
    meta: "Just now",
    text: "This is a placeholder for a post that doesn't exist yet.",
    images: [],
    likes: "",
    comments: "",
    shares: "",
  };

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <Navbar />

      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_360px] gap-6">
          {/* Post column */}
          <section className="space-y-6">
            <PostCard
              avatarLabel={post.avatarLabel}
              name={post.name}
              handle={post.handle}
              meta={post.meta}
              text={post.text}
              images={post.images}
              likes={post.likes}
              comments={post.comments}
              shares={post.shares}
            />
          </section>

          {/* Right sidebar */}
          <Notifications />
        </div>
      </main>
    </div>
  );
}