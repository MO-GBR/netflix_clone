import movieSlice from "./Reducers/movieSlice";
import userSlice from "./Reducers/userSlice"

import { configureStore, combineReducers } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
    movie: movieSlice,
    user: userSlice
});

export const store = configureStore({
    reducer: rootReducer
})
