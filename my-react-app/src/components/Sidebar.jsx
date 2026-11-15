import { useState } from "react";
import { Logo, HomeIcon, ReelsIcon, HeartIcon, MessageIcon, ProfileIcon } from "./Icons.jsx";

const items = [
  { key: "home", label: "Home", Icon: HomeIcon },
  { key: "reels", label: "Reels", Icon: ReelsIcon },
  { key: "matches", label: "Matches", Icon: HeartIcon, badge: 3 },
  { key: "messages", label: "Messages", Icon: MessageIcon },
  { key: "profile", label: "Profile", Icon: ProfileIcon },
];

export default function Sidebar() {
  const [active, setActive] = useState("reels");

  return (
    <aside className="sidebar">
      <div className="brand">
        <Logo />
        ReelMate
      </div>
      {items.map(({ key, label, Icon, badge }) => (
        <button
          key={key}
          className={`nav-item${active === key ? " active" : ""}`}
          onClick={() => setActive(key)}
        >
          <span className="icon-wrap">
            <Icon />
            {badge ? <span className="badge">{badge}</span> : null}
          </span>
          {label}
        </button>
      ))}
    </aside>
  );
}