import React, { useEffect } from "react";
import PropTypes from "prop-types";

import "./main_grid.scss";

import { ReactComponent as XIcon } from "../../assets/x_icon.svg";
import { ReactComponent as OIcon } from "../../assets/o_icon.svg";
import { ReactComponent as BlackGrid } from "../../assets/black_grid.svg";
import { winCombinations, key_indexes } from "../../utils/initialData";

const MainGrid = ({
  winner,
  gridData,
  setWinner,
  resetScore,
  setGridData,
  restartGame,
  currentPlayer,
  scoreIsInitial,
  setCurrentPlayer,
}) => {
  const insertIcon = (index) => {
    if (gridData[index] !== "") return;

    setGridData([
      ...gridData.slice(0, index),
      currentPlayer,
      ...gridData.slice(index + 1),
    ]);

    if (currentPlayer === "X") {
      setCurrentPlayer("O");
    } else {
      setCurrentPlayer("X");
    }
  };

  useEffect(() => {
    setTimeout(() => {
      winCombinations.forEach((combo) => {
        const data0 = gridData[combo[0]];
        const data1 = gridData[combo[1]];
        const data2 = gridData[combo[2]];

        if (data0 !== "" && data0 === data1 && data1 === data2) {
          setWinner(data0);
          restartGame();
        }
      });

      if (!winner && !gridData.includes("")) {
        setWinner("Tie");
        restartGame();
      }
    });
  }, [gridData, restartGame, winner, setWinner]);

  useEffect(() => {
    const keyupHandler = (event) => {
      event.stopImmediatePropagation();
      const keyCode = event.keyCode;

      if (keyCode === 82) {
        restartGame();
      } else {
        insertIcon(key_indexes[currentPlayer][keyCode]);
      }
    };

    window.addEventListener("keydown", keyupHandler);

    return () => window.removeEventListener("keydown", keyupHandler);
  });

  return (
    <>
      <div className="main_grid">
        {gridData.map((data, index) => (
          <div onClick={() => insertIcon(index)} key={index}>
            {data === "X" && <XIcon />}
            {data === "O" && <OIcon />}
          </div>
        ))}
        <BlackGrid className="grid_svg" />
      </div>
      <div className="responsive_restart_reset">
        <p role="button" onClick={() => restartGame()}>
          Restart Game
        </p>
        {!scoreIsInitial && (
          <p role="button" onClick={() => resetScore()}>
            Reset Score
          </p>
        )}
      </div>
    </>
  );
};

MainGrid.propTypes = {
  winner: PropTypes.string,
  setWinner: PropTypes.func,
  gridData: PropTypes.array,
  resetScore: PropTypes.func,
  setGridData: PropTypes.func,
  restartGame: PropTypes.func,
  scoreIsInitial: PropTypes.bool,
  currentPlayer: PropTypes.string,
  setCurrentPlayer: PropTypes.func,
};

MainGrid.defaultProps = {
  winner: "",
  gridData: [],
  currentPlayer: "",
  setWinner: () => {},
  resetScore: () => {},
  scoreIsInitial: true,
  setGridData: () => {},
  restartGame: () => {},
  setCurrentPlayer: () => {},
};

export default MainGrid;
