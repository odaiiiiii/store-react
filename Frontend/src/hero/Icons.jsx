import { Box, Container, Divider, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms';
import CreditScoreIcon from '@mui/icons-material/CreditScore';

export default function Icons() {
    const theme = useTheme();
  return (
 
 <Container sx={{bgcolor:theme.palette.mode === "dark"  ? "black" :"white",mt:"4rem",alignItems:"center"}} >
    <Stack  direction={"row"} gap={5} flexWrap={"wrap"}  
divider={useMediaQuery('(min-width:900px)') ? <Divider orientation="vertical" flexItem /> : null}

>
        <DataIcons  icon={<ElectricBoltIcon/>} title={"fast delivery"} subTitle={"start from $5"} />
        <DataIcons icon={<AccessAlarmsIcon/>} title={"365 days"} subTitle={"for free return"}/>
        <DataIcons icon={<CreditScoreIcon/>} title={"payment"} subTitle={"secure system"}/>

    </Stack>
   
 </Container>
  )
}





const DataIcons =({icon,title,subTitle})=>{
const theme = useTheme();
    return (
        <Box sx={{width:"210px",height:"180px", flexGrow:"1", display:"flex",py:"1.6rem",alignItems:"center" ,justifyContent:{sm:"left",md:"center"},}}>
         {icon}
         <Box px={3.3} >
             <Typography sx={{color:theme.palette.text.primary,fontWeight:"bold",fontSize:"23px",textTransform:"capitalize" ,pb:".5rem",textAlign:"center"}}>{title} </Typography>
             <Typography sx={{color:theme.palette.text.secondary,fontSize:"18px",textTransform:"capitalize",textAlign:"center"}}> {subTitle}</Typography>
     
         </Box>

        </Box>
       )
}

