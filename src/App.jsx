import { Route, Routes } from "react-router";
import HomePage from "./pages/home/HomePage";
import NavBar from "./utilities/NavBar";
import AllQuranPage from "./pages/all quran/AllQuranPage";
import AllJuzPage from "./pages/all juz/AllJuzPage";
import JuzSelectedPage from "./pages/juz selected/JuzSelectedPage";
import AllSurahsPage from "./pages/all surahs/AllSurahsPage";
import SurahSelectedPage from "./pages/surah selected/SurahSelectedPage";

function App() {
  return (
    <div className="App">
      <NavBar />

      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/all-quran" element={<AllQuranPage />} />
        <Route path="/juz" element={<AllJuzPage />} />
        <Route path="/juz/:juz" element={<JuzSelectedPage />} />
        <Route path="/surah" element={<AllSurahsPage />} />
        <Route path="/surah/:surah" element={<SurahSelectedPage />} />
      </Routes>
    </div>
  );
}

export default App;
