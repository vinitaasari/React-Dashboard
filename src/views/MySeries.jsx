import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React, { useState } from 'react';
import ProgressBar from 'react-customizable-progressbar';
const useStyles = makeStyles({
    root: {
        maxWidth: 140,
        maxHeight: 320,
        background: "#ffffff",
    },
    root1: {
        maxWidth: 140,
        maxHeight: 320,
        background: "#ffffff",
        marginLeft: 40
    },
    des: {
        display: 'flex',
        height: 300,
        width: 600,
        background: '#ffaf1a',
        borderRadius: 12,
        marginLeft: 2
    },
    paper: {
        padding: 2,
        textAlign: 'center',
        color: 'white',
    },
    episode: {
        height: 170,
        width: 200,
        borderRadius: 12
    },
    cover: {
        marginTop: 10,
        // marginRight: 5,
        width: 200,
        marginBottom: 10,
        borderRadius: 10
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
        width: 380
    },
    content: {
        flex: '1 0 auto',
        alignContent: 'left'
    },
});

export default function ImgMediaCard() {
    const classes = useStyles();
    const [des, setdes] = useState([false, false, false]);
    const [episode, setepisode] = useState(false);
    const names = ['Games of Throne', 'Stranger Things', 'Dead Life Again'];
    const episodes = [0, 1, 2, 3, 4]
    function handleClick(index) {
        if (des[index] == false) {
            var a = [...des];
            a[index] = true;
            for (var i = 0; i < des.length; i++) {
                if (i != index) {
                    a[i] = false;
                }
            }
            setdes(a);
            setepisode(true);
        }
        else {
             a = [...des];
            a[index] = false;
            setdes(a);
            setepisode(false);
        }
    }

    return (
        <div>
            <div style={{ display: 'flex' }}>
                {
                    names.map((name, index) => (
                        <div style={{ marginLeft: 20 }} key={index} onClick={() => handleClick(index)}>
                            {!des[index] && (
                                <Card className={classes.root} >
                                    <CardActionArea>
                                        <Box bgcolor='blue' borderRadius={16} image="https://upload.wikimedia.org/wikipedia/en/d/d8/Game_of_Thrones_title_card.jpg" marginTop={1} marginLeft={1} marginRight={1} height={200} >
                                            <CardMedia
                                                component="img"
                                                borderRadius={16}
                                                height={200}
                                                width={350}
                                                alt="Contemplative Reptile"
                                                image="https://upload.wikimedia.org/wikipedia/en/d/d8/Game_of_Thrones_title_card.jpg"
                                                title="Contemplative Reptile"
                                            />
                                        </Box>
                                        <CardContent>
                                            <Typography gutterBottom align="left" variant="subtitle" component="h3">
                                                {name}
                                            </Typography>
                                            <Typography marginTop={2} variant="title" align="left" color="textSecondary" component="h6">
                                                IMDB Rating 8.7/10
                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            )}
                            {des[index] && (
                                <div >
                                    <Card className={classes.des}>
                                        <div className={classes.details}>
                                            <CardContent className={classes.content}>
                                                <h1 style={{ color: 'white' }}><strong>{name}</strong></h1>
                                                <h3 style={{ color: 'white' }}>8 Seasons</h3>
                                                <h3 style={{ color: 'white' }}>73 Episodes</h3>
                                            </CardContent>
                                            <div className={classes.controls}>
                                                <h3 style={{ color: 'white' }}>Imdb Rating : 8.9/10</h3>
                                            </div>
                                        </div>
                                        <CardMedia
                                            className={classes.cover}
                                            image="https://upload.wikimedia.org/wikipedia/en/d/d8/Game_of_Thrones_title_card.jpg"
                                            title="Live from space album cover"
                                        />
                                    </Card>
                                </div>
                            )
                            }
                        </div>
                    ))
                }

            </div>

            {
                episode && (
                    <div style={{ flexGrow: 1 }}>
                        <Grid container spacing={1}>
                            {
                                episodes.map((n) => (
                                    <Grid item xs={4} sm={2}>
                                        <div style={{ marginTop: 50, marginLeft: 18 }}>
                                            <Card boxShadow={5} className={classes.episode}>
                                                <Box display="flex" flexDirection="row" marginTop={1}>
                                                    <Box marginLeft={1}>
                                                        Season 1
                        </Box>
                                                    <Box width={50} borderRadius={6} marginLeft={10} bgcolor='#00008b' >
                                                        <span style={{ color: 'white' }}><strong>IMDb</strong></span>
                                                    </Box>
                                                </Box>
                                                <CardContent align='left'>
                                                    Rating:
                                     <br></br>
                                                    <div align='center'>
                                                        <ProgressBar
                                                            progress={70}
                                                            radius={35}
                                                            strokeWidth={8}
                                                            trackStrokeWidth={4}
                                                            strokeColor='#ffaf1a'
                                                        >
                                                            <h1 style={{ color: 'red' }}>hi</h1>
                                                        </ProgressBar>
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        </div>
                                    </Grid>
                                )
                                )
                            }
                        </Grid>
                    </div>
                )
            }

        </div>
    );
}
