import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { Box, Container, IconButton, List, ListItem, ListItemText, Menu, MenuItem, Stack, Typography } from '@mui/material';

import { useState } from 'react';
import { useTheme } from '@emotion/react';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: '20%',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  // Adjusted margin instead of padding
  marginRight: theme.spacing(2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const options = [
  'All categories',
  'clothes',
  'shoes',
  'Bags',
  'Accessories',
];

export default function Header2() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const open = Boolean(anchorEl);

  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // @ts-ignore
  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const theme = useTheme();

  return (
    <Container>
      <Box sx={{ display: "flex", justifyContent: "space-between", mt: "2rem", alignItems: "center" }}>
        <Box sx={{ alignItems: "center", textAlign: "center" }}>
          <ShoppingCartOutlinedIcon />
          <Typography>E-commerce</Typography>
        </Box>

        <
// @ts-ignore
        Search


         sx={{ border: "1px solid #383838", borderRadius: "20px", display:{sm:"flex",xs:"none"},pl:"8px", justifyContent: "space-between", flexGrow: ".5", alignItems: "center" ,}}>
          <
// @ts-ignore
          SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <
// @ts-ignore
          StyledInputBase
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}
          />

          <Stack direction={"row"} alignItems={"center"}>
            <List
              component="nav"
              aria-label="Device settings"
              // @ts-ignore
              sx={{ bgcolor: theme.palette.myColor.main, borderRadius: "0px 20px 20px 0 ", p: "0px",display:{sm:"none",md:"flex"} }}
            >
              <ListItem
                id="lock-button"
                aria-haspopup="listbox"
                aria-controls="lock-menu"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClickListItem}
                sx={{ width: "150px", "&:hover": { cursor: "pointer", }, textAlign: "center" }}
              >
                <ListItemText
                  secondary={options[selectedIndex]}
                />
                <ExpandMoreIcon />
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
                  sx={{ fontSize: "12px", width: "130px", }}
                  key={option}
                  selected={index === selectedIndex}
                  onClick={(event) => handleMenuItemClick(event, index)}
                >
                  {option}
                </MenuItem>
              ))}
            </Menu>
          </Stack>
        </Search>

        <Stack direction={"row"} sx={{ alignItems: "center", gap: "20px" }}>
          {/* Removed unused Badge and ShoppingCartIcon */}
          <IconButton aria-label="cart">
            {/* <StyledBadge badgeContent={4} color="secondary">
              <ShoppingCartIcon />
            </StyledBadge> */}
            <ShoppingCartOutlinedIcon/>
          </IconButton>
          <PersonOutlineOutlinedIcon sx={{ "&:hover": { cursor: "pointer" } }} />
        </Stack>
      </Box>
    </Container>
  );
}
