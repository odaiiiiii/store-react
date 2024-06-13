import  { useContext, useState } from "react";
import { ColorModeContext } from "../theme";
import { Box, Container, IconButton, List, ListItem, ListItemText, Menu, MenuItem, Stack, Typography, useTheme } from "@mui/material";
import { DarkModeOutlined, LightModeOutlined } from "@mui/icons-material";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const options = ['AR', 'EN'];

const Header1 = () => {
  
  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();

  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(1);
  const open = Boolean(anchorEl);

  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (

<Box sx={{ bgcolor: "#2B3445",}}>
    <Container >
    <Stack sx={{ padding: "10px 2px", margin: "0px" ,color:"white",alignItems:"center" }} direction={"row"}   >

<Stack direction={"row"} alignItems={"center"}>
  
<Typography  bgcolor={"#E30B5C"} borderRadius={"30%"} padding={"3px 7px "}  width={"55px"} textAlign={"center"} marginRight={"11px"} fontSize={"15px"} >
          Store
        </Typography>
        <Typography  sx={{textTransform:"capitalize", display:{sm:"flex",xs:"none"}}} fontSize={"15px"} >free express shipping</Typography>

</Stack>

      <Box flexGrow={1} />
 

      <Box display={"flex"} alignItems={"center"} gap={"1.5rem"}  sx={{alignItems:"center"}}>
        {theme.palette.mode === "light" ? (
          <IconButton
            onClick={() => {
              localStorage.setItem("mode", theme.palette.mode === "dark" ? "light" : "dark");
              colorMode.toggleColorMode();
            }}
            color="inherit"
          >
            <LightModeOutlined  fontSize="small"/>
          </IconButton>
        ) : (
          <IconButton
            onClick={() => {
              localStorage.setItem("mode", theme.palette.mode === "dark" ? "light" : "dark");
              colorMode.toggleColorMode();
            }}
            color="inherit"
          >
            <DarkModeOutlined  fontSize="small"/>
          </IconButton>
        )}

        <List component="nav" aria-label="Device settings"  sx={{fontSize:"15px",color:"white",p:"0px", m:"0px",}} >
          <ListItem
            id="lock-button"
            aria-haspopup="listbox"
            aria-controls="lock-menu"
            aria-label="when device is locked"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClickListItem}
            sx={{"&:hover":{cursor:"pointer",},p:"0",m:"0"}}

          >
            <ListItemText  secondary={options[selectedIndex]} 
                        sx={{".MuiTypography-root":{fontSize:"15px",color:"white",}}}

            />
            <ExpandMoreIcon/>
          </ListItem>
          
        </List>

        
        <Menu
          id="lock-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'lock-button',
            role: 'listbox',
          }}
        >
          {options.map((option, index) => (
            <MenuItem
              key={option}
              selected={index === selectedIndex}
              onClick={(event) => handleMenuItemClick(event, index)}
            >
              {option}
            </MenuItem>
          ))}
        </Menu>

        <FacebookIcon fontSize="small" />
        <InstagramIcon fontSize="small" />
        <TwitterIcon fontSize="small" />
      </Box>


    </Stack>
    </Container>
    </Box>
  );
};

export default Header1;
