import React, { useEffect, useState,useContext } from "react";
 import "./Quotes.css";
import Lottie from "lottie-react";
import friendship from "../../images/images-quotes/friendship.json";
import happy from '../../images/images-quotes/happy.png'
import sad from '../../images/images-quotes/sad.png'
import angry from '../../images/images-quotes/angry.png'
import afraid from '../../images/images-quotes/afraid.png'
import cat from '../../images/images-quotes/cat.jpg'
import { happyquotes, angryquotes, afraidquotes } from "./QuotesData";
import arrow from '../../images/arrow.json'
 import { Card } from "../Card/Card";
import { useDispatch, useSelector } from "react-redux";
 import { Headersvg } from "../svgs/headersvg/Headersvg";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
 

export const Quotes = () => {
  // import ('../Quotes/QuotesData/happyquotes').then((module)=>{var happyquotes=module.happyquotes})
  // import ('../Quotes/QuotesData/sadquotes').then((module)=>{var sadquotes=module.sadquotes})
  // import ('../Quotes/QuotesData/angryquotes').then((module)=>{var angryquotes=module.angryquotes})
  // import ('../Quotes/QuotesData/afraidquotes').then((module)=>{var afraidquotes=module.afraidquotes})
   const [quotes,setQuotes]=useState([]);            
const [checkMood,setCheckMood]=useState('')

const happyQuotes = useSelector((state) => state.counter.happyQuotes);
const angryQuotes = useSelector((state) => state.counter.angryQuotes);
const afraidQuotes = useSelector((state) => state.counter.afraidQuotes);

const happyURL=''
const sadURL='https://653f87939e8bd3be29e0befa.mockapi.io/quotivate/v1/sadquotes'
const angryURL=''
const afraidURL=''

 async function fetchQuotesAPI(url){
  try{
const response= await fetch(url)
if (!response.ok) {
  throw new Error("The process is taking longer time");
}
const data=await response.json();
setQuotes(data)
 
  }
  catch(error){
    console.error("Error fetching quotes:", error);
  }
  }

  function fetchQuotes(quotes,mood){
    setCheckMood(mood)
     setQuotes({})
    setQuotes(quotes)
  }

  useEffect(()=>{
fetchQuotes(happyQuotes,"happy")
  },[])

  return (
     <div className="quotes" id="quotes">
  
      <Header img={cat} heading='Quotes !' para={<p>
          Feeling down? Choose quotes that lift your spirits.
          <br />
           High on positivity? Find quotes that fuel your
          optimism.
          <br /><br/>Our belief is simple:Quotes are like
          friends. They're better when they resonate with your current mood,
          making your day brighter.
        </p>}/>
     
       <div className="quest">
      <div className="emojis">
             <img src={happy} alt='' className="happy" onClick={()=>fetchQuotes(happyQuotes,"happy")} /> 
             <img src={sad} alt='' className="sad" onClick={()=>fetchQuotesAPI(sadURL)}/> 
            <img src={angry} alt='' className="angry" onClick={()=>fetchQuotes(angryQuotes,"angry")}/> 
             <img src={afraid} alt='' className="afraid"  onClick={()=>fetchQuotes(afraidQuotes,"afraid")}/> 
        </div>
        <p>Choose your mood!</p>
        
      </div>
      
 
  <div className="cards-container">
  {quotes.length>0 && quotes.map((quote,idx)=>{
     return <Card quoteData={quote} mood={checkMood}/>
  }
       
      )}
  

</div>

<Footer/>
    </div>
  );
};
