import {CARD_SAVED } from "../actions/actionTypes";

 

  const cardSavedReducer=(state=[],action)=>{
    switch(action.type){
        case CARD_SAVED:
            return [...state,action.payload];
            default:
                return state;
    }

}
export default cardSavedReducer;