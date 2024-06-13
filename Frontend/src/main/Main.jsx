
import { Box, Button, Card, CardActions, CardContent, CardMedia, CircularProgress, Container, Dialog, IconButton, Rating, Stack, Typography, duration, useTheme } from "@mui/material";


import CloseIcon from '@mui/icons-material/Close';

import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useState } from "react";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import SubCard from "./SubCard";

import { useGetproductByNameQuery } from "../services/product";
import { motion } from "framer-motion";


export default function Main() {

  const [clickProduct,setclickProduct]=useState({});


  const theme =useTheme()

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


    const handleAlignment = (event, newValue) => {
      if (newValue !== null) {
        setDataCategory(newValue)

      }
    };

      const AllCategory ="products?populate=*"
      const WomenCategory ="products?populate=*&filters[ProductCategory][$eq]=women"
      const Mencategory ="products?populate=*&filters[ProductCategory][$eq]=men"

      const [DataCategory,setDataCategory] =useState(AllCategory)

    const {data, error, isLoading } = useGetproductByNameQuery (DataCategory)

    if(error){
      // @ts-ignore
      return(<Container sx={{py:"3rem" ,color:"red",fontWeight:"bold", textAlign:"center"}}>
       <Typography fontSize={"25px"}> {error.error}</Typography>
       <Typography fontSize={"25px"}>Try later time</Typography>
      </Container>)
    }

      if(isLoading){
        return(
          <Box sx={{ textAlign:"center",py:"5rem" }}>
      <CircularProgress />
    </Box>
          )
      }

if(data){
  return (
    
    <Container sx={{pt:"4rem",pb:"10rem"}} >
 
 
 <Stack  mb={"1rem"} direction={"row"} justifyContent={"space-between"} alignItems={"center"} flexWrap={"wrap"} gap={3}>
 
 <Box flexGrow={1}>
 <Typography sx={{fontSize:"30px",mb:".5rem" ,fontWeight:"bold"}}>Selected Products</Typography>
 <Typography sx={{fontSize:"16px",textTransform:"capitalize"}}>all our new arrivals in a excursive brand selection</Typography>
 </Box>
 
 
 
 
 <ToggleButtonGroup
 
 sx={{
         ".Mui-selected": {
           border: "1px solid rgba(263, 69, 96, 0.5)!important",
           color: "#e95460 !important" ,
           backgroundColor: "initial !important",
          
         }
       }}
       
       value={DataCategory}
       exclusive
       onChange={handleAlignment}
       aria-label="text alignment"
     
       
     >
       <ToggleButton className="btnA" value={AllCategory} aria-label="left aligned" sx={{color:theme.palette.text.primary}}>
       All products
             </ToggleButton>
       <ToggleButton className="btnA" value={Mencategory} aria-label="centered" sx={{mx:"16px !important" ,color:theme.palette.text.primary}}>
       Men category     
        </ToggleButton>
       <ToggleButton className="btnA" value={WomenCategory} aria-label="right aligned"  sx={{color:theme.palette.text.primary}}>
       Women category
             </ToggleButton>
      
     </ToggleButtonGroup>
 
 </Stack>
 
 
 <Stack  direction={"row"} justifyContent={"space-between"} flexWrap={"wrap"}>
 
 {    
 
        data.data.map((item)=>{
   return(
     <Card
    component={motion.section}
    layout
    initial={{ transform: "scale(0)" }}
    animate={{ transform: "scale(1)" }}
    exit={{ transform: "scale(0)" }}
    transition={{duration:.3,type:"spring",stiffness:50}}
     key={item} sx={{ maxWidth: 345,mt:"2rem"   , ":hover .MuiCardMedia-root": {scale:"1.07",transition:".4s",mb:"1rem"}
 }} >
       <CardMedia 
         sx={{ height: 380 ,}}
         // @ts-ignore
         image= {`${item.attributes.ProductImg.data[0].attributes.url}`}
         title="green iguana"
         
         
       />
     <Box  sx={{px:"10px",py:"5px"}}>
     <CardContent >
       <Box sx={{display:"flex", justifyContent:"space-between" ,alignItems:"center"}} >
       <Typography gutterBottom component="div" sx={{fontSize:"18px"}} >
           {item.attributes.ProductTitle}
         </Typography>
         <Typography gutterBottom variant="h5" component="div" sx={{fontSize:"18px"}}>
          {item.attributes.ProductPrice}
         </Typography>
       </Box>
         <Typography variant="body2" color="text.secondary" sx={{mt:".8rem",mb:".4rem"}}>

              {item.attributes.ProductDescr}
           
         </Typography>
       </CardContent>
       <CardActions sx={{justifyContent:"space-between" ,pb:"1.2rem",alignItems:"center"}}>
 
    
         <Button 
         onClick={()=>{
            handleClickOpen()
            setclickProduct(item)
          }
          
       
        
        }  
         
         size="medium">
           
         <AddShoppingCartIcon fontSize="medium" sx={{marginRight:"5px"}}  />
 
           Add to cart</Button>
 
   
         <Rating name="read-only" value={item.attributes.ProductRating} readOnly precision={0.5} size="medium" />
       </CardActions>
     </Box>
     </Card>
 
   )
 })
 }
 
 
 </Stack>
 
 
 <Dialog   
         sx={{".MuiPaper-root" :{minWidth:{xs:"75%",sm:"80%",md:"60%"}}}} 
         open={open}
         onClose={handleClose}
         aria-labelledby="alert-dialog-title"
         aria-describedby="alert-dialog-description"
       > 
     <IconButton  onClick={handleClose}  sx={{ ":hover":{color:"red",rotate:"180deg",transition:".3s",} , position:"absolute" ,top:"5",right:"9px"}}     >
         <CloseIcon   />
 
         </IconButton>
 
     
     <SubCard clickProduct={clickProduct}/>
       </Dialog>
    </Container>
   )
}
}
