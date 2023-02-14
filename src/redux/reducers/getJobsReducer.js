import { GET_JOBS, GET_JOBS_LOADING, GET_JOBS_ERROR } from "../actions";

const initialState = {
  company: [],
  isLoading: true,
  isError: false,
};

const getJobsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_JOBS:
      return {
        ...state,
        company: action.payload, // action.payload is the array of the fetched jobs
      };
    case GET_JOBS_LOADING:
      return {
        ...state,
        isLoading: action.payload, // which is false when the jobs are fetched
      };

    case GET_JOBS_ERROR:
      return {
        ...state,
        isError: action.payload,
      };
    default:
      return state;
  }
};

export default getJobsReducer;
