import { Box ,Button,Stack, ToggleButton, ToggleButtonGroup, Typography} from "@mui/material";


import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import { useState } from "react";




export default function SubCard({clickProduct}) {

  const [alignment, setAlignment] = useState('left');

  const handleAlignment = (event, newAlignment) => {
    if (newAlignment !== null) {
  
    setAlignment(newAlignment);
    }
  };


  const [selectIng,setselectImg]=useState(0)
  return (
    <Stack direction={"row"} sx={{display:{xs:"block",sm:"flex"} ,textAlign:{xs:"center",sm:"left"}}}   >
      
    <Box  display={"flex"}  >
        <img src={clickProduct.attributes.ProductImg.data[selectIng].attributes.url} width={"250px"}  className="imgSubTitle "  />
    </Box>

    <Box sx={{pt:"1.4rem",pb:"1rem",pl:"1.5rem",}}  >
        <Typography  sx={{pb:{xs:".4rem",sx:".6rem"},fontSize:{xs:"18px",sm:"25px"}}} textTransform={"uppercase"}>{clickProduct.attributes.ProductTitle}</Typography>
        <Typography   sx={{pb:{xs:".4rem",sx:".6rem"},fontSize:{xs:"18px",sm:"25px"},color:"#dc143c",fontWeight:"bold"}}>{clickProduct.attributes.ProductPrice}</Typography>
        <Typography sx={{pb:".6rem",fontSize:{xs:"12px",sm:"15px"}}}>{clickProduct.attributes.ProductDescr}</Typography>

        <Stack direction={"row"} gap={2} sx={{pb:".8rem"}} className="imgesSubtiteSmall  "  >



        <ToggleButtonGroup 
        value={selectIng}
      
      exclusive
      onChange={handleAlignment}
      aria-label="text alignment"
      sx={{
        ".Mui-selected": {
          border: "1px solid rgba(263, 69, 96, 0.5)!important",
          opacity:1,
          backgroundColor: "initial !important",
         
        }
      }}
      
      >
        {clickProduct.attributes.ProductImg.data.map((item,index)=>{

            return(
              <ToggleButton key={item.id}  value={index} aria-label="left aligned"
              sx={{width:"110px", height:"110px",mx:1,opacity:".5",p:"0"}}
              >

                <img 
                style={{width:"100%",height:"100%"}}
                onClick={()=>{
                  setselectImg(index)
                }}
                src={item.attributes.url}
                 width={"110px"} height={"100px"} 
                  className="imgesSubtiteSmallCard" />
                  
            
            </ToggleButton>
)
        })}            
 </ToggleButtonGroup>
        </Stack>

        <Button sx={{gap:".6rem"}}>
          <AddShoppingCartOutlinedIcon />  Buy Now</Button>
    </Box>

    </Stack>
  )
}
