import { createSlice } from '@reduxjs/toolkit'
import { happyquotes,angryquotes,afraidquotes } from '../../Components/Quotes/QuotesData'
const initialState = {
  happyQuotes: [
    {
      "id": 1,
      "image": "image_url_1.jpg",
      "quote": "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
      "author": "Albert Schweitzer",
      "like": 0,
      "save": 0
    },
    {
      "id": 2,
      "image": "image_url_2.jpg",
      "quote": "Success is not final, failure is not fatal: It is the courage to continue that counts.",
      "author": "Winston Churchill",
      "like": 0,
      "save": 0
    },
    {
      "id": 3,
      "image": "image_url_3.jpg",
      "quote": "Success is not in what you have, but who you have become.",
      "author": "Bo Bennett",
      "like": 0,
      "save": 0
    },
    {
      "id": 4,
      "image": "image_url_4.jpg",
      "quote": "Success is walking from failure to failure with no loss of enthusiasm.",
      "author": "Winston Churchill",
      "like": 0,
      "save": 0
    },
    {
      "id": 5,
      "image": "image_url_5.jpg",
      "quote": "The road to success and the road to failure are almost exactly the same.",
      "author": "Colin R. Davis",
      "like": 0,
      "save": 0
    },
    {
      "id": 6,
      "image": "image_url_6.jpg",
      "quote": "The harder you work for something, the greater you'll feel when you achieve it.",
      "author": "Anonymous",
      "like": 0,
      "save": 0
    },
    {
      "id": 7,
      "image": "image_url_7.jpg",
      "quote": "Success is not just about making money. It's about making a difference.",
      "author": "Unknown",
      "like": 0,
      "save": 0
    },
    {
      "id": 8,
      "image": "image_url_8.jpg",
      "quote": "Success is not final, failure is not fatal: It is the courage to continue that counts.",
      "author": "Anonymous",
      "like": 0,
      "save": 0
    },
    {
      "id": 9,
      "image": "image_url_9.jpg",
      "quote": "The secret to success is to know something nobody else knows.",
      "author": "Aristotle Onassis",
      "like": 0,
      "save": 0
    },
    {
      "id": 10,
      "image": "image_url_10.jpg",
      "quote": "Success is stumbling from failure to failure with no loss of enthusiasm.",
      "author": "Winston S. Churchill",
      "like": 0,
      "save": 0
    }
  ],
  angryQuotes: [
    {
      "id": 1,
      "image": "https://example.com/image1.jpg",
      "quote": "Don't let anyone rent a space in your head, especially for free anger.",
      "author": "Anonymous",
      "like": 0,
      "save": 0
    },
    {
      "id": 2,
      "image": "https://example.com/image2.jpg",
      "quote": "Anger is a powerful force. Use it wisely, not wastefully.",
      "author": "Albert Einstein",
      "like": 0,
      "save": 0
    },
    {
      "id": 3,
      "image": "https://example.com/image3.jpg",
      "quote": "Your anger is your responsibility. Don't let it control you.",
      "author": "Eleanor Roosevelt",
      "like": 0,
      "save": 0
    },
    {
      "id": 4,
      "image": "https://example.com/image4.jpg",
      "quote": "Anger is like a storm; it comes fast, but it also goes fast.",
      "author": "Buddha",
      "like": 0,
      "save": 0
    },
    {
      "id": 5,
      "image": "https://example.com/image5.jpg",
      "quote": "The best revenge is to be calm and show them you're in control.",
      "author": "Anonymous",
      "like": 0,
      "save": 0
    },
    {
      "id": 6,
      "image": "https://example.com/image6.jpg",
      "quote": "Let your anger be a spark for positive change, not destruction.",
      "author": "Anonymous",
      "like": 0,
      "save": 0
    },
    {
      "id": 7,
      "image": "https://example.com/image7.jpg",
      "quote": "Anger is an acid that can do more harm to the vessel in which it is stored than to anything on which it is poured.",
      "author": "Mark Twain",
      "like": 0,
      "save": 0
    },
    {
      "id": 8,
      "image": "https://example.com/image8.jpg",
      "quote": "Count to ten when angry; your words will be more valuable than your regrets.",
      "author": "Anonymous",
      "like": 0,
      "save": 0
    },
    {
      "id": 9,
      "image": "https://example.com/image9.jpg",
      "quote": "Stay calm and let karma deal with those who deserve it.",
      "author": "Anonymous",
      "like": 0,
      "save": 0
    },
    {
      "id": 10,
      "image": "https://example.com/image10.jpg",
      "quote": "Anger is a wind which blows out the lamp of the mind.",
      "author": "Robert Green Ingersoll",
      "like": 0,
      "save": 0
    }
  ],
  afraidQuotes: [
    {
      "id": 1,
      "image": "image1.jpg",
      "quote": "Courage is not the absence of fear, but the triumph over it.",
      "author": "Nelson Mandela",
      "like": 0,
      "save": 0
    },
    {
      "id": 2,
      "image": "image2.jpg",
      "quote": "Fear is only as deep as the mind allows.",
      "author": "Japanese Proverb",
      "like": 0,
      "save": 0
    },
    {
      "id": 3,
      "image": "image3.jpg",
      "quote": "The only thing we have to fear is fear itself.",
      "author": "Franklin D. Roosevelt",
      "like": 0,
      "save": 0
    },
    {
      "id": 4,
      "image": "image4.jpg",
      "quote": "In the middle of every difficulty lies opportunity.",
      "author": "Albert Einstein",
      "like": 0,
      "save": 0
    },
    {
      "id": 5,
      "image": "image5.jpg",
      "quote": "Fear makes the wolf bigger than he is.",
      "author": "German Proverb",
      "like": 0,
      "save": 0
    },
    {
      "id": 6,
      "image": "image6.jpg",
      "quote": "The greatest glory in living lies not in never falling, but in rising every time we fall.",
      "author": "Nelson Mandela",
      "like": 0,
      "save": 0
    },
    {
      "id": 7,
      "image": "image7.jpg",
      "quote": "Do not be afraid of your fears. They're not there to scare you. They're there to let you know that something is worth it.",
      "author": "C. JoyBell C.",
      "like": 0,
      "save": 0
    },
    {
      "id": 8,
      "image": "image8.jpg",
      "quote": "Worry does not empty tomorrow of its sorrow, it empties today of its strength.",
      "author": "Leo Buscaglia",
      "like": 0,
      "save": 0
    },
    {
      "id": 9,
      "image": "image9.jpg",
      "quote": "It is not because things are difficult that we do not dare; it is because we do not dare that they are difficult.",
      "author": "Seneca",
      "like": 0,
      "save": 0
    },
    {
      "id": 10,
      "image": "image10.jpg",
      "quote": "Everything you've ever wanted is on the other side of fear.",
      "author": "George Addair",
      "like": 0,
      "save": 0
    }
  ],
  savedQuotes:[]
}
// savedQuotes:savedquotes,

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    
    collection: (state, action) => {
      state.savedQuotes = [...state.savedQuotes, action.payload]
    },
    likeCountHappy:(state,action)=>{
        // state.happyquotes[action.payload]=state.happyquotes[action.payload].like+=1
         state.happyQuotes[action.payload].like += 1;
    },
    // likeCountSad:(state,action)=>{
    //     state.sadquotes[action.payload]=state.happyquotes[action.payload]+1

    // },
    likeCountAngry:(state,action)=>{
        // state.angryquotes[action.payload]=state.angryquotes[action.payload].like+=1
           state.angryQuotes[action.payload].like += 1;

    },
    likeCountAfraid:(state,action)=>{
        // state.afraidquotes[action.payload]=state.angryquotes[action.payload].like+=1
          state.afraidQuotes[action.payload].like += 1;

    },
  },
})

// Action creators are generated for each case reducer function
export const { collection,likeCountHappy,likeCountAngry,likeCountAfraid } = counterSlice.actions

export default counterSlice.reducer