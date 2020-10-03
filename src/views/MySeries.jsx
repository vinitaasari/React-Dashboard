import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React, { useState } from 'react';
import ProgressBar from 'react-customizable-progressbar'
const progress = 66;
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
        borderRadius: 12

    },
    episode: {
        height: 170,
        width: 200,
        borderRadius: 12
    },
    cover: {
        marginLeft: 130,
        marginTop: 10,
        marginRight: 5,
        width: 200,
        marginBottom: 10,
        borderRadius: 10
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
        alignContent:'left'
    },
});

export default function ImgMediaCard() {
    const classes = useStyles();
    const [one, setone] = useState(false);
    const [two, settwo] = useState(false);
    function handleOne() {
        setone(true);
        settwo(false);
    }
    function handletwo() {
        settwo(true);
        setone(false);
    }
    return (
        <div>
            <div style={{ display: 'flex' }}>
                {!one && (
                    <Card className={classes.root} onClick={handleOne}>
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
                                    Game of Thrones
                            </Typography>
                                <Typography marginTop={2}  variant="title" align="left" color="textSecondary" component="h6">
                                    IMDB Rating 8.7/10
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                )}
                {one && (
                    <div >
                        <Card className={classes.des}>
                            <div className={classes.details}>
                                <CardContent className={classes.content}>
                                <h1 style={{color:'white'}}><strong>Game of Thrones</strong></h1>
                                <h3 style={{color:'white'}}>8 Seasons</h3>
                                <h3 style={{color:'white'}}>73 Episodes</h3>
                                </CardContent>
                                <div className={classes.controls}>
                                <h3 style={{color:'white'}}>Imdb Rating : 8.9/10</h3>
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
                {!two && (
                    <Card className={classes.root1} onClick={handletwo}>
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
                                    Game of Thrones
                            </Typography>
                                <Typography marginTop={2}  variant="title" align="left" color="textSecondary" component="h6">
                                    IMDB Rating 8.7/10
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                )}
                {two && (
                    <div >
                        <Card className={classes.des}>
                            <div className={classes.details}>
                                <CardContent className={classes.content}>
                                  <h2 style={{color:'white'}}>Game of Thrones</h2>
                                    <Typography variant="subtitle1" color="textSecondary">
                                        Mac Miller
                                </Typography>
                                </CardContent>
                                <div className={classes.controls}>
                                    IMDB rating 9.6
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
            <div style={{ marginTop: 50 }}>
                <Card boxShadow={5} className={classes.episode}>
                    <Box display="flex" flexDirection="row" marginTop={1}>
                        <Box marginLeft={1}>
                            Season 1
                        </Box>
                        <Box width={50} borderRadius={6} marginLeft={10} bgcolor='#00008b' >
                        <span style={{color:'white'}}><strong>IMDb</strong></span>
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
                            <h1 style={{color:'red'}}>hi</h1>
                            </ProgressBar>   
                            </div>               
                                  </CardContent>
                </Card>
            </div>
        </div>
    );
}
