import { useCallback, useEffect, useState } from "react";
import { reels } from "./data/reels.js";
import Sidebar from "./components/Sidebar.jsx";
import ReelCard from "./components/ReelCard.jsx";
import ActionRail from "./components/ActionRail.jsx";
import VibeMatch from "./components/VibeMatch.jsx";
import Pager from "./components/Pager.jsx";

export default function App() {
  const [index, setIndex] = useState(0);
  const [engagement, setEngagement] = useState(() =>
    reels.map((r) => ({ liked: false, saved: false, likes: r.likes }))
  );

  const reel = reels[index];
  const { liked, saved, likes } = engagement[index];

  const go = useCallback(
    (delta) => setIndex((i) => (i + delta + reels.length) % reels.length),
    []
  );

  const update = (patch) =>
    setEngagement((list) => list.map((e, i) => (i === index ? { ...e, ...patch(e) } : e)));

  const toggleLike = () =>
    update((e) => ({ liked: !e.liked, likes: e.likes + (e.liked ? -1 : 1) }));
  const toggleSave = () => update((e) => ({ saved: !e.saved }));
  const likeOnDoubleClick = () => { if (!liked) toggleLike(); };

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowDown") go(1);
      if (e.key === "ArrowUp") go(-1);
    };
    let locked = false;
    const onWheel = (e) => {
      if (locked || Math.abs(e.deltaY) < 40) return;
      locked = true;
      go(e.deltaY > 0 ? 1 : -1);
      setTimeout(() => (locked = false), 400);
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("wheel", onWheel, { passive: true });
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("wheel", onWheel);
    };
  }, [go]);

  return (
    <div className="app">
      <Sidebar />
      <main className="stage">
        <VibeMatch key={reel.id} score={reel.score} />
        <ReelCard reel={reel} onDoubleClick={likeOnDoubleClick} />
        <ActionRail
          likes={likes}
          liked={liked}
          saved={saved}
          onLike={toggleLike}
          onSave={toggleSave}
        />
        <Pager onPrev={() => go(-1)} onNext={() => go(1)} />
      </main>
    </div>
  );
}