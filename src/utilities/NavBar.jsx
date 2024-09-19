import { Box, Container, IconButton, Stack } from "@mui/material";
import "./NavBar.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { data } from "./data";
import { ViewStream } from "@mui/icons-material";
import { useState } from "react";

function NavBar() {
  const location = useLocation();

  const [slideOpen, setSlideOpen] = useState(false);

  return (
    <div className="nav-bar">
      <Container>
        <Stack direction={"row"} alignItems={"center"}>
          <ul className="nav-links ">
            {data?.map((item) => {
              return (
                <li key={item.id}>
                  <Link
                    className={`${
                      location.pathname === item.path ? "active" : ""
                    }`}
                    to={item.path}
                  >
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* responsive container */}
          <div className="responsive-container">
            <IconButton
              color="inherit"
              onClick={(_) => setSlideOpen(!slideOpen)}
            >
              <ViewStream />
            </IconButton>

            <div
              className="nav-links-sx"
              style={{
                height: slideOpen ? "auto" : "0",
                padding: slideOpen ? "20px 0" : "0",
              }}
            >
              <ul className="nav-links ">
                {data?.map((item) => {
                  return (
                    <li key={item.id}>
                      <Link
                        className={`${
                          location.pathname === item.path ? "active" : ""
                        }`}
                        to={item.path}
                        onClick={() => setSlideOpen(false)}
                      >
                        {item.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          <Box flex={1} />

          <h2 className="aref-ruqaa-bold">القرآن الكريم</h2>
        </Stack>
      </Container>
    </div>
  );
}

export default NavBar;
