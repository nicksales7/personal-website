import selfPortrait from "../assets/self-portrait.png"
import { Avatar, Box, Button, Typography, useTheme, } from "@mui/material";

export default function Header() {
  const theme = useTheme();

  return (
    <div className="headerSection">
      <a href="https://nicksales.dev/">
        <Avatar
          alt="Nicholas Sales"
          src={selfPortrait}
          sx={{
            position: "fixed",
            height: "65px",
            width: "65px",
            top: 15,
            left: 20,
            zIndex: 3,
          }}
        />
      </a>
      <Typography
        variant={"h1"}
        sx={{
          position: "fixed",
          fontFamily: "Montserrat, sans-serif",
          color: "#373737",
          top: 35,
          left: 100,
          zIndex: 2,
          fontSize: "20px",
        }}
      >
        NICHOLAS SALES
      </Typography>
      <Button
        variant="text"
        sx={{
          position: "fixed",
          bottom: theme.spacing(15),
          right: theme.spacing(15),
          zIndex: 2,
          fontSize: "15px",
          fontFamily: "Montserrat, sans-serif",
          color: "#373737",
        }}
      />
      <Box
        sx={{
          position: "fixed",
          top: 1,
          left: 0,
          width: 1,
          height: 100,
          backgroundColor: "#e7e7e7",
          borderRadius: "40px 40px 40px 40px",
          zIndex: 1,
        }}
      />
    </div>
  );
}
