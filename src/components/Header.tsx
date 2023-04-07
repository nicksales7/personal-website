import { Link } from "react-router-dom";
import selfPortrait from "../assets/self-portrait.png";
import { Avatar, Box, Button, Typography, useTheme } from "@mui/material";

export default function Header() {
  const theme = useTheme();

  return (
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
            height: "65px",
            width: "65px",
            zIndex: 3,
            left: 40,
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
        <Link to={"/about"}>
        <Button
          variant="text"
          sx={{
            fontSize: "18px",
            fontFamily: "Montserrat, sans-serif",
            color: "#373737",
          }}
        >
          About
        </Button>
        </Link>
        <Link to={"/contact"}>
        <Button
          variant="text"
          sx={{
            fontSize: "18px",
            fontFamily: "Montserrat, sans-serif",
            color: "#373737",
            marginLeft: theme.spacing(5),
          }}
        >
          Contact
        </Button>
        </Link>
        <Link to={"/projects"}>
        <Button
          variant="text"
          sx={{
            fontSize: "18px",
            fontFamily: "Montserrat, sans-serif",
            color: "#373737",
            marginLeft: theme.spacing(5),
          }}
        >
          Projects
        </Button>
        </Link>
        <Link to={"/work"}>
        <Button
          variant="text"
          sx={{
            fontSize: "18px",
            fontFamily: "Montserrat, sans-serif",
            color: "#373737",
            marginLeft: theme.spacing(5),
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
          borderRadius: "40px 40px 40px 40px",
          zIndex: 1,
        }}
      />
    </Box>
  );
}
