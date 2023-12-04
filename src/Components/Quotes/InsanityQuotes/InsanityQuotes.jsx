import React from 'react'
import { insanityquotes } from '../QuotesData'
import { Card } from '../../Card/Card'
export const InsanityQuotes = () => {
  return (
    <div className='insanityquotes'> 
 <div className="cards-container" style={{width:"100%"}}>
  {insanityquotes.length>0 && insanityquotes.map((quote,idx)=>{
     return <Card quoteData={quote}/>
  }
       
      )}
  

</div>
    </div>
  )
}
