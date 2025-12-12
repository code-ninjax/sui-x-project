import { Camera, Video, Image as ImageIcon } from "lucide-react";

export default function Composer() {
  return (
    <div className="rounded-[28px] border border-white/20 bg-[#030F1C] p-4 sm:p-6">
      <div className="flex items-start gap-3">
        <div className="h-10 w-10 rounded-full bg-white overflow-hidden shrink-0">
          <div className="h-full w-full bg-gradient-to-br from-pink-500 to-yellow-400" />
        </div>
        <div className="flex-1">
          <input
            type="text"
            placeholder="what’s up ?"
            className="w-full rounded-full bg-[#030F1C] border border-white/30 px-4 sm:px-5 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#C0E6FF]"
          />
          <div className="mt-4 flex items-center justify-between">
            <div className="flex items-center gap-3 text-white/80">
              <button className="rounded-full p-2 hover:bg-white/5" aria-label="Camera">
                <Camera size={18} />
              </button>
              <button className="rounded-full p-2 hover:bg-white/5" aria-label="Video">
                <Video size={18} />
              </button>
              <button className="rounded-full p-2 hover:bg-white/5" aria-label="Image">
                <ImageIcon size={18} />
              </button>
            </div>
            <button className="rounded-full border border-white/30 bg-transparent text-white px-5 py-2 font-semibold hover:bg-white/5">Post</button>
          </div>
        </div>
      </div>
    </div>
  );
}