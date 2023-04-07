import { Box } from "@mui/material";
import Header from "../components/Header";

export default function Work() {
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
      >
        <Header />
      </Box>
    </div>
  );
}
