import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import React, { useState } from 'react';
import MySeries from '../views/MySeries';
import Popular from '../views/Popular';


export default function Tv() {
    const [one, setone] = useState('#ffaf1a');
    const [two, settwo] = useState('#ffffff');

    function handleOne() {
        setone('#ffaf1a')
        settwo('#ffffff')
    }
    function handletwo() {
        setone('#ffffff')
        settwo('#ffaf1a')
    }

    return (
        <div>
            <Box display="flex" flexDirection="row">
                <Box borderRadius={3} height={25} onClick={handleOne} marginRight={1} width={120} marginLeft={2} bgcolor={one}>
                    <Typography align='center' variant="title">
                        My Series
                            </Typography>
                </Box>
                <Box borderRadius={3} height={25} onClick={handletwo} marginRight={5} width={120} marginLeft={2} bgcolor={two}>
                    <Typography align='center' variant="title">
                        Popular
                            </Typography>
                </Box>
            </Box>
            { one == "#ffaf1a" && (
                <div style={{ marginTop: 25, marginLeft: 0 }} >
                    <MySeries />
                </div>
            )
            }
            { two == '#ffaf1a' && (
                <Popular />
            )
            }
        </div>

    )

}