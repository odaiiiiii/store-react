import { Button, Box, Typography } from "@mui/material";


export default function Foter() {
  return (
   
   <Box   sx={{ bgcolor: "#2B3445",justifyContent:"center",pt:"1rem",pb:"1rem",alignItems:"center",display:{sm:"flex",xs:"block"}, }} >
<Typography sx={{textTransform:"capitalize",fontSize:{sm:"17px",xs:"13px"},color:"white",textAlign:"center"}}>
designed and developed by
</Typography>

<Box  sx={{textAlign:"center", alignItems:"center", display:"flex",justifyContent:"center"}}>
<Button sx={{ textTransform:"capitalize",textAlign:"center",color:"darkgray",fontSize:{sm:"17px",xs:"13px"},":hover":{bgcolor:"initial" ,textDecoration:"underline"}  }}>
Odai Adawi
</Button>
<Typography sx={{fontSize:{sm:"17px",xs:"13px"},textAlign:"center",color:"white"}}>
@2023
</Typography>
</Box>

   </Box>
  )
}
