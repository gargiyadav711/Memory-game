function GameInfo({ time, moves, pairsFound }) {
  return (
    <section className="game-info">
      <div>
        <span>Time</span>
        <strong>{time}s</strong>
      </div>

      <div>
        <span>Moves</span>
        <strong>{moves}</strong>
      </div>

      <div>
        <span>Pairs Found</span>
        <strong>{pairsFound}/5</strong>
      </div>
    </section>
  );
}

export default GameInfo;