import { KeyboardArrowUp } from "@mui/icons-material";
import { Box, Fab, Zoom, useScrollTrigger } from "@mui/material";
import { useCallback } from "react";





export default function ScrollTop() {
    const trigger = useScrollTrigger({
        // Number of pixels needed to scroll to toggle `trigger` to `true`.
        threshold:120,
      })
    
      const scrollToTop = useCallback(() => {
        window.scrollTo({ top: 0, behavior: "smooth" })
      }, [])
    
  return (
    <Zoom in={trigger}>
    <Box
      role="presentation"
      // Place the button in the bottom right corner.
      sx={{
        position: "fixed",
        bottom: 32,
        right: 32,
        zIndex: 1,
      }}
    >
      <Fab
        onClick={scrollToTop}
        color="secondary"
        size="small"
        aria-label="Scroll back to top"
      >
        <KeyboardArrowUp fontSize="medium" />
      </Fab>
    </Box>
  </Zoom>
  )
}
