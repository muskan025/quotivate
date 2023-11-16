import React from 'react'
import { insanityquotes } from '../QuotesData'
import { Card } from '../../Card/Card'
export const InsanityQuotes = () => {
  return (
    <div className='insanityquotes'> 
    <h1>Hello</h1>
 <div className="cards-container">
  {insanityquotes.length>0 && insanityquotes.map((quote,idx)=>{
     return <Card quoteData={quote}/>
  }
       
      )}
  

</div>
    </div>
  )
}
