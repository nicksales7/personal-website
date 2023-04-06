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
      <a href="https://nicksales.dev/">
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
      </a>
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
