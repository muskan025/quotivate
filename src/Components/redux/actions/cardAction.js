import { CARD_LIKED,CARD_SAVED } from "./actionTypes";

export const cardLiked=(data)=>{
    return{
        type:CARD_LIKED,
        payload:data,
    }
}
export const cardSaved=(data)=>{
    return{
        type:CARD_SAVED,
        payload:data,
    }
}