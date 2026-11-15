export default function ReelCard({ reel, onDoubleClick }) {
    return (
      <article className="reel" onDoubleClick={onDoubleClick}>
        {reel.video ? (
          <video className="reel-media" src={reel.video} autoPlay loop muted playsInline />
        ) : (
          <>
            <div className="reel-media" />
            <div className="reel-placeholder">{reel.emoji}</div>
          </>
        )}
        <div className="reel-meta">
          <div className="author">
            <span className="avatar-sm">{reel.avatar}</span>
            <span>({reel.handle}, {reel.totalLikes} Likes)</span>
          </div>
          <p className="caption">{reel.caption}</p>
        </div>
      </article>
    );
  }