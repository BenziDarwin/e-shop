import { combineReducers } from "redux";
import itemReducer from './itemReducer';
import imageReducer from "./imageReducer";

const rootReducer = combineReducers({
    items:itemReducer,
    image:imageReducer,
});

export default rootReducer;