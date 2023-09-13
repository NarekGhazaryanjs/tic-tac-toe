import React from "react";
import PropTypes from "prop-types";

import "./pick_player.scss";

import { ReactComponent as XIcon } from "../../assets/x_icon.svg";
import { ReactComponent as OIcon } from "../../assets/o_icon.svg";

const PickPlayer = ({ setCurrentPlayer }) => {
  return (
    <>
      <div className="pick_player">
        <div className="selection_div" onClick={() => setCurrentPlayer("X")}>
          <XIcon className="player_icon" />
        </div>
        <div className="vertical_line"></div>
        <div className="selection_div" onClick={() => setCurrentPlayer("O")}>
          <OIcon className="player_icon" />
        </div>
      </div>
    </>
  );
};

PickPlayer.propTypes = {
  setCurrentPlayer: PropTypes.func,
};

PickPlayer.defaultProps = {
  setCurrentPlayer: () => {},
};

export default PickPlayer;
