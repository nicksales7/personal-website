import { Link } from "react-router-dom";
import selfPortrait from "../assets/self-portrait.png";
import { Avatar, Box, Button, Typography, useTheme } from "@mui/material";

export default function Header() {
  const theme = useTheme();

  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          position: "relative",
          height: "100px",
        }}
      >
        <Link to={"/"}>
          <Avatar
            alt="Nicholas Sales"
            src={selfPortrait}
            sx={{
              height: {
                xs: theme.spacing(4),
                sm: theme.spacing(5),
                md: theme.spacing(8),
              },
              width: {
                xs: theme.spacing(4),
                sm: theme.spacing(5),
                md: theme.spacing(8),
              },
              zIndex: 3,
              left: {
                xs: 20,
                sm: 10,
                md: 40,
              },
              bottom: 3,
            }}
          />
        </Link>
        <Typography
          variant={"h1"}
          sx={{
            fontFamily: "Montserrat, sans-serif",
            color: "#373737",
            marginLeft: theme.spacing(7),
            fontSize: "20px",
            zIndex: 2,
            visibility: {
              xs: "hidden",
              sm: "hidden",
              md: "visible",
            },
          }}
        >
          NICHOLAS SALES
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: 0,
            bottom: 0,
            right: {
              xs: theme.spacing(2),
              sm: theme.spacing(5),
              md: theme.spacing(10),
            },
            zIndex: 2,
          }}
        >
          <Link to={"/"}>
            <Button
              variant="text"
              sx={{
                fontSize: {
                  xs: theme.spacing(1),
                  sm: theme.spacing(2),
                  md: theme.spacing(2),
                },
                visibility: {
                  xs: "hidden",
                  sm: "visible",
                  md: "visible",
                },
                fontFamily: "Montserrat, sans-serif",
                color: "#373737",
              }}
            >
              Home
            </Button>
          </Link>
          <Link to={"/about"}>
            <Button
              variant="text"
              sx={{
                fontSize: {
                  sm: theme.spacing(2),
                  md: theme.spacing(2),
                },
                fontFamily: "Montserrat, sans-serif",
                color: "#373737",
                marginLeft: {
                  xs: theme.spacing(1),
                  sm: theme.spacing(3),
                  md: theme.spacing(5),
                },
              }}
            >
              About
            </Button>
          </Link>
          <Link to={"/contact"}>
            <Button
              variant="text"
              sx={{
                fontSize: {
                  sm: theme.spacing(2),
                  md: theme.spacing(2),
                },
                fontFamily: "Montserrat, sans-serif",
                color: "#373737",
                marginLeft: {
                  xs: theme.spacing(1),
                  sm: theme.spacing(3),
                  md: theme.spacing(5),
                },
              }}
            >
              Contact
            </Button>
          </Link>
          <Link to={"/projects"}>
            <Button
              variant="text"
              sx={{
                fontSize: {
                  sm: theme.spacing(2),
                  md: theme.spacing(2),
                },
                fontFamily: "Montserrat, sans-serif",
                color: "#373737",
                marginLeft: {
                  xs: theme.spacing(1),
                  sm: theme.spacing(3),
                  md: theme.spacing(5),
                },
              }}
            >
              Projects
            </Button>
          </Link>
          <Link to={"/work"}>
            <Button
              variant="text"
              sx={{
                fontSize: {
                  sm: theme.spacing(2),
                  md: theme.spacing(2),
                },
                fontFamily: "Montserrat, sans-serif",
                color: "#373737",
                marginLeft: {
                  xs: theme.spacing(1),
                  sm: theme.spacing(3),
                  md: theme.spacing(5),
                },
              }}
            >
              Work
            </Button>
          </Link>
        </Box>
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 1,
            height: "100%",
            backgroundColor: "#e7e7e7",
            zIndex: 1,
          }}
        />
      </Box>
    </>
  );
}
