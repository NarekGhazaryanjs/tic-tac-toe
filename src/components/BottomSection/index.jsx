import React from "react";
import PropTypes from "prop-types";

import "./bottom_section.scss";

import { ReactComponent as RedGrid } from "../../assets/red_grid.svg";
import { ReactComponent as BlueGrid } from "../../assets/blue_grid.svg";

const BottomSection = ({ restartGame, resetScore, scoreIsInitial }) => {
  return (
    <div className="bottom_section">
      <div className="x_player">
        <p>Player X Keys</p>
        <div className="underline"></div>
        <div className="grid">
          <div>Q</div>
          <div>W</div>
          <div>E</div>
          <div>A</div>
          <div>S</div>
          <div>D</div>
          <div>Z</div>
          <div>X</div>
          <div>C</div>
          <RedGrid className="grid_svg" />
        </div>
      </div>
      <div className="restart_and_reset">
        {!scoreIsInitial && (
          <p role="button" onClick={() => resetScore()}>
            V - Reset Score
          </p>
        )}
        <p role="button" onClick={() => restartGame()}>
          R - Restart Game
        </p>
      </div>
      <div className="o_player">
        <p>Player O Keys</p>
        <div className="underline"></div>
        <div className="grid">
          <div>I</div>
          <div>O</div>
          <div>P</div>
          <div>J</div>
          <div>K</div>
          <div>L</div>
          <div>N</div>
          <div>M</div>
          <div>,</div>
          <BlueGrid className="grid_svg" />
        </div>
      </div>
    </div>
  );
};

BottomSection.propTypes = {
  resetScore: PropTypes.func,
  restartGame: PropTypes.func,
  scoreIsInitial: PropTypes.bool,
};

BottomSection.defaultProps = {
  scoreIsInitial: true,
  resetScore: () => {},
  restartGame: () => {},
};

export default BottomSection;
