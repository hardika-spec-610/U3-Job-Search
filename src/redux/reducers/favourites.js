const initialState = {
  favouriteCompany: {
    companyName: [],
  },
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_FAVOURITE":
      return {
        ...state,
        favouriteCompany: {
          ...state.favouriteCompany,
          companyName: [...state.favouriteCompany.companyName, action.payload],
        },
      };
    case "REMOVE_FROM_FAVOURITE":
      return {
        ...state,
        favouriteCompany: {
          ...state.favouriteCompany,
          companyName: state.favouriteCompany.companyName.filter(
            (el, i) => i !== action.payload
          ),
        },
      };
    default:
      return state;
  }
};
export default mainReducer;
