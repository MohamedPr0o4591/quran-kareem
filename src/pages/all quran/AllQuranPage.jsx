import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllQuran } from "../../Redux/Actions/actions";
import { Box, Container, Pagination, Stack } from "@mui/material";
import "./AllQuranPage.css";
import FinalMessage from "../../components/FinalMessage";

function AllQuranPage() {
  const data = useSelector((state) => state.GET_SURAHS.surahs);
  const dispatch = useDispatch();

  const [filterPages, setFilterPages] = useState([]);
  const [pageCount, setPageCount] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    document.title = "المصحف كاملاً";
    dispatch(getAllQuran());
  }, []);

  useEffect(() => {
    const newData = data
      .map((surah) => ({
        ...surah,
        ayahs: surah.ayahs.filter((ayah) => ayah.page === currentPage),
      }))
      .filter((surah) => surah.ayahs.length > 0);

    const pageCount = [
      ...new Set(data.flatMap((surah) => surah.ayahs.map((ayah) => ayah.page))),
    ];

    setPageCount(pageCount);

    setFilterPages(newData);
  }, [data, currentPage]);

  return (
    <div className="allQuranPage py-3">
      <Container>
        {filterPages?.map((surah, index) => {
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
      </Container>

      <div>
        <Stack spacing={2} alignItems={"center"}>
          <Pagination
            count={pageCount.length}
            shape="rounded"
            sx={{ direction: "ltr" }}
            onChange={(e, page) => setCurrentPage(page)}
          />
        </Stack>

        <FinalMessage />
      </div>
    </div>
  );
}

export default AllQuranPage;
