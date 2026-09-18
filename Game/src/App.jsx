import { useState, useEffect } from "react";
import Card from "./components/Card";
import "./App.css";
function App() {
  const cardClick = (id) => {
    const clickedCard = cards.find((card) => card.id === id);

    if (!firstCard) {
      setFirstCard(clickedCard);
      setCards((prevCards) => prevCards.map(
        (card) => card.id === id ? { ...card, isFlipped: true } : card
      ));
      return;
    }
    if (!secondCard && id !== firstCard.id) {
      setSecondCard(clickedCard);
      setCards((prevCards) => prevCards.map(
        (card) => card.id === id ? { ...card, isFlipped: true } : card
      ));

      setMoves((prevMoves) => prevMoves + 1);
    }
  };

  const [time, setTime] = useState(50);
  const [moves, setMoves] = useState(0);
  const [pairsFound, setPairsFound] = useState(0);
  const [showHelp, setShowHelp] = useState(false);
  const [firstCard, setFirstCard] = useState(null);
  const [secondCard, setSecondCard] = useState(null);

  const [cards, setCards] = useState([
    {
      id: 1,
      value: "fa-crow",
      isFlipped: false,
      isMatched: false,
    },
    {
      id: 2,
      value: "fa-crow",
      isFlipped: false,
      isMatched: false,
    },
    {
      id: 3,
      value: "fa-wand-sparkles",
      isFlipped: false,
      isMatched: false,
    },
    {
      id: 4,
      value: "fa-wand-sparkles",
      isFlipped: false,
      isMatched: false,
    },
    {
      id: 5,
      value: "fa-hat-wizard",
      isFlipped: false,
      isMatched: false,
    },
    {
      id: 6,
      value: "fa-hat-wizard",
      isFlipped: false,
      isMatched: false,
    },
    {
      id: 7,
      value: "fa-star",
      isFlipped: false,
      isMatched: false,
    },
    {
      id: 8,
      value: "fa-star",
      isFlipped: false,
      isMatched: false,
    },

    {
      id: 9,
      value: "fa-book-open",
      isFlipped: false,
      isMatched: false,
    },
    {
      id: 10,
      value: "fa-book-open",
      isFlipped: false,
      isMatched: false,
    },
    {
      id: 11,
      value: "fa-bomb",
      type: "bomb",
      isFlipped: false,
      isMatched: false,
    },
    {
      id: 12,
      value: "fa-hourglass-half",
      type: "time",
      isFlipped: false,
      isMatched: false,
    }
  ]);

  useEffect(() => {
    if (time <= 0) {
      return;
    }
    const timer = setInterval(() => {
      setTime((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [time]);

  useEffect(() => {
    if (!firstCard || !secondCard) {
      return;
    }
    if (firstCard.value === secondCard.value) {
      setCards((prevCards) => prevCards.map((card) =>
        card.id === firstCard.id || card.id === secondCard.id ? { ...card, isMatched: true } : card
      )
      );
      setPairsFound((prevPairs) => prevPairs + 1);

      setFirstCard(null);
      setSecondCard(null);
    }
    else {
      setTimeout(() => {
        setCards((prevCards) => prevCards.map((card) =>
          card.id === firstCard.id || card.id === secondCard.id ? { ...card, isFlipped: false } : card
        )
        );
        setFirstCard(null);
        setSecondCard(null);
      }, 1000);
    }
  }, [firstCard, secondCard]);

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

      <section className="card-grid">
        {
          cards.map((card) => (
            <Card
              key={card.id}
              card={card}
              onClick={cardClick} />
          ))
        }
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