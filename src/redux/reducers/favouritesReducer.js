import { ADD_TO_FAVOURITE, REMOVE_FROM_FAVOURITE } from "../actions";

const initialState = {
  companyName: [],
};

const favouritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVOURITE:
      return {
        ...state,
        companyName: [...state.companyName, action.payload],
      };
    case REMOVE_FROM_FAVOURITE:
      return {
        ...state,
        companyName: state.companyName.filter(
          (el) => el._id !== action.payload
        ),
      };
    default:
      return state;
  }
};
export default favouritesReducer;
