function HelpPopup({ onClose }) {
  return (
    <div className="popup-overlay">
      <div className="popup-help">
        <button className="close-btn" onClick={onClose} >&times; </button>
        <h3>How to Play</h3>
        <p>
          <i className="fa-solid fa-layer-group"></i>
          Click on the cards to flip them.
        </p>

        <p>
          <i className="fa-solid fa-star"></i>
          Find all 5 matching pairs.
        </p>

        <p>
          <i className="fa-solid fa-bomb"></i>
          The bomb card removes 10 seconds.
        </p>

        <p>
          <i className="fa-solid fa-hourglass-half"></i>
          The time card adds 10 seconds.
        </p>

        <p>
          <i className="fa-solid fa-clock"></i>
          The game starts with 50 seconds.
        </p>

        <button className="got-it-button" onClick={onClose}>Got it!</button>
      </div>
    </div>
  );
}

function GameOverPopup({ gameWon, onPlayAgain }) {
  return (
    <div className="popup-overlay">
      <div className="popup-help">
        <h3>
          {gameWon ? "You won!" : "Time's Up!"}
        </h3>
        <p>
          {gameWon ? "You found all the matching pairs!" : "Better luck next time!"}
        </p>
        <button className="got-it-button" onClick={onPlayAgain}>Play Again!</button>
      </div>
    </div>
  );
}
export { HelpPopup, GameOverPopup };