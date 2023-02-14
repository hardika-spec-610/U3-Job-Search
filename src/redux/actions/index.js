export const ADD_TO_FAVOURITE = "ADD_TO_FAVOURITE";
export const REMOVE_FROM_FAVOURITE = "REMOVE_FROM_FAVOURITE";
export const GET_JOBS = "GET_JOBS";
export const GET_JOBS_LOADING = "GET_JOBS_LOADING";
export const GET_JOBS_ERROR = "GET_JOBS_ERROR";

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

export const addToFavouriteActionAsync = (data) => {
  return async (dispatch, getState) => {
    console.log('...about to dispatch the "ADD_TO_FAVOURITE" action');
    console.log("getState", getState());
    if (getState().favouriteCompany.companyName.length < 6) {
      dispatch({
        type: ADD_TO_FAVOURITE,
        payload: data,
      });
    }
  };
};

export const removeFromFavouriteAction = (i) => {
  return {
    type: REMOVE_FROM_FAVOURITE,
    payload: i,
  };
};

export const getJobsActionAsync = (url, query) => {
  return async (dispatch, getState) => {
    try {
      let response = await fetch(url + query + "&limit=20");
      if (response.ok) {
        const { data } = await response.json();
        // here I have the books from the API!
        // instead of using them in a local state,
        // I'm going to send them to the reducer :)
        dispatch({
          type: GET_JOBS,
          payload: data,
        });
        dispatch({
          type: GET_JOBS_LOADING,
          payload: false,
        });
      } else {
        dispatch({
          type: GET_JOBS_LOADING,
          payload: false,
        });
        dispatch({
          type: GET_JOBS_ERROR,
          payload: true,
        });
      }
    } catch (error) {
      dispatch({
        type: GET_JOBS_LOADING,
        payload: false,
      });
      dispatch({
        type: GET_JOBS_ERROR,
        payload: true,
      });
    }
  };
};
