import { combineReducers, configureStore } from "@reduxjs/toolkit";
import favouritesReducer from "../reducers/favouritesReducer";
import getJobsReducer from "../reducers/getJobsReducer";
import { persistStore, persistReducer } from "redux-persist";
import localStorage from "redux-persist/lib/storage"; // default value: localStorage
import { encryptTransform } from "redux-persist-transform-encrypt";

const persistConfig = {
  storage: localStorage,
  key: "root", // this brings the whole redux store into persistency
  transforms: [
    encryptTransform({
      secretKey: process.env.REACT_APP_ENV_SECRET_SUPER_KEY,
    }),
  ],
};
const combinedReducer = combineReducers({
  favouriteCompany: favouritesReducer, // <-- use cartReducer to manage the cart slice of the Store
  jobs: getJobsReducer, // <-- use userReducer to manage the user slice of the Store
});

const persistedReducer = persistReducer(persistConfig, combinedReducer);
// persistedReducer is the persisted version of our single (and combined) reducer function

// const store = configureStore({
//   reducer: combineReducers({
//     favouriteCompany: favouritesReducer,
//     jobs: getJobsReducer,
//   }),
//   // we're telling Redux which reducer function to use!
// });

const store = configureStore({
  reducer: persistedReducer, // ...giving back to reducer a single function once again
  // we're telling Redux which reducer function to use!
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false,
      // this shuts off the checking of non-serializable values in actions
    });
  },
});

const persistedStore = persistStore(store);
// a persisted version of our store
// ...lots of stuff, but feel free to take this file as a refenrce :)

export { store, persistedStore };

// store is the fully configured Redux Store!
// let's export it to use it somewhere else :)
// hint: src/index.js
