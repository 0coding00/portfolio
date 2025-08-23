import { AppBar, Toolbar, Typography, Box, Button } from "@mui/material";

export default function Header() {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "white",
        color: "black",
        boxShadow: "none",
        borderBottom: "1px solid #e0e0e0",
        px: { xs: 2, md: 8 },
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          py: { xs: 1, md: 2 },
        }}
      >
        {/* Name & Title */}
        <Box>
          <Typography
            variant="h5"
            sx={{ fontWeight: 700, lineHeight: 1.2 }}
          >
            Yousef Knifati
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ color: "text.secondary", fontSize: { xs: "0.9rem", md: "1rem" } }}
          >
            Frontend Developer
          </Typography>
        </Box>

        {/* Navigation Links */}
        <Box
          component="nav"
          sx={{
            display: "flex",
            gap: { xs: 2, md: 4 },
            mt: { xs: 1, md: 0 },
          }}
        >
          <Button href="#projects" sx={{ color: "black", fontWeight: 500 }}>
            Work
          </Button>
          <Button href="#about" sx={{ color: "black", fontWeight: 500 }}>
            About
          </Button>
          <Button href="#contact" sx={{ color: "black", fontWeight: 500 }}>
            Contact
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
