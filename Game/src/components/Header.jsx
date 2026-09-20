function Header({ onHelpClick }) {
  return (
    <header className="header-section">
      <div>
        <h1>Memory Blast</h1>
        <p>
          Test your memory and beat the clock!
        </p>
      </div>
      <button className="help-btn" onClick={onHelpClick}>
        How to Play
      </button>
    </header>
  );
}

export default Header;