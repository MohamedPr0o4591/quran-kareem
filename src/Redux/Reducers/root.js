import { combineReducers } from "redux";
import { quranReducer } from "./quran";
import { ayahsJuzReducer } from "./ayahsJuz";
import { quranDetailsReducer } from "./quranDetails";
import { surahReducer } from "./surah";

export const rootReducers = combineReducers({
  GET_SURAHS: quranReducer,
  GET_AYAHS_JUZ: ayahsJuzReducer,
  GET_DETAILS: quranDetailsReducer,
  GET_SURAH: surahReducer,
});
