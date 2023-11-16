import { combineReducers } from "redux";
import cardLiked  from "./cardLikedReducer";
import cardSaved from "./cardSavedReducer";

const rootReducer=combineReducers({cardLiked,cardSaved})
export default rootReducer;