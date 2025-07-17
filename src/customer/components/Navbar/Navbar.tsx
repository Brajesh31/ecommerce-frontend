import { Avatar, Box, Button, IconButton, useMediaQuery, useTheme } from '@mui/material'
import React, { use } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { AddShoppingCart, FavoriteBorder, Storefront } from '@mui/icons-material';

const Navbar = () => {
    const theme = useTheme();
    const isLarge= useMediaQuery(theme.breakpoints.up('lg'));
  return (
    <>
        <Box>
            <div className='flex justify-between items-center px-5 lg:px-20 h-[70px] border-b'>
                <div className='flex items-center gap-9'>
                    <div className='flex items-center gap-2'>
                        {!isLarge &&<IconButton>
                            <MenuIcon />
                        </IconButton>}
                        <h1 className='logo cursor-pointer text-lg md:text-2xl  dark:text-[#3a8cde]'>
                            E-Commerce Store
                        </h1>
                    </div>
                    <ul className='flex items-center gap-2 text-gray-800'>
                        {["Men",
                            "Women",
                            "Home & Furniture",
                            "Electronics",
                        ].map((item) => <li 
                        className='mainCategory
                         text-sm md:text-base cursor-pointer
                          hover:text-[#3a8cde] transition-all duration-300 ease-in-out hover:border-b-2 h-[70px] px-4 border-primary-color flex items-center' key={item}>
                            {item}
                        </li>)}
                        
                    </ul>
                </div>
                <div className='flex items-center gap-2 lg:gap-5'>
                    <IconButton>
                        <SearchIcon />
                    </IconButton>
                    {
                        false ? <Button className='flex items-center gap-2' >
                            <Avatar
                            sx={{ width: 30, height: 30 }}
                            src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fmedium.com%2F%40simo_sultan%2Fa-rough-guide-to-create-a-css-avatar-bb9888011887&psig=AOvVaw1xRSffZbsw0GBV7xbUz2Lb&ust=1748364569229000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCID3iN7LwY0DFQAAAAAdAAAAABAE'/>
                            <h1 className='font-semibold hidden lg:block'>
                                Bazaar
                                </h1>
                        </Button> : <Button variant='contained'>Login</Button>
                    }
                    <IconButton>
                        <FavoriteBorder sx={{fontSize:30}}/>
                    </IconButton>
                    <IconButton>
                        <AddShoppingCart className='text-gray-700' sx={{fontSize:30}}/>
                    </IconButton>
                    {isLarge && <Button startIcon={<Storefront/>} variant='outlined'>
                        Become Seller
                    </Button>}
                </div>
            </div>
        </Box>
    </>
  )
}

export default Navbar