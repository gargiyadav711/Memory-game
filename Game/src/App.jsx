import { useState } from 'react'
import './App.css'
function App() {
  return (
    <div className="game">
      <header className="header-section">
        <h1>Memory Blast</h1>
        <p>Find all the matching pairs before the time runs out</p>
      </header>
      <div className="help">
        <button className="help-btn">How to play</button>
      </div>
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

      </section>
    </div>
  );
}
export default App
