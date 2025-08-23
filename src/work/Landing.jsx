import { Box, Typography } from "@mui/material";
import computerImage from "../assets/image.png";

export default function Landing() {
  return (
    <Box
      id="landingPage"
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" }, // responsive layout
        alignItems: "center",
        justifyContent: "space-between",
        px: { xs: 2, sm: 4, md: 8 }, // padding responsive
        py: { xs: 4, md: 8 },
        gap: { xs: 4, md: 6 },
      }}
    >
      {/* Left Side - Text */}
      <Box
        className="landing-text"
        sx={{
          flex: 1,
          textAlign: { xs: "center", md: "left" },
        }}
      >
        <Typography
          variant="h3"
          component="h2"
          sx={{
            fontWeight: 700,
            mb: 2,
            fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.8rem" },
          }}
        >
          I Design Modern Websites
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: "text.secondary",
            fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
            maxWidth: { md: "500px" },
            mx: { xs: "auto", md: "0" },
          }}
        >
          Responsive websites and stores with inspiring UI and easy UX
          for better experience and clean, readable code.
        </Typography>
      </Box>

      {/* Right Side - Image */}
      <Box
        className="landing-image"
        sx={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          component="img"
          src={computerImage}
          alt="computerImage"
          sx={{
            width: { xs: "90%", sm: "80%", md: "70%" },
            maxWidth: "500px",
            borderRadius: 3,
            boxShadow: 3,
          }}
        />
      </Box>
    </Box>
  );
}
