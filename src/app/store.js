import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../app/slice/action'
export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})

 
 
