import { Box, Container, Stack } from "@mui/material";
import "./NavBar.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { data } from "./data";

function NavBar() {
  const location = useLocation();

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

          <Box flex={1} />

          <h2 className="aref-ruqaa-bold">القرآن الكريم</h2>
        </Stack>
      </Container>
    </div>
  );
}

export default NavBar;
