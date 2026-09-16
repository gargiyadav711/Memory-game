import { useState } from "react";
import "./App.css";
function App() {
  const [showHelp, setShowHelp] = useState(false);
  return (
    <div className="game">
      <header className="header-section">
        <div>
          <h1>Memory Blast</h1>
          <p>Test your memory and beat the clock!</p>
        </div>
        <button className="help-btn" onClick={() => setShowHelp(true)}>
          How to Play
        </button>
      </header>

      <section className="game-info">
        <div>
          <span>Time</span>
          <strong>50s</strong>
        </div>

        <div>
          <span>Moves</span>
          <strong>0</strong>
        </div>

        <div>
          <span>Pairs Found</span>
          <strong>0/5</strong>
        </div>
      </section>

      <section className="card-grid">

      </section>

      <section className="restart-btn">
        <button className="restart-game">
          <i className="fa-solid fa-rotate-right"></i>
          Restart Game
        </button>
      </section>

      {showHelp ? (
        <div className="popup-overlay">
          <div className="popup-help">
            <button className="close-btn" onClick={() => setShowHelp(false)}>&times;</button>
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
            <button className="got-it-button" onClick={() => setShowHelp(false)}>
              Got it!
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
export default App;