import Navbar from "../components/Navbar";
import Composer from "../components/Composer";
import PostCard from "../components/PostCard";
import Notifications from "../components/Notifications";

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <Navbar />

      {/* Content grid */}
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_360px] gap-6">
          {/* Feed column */}
          <section className="space-y-6">
            <Composer />
            <PostCard
              avatarLabel="JD"
              name="Johndoughnut"
              handle="@johnnylovesdoughnuts"
              meta="Nov 29, 1998"
              text={"Day 2 Of Our Technical workshop In progress With 35+ devs and designers this morning\nStay tuned for more updates"}
              images={["/img/suibanner.jpg", "/img/suibanner.jpg"]}
              likes="345K"
              comments="345K"
              shares="345K"
              href="/post/day-2-workshop"
            />
            <PostCard
              avatarLabel="MM"
              name="Mr-monkey-JJ"
              handle="@monkeylovesdoughnuts"
              meta="Nov 30, 2000"
              text="Sui is a new layer-1 chain that promises to operate at a speed and scale previously thought unattainable..."
              images={["/img/suibanner.jpg", "/img/suibanner.jpg"]}
              likes="10M"
              comments="345K"
              shares="345K"
              href="/post/sui-layer1-overview"
            />
          </section>

          {/* Right sidebar */}
          <Notifications />
        </div>
      </main>
    </div>
  );
}
