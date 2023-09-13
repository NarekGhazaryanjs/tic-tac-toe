import React, { useCallback, useEffect } from "react";
import PropTypes from "prop-types";

import "./winner.scss";

import { ReactComponent as XIcon } from "../../assets/x_icon.svg";
import { ReactComponent as OIcon } from "../../assets/o_icon.svg";

const Winner = ({ winner, setWinner, setScore, restartGame }) => {
  const playAgain = () => {
    setWinner(null);
    restartGame();
  };

  const updateScore = useCallback(() => {
    if (winner === "X") {
      setScore((score) => ({ ...score, X: score.X + 1 }));
    } else if (winner === "O") {
      setScore((score) => ({ ...score, O: score.O + 1 }));
    }
  }, [setScore, winner]);

  useEffect(() => {
    updateScore(winner);
  }, [winner, updateScore]);

  return (
    <div className="winner_div">
      <div>
        {winner === "Tie" ? (
          <h3 className="tie">Tie</h3>
        ) : (
          <h3 className="player_won">
            Player
            {winner === "X" ? (
              <XIcon className="winner_icon" />
            ) : (
              <OIcon className="winner_icon" />
            )}
            won
          </h3>
        )}
      </div>
      <p className="play_again" onClick={() => playAgain()} role="button">
        Play again
      </p>
    </div>
  );
};

Winner.propTypes = {
  winner: PropTypes.string,
  setScore: PropTypes.func,
  setWinner: PropTypes.func,
  restartGame: PropTypes.func,
};

Winner.defaultProps = {
  winner: "",
  setScore: () => {},
  setWinner: () => {},
  restartGame: () => {},
};

export default Winner;
