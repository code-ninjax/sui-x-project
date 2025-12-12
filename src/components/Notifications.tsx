export default function Notifications() {
  return (
    <aside className="lg:sticky lg:top-16 space-y-4">
      <div className="rounded-3xl border border-white/10 bg-[#030F1C] overflow-hidden">
        <div className="border-b border-white/10 px-4 py-3">
          <h2 className="font-semibold">Notification</h2>
        </div>
        <div className="p-4 space-y-6">
          <div className="flex items-start gap-3">
            <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center text-sm">SU</div>
            <div className="flex-1">
              <div className="text-sm">
                <span className="text-white/60">Recent post from </span>
                <span className="font-semibold">SOCSC Uniport.sui</span>
              </div>
              <div className="mt-2 text-sm text-white/80 leading-relaxed">
                Creation in Progress<br/>
                Our Technical workshop is a hotbed of innovation, where ideas are born and possibilities unfold. Our devs are buzzing with creative energy.<br/>
                <span className="text-white/60">Stay tuned for more updates</span>
              </div>
            </div>
          </div>

          <div className="h-px bg-white/10" />

          <div className="flex items-start gap-3">
            <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center text-sm">JJ</div>
            <div className="flex-1">
              <div className="text-sm">
                <span className="font-semibold">John</span> <span className="text-white/60">and</span> <span className="font-semibold">Jane</span> <span className="text-white/60">liked your post</span>
              </div>
              <div className="mt-2 text-xs text-white/60">@socscuniport · @Community_Sui</div>
              <div className="mt-2 text-sm text-white/80 leading-relaxed">
                Sui on Campus workshop, got to write my first move code on sui.
              </div>
            </div>
          </div>

          <div className="h-px bg-white/10" />

          <div className="flex items-start gap-3">
            <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center text-sm">MM</div>
            <div className="flex-1">
              <div className="text-sm"><span className="font-semibold">Mr-monkey-JJ</span> commented</div>
              <div className="mt-2 text-sm text-white/80 leading-relaxed">“Sui is incredible!”</div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}