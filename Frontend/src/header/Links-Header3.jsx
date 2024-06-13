


import { Box, List, ListItem, ListItemButton, ListItemText, Paper, Typography } from '@mui/material'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function Links({title}) {
  return (
    <Box  sx={{display:"flex",alignItems:"center",position:"relative",  ":hover .show-list":{display:"block"}, ":hover" :{cursor:"pointer"} }}
  
    >
    <Typography  >{title}</Typography>
     <ExpandMoreIcon/>


<Box  className='show-list' sx={{position:"absolute",transform:"translateX(-50%)" ,left:"50%"
 ,top:"100%",width:"150px", display:"none"
 ,
 }}>
<Paper sx={{mt:"10px"}}
>
<nav aria-label="secondary mailbox folders" >
        <List>
       
          <ListItem disablePadding >
            <ListItemButton>
              <ListItemText  sx={{".MuiTypography-root " :{fontSize:"12px"}}} primary="Dashboard" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding   sx={{":hover .subList":{display:"block"} ,position:"relative"}}>
            <ListItemButton  >
              <ListItemText  sx={{".MuiTypography-root " :{fontSize:"12px"} ,}} primary="Products" />
              <Box flexGrow={1}/>
              <ChevronRightIcon/>

            </ListItemButton>
            
   <Box className="subList" sx={{position:"absolute",top:"0",left:"100%" ,width:"120px",display:"none" ,".MuiTypography-root " :{fontSize:"10px"}}}>
   <Paper  sx={{ml:"2px"}}>
       <nav aria-label="secondary mailbox folders" >
        <List >
          <ListItem disablePadding >
            <ListItemButton>
              <ListItemText primary="Add product" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemText primary="Edit product" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>

       </Paper>
   </Box>



          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText  sx={{".MuiTypography-root " :{fontSize:"12px"}}} primary="Ordar" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText  sx={{".MuiTypography-root " :{fontSize:"12px"}}} primary="Profile" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
</Paper>
</Box>
    </Box>
  )
}
