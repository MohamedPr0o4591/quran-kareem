import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllQuran } from "../../Redux/Actions/actions";
import { Box, Container } from "@mui/material";
import "./AllQuranPage.css";
import FinalMessage from "../../components/FinalMessage";

function AllQuranPage() {
  const data = useSelector((state) => state.GET_SURAHS.surahs);
  const dispatch = useDispatch();

  useEffect(() => {
    document.title = "المصحف كاملاً";
    dispatch(getAllQuran());
  }, []);
  return (
    <div className="allQuranPage py-3">
      <Container>
        {data?.map((surah, index) => {
          return (
            <Box key={index}>
              {surah.name !== data[index - 1]?.name ? (
                <div className="surah-title">
                  <p>{surah.name}</p>
                </div>
              ) : null}

              <div className="ayahs-container mb-4">
                {surah.ayahs?.map((ayah, index) => {
                  return (
                    <span
                      key={index}
                      className="align-items-center position-relative "
                    >
                      <span className="fw-normal fs-2">{ayah.text}</span>
                      <p className="fw-bold fs-3 mx-2 px-2 aref-ruqaa-bold ayah-number">
                        {ayah.numberInSurah.toLocaleString("ar-EG")}
                      </p>
                    </span>
                  );
                })}
              </div>
            </Box>
          );
        })}

      <FinalMessage />

      </Container>
    </div>
  );
}

export default AllQuranPage;
