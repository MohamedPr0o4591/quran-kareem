import { useParams } from "react-router";
import "./SurahSelectedPage.css";
import { Box, Container, Stack } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getSurah } from "../../Redux/Actions/actions";
function SurahSelectedPage() {
  const params = useParams();
  const surahDetails = useSelector((state) => state.GET_SURAH.surah);
  const dispatch = useDispatch();

  const [currentAyahIndex, setCurrentAyahIndex] = useState(0);

  useEffect(() => {
    document.title = `القرآن الكريم - ${surahDetails.name}`;
    dispatch(getSurah(params.surah));
  }, []);

  useEffect(() => {
    if (surahDetails.ayahs && surahDetails?.ayahs?.length > 0) {
      setCurrentAyahIndex(0);
    }
  }, [surahDetails.ayahs]);

  useEffect(() => {
    let audio = document.querySelector(".quranPlayer");

    const handleAyahEnded = (_) => {
      if (currentAyahIndex < surahDetails?.ayahs?.length - 1) {
        setCurrentAyahIndex((prev) => prev + 1);
      } else {
        audio.pause();
      }
    };

    audio.addEventListener("ended", handleAyahEnded);

    // for clean ...

    return (_) => {
      audio.removeEventListener("ended", handleAyahEnded);
    };
  }, [surahDetails.ayahs, currentAyahIndex]);

  useEffect(() => {
    let audio = document.querySelector(".quranPlayer");

    if (audio && surahDetails?.ayahs?.length > 0) {
      audio.src = surahDetails.ayahs[currentAyahIndex].audio;
      if (currentAyahIndex !== 0) {
        audio.play();
      }
    }
  }, [surahDetails.ayahs, currentAyahIndex]);

  const handleClickAyah = (index) => {
    const audio = document.querySelector(".quranPlayer");
    setCurrentAyahIndex(index);

    if (audio) {
      audio.src = surahDetails.ayahs[index].audio;
      audio.play();
    }
  };

  return (
    <div className="surahSelectedPage">
      <Container className="surah-container">
        <div className="surah-title-container">
          <p>{surahDetails?.name}</p>
        </div>

        <div className="ayahs-container">
          {surahDetails?.ayahs?.map((ayah, index) => {
            return (
              <div key={index}>
                <span
                  className={`surah-ayah fs-2 ${currentAyahIndex === index ? "fw-bold text-primary" : ""
                    }`}
                  onClick={(_) => handleClickAyah(index)}
                >
                  {ayah.text}
                </span>
                <p className="surah-ayah-number aref-ruqaa-bold px-2 mx-2 fs-3">
                  {ayah.numberInSurah.toLocaleString("ar-EG")}
                </p>
              </div>
            );
          })}
        </div>

        <Stack direction={"row"} mt={2}>
          <Box flex={1} />

          <span className="aref-ruqaa-bold fs-4 user-select-none">
            صدق الله العظيم
          </span>
        </Stack>
      </Container>

      <audio src="" controls className="quranPlayer" />
    </div>
  );
}
export default SurahSelectedPage;
