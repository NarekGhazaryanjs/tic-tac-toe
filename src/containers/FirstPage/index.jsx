import React from "react";
import { Link } from "react-router-dom";

import "./first_page.scss";

import { ReactComponent as PlayingBoard } from "../../assets/playing_board.svg";

const FirstPage = () => {
  return (
    <div className="first_page">
      <div className="content">
        <PlayingBoard className="playing_board" />
        <div>
          <h1 className="title">Tic Tac Toe</h1>
          <Link to="/play" className="click_to_play" role="button">
            Click to Play
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FirstPage;
