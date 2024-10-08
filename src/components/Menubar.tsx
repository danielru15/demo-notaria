import  React, {useContext, useEffect, useState} from 'react';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { Avatar, Divider, ListItemIcon, Tooltip } from '@mui/material';
import { Logout, ManageAccounts } from '@mui/icons-material';
import { useRouter } from 'next/router';
import { AuthContext } from '@/context/authContext';
import { DatosContext } from '@/context/datosContext';


export default function MenuAppBar() {
  const {drawerWidth, open,setOpen,getRandomColor} = useContext(DatosContext)
  const {user, logout} = useContext(AuthContext)
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const openM = Boolean(anchorEl);
  const {push} = useRouter();
  const handleClick = (event:any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  
  const bgColor = user?.nombre ? getRandomColor(user.nombre) : 'black';
  interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
  }

  const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
  })<AppBarProps>(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }));

 


  return (
    <>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" elevation={0} sx={{backgroundColor:"#ffff" , color:"#2f2f2f", borderBottom:"1px solid rgba(0, 0, 0, 0.12)"}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={()=> setOpen(!open)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Dashboard
          </Typography>
          
            <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={openM ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={openM ? 'true' : undefined}
          >
            <Avatar sx={{bgcolor:bgColor , textTransform:'uppercase'}} >
            {`${user?.nombre[0]}${user?.apellido[0]}`}
            </Avatar>
          </IconButton>
        </Tooltip>
          
            
        </Toolbar>
      </AppBar>
    </Box>
    <Menu
        id="account-menu"
        open={openM}
        onClose={handleClose}
        onClick={handleClose}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
      >
        <MenuItem onClick={() => push(`/users/${user.id}`)} >
        <ListItemIcon>
            <ManageAccounts fontSize="small" />
          </ListItemIcon>
          Mi perfil
        </MenuItem>
        <Divider />
        <MenuItem onClick={logout}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </>
  );
}