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

export const Card = ({ quoteData, mood }) => {
  const { id, img, quote, author } = quoteData;
  const [showBottom,setShowBottom]=useState(false);
  const [likeCount,setLikeCount]=useState(0);
  const happy = useSelector((state) => state.counter.happyQuotes);
  //  const sad=useSelector((state) => state.counter.sadQuotes)
  const angry = useSelector((state) => state.counter.angryQuotes);
  const afraid = useSelector((state) => state.counter.afraidQuotes);
  let dispatch = useDispatch();

  function saveToData() {
    dispatch(collection(quoteData));
  }
 
  function likeButton() {
    // setLikeCount(likeCount + 1);
    if (mood == "happy") {
      dispatch(likeCountHappy(id));
    } else if (mood == "angry") {
      dispatch(likeCountAngry(id));
    } else if (mood == "afraid") {
      dispatch(likeCountAfraid(id));
     }
     getLikeCount()
  }
 
   const getLikeCount = () => {
  
   
    if (mood === "happy") {
      console.log("happy",happy[id]?.like)
      setLikeCount(happy[id]?.like)
      return ;
    } else if (mood === "angry") {
      console.log("angry",angry[id]?.like)
      setLikeCount(angry[id]?.like)
      return ;
    } else if (mood === "afraid") {
      console.log("afraid",afraid[id]?.like)
      setLikeCount(afraid[id]?.like)
      return ;
    }
      return 0;
    
    // Default to 0 if mood is not recognized
  };

  // useEffect(() => {
  //  getLikeCount();
  // }, [happy,angry,afraid]);
 
  return (
    <div className="card" key={id} onMouseEnter={()=>setShowBottom(true)} onMouseLeave={()=>setShowBottom(false)}>
      <div className="c-quote">
        <p className="quote">{quote}</p>
        <p className="author">~ {author}</p>
      </div>
      {showBottom && <div className="c-btm">
        <div className="c-lk-sh">
          <span className="like">
            <FontAwesomeIcon
              icon={faHeart}
              style={{ color: "#ff0000" }}
              onClick={likeButton}
            />
            {/* <span className="likeCount">
              {mood == "happy"
                ? happy[id].like
                : mood == "angry"
                ? angry[id].like
                : mood == "afraid"
                ? afraid[id].like
                : ""}
            </span>{" "} */}
            <span style={{marginLeft:"0.3rem"}}>{likeCount}</span>
          </span>
          <span className="share">
            <FontAwesomeIcon icon={faShareNodes} style={{ color: "#0080ff" }} />
          </span>
        </div>
        <span className="save">
          <FontAwesomeIcon
            icon={faBookmark}
            style={{ color: "#ffff00" }}
            onClick={saveToData}
          />
          {/* <FontAwesomeIcon icon={faBookmark} style={{ color: "#ffff00" onClick={()=>dispatch(cardLiked)}}} /> */}
        </span>
      </div>}
    </div>
  );
};
