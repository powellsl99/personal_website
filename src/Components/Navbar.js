import React, {useState} from 'react'
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    IconButton,
    Box,
    Avatar,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Divider,
    Drawer
} from "@material-ui/core"
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import SchoolIcon from '@material-ui/icons/School';
import WorkIcon from '@material-ui/icons/Work';
import GitHubIcon from '@material-ui/icons/GitHub';
import { makeStyles } from '@material-ui/core/styles';
import ContactsIcon from '@material-ui/icons/Contacts';
import headshot from "../headshot.jpg"

const useStyles = makeStyles((theme) => ({
    iconButton: {
        color: "#FFF",
        fontSize: 40,
    },
    drawer: {
        width: 250,
        height: "100%",
        background: "#DDD"
    },
    avatar: {
        display: "block",
        margin: "0.5rem auto",
        width: theme.spacing(13),
        height: theme.spacing(13),
    }
  }));

const menuItems = [
    {
        listIcon: <HomeIcon/>,
        listText: "Home"
    },
    {
        listIcon: <SchoolIcon/>,
        listText: "Education"
    },
    {
        listIcon: <WorkIcon/>,
        listText: "Experience"
    },
    {
        listIcon: <GitHubIcon/>,
        listText: "Projects"
    },
    {
        listIcon: <ContactsIcon/>,
        listText: "Contact Me"
    },
]

const Navbar = () => {
    const classes = useStyles()
    const [state, setState] = useState({
        menuOpen: false
    })
    
    const toggleMenu = (menu, open) => () => {
        setState({...state, [menu]: open})
    }

    const menuList = menu => (
        <Box component="div" className={classes.drawer}>
            <Avatar src={headshot} className={classes.avatar}></Avatar>
            <Divider/>
            <List>
                {menuItems.map((item, key) => (
                    <ListItem button key={key} onCLick={toggleMenu(menu, false)}>
                        <ListItemIcon>{item.listIcon}</ListItemIcon>
                        <ListItemText>{item.listText}</ListItemText>
                    </ListItem>
                ))}
            </List>
        </Box>
    )

    return (
        <>
    
        <Box component="nav">
            <AppBar position="static" style={{background: "#333"}}>
                <Toolbar>
                <IconButton onClick={toggleMenu("menuOpen", true)}>
                    <MenuIcon className={classes.iconButton} size="medium"></MenuIcon>
                </IconButton>
                <Drawer open={state.menuOpen} onClose={toggleMenu("menuOpen", false)}>
                    {menuList("menuOpen")}
                </Drawer>
                </Toolbar>
            </AppBar>
        </Box>
        </>
    )
}

export default Navbar
