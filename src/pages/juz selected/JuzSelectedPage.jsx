import { useParams } from "react-router";
import "./JuzSelectedPage.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAyahsByJuz } from "../../Redux/Actions/actions";
import { Container } from "@mui/material";

function JuzSelectedPage() {
  const params = useParams();
  const ayahsData = useSelector((state) => state.GET_AYAHS_JUZ.ayahs);
  const dispatch = useDispatch();

  const [currentAyahIndex, setCurrentAyahIndex] = useState(0);
  useEffect(() => {
    document.title = `القرآن الكريم - جزء ${params.juz}`;
    dispatch(getAyahsByJuz(params.juz));
  }, []);

  useEffect(() => {
    if (ayahsData && ayahsData.length > 0) {
      setCurrentAyahIndex(0);
    }
  }, [ayahsData]);

  useEffect(() => {
    let audio = document.querySelector(".quranPlayer");

    const handleAyahEnded = (_) => {
      if (currentAyahIndex < ayahsData.length - 1) {
        setCurrentAyahIndex((prev) => prev + 1);
      } else {
        audio.pause();
      }
    };

    audio.addEventListener("ended", handleAyahEnded);

    // for clean
    return (_) => {
      audio.removeEventListener("ended", handleAyahEnded);
    };
  }, [ayahsData, currentAyahIndex]);

  useEffect(() => {
    let audio = document.querySelector(".quranPlayer");
    if (audio && ayahsData.length > 0) {
      audio.src = ayahsData[currentAyahIndex].audio;
      if (currentAyahIndex > 0) {
        audio.play();
      }
    }

    const currentAyahElement = document.getElementById(
      `ayah-${currentAyahIndex}`
    );

    if (currentAyahElement) {
      currentAyahElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [ayahsData, currentAyahIndex]);

  const handleClickAyah = (index) => {
    let audio = document.querySelector(".quranPlayer");
    setCurrentAyahIndex(index);

    if (audio) {
      audio.src = ayahsData[currentAyahIndex].audio;
      audio.play();
    }
  };

  return (
    <div className="juzSelectedPage">
      <Container>
        <div className="juz-container">
          {ayahsData?.map((ayah, index) => {
            return (
              <span
                key={index}
                className="surah-box"
                sx={{
                  width: `${
                    ayah.surah.name !== ayahsData[index - 1]?.surah.name
                      ? "100%"
                      : "auto"
                  }`,
                }}
              >
                {ayah.surah.name !== ayahsData[index - 1]?.surah.name && (
                  <div className="surah-title">
                    <p>{ayah.surah.name}</p>
                  </div>
                )}

                <span className="ayahs-container">
                  <span id={`ayah-${index}`}>
                    <span
                      className={`ayah-text fs-3 ${
                        index === currentAyahIndex ? "fw-bold text-primary" : ""
                      }`}
                      onClick={() => handleClickAyah(index)}
                    >
                      {ayah.text}
                    </span>
                    <p className="ayah-number px-2 mx-2 fs-3 aref-ruqaa-bold">
                      {ayah.numberInSurah.toLocaleString("ar-EG")}
                    </p>
                  </span>
                </span>
              </span>
            );
          })}
        </div>

        <audio src="" controls className="quranPlayer" />
      </Container>
    </div>
  );
}

export default JuzSelectedPage;
