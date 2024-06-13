import Header2 from "./header/Header2"
import Header1 from "./header/Header1"
import Header3 from "./header/Header3"
import { ColorModeContext, useMode } from "./theme";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import Hero from "./hero/Hero";
import Main from "./main/Main";
import Foter from "./footer/Foter";
import ScrollTop from "./main/ScrollTop/ScrollTop";

function App() {
  const [theme, colorMode] = useMode();

  return (
    

    <ColorModeContext.Provider 
// @ts-ignore
    value={colorMode}>

<ThemeProvider 
// @ts-ignore
theme={theme}>

<CssBaseline />

    <Header1/>
    <Header2/>
    <Header3/>

 <Box sx={{bgcolor:theme.palette.bgWebsite,pt:"4rem",pb:"4rem"}} >
 <Hero/>
<Main/>


 </Box>
  
</ThemeProvider>

<Foter/>



<ScrollTop/>
    </ColorModeContext.Provider>


    
  )
}

export default App
 