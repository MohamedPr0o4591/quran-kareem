import { Box, Stack } from "@mui/material";
import "./HomePage.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";

function HomePage() {
  useEffect(() => {
    document.title = "القرآن الكريم";
  }, []);

  return (
    <div className="homePage">
      <Box className="homePage-container">
        <p>السلام عليكم ورحمة الله وبركاته</p>
        <p>الحمد لله والصلاة والسلام على رسول الله</p>
        <p>تلاوة وقراءة القران الكريم بصوت القارئ مشارى راشد العفاسى</p>
        <p>اثابنا واثابكم الله و اخر دعوانا ان الحمد لله رب العالمين</p>

        <Stack
          direction={"row"}
          alignItems={"center"}
          gap={3}
          className="buttons"
        >
          <Link to="/surah">بدء القراءة</Link>

          <i />
        </Stack>
      </Box>
    </div>
  );
}

export default HomePage;
