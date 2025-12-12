import Image from "next/image";
import { Search, Home as HomeIcon, MessageSquare } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-20 border-b border-white/10 bg-[#030F1C]/95 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <Image src="/img/logo.png" alt="Sui" width={60} height={30} />
          <span className="hidden sm:block font-semibold"></span>
        </div>
        <div className="flex-1 max-w-xl mx-6 hidden sm:block">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/60" size={18} />
            <input
              type="text"
              placeholder="Search"
              className="w-full rounded-full bg-[#030F1C] border border-white/30 px-12 py-2.5 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#C0E6FF]"
            />
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button className="rounded-full p-2 hover:bg-white/5" aria-label="Home">
            <HomeIcon size={20} />
          </button>
          <button className="rounded-full p-2 hover:bg-white/5" aria-label="Messages">
            <MessageSquare size={20} />
          </button>
          <div className="ml-1 flex items-center gap-3">
            <div>
              <div className="font-semibold leading-tight">Johndoughnut</div>
              <div className="text-sm text-white/60">@johnnylovesdoughnuts</div>
            </div>
            <div className="h-8 w-8 rounded-full bg-black flex items-center justify-center">
              <span className="text-white text-xs">S</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}