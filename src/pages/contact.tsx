import { Box } from "@mui/material";
import Header from "../components/Header";
import myImage from "../assets/light-gaussian-blur-wallpaper-3230-3434-hd-wallpapers.png";

export default function Contact() {
  return (
    <>
      <Box
        sx={{
          position: "fixed",
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          backgroundImage: `url(${myImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Header />
      </Box>
    </>
  );
}
