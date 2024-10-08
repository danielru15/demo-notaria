import React, {useContext} from 'react';
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import Tooltip from '@mui/material/Tooltip';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Inbox, Leaderboard, PeopleSharp, PersonAddSharp } from '@mui/icons-material';
import { useRouter } from "next/router";
import { DatosContext } from '@/context/datosContext';

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function MiniDrawer() {
  const theme = useTheme();
  const {drawerWidth,open} = useContext(DatosContext)
  const {push} = useRouter();
  return (
    <>
      <CssBaseline />
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
        
        </DrawerHeader>
        <Divider />
        <List>
        <ListItem disablePadding sx={{ display: 'block' }} onClick={() => push("/archivo/create-archivo")}>
            <Tooltip title="crear Archivo">
                <ListItemButton
                    sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                    }}
                >
                    <ListItemIcon
                    sx={{
                        minWidth: 0,
                        mr: open ? 3 : 'auto',
                        justifyContent: 'center',
                    }}
                    >
                 <Leaderboard/>
                </ListItemIcon>
                <ListItemText primary={'crear ARCHIVO'} sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
            </Tooltip>
        </ListItem>
        <ListItem disablePadding sx={{ display: 'block' }} onClick={() => push("/archivo/")}>
            <Tooltip title="Archivo">
                <ListItemButton
                    sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                    }}
                >
                    <ListItemIcon
                    sx={{
                        minWidth: 0,
                        mr: open ? 3 : 'auto',
                        justifyContent: 'center',
                    }}
                    >
                 <Leaderboard/>
                </ListItemIcon>
                <ListItemText primary={'Informe ARCHIVO'} sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
            </Tooltip>
        </ListItem>
        <ListItem disablePadding sx={{ display: 'block' }} onClick={() => push("/archivo/prestar-libro")}>
            <Tooltip title="Informe Archivo">
                <ListItemButton
                    sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                    }}
                >
                    <ListItemIcon
                    sx={{
                        minWidth: 0,
                        mr: open ? 3 : 'auto',
                        justifyContent: 'center',
                    }}
                    >
                 <Leaderboard/>
                </ListItemIcon>
                <ListItemText primary={'Prestar Libro'} sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
            </Tooltip>
        </ListItem>
        </List>

        <Divider />
        <List>
       
        <ListItem disablePadding sx={{ display: 'block' }} onClick={() => push("/users/")}>
            <Tooltip title="usuarios">
                <ListItemButton
                    sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                    }}
                >
                    <ListItemIcon
                    sx={{
                        minWidth: 0,
                        mr: open ? 3 : 'auto',
                        justifyContent: 'center',
                    }}
                    >
                 <PeopleSharp/>
                </ListItemIcon>
                <ListItemText primary={'Usuarios'} sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
            </Tooltip>
        </ListItem>
        <ListItem disablePadding sx={{ display: 'block' }} onClick={() => push("/users/create-user")}>
            <Tooltip title="Crear usuario">
                <ListItemButton
                    sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                    }}
                >
                    <ListItemIcon
                    sx={{
                        minWidth: 0,
                        mr: open ? 3 : 'auto',
                        justifyContent: 'center',
                    }}
                    >
                 <PersonAddSharp/>
                </ListItemIcon>
                <ListItemText primary={'Crear Usuario'} sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
            </Tooltip>
        </ListItem>
        </List>

      </Drawer>
      </>
  );
}