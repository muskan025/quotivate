import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faShareNodes } from "@fortawesome/free-solid-svg-icons";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { cardLiked } from "../redux/actions/cardAction";
import { cardSaved } from "../redux/actions/cardAction";
import "./Card.scss";
import { useDispatch, useSelector } from "react-redux";

import {
  collection,
  likeCountAfraid,
  likeCountHappy,
  likeCountAngry,
} from "../../app/slice/action";
import { afraidquotes, angryquotes, happyquotes } from "../Quotes/QuotesData";

export const Card = ({ quoteData, mood }) => {
  const { id, img, quote, like, author } = quoteData;
  const [showBottom, setShowBottom] = useState(false);

  let dispatch = useDispatch();

  function saveToData() {
    dispatch(collection(quoteData));
  }

  function likeButton() {
    if (mood == "happy") {
      dispatch(likeCountHappy(id - 1));
    } else if (mood == "angry") {
      dispatch(likeCountAngry(id - 1));
    } else if (mood == "afraid") {
      dispatch(likeCountAfraid(id - 1));
    }
  }

  return (
    <div
      className="card"
      key={id}
      onMouseEnter={() => setShowBottom(true)}
      onMouseLeave={() => setShowBottom(false)}
    >
      <div className="c-quote">
        <p className="quote">{quote}</p>
        <p className="author">~ {author}</p>
      </div>
      {showBottom && (
        <div className="c-btm">
          <div className="c-lk-sh">
            <span className="like">
              <FontAwesomeIcon
                icon={faHeart}
                style={{ color: "#ff0000" }}
                onClick={likeButton}
              />

              <span style={{ marginLeft: "0.3rem" }}>{like}</span>
            </span>
            <span className="share">
              <FontAwesomeIcon
                icon={faShareNodes}
                style={{ color: "#0080ff" }}
              />
            </span>
          </div>
          <span className="save">
            <FontAwesomeIcon
              icon={faBookmark}
              style={{ color: "#ffff00" }}
              onClick={saveToData}
            />
          </span>
        </div>
      )}
    </div>
  );
};
