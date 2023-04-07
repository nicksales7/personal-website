import { Box, useTheme, Typography } from "@mui/material";
import Header from "../components/Header";

export default function About() {
  const theme = useTheme();
  return (
    <div>
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
      />
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
              xs: theme.typography.pxToRem(10),
              sm: theme.typography.pxToRem(11),
              md: theme.typography.pxToRem(13),
              lg: theme.typography.pxToRem(15),
              xl: theme.typography.pxToRem(20),
            },
          }}
        >
          "Advancing our future through computation and technology means
          transcending boundaries and redefining the possible." From an early
          age, I found myself drawn to the world of programming and computation.
          Naturally, I chose to follow my passion by pursuing a Computer Science
          degree at Carleton University. In parallel, I am honing my skills as a
          full-stack software engineer, focusing on writing clean, efficient
          code for diverse projects - from gaming and web development to
          automation of everyday tasks. Additionally, I'm gaining valuable
          professional experience as an office administrator at Power Hunters
          Agency, where I apply my technical skills to optimize daily
          operations. As a firm believer in a future driven by autonomy, I am
          always eager to explore exciting internship opportunities that allow
          me to contribute to this vision. Outside of academics and work, I
          indulge in my love for technology by continually learning and
          experimenting with the latest advancements. My interests span various
          languages and tools, including, but not limited to Python, TensorFlow,
          JavaScript, Ruby, and React. Feel free to connect with me on social
          media, where I actively engage with the tech community, share my
          insights, and collaborate on innovative projects that push the
          boundaries of what's possible.
        </Typography>
      </Box>
    </div>
  );
}
