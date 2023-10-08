
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import modalReducer from "../features/modal/modalSlice";

// Combine all reducers
const appReducer = combineReducers({
    counter: counterReducer,
    modal: modalReducer,
});


const rootReducer = (state, action) => {
    if (action.type === 'logout') { // check for action type 
        console.log('logout',state);
        return appReducer(undefined, action)
    }
    return appReducer(state, action);
};

export const store = configureStore({
    reducer: rootReducer
});