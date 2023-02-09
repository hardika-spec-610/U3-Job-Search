import { configureStore } from "@reduxjs/toolkit";
import mainReducer from "../reducers/favourites";

const store = configureStore({
  reducer: mainReducer,
  // we're telling Redux which reducer function to use!
});

export default store;

// store is the fully configured Redux Store!
// let's export it to use it somewhere else :)
// hint: src/index.js
