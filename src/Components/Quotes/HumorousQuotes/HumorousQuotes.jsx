import React from 'react'
import { humorousquotes } from '../QuotesData'
import { Card } from '../../Card/Card'
export const Humorousquotes = () => {
  return (
    <div className='humorousquotes'> 
    <h1>Hello</h1>
 <div className="cards-container">
  {humorousquotes.length>0 && humorousquotes.map((quote,idx)=>{
     return <Card quoteData={quote}/>
  }
       
      )}
  

</div>
    </div>
  )
}
