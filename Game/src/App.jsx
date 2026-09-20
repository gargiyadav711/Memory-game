import { useState, useEffect } from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import confetti from "canvas-confetti";
import GameInfo from "./components/GameInfo";
import MatchMessage from "./components/MatchMessage";
import { HelpPopup, GameOverPopup } from "./components/Popups";
import cardData from "./data/cards";
import useGameTimer from "./useGameTimer";
import shuffleCards from "./shuffleCards";
import "./App.css";
function App() {
  const cardClick = (id) => {
    const clickedCard = cards.find((card) => card.id === id);

    if (clickedCard.type === "bomb") {
      setTime((prevTime) => prevTime - 10);
      setCards((prevCards) => prevCards.map(
        (card) => card.id === id ? { ...card, isFlipped: true } : card
      ));
      return;
    }

    if (clickedCard.type === "time") {
      setTime((prevTime) => prevTime + 10);
      setCards((prevCards) => prevCards.map(
        (card) => card.id === id ? { ...card, isFlipped: true } : card
      ));
      return;
    }

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
  const [gameOver, setGameOver] = useState(false);
  const [gameWon, setGameWon] = useState(false);
  const [showMatchMessage, setShowMatchMessage] = useState(false);

  const [cards, setCards] = useState(cardData);

  useEffect(() => {
    setCards((prevCards) => shuffleCards(prevCards));
  }, []);

  useGameTimer(time, setTime, gameOver);

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

      setShowMatchMessage(true);
      setTimeout(() => {
        setShowMatchMessage(false);
      }, 1000);


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

  useEffect(() => {
    if (pairsFound !== 5) return;

    setGameWon(true);
    setGameOver(true);

    const duration = 10000;
    const end = Date.now() + duration;

    const celebration = () => {
      confetti({
        particleCount: 6, angle: 60, spread: 55, startVelocity: 45,
        origin:
        {
          x: 0,
          y: 0.7
        }
      });

      confetti({
        particleCount: 6, angle: 120, spread: 55, startVelocity: 45,
        origin:
        {
          x: 1,
          y: 0.7
        }
      });
      if (Date.now() < end) {
        requestAnimationFrame(celebration);
      }
    };

    celebration();
  }, [pairsFound]);

  useEffect(() => {
    if (time === 0) {
      setGameOver(true);
    }
  }, [time]);

  return (
    <div className="game">
      <Header onHelpClick={() => setShowHelp(true)} />
      <GameInfo
        time={time}
        moves={moves}
        pairsFound={pairsFound}
      />

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
      {showMatchMessage ? (<MatchMessage />) : null}
      <section className="restart-btn">
        <button className="restart-game" onClick={() => window.location.reload()}>
          <i className="fa-solid fa-rotate-right"></i>
          Restart Game
        </button>
      </section>

      {showHelp ? (
        <HelpPopup onClose={() => setShowHelp(false)} />
      ) : null}

      {gameOver ? (
        <GameOverPopup gameWon={gameWon} onPlayAgain={() => window.location.reload()} />
      ) : null}

    </div>
  );
}
export default App;