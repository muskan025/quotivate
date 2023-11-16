import React, { useRef, useState } from 'react'
import './Collection.css'
import { useSelector } from 'react-redux'
import { Card } from '../Card/Card'
import save from './save_animation.json'
import arrow from '../../images/arrow.json'
import trees from '../../images/images-quotes/trees.jpg'
import Lottie from 'lottie-react'
 import { Header } from '../Header/Header'
import { Footer } from '../Footer/Footer'
 
export const Collection = () => {
  const [name,setName]=useState("");
  const inputRef=useRef("");
  const quoteCollection = useSelector((state) => state.counter.savedQuotes)
  const [saved,setSaved]=useState(true);
  // console.log("count:",quoteCollection)

  function handleSubmit(e){
    e.preventDefault();
     console.log(inputRef.current.value);
   }
  console.log("re-render")
   return (
    <div className="collection"> 
    <Header img={trees} heading='Collection !' para={<p>This is your treasure trove of inspiration! <br/>Dive into our saved quotes—a collection of wisdom, humor, and motivation that we cherish.
    <br/> Let these words spark joy in your day!</p>}/>
    {saved && <p className='c-mssg'>"Capture the wisdom you love, build your personal collection of inspiration."</p>}
   
<div className="saved-cards">
 
{quoteCollection.length>0 && quoteCollection.map((data,idx)=>
  <Card quoteData={data} key={idx}/>
)}
</div>
 

 <Footer/>
    </div>
  )
}
