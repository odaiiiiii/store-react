import { Box, Button, Container, Link,  Stack,  Typography, useTheme } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import './Slider.css'
import Icons from "./Icons";

const ArratInformation = [
  {text: "MEN", linkimg: '/imges/banner-15.png'},
  {text: "WOMEN", linkimg: '/imges/banner-25.jpg'},

]

export default function Hero() {
  const theme = useTheme()

  return (
    <Container >

      <Box className="Box1 "  sx={{display:"flex" ,mt:"0rem",gap:".2rem",}}   >
      <Swiper 
        loop={true}
        pagination={{
          dynamicBullets: true,
          
        }}
        modules={[Pagination]}
        className="mySwiper  "
        
        
      >
        {ArratInformation.map((item)=>{
          return(
            <SwiperSlide key={item.text} className="imgClass " > 
            <img src={item.linkimg} alt=""  /> 
           <Box className="BoxSlider   "
           sx={{
            [theme.breakpoints.up('sm')]: {
              position:"absolute" ,top:"20%",left:"14%",color:"black",textAlign:"left"  ,      },
           }}
           
          >
  
          <Typography sx={{fontSize:"28px",color:"		#E30B5C", paddingBottom:".8rem"}}>Lifestyle Collection</Typography>
          <Typography sx={{fontSize:"35px",fontWeight:"bold",color:"black",paddingBottom:".8rem" }}> {item.text}</Typography>
  
          <Stack direction={"row"}>
          <Typography sx={{fontSize:"28px",color:"		#E30B5C",mr:"5px",paddingBottom:".8rem" }} >Sale Up To  </Typography> 
          <Typography sx={{fontSize:"28px",color:"#D2122E", paddingBottom:"1rem"}}> 30% Off</Typography>
          </Stack>
          <Typography  sx={{color:"		#484848",fontSize:"13px" ,paddingBottom:"1.5rem" }}> Get free shipping orders over 29$.00 </Typography>
  
          <Button sx={{bgcolor:"	#181818",color:"white",width:"130px",borderRadius:"0px",mt:"18px",p:"7px",":hover" :{bgcolor:"	#383838",scale:"1.03" ,transition:".3s"}}}>SHOP NOW</Button>
          </Box>
        
           </SwiperSlide>
          )
        })}

    

          </Swiper>

      <Box flexGrow={1}  />
      <Box sx={{ display: {md:"flex",xs:"none"}, flexDirection: "column", gap: "0.5rem", }}>
        
           <Box sx={{position:"relative",height:"49%" ,}}  >
            <img  src=".//imges/w8.png" width={"100%"} height={"100%"} />

          <Box sx={{position:"absolute",top:"45%",transform:"translateY(-50%)",left:"8%",lineHeight:"2rem"}} >

         <Typography sx={{color: "#E30B5C" ,fontSize:"20px" ,lineHeight:"32px",}}>     New arrivals       </Typography>
          <Typography sx={{color: "#E30B5C" ,fontSize:"20px" ,lineHeight:"32px"}}>     Summer       </Typography>
          <Typography sx={{color: "#E30B5C" ,fontSize:"20px" ,lineHeight:"32px"}}>     Sale 20% Off       </Typography>
         
        <Link sx={{display:"flex" ,alignItems:"center",textDecoration:"none" ,color:" 	 #666666",mt:"7px",fontSize:"16px",fontWeight:"bold" , ":hover":{color:"black",cursor:"pointer"}}}>
        Shop Now <ArrowForwardIcon fontSize="small"/>
        </Link>

        
           
          </Box>
           </Box>


           <Box sx={{position:"relative",height:"49%",}}>
            <img src="./imges/bag4.png" width={"100%"} height={"100%"} />

            <Box sx={{position:"absolute",top:"45%",transform:"translateY(-50%)",left:"8%" ,lineHeight:"2rem",}}>

            <Typography sx={{color: "#E30B5C" ,fontSize:"20px" ,lineHeight:"32px",}}> Best Price       </Typography>
          <Typography sx={{color: "#E30B5C" ,fontSize:"20px" ,lineHeight:"32px"}}>   Discounts up to     </Typography>
          <Typography sx={{color: "#E30B5C" ,fontSize:"20px" ,lineHeight:"32px"}}>    50%       </Typography>

          <Link sx={{display:"flex" ,alignItems:"center",textDecoration:"none" ,color:" 	 #666666",mt:"7px",fontSize:"16px",fontWeight:"bold" , ":hover":{color:"black",cursor:"pointer"}}}>
        Shop Now <ArrowForwardIcon fontSize="small"/>
        </Link>

           </Box>
           </Box>
           </Box>
        </Box>


    
        <Icons/>
    </Container>
  )
}
