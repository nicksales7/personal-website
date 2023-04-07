import { Box, Typography, useTheme } from "@mui/material";
import Header from "./components/Header";

function App() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        backgroundImage: 'url("https://i.imgur.com/mtgsbMS.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Header />
      <Box
        sx={{
          position: "relative",
          height: "50%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: theme.spacing(2),
          textAlign: "center",
          zIndex: 2,
        }}
      >
        <Typography
          variant={"h1"}
          sx={{
            fontFamily: "Montserrat, sans-serif",
            color: "#373737",
            fontSize: {
              xs: theme.typography.pxToRem(32),
              sm: theme.typography.pxToRem(38),
              md: theme.typography.pxToRem(44),
              lg: theme.typography.pxToRem(50),
              xl: theme.typography.pxToRem(56),
            },
          }}
        >
          HEY THERE, I'M NICHOLAS SALES
        </Typography>
        <Typography
          variant={"h1"}
          sx={{
            fontFamily: "Montserrat, sans-serif",
            color: "#373737",
            fontSize: {
              xs: theme.typography.pxToRem(10),
              sm: theme.typography.pxToRem(11),
              md: theme.typography.pxToRem(13),
              lg: theme.typography.pxToRem(15),
              xl: theme.typography.pxToRem(20),
            },
          }}
        >
          I am a 19-year-old full-stack software engineer currently studying
          computer science at Carleton University. I am passionate about
          creating clean and efficient code, and I love to work on a variety of
          projects, spanning all the way from games and websites, to automating
          daily tasks. With a strong belief in a fully autonomous future, I am
          always on the lookout for new and exciting internship opportunities.
          On this website, you will find information about my skills, projects,
          and experience.
        </Typography>
      </Box>
    </Box>
  );
}

export default App;
