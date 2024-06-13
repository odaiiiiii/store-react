import  { useState } from "react";
import { Box, Container, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack, useMediaQuery, useTheme } from "@mui/material";
import WindowIcon from '@mui/icons-material/Window';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ElectricBikeOutlinedIcon from '@mui/icons-material/ElectricBikeOutlined';
import TvOutlinedIcon from '@mui/icons-material/TvOutlined';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import CloseIcon from '@mui/icons-material/Close';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Links from "./Links-Header3";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping, faShirt, faSocks, faUserTie } from "@fortawesome/free-solid-svg-icons";





export default function Header3() {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };


  return (
    <Container   sx={{ mt: {sm:"3rem",xs:"2rem"}, display: "flex", alignItems: "center", justifyContent: "space-between",mb:"3rem" }}>
      <Box  sx={{ display: "flex", width: "200px", alignItems: "center", textAlign: "center", p: "0px 0px", backgroundColor: theme.palette.
// @ts-ignore
      myColor.main, color: theme.palette.text.secondary }} >
        <Button 
          sx={{ color: theme.palette.text.secondary, justifyContent: "space-between", width: "200px" }}
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
          
          <WindowIcon sx={{ marginRight: "5px" }} />
          Categories
          <Box flexGrow={1} />
          <ChevronRightIcon />
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
          // @ts-ignore
          sx={{ ".MuiPaper-root": { width: "200px", bgcolor: theme.palette.myColor.main } }}
        >
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
            <FontAwesomeIcon icon={faUserTie} />            </ListItemIcon>
            <ListItemText>Formal Wear</ListItemText>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
            <FontAwesomeIcon icon={faShirt} />
            </ListItemIcon>
            <ListItemText>Sports wear</ListItemText>
          </MenuItem>
          <MenuItem onClick={handleClose}  >
            <ListItemIcon >
            <FontAwesomeIcon icon={faBagShopping} />            </ListItemIcon>
            <ListItemText>Bags</ListItemText>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
            <FontAwesomeIcon icon={faSocks} />            </ListItemIcon>
            <ListItemText>Shoes</ListItemText>

          </MenuItem>
        </Menu>
        
      </Box>


      {useMediaQuery('(min-width:1000px)')
      && 
 ( 
   <Stack   
 sx={{zIndex:"2"}}
 direction={"row"} gap={6} mr={10} >
       <Links title={"Home"}/>
      <Links title={"Mega Menu"}/>
      <Links title={"Pages"}/>
      <Links title={"User Account"}/>
   </Stack>)}
      
  
  

      {useMediaQuery('(max-width:1000px)') 
      &&    <IconButton onClick={toggleDrawer("top", true)} sx={{":hover":{bgcolor:"inherit"}}} >
        <MenuOutlinedIcon />
      </IconButton>}

   

      <Drawer  anchor="top" open={state["top"]} onClose={toggleDrawer("top", false)} 
      sx={{".MuiPaper-root.css-1sozasi-MuiPaper-root-MuiDrawer-paper":{height:"100%"}}}
      >
       
          <Box   sx={{width:"60%",mx:"auto" ,mt:"2rem",position:"relative",pt:"60px",minHeight:"580px"}}> 
          
        <IconButton onClick={toggleDrawer("top", false)}  sx={{ ":hover":{color:"red",rotate:"180deg",transition:".3s",bgcolor:"inherit"} , position:"absolute" ,top:"0",right:"0"}}>
        <CloseIcon  />
        </IconButton>


          {[
          {mainTitle:"Home",subTitle:["link1","link2"]},
          {mainTitle:"Meaga menu",subTitle:["link 3","link4"]}  ,
          {mainTitle:"Full screen menu",subTitle:["link5","link6"]},
          {mainTitle:"Pages",subTitle:["link7","link8"]},
          {mainTitle:"User account",subTitle:["link 9","link10"]}  ,
        ].map((item)=>{
            return(

              
        <Accordion elevation={0} sx={{bgcolor:"initial"}}  key={item.mainTitle}>
        <AccordionSummary 
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>{item.mainTitle}</Typography>
        </AccordionSummary>

        <List  sx={{py:"0" ,my:"0"}}>
              
              {item.subTitle.map((link)=>{
                return(
                  <ListItem key={link}  >
                  <ListItemButton  sx={{py:"0" ,my:"0"}}>
                    <ListItemText primary={link} />
                  </ListItemButton>
                </ListItem>
                )
              })}
        
        </List>
      </Accordion>
     

            )
          })}

          

       </Box>
   
   
      </Drawer>
    </Container>
  );
}
