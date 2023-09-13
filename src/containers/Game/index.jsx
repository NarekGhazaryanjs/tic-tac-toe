import React, { useState, useEffect, useCallback } from "react";

import "./game.scss";

import { initialGridData, initialScore } from "../../utils/initialData";
import { MainGrid, Winner, PickPlayer, BottomSection } from "../../components";

const Game = () => {
  const [winner, setWinner] = useState(null);
  const [score, setScore] = useState(initialScore);
  const [currentPlayer, setCurrentPlayer] = useState(null);
  const [gridData, setGridData] = useState(initialGridData);

  const scoreIsInitial = score.X === 0 && score.O === 0;

  const restartGame = useCallback(() => {
    setGridData(initialGridData);
    setCurrentPlayer(null);
  }, []);

  const resetScore = useCallback(() => {
    setScore(initialScore);
  }, []);

  useEffect(() => {
    const resetScoreHandler = (event) => {
      event.stopImmediatePropagation();

      if (event.keyCode === 86) {
        resetScore();
      }
    };

    window.addEventListener("keyup", resetScoreHandler);
  }, [resetScore]);

  return (
    <div className="game">
      <div className="top_section">
        <h1 className="title">Tic Tac Toe</h1>
        <p className="score">
          <span className="color-red">{score.X}</span>
          {" : "}
          <span className="color-blue">{score.O}</span>
        </p>
        <h3
          className="subtitle"
          style={{ display: currentPlayer || winner ? "none" : "" }}
        >
          Pick a player and start playing
        </h3>
      </div>
      {currentPlayer ? (
        <MainGrid
          winner={winner}
          gridData={gridData}
          setWinner={setWinner}
          resetScore={resetScore}
          setGridData={setGridData}
          restartGame={restartGame}
          currentPlayer={currentPlayer}
          scoreIsInitial={scoreIsInitial}
          setCurrentPlayer={setCurrentPlayer}
        />
      ) : winner ? (
        <Winner
          winner={winner}
          setScore={setScore}
          setWinner={setWinner}
          restartGame={restartGame}
        />
      ) : (
        <PickPlayer
          resetScore={resetScore}
          setCurrentPlayer={setCurrentPlayer}
        />
      )}
      {currentPlayer ? (
        <BottomSection
          resetScore={resetScore}
          restartGame={restartGame}
          scoreIsInitial={scoreIsInitial}
        />
      ) : (
        <div className="restart_and_reset">
          {!scoreIsInitial && (
            <p role="button" onClick={() => resetScore()}>
              <span className="responsive_hide_hotkey">V - </span>Reset Score
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default Game;
