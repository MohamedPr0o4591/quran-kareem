import { GET_AYAHS_BY_JUZ } from "../Types/allTypes";

const initialState = {
  ayahs: [],
};
export const ayahsJuzReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_AYAHS_BY_JUZ:
      return {
        ayahs: action.payload,
      };
    default:
      return state;
  }
};
