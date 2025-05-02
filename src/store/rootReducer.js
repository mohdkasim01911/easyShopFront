import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./Reducers/authReducer";  // also fix the import!

const rootReducer = combineReducers({
    auth: authReducer
});

export default rootReducer;