import Image from "next/image";
import Link from "next/link";
import { MoreHorizontal, Heart, MessageCircle, Share2 } from "lucide-react";

type PostCardProps = {
  avatarLabel: string;
  name: string;
  handle: string;
  meta: string;
  text: string;
  images?: string[];
  likes?: string;
  comments?: string;
  shares?: string;
  href?: string;
};

export default function PostCard({
  avatarLabel,
  name,
  handle,
  meta,
  text,
  images = [],
  likes = "",
  comments = "",
  shares = "",
  href,
}: PostCardProps) {
  const content = (
    <article className="rounded-3xl border border-white/10 bg-[#030F1C] p-4 sm:p-6">
      <header className="flex items-start justify-between">
        <div className="flex items-start gap-3">
          <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center text-sm">
            {avatarLabel}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-semibold">{name}</span>
              <span className="text-white/60 text-sm">{handle} • {meta}</span>
            </div>
            <p className="text-white/90 mt-1 whitespace-pre-line">{text}</p>
          </div>
        </div>
        <button className="rounded-full p-2 hover:bg-white/5" aria-label="More">
          <MoreHorizontal size={18} />
        </button>
      </header>

      {images.length > 0 && (
        <div className={`mt-4 grid ${images.length > 1 ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1"} gap-3`}>
          {images.map((src, idx) => (
            <div key={idx} className="rounded-xl overflow-hidden border border-white/10">
              <Image src={src} alt="Post image" width={1200} height={800} className="w-full h-44 sm:h-48 object-cover" />
            </div>
          ))}
        </div>
      )}

      <div className="mt-4 flex items-center gap-6 text-white/70">
        <button className="flex items-center gap-2 hover:text-white">
          <Heart size={18} /> <span>{likes}</span>
        </button>
        <button className="flex items-center gap-2 hover:text-white">
          <MessageCircle size={18} /> <span>{comments}</span>
        </button>
        <button className="flex items-center gap-2 hover:text-white">
          <Share2 size={18} /> <span>{shares}</span>
        </button>
      </div>

      <div className="mt-4">
        <input
          type="text"
          placeholder="Add a comment..."
          className="w-full rounded-full bg-[#030F1C] border border-white/30 px-4 py-2.5 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#C0E6FF]"
        />
      </div>
    </article>
  );

  if (href) {
    return (
      <Link href={href} className="block">
        {content}
      </Link>
    );
  }
  return content;
}