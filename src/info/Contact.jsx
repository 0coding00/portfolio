import { Box, Typography, IconButton, Stack } from "@mui/material";
import contactImg from "../assets/contact.png";
import { FaFacebook, FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  return (
    <Box
      id="contact"
      sx={{
        px: { xs: 2, sm: 4, md: 8 },
        py: { xs: 4, md: 8 },
        textAlign: "center",
      }}
    >
      {/* Section Title */}
      <Typography
        variant="h4"
        sx={{
          fontWeight: 700,
          mb: 4,
          fontSize: { xs: "1.8rem", md: "2.2rem" },
        }}
      >
        Contact Me
      </Typography>

      {/* Image */}
      <Box
        component="img"
        src={contactImg}
        alt="Contact"
        sx={{
          maxWidth: "280px",
          width: "100%",
          margin: "0 auto",
          display: "block",
          mb: 4,
        }}
      />

      {/* Social Icons */}
      <Stack
        direction="row"
        justifyContent="center"
        spacing={3}
        sx={{ mt: 3 }}
      >
        <IconButton
          component="a"
          href="https://www.facebook.com/yousef.knifati"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            color: "text.primary",
            transition: "0.3s",
            "&:hover": { color: "#1877F2" }, // Facebook blue
          }}
        >
          <FaFacebook size={30} />
        </IconButton>

        <IconButton
          component="a"
          href="https://wa.me/qr/DXBMMRPPFNX5H1"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            color: "text.primary",
            transition: "0.3s",
            "&:hover": { color: "#25D366" }, // WhatsApp green
          }}
        >
          <FaWhatsapp size={30} />
        </IconButton>

        <IconButton
          component="a"
          href=" https://www.linkedin.com/in/yousef-knifati-06075828b"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            color: "text.primary",
            transition: "0.3s",
            "&:hover": { color: "#0A66C2" }, // LinkedIn blue
          }}
        >
          <FaLinkedin size={30} />
        </IconButton>

        <IconButton
          component="a"
          href="https://github.com/0coding00"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            color: "text.primary",
            transition: "0.3s",
            "&:hover": { color: "#333" }, // GitHub black
          }}
        >
          <FaGithub size={30} />
        </IconButton>
      </Stack>
      <Typography sx={{paddingTop:1}}>0coding0101@gmail.com</Typography>
      <Typography sx={{paddingTop:1}}>Phone Number : 0969909235</Typography>
    </Box>
  );
}
