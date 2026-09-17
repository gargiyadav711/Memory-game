
function Card({card}) {
  return (
    <button className={`memory-card ${card.isFlipped || card.isMatched ? "flipped" :""}`}
    onClick={()=>onClick(card.id)}
    disabled={card.isMatched || card.isFlipped}>
      <div className="card-inner">
        <div className="card-front">
          <i className="fa-solid fa-question"></i>
        </div>
        <div className="card-back">
          <i className={`fa-solid ${card.value}`}></i>
        </div>
      </div>
    </button>
  );
}
export default Card;
