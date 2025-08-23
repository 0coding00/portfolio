import { Box, Typography } from "@mui/material";
import aboutImage from "../assets/about.png";

export default function About() {
  return (
    <Box
      id="about"
      sx={{
        px: { xs: 2, sm: 4, md: 8 },
        py: { xs: 4, md: 8 },
      }}
    >
      {/* Title */}
      <Typography
        variant="h4"
        sx={{
          fontWeight: 700,
          mb: 4,
          textAlign: "center",
          fontSize: { xs: "1.8rem", md: "2.2rem" },
        }}
      >
        About Me
      </Typography>

      {/* Responsive Row/Column */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" }, // column on small screens
          alignItems: "center",
          gap: 4,
        }}
      >
        {/* Text Section */}
        <Box sx={{ flex: 1 }}>
          <Typography
            sx={{
              fontSize: { xs: "0.95rem", md: "1.1rem" },
              color: "text.secondary",
              lineHeight: 1.8,
              textAlign: { xs: "center", md: "left" }, // center text on small screens
            }}
          >
            Fifth-year Information Engineering student at the University of
            Aleppo, specializing in Frontend Development. Experienced in
            building responsive websites using React.js. Passionate about modern
            web development and creating user-friendly interfaces. Specialist in
            problem solving on Codeforces with more than 230 problems solved at
            different levels.
          </Typography>
        </Box>

        {/* Image Section */}
        <Box sx={{ flex: 1, textAlign: "center" }}>
          <Box
            component="img"
            src={aboutImage}
            alt="About Me"
            sx={{
              width: "100%",
              maxWidth: 350,
              borderRadius: 3,
              boxShadow: 3,
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}
