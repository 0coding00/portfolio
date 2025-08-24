import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
  Dialog,
  DialogContent,
  IconButton,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

import project1img1 from "../assets/project1img1.png";
import project1img2 from "../assets/project1img2.png";
import project1img3 from "../assets/project1img3.png";

import project2img1 from "../assets/project2img1.png";
import project2img2 from "../assets/project2img2.png";
import project2img3 from "../assets/project2img3.png";

import project3img1 from "../assets/project3img1.png";
import project3img2 from "../assets/project3img2.png";
import project3img3 from "../assets/project3img3.png";

export default function Projects() {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleOpen = (img) => {
    setSelectedImage(img);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedImage(null);
  };

  return (
    <Box
      id="projects"
      sx={{
        px: { xs: 2, sm: 4, md: 8 },
        py: { xs: 4, md: 8 },
      }}
    >
      {/* Section Title */}
      <Typography
        variant="h4"
        sx={{
          fontWeight: 700,
          mb: 4,
          textAlign: "center",
          fontSize: { xs: "1.8rem", md: "2.2rem" },
        }}
      >
        Featured Projects
      </Typography>

      {/* Project 1 */}
      <Accordion sx={{ mb: 2 }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography variant="h6" fontWeight={600}>
            Project 1: Flash Taxi
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            sx={{
              mb: 2,
              color: "text.secondary",
              fontSize: { xs: "0.9rem", md: "1rem" },
            }}
          >
           <h4>Description : </h4> Responsive website with manager, driver, and user dashboards,
            accurate maps, and clean UX design.
          </Typography>
             <Typography
            sx={{
              mb: 2,
              color: "text.secondary",
              fontSize: { xs: "0.9rem", md: "1rem" },
            }}
          >
           <h4>Technologies : </h4> React.js, JavaScript ,TypeScript ,TailWind CSS ,MUI ,Shadcn ,Node.js ,React Query ,SPA ,Animation ,Redux,API Integration.
          </Typography>
          {/* Images in one row */}
          <h4>
            Images from the project
          </h4>
          <Box
            sx={{
              display: "flex",
              gap: 2,
              overflowX: "auto", // scroll on small screens
              pb: 1,
            }}
          >
            {[project1img1, project1img2, project1img3].map((img, idx) => (
              <Box
                key={idx}
                component="img"
                src={img}
                alt={`project1-img-${idx}`}
                onClick={() => handleOpen(img)}
                sx={{
                  width: { xs: "150px", sm: "200px", md: "250px" }, // responsive thumbnail size
                  borderRadius: 2,
                  boxShadow: 2,
                  cursor: "pointer",
                  transition: "transform 0.2s",
                  "&:hover": { transform: "scale(1.05)" },
                }}
              />
            ))}
          </Box>
          <h4>Source code : </h4><Typography><a  style={{textDecoration:'underLine' ,color:'black'}} href="https://github.com/0coding00/Taxi.git">GitHub link</a></Typography>

        </AccordionDetails>
      </Accordion>

      {/* Project 2 */}
      <Accordion sx={{ mb: 2 }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography variant="h6" fontWeight={600}>
            Project 2: Food Ordering Website
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            sx={{
              mb: 2,
              color: "text.secondary",
              fontSize: { xs: "0.9rem", md: "1rem" },
            }}
          >
           <h4>Description : </h4> Responsive website with manager, and user dashboards,
            add new meal or edit other,Sign up and Log in Authentication, and clean UX design.
            
          </Typography>
               <Typography
            sx={{
              mb: 2,
              color: "text.secondary",
              fontSize: { xs: "0.9rem", md: "1rem" },
            }}
          >
           <h4>Technologies : </h4> React.js , JavaScript , CSS ,MUI ,Node.js ,React Query ,SPA ,Redux,API Integration.
          </Typography>
          {/* Images in one row */}
          <h4>
            Images from the project
          </h4>
          <Box
            sx={{
              display: "flex",
              gap: 2,
              overflowX: "auto", // scroll on small screens
              pb: 1,
            }}
          >
            {[project2img1, project2img2, project2img3].map((img, idx) => (
              <Box
                key={idx}
                component="img"
                src={img}
                alt={`project1-img-${idx}`}
                onClick={() => handleOpen(img)}
                sx={{
                  width: { xs: "150px", sm: "200px", md: "250px" }, // responsive thumbnail size
                  borderRadius: 2,
                  boxShadow: 2,
                  cursor: "pointer",
                  transition: "transform 0.2s",
                  "&:hover": { transform: "scale(1.05)" },
                }}
              />
            ))}
          </Box>
          <h4>Source code : </h4><Typography><a  style={{textDecoration:'underLine' ,color:'black'}} href="https://github.com/0coding00/restaurantFullProject.git">GitHub link</a></Typography>

        </AccordionDetails>
      </Accordion>

      {/* Project 3 */}
      <Accordion sx={{ mb: 2 }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography variant="h6" fontWeight={600}>
            Project 3: Quiz Fun App
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            sx={{
              mb: 2,
              color: "text.secondary",
              fontSize: { xs: "0.9rem", md: "1rem" },
            }}
          >
           <h4>Description : </h4> Responsive website ,Mini game with timers and final records, and clean UX design.
          </Typography>
               <Typography
            sx={{
              mb: 2,
              color: "text.secondary",
              fontSize: { xs: "0.9rem", md: "1rem" },
            }}
          >
           <h4>Technologies : </h4> React.js, JavaScript, Tailwind CSS .
          </Typography>
          {/* Images in one row */}
          <h4>
            Images from the project
          </h4>
          <Box
            sx={{
              display: "flex",
              gap: 2,
              overflowX: "auto", // scroll on small screens
              pb: 1,
            }}
          >
            {[project3img1, project3img2, project3img3].map((img, idx) => (
              <Box
                key={idx}
                component="img"
                src={img}
                alt={`project1-img-${idx}`}
                onClick={() => handleOpen(img)}
                sx={{
                  width: { xs: "150px", sm: "200px", md: "250px" }, // responsive thumbnail size
                  borderRadius: 2,
                  boxShadow: 2,
                  cursor: "pointer",
                  transition: "transform 0.2s",
                  "&:hover": { transform: "scale(1.05)" },
                }}
              />
            ))}
          </Box>
          <h4>Source code : </h4><Typography><a  style={{textDecoration:'underLine' ,color:'black'}} href="https://github.com/0coding00/Quiz_app.git">GitHub link</a></Typography>

        </AccordionDetails>
      </Accordion>



      {/* Dialog for image preview */}
      <Dialog open={open} onClose={handleClose} maxWidth="md">
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent sx={{ p: 2 }}>
          {selectedImage && (
            <Box
              component="img"
              src={selectedImage}
              alt="preview"
              sx={{
                width: "100%",
                height: "auto",
                borderRadius: 2,
              }}
            />
          )}
        </DialogContent>
      </Dialog>
    </Box>
  );
}
