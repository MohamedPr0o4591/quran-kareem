import { Container } from "@mui/material";
import "./AllSurahsPage.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getQuranDetails } from "../../Redux/Actions/actions";
import { Link } from "react-router-dom";

function AllSurahsPage() {
  const detailsQuran = useSelector((state) => state.GET_DETAILS.details);
  const dispatch = useDispatch();

  useEffect(() => {
    document.title = "القرآن الكريم - قائمة سور القرآن الكريم كاملاً";
    dispatch(getQuranDetails());
  }, []);

  return (
    <div className="allSurahsPage">
      <Container>
        <h3 className="text-center">السلام عليكم ورحمة الله وبركاته</h3>
        <p className="aref-ruqaa-bold fs-4">قائمة سور القرآن الكريم كاملاً</p>

        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>م</th>
                <th>العدد</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>عدد السور</td>
                <td className="text-danger fw-bold fs-3">
                  {detailsQuran?.surahs?.count?.toLocaleString("ar-EG")}
                </td>
              </tr>

              <tr>
                <td>عدد الايات</td>
                <td className="text-danger fw-bold fs-3">
                  {detailsQuran?.ayahs?.count?.toLocaleString("ar-EG")}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="table-container-surahs">
          <table>
            <thead>
              <tr>
                <th>م</th>
                <th>اسم السورة</th>
                <th>
                  <div className="type">نوعها</div>
                  <div className="type-counts">
                    <ul>
                      <li>نوعها</li>
                      <li>عدد اياتها</li>
                    </ul>
                  </div>
                </th>
                <th>عدد اياتها</th>
              </tr>
            </thead>

            <tbody>
              {detailsQuran?.surahs?.references?.map((surah, index) => {
                return (
                  <tr key={index}>
                    <td>{surah.number}</td>
                    <td>
                      <Link
                        to={`/surah/${surah.number}`}
                        className="surah-name"
                      >
                        {surah.name}
                      </Link>
                    </td>
                    <td>
                      <div className="type-content">
                        {surah.revelationType === "Meccan" ? "مكية" : "مدنية"}
                      </div>
                      <ul className="type-list-surah">
                        <li>
                          {surah.revelationType === "Meccan" ? "مكية" : "مدنية"}
                        </li>
                        <li>{surah.numberOfAyahs}</li>
                      </ul>
                    </td>
                    <td>{surah.numberOfAyahs}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Container>
    </div>
  );
}

export default AllSurahsPage;
