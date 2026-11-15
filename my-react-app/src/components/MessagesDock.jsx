import { onlineUsers } from "../data/reels.js";
import { SendIcon } from "./Icons.jsx";

export default function MessagesDock() {
  return (
    <>
      <div className="online">
        {onlineUsers.map((u) => (
          <div className="chip" key={u.id}>
            <span className="dot" style={{ background: u.color }}>{u.id}</span>
            {u.id}
          </div>
        ))}
      </div>

      <button className="messages-pill">
        <SendIcon />
        Messages
        <span className="stack">
          {["#c58f78", "#8c7a6b", "#5e8fc4"].map((c) => (
            <span key={c} style={{ background: c }} />
          ))}
        </span>
      </button>
    </>
  );
}