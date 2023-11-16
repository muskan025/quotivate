import React from "react";
import "./MyQuotes.scss";
import {myquotes} from "../Quotes/QuotesData";
import {Card} from "../Card/Card";
 import path from '../../images/images-quotes/path.jpg'
import { Headersvg } from "../svgs/headersvg/Headersvg";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
export const MyQuotes = () => {

  return (
    <div className="my-quotes">
     <Header img={path} heading='My Quotes !' para={<p>
      Where I share simple musings from life's daily dance.
      <br />
      No grandeur here, just reflections inspired by everyday moments and a sprinkle of humor.
      <br />
      Discover a quote that resonates, makes you smile, or brings fresh perspectives to your day.
    </p>}/>
      
      <div className="cards-container">
       {myquotes.map((quote,idx)=>(
         <Card quoteData={quote} key={idx} />
       ))}
      </div>
      <Footer />
    </div>
  );
};
