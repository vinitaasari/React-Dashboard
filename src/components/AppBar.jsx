import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import HomeIcon from '@material-ui/icons/Home';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import TheatersIcon from '@material-ui/icons/Theaters';
import React, { useState } from 'react';
import Clock from 'react-live-clock';
import Home from '../views/Home';
import Tv from '../views/Tv';
import Video from '../views/Video';
const drawerWidth = 80;


const useStyles = makeStyles((theme) => ({
    root1: {
        flexGrow: 1,
        color: 'black',
        font: ' 18px/30px Courier, serif',
        marginBottom: 8
    },
    root: {
        display: 'flex',
        flexGrow: 1
    },
    appBar: {
        width: `calc(100% - ${170}px)`,
        marginLeft: 120,
        marginRight: 50,
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        background: "#202020",
        width: drawerWidth,
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
    },
}));

function AppBarr() {
    const classes = useStyles();
    const [home, sethome] = useState('#ffaf1a');
    const [tv, settv] = useState('#696969');
    const [video, setvideo] = useState('#696969');
    const [page, setpage] = useState('Home');


    function handleHome() {
        sethome('#ffaf1a')
        settv('#696969')
        setvideo('#696969')
        setpage('Home')
    }
    function handleTv() {
        settv('#ffaf1a')
        sethome('#696969')
        setvideo('#696969')
        setpage('TV')
    }
    function handleVideo() {
        sethome('#696969')
        settv('#696969')
        setvideo('#ffaf1a')
        setpage('Video')
    }
    return (
        <div className={classes.root}>
            <CssBaseline />
            <div>
                <AppBar position="fixed" className={classes.appBar} style={{ background: 'transparent', boxShadow: 'none' }}>
                    <Toolbar>
                        <Typography variant='h4' noWrap style={{ color: 'black' }}>
                            Watch<b>This</b>
                        </Typography>

                        <div className={classes.root1}
                        >
                            {/* <AccessTimeIcon fontSize='medium'></AccessTimeIcon> */}
                            <Clock
                                format={'Mo MMMM, h:mm'}
                                ticking={true}
                            />
                        </div>
                        <PersonOutlineOutlinedIcon fontsize='large' style={{ color: 'black' }}></PersonOutlineOutlinedIcon>
                        <Typography

                            style={{ borderRight: '0.1em solid black', padding: '0.2em', height: 22, marginRight: 6 }}
                        >

                        </Typography>
                        <SearchOutlinedIcon fontsize='large' style={{ color: 'black' }}></SearchOutlinedIcon>
                    </Toolbar>

                    <Divider></Divider>
                </AppBar>
            </div>
            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}
                anchor="left"
            >
                <div className={classes.toolbar} />
                {/* <Divider /> */}
                <List alignItems >
                    <ListItem button onClick={handleHome}>
                        <ListItemIcon>

                            <HomeIcon style={{ color: home }} fontSize="large" />

                        </ListItemIcon>

                    </ListItem>

                    <ListItem button onClick={handleTv}>
                        <ListItemIcon>
                            <OndemandVideoIcon style={{ color: tv }} fontSize="large" />
                        </ListItemIcon>
                    </ListItem>

                    <ListItem button onClick={handleVideo}>
                        <ListItemIcon>
                            <TheatersIcon style={{ color: video }} fontSize="large" />
                        </ListItemIcon>
                    </ListItem>
                </List>
                {/* <Divider /> */}
            </Drawer>
            <main className={classes.content}>
                <div className={classes.toolbar} />
                {page == "Home" && (
                    <Home></Home>
                )}
                {page == "TV" && (
                    <Tv></Tv>
                )}
                {page == "Video" && (
                    <Video></Video>
                )}

            </main>
        </div>
    );
}
export default AppBarr