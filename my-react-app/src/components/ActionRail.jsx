import { formatCount } from "../data/reels.js";
import { HeartIcon, CommentIcon, ShareIcon, SendIcon, BookmarkIcon, MoreIcon } from "./Icons.jsx";

export default function ActionRail({ likes, liked, saved, onLike, onSave }) {
  return (
    <div className="rail">
      <button className={liked ? "liked" : ""} onClick={onLike} aria-label="Like">
        <HeartIcon />
        <span>{formatCount(likes)}</span>
      </button>
      <button aria-label="Comment"><CommentIcon /></button>
      <button aria-label="Share"><ShareIcon /></button>
      <button aria-label="Send"><SendIcon /></button>
      <button className={saved ? "saved" : ""} onClick={onSave} aria-label="Save"><BookmarkIcon /></button>
      <button aria-label="More"><MoreIcon /></button>
    </div>
  );
}