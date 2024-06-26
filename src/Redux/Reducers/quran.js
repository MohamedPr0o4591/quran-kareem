import { GET_ALL_QURAN } from "../Types/allTypes";

const initialState = {
  surahs: [],
};
export const quranReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_QURAN:
      return {
        surahs: action.payload,
      };
    default:
      return state;
  }
};
