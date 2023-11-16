import { CARD_LIKED,CARD_SAVED } from "../actions/actionTypes";

 

  const cardLikedReducer=(state=0,action)=>{
    switch(action.type){
        case CARD_LIKED:
            return state+1;
            default:
                return state;
    }

}
export default cardLikedReducer;