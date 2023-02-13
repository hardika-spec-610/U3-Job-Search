import { combineReducers, configureStore } from "@reduxjs/toolkit";
import favouritesReducer from "../reducers/favouritesReducer";

const store = configureStore({
  reducer: combineReducers({
    favouriteCompany: favouritesReducer,
  }),
  // we're telling Redux which reducer function to use!
});

export default store;

// store is the fully configured Redux Store!
// let's export it to use it somewhere else :)
// hint: src/index.js
