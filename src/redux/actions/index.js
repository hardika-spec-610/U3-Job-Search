export const ADD_TO_FAVOURITE = "ADD_TO_FAVOURITE";
export const REMOVE_FROM_FAVOURITE = "REMOVE_FROM_FAVOURITE";
export const GET_JOBS = "GET_JOBS";

export const addToFavouriteAction = (data) => {
  return {
    type: ADD_TO_FAVOURITE, // is the description of the action
    payload: data,
  };
};

// Second Metho
// export const addToFavourite = (data)=>({

//         type: ADD_TO_FAVOURITE, // is the description of the action
//         payload: data,

// })

export const removeFromFavouriteAction = (i) => {
  return {
    type: REMOVE_FROM_FAVOURITE,
    payload: i,
  };
};
