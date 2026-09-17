function Card({card}) {
  return (
    <button>
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