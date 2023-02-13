import { GET_JOBS } from "../actions";

const initialState = {
  company: [],
};

const getJobsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_JOBS:
      return {
        ...state,
        company: action.payload, // action.payload is the array of the fetched jobs
      };

    default:
      return state;
  }
};

export default getJobsReducer;
