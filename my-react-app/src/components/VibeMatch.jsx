// `key={score}` on the parent remounts this so the slide-in replays per reel.
export default function VibeMatch({ score }) {
    return (
      <section className="match" aria-label="Vibe match">
        <h3>It&apos;s a Vibe Match!</h3>
        <div className="match-photo">
          <div className="blur" />
          <div className="match-score">
            <strong>{score}%</strong>
            <span>Algorithm Match</span>
          </div>
        </div>
      </section>
    );
  }