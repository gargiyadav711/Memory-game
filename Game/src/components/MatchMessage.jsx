function MatchMessage({ show }) {
  return (
    <div className={`match-message ${show ? "show" : ""}`}>
      Pair Matched!
    </div>
  );
}

export default MatchMessage;