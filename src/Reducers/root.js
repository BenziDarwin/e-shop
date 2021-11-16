import { combineReducers } from "redux";
import itemReducer from './itemReducer';
import imageReducer from "./imageReducer";
import categoryReducer from "./categoryReducer";
import groupReducer from "./groupReducer";

const rootReducer = combineReducers({
    items:itemReducer,
    image:imageReducer,
    category:categoryReducer,
    group:groupReducer,
});

export default rootReducer;