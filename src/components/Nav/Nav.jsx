import { AppBar, Box, IconButton, Menu, MenuItem, Toolbar, Typography } from '@mui/material';
import { useState, useEffect } from 'react';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { userService } from '../../../services';
import logo from "../../../assets/logo.svg";
import Image from 'next/image';
import styles from "../../../styles/Home.module.css";
import CategoryItem from './CategoryItem';
import styled from "styled-components";
import categories from './data';

export { Nav };

function Nav() {

  const Container = styled.div`
  display: flex;
  padding: 0px;
  width: 100%;
  height:16vh;

`;

    const [user, setUser] = useState(null);
    const [anchorEl, setAnchorEl] = useState(null);
    
    const isMenuOpen = Boolean(anchorEl);

    useEffect(() => {
        const subscription = userService.user.subscribe(x => setUser(x));
        return () => subscription.unsubscribe();
    }, []);

    function logout() {
        userService.logout();
    }

    // only show nav when logged in
    if (!user) return null;
    
    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {  
        setAnchorEl(null);
    };


    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          id={menuId}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={isMenuOpen}
          onClose={()=>{handleMenuClose();}}
        >
          <MenuItem onClick={()=>{logout();}}>Cerrar sesión</MenuItem>          
        </Menu>
      );    

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ backgroundColor: "#010d11" }}>
                <Toolbar style={{justifyContent:'space-between'}}>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ display: { xs: 'none', sm: 'block' } }}
                        >
                        <div className={styles.logoPrincipalnav}>
                        <Image src={logo} alt="Logo" width="350px" />
                        </div>
                    </Typography>

                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <IconButton
                            sx={{ transform: "scale(1.5)", marginRight:"50px"}}
                            size="small"
                            edge="start"
                            aria-label="account of current user"                        
                            aria-haspopup="true"
                            aria-controls={menuId}
                            onClick={(event)=>{                                
                                handleProfileMenuOpen(event);
                            }}
                            color="inherit">
                            <AccountCircle/>
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
            {renderMenu}
    <Container>
      {categories.map((item) => (
        <CategoryItem item={item} key={item.id}/>
      ))}
    </Container>
        </Box>
    );
}