import { Box, Container } from "@mui/material";
import "./AllJuzPage.css";
import { juzData } from "./data";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function AllJuzPage() {
  const [isActive, setIsActive] = useState(null);

  useEffect(() => {
    document.title = `القرآن الكريم - جميع الأجزاء`;
  }, []);
  return (
    <div className="allJuzPage">
      <Container>
        <Box className="juz-container">
          {juzData?.map((juz, index) => {
            return (
              <div
                className="juz-box"
                key={index}
                onMouseOver={() => setIsActive(juz.juz)}
                onMouseOut={() => setIsActive(null)}
              >
                <Link to={`/juz/${juz.juz}`} className="aref-ruqaa-bold">
                  {juz.name}
                </Link>
                {isActive === juz.juz && <p>#{juz.juz}</p>}
              </div>
            );
          })}
        </Box>
      </Container>
    </div>
  );
}
export default AllJuzPage;
