import { Card, CardContent, CardMedia } from '@mui/material'
import React from 'react'
const Cardbr = (props) => {
    return (
        <>
            <Card sx={{ padding: '2vh', background: '#FFE79B', margin: '2vh', height: '40vh', width: '17vw' }}>
                <CardMedia
                    component="img"
                    alt='no Image'
                    height='75%'
                    image={props.URL} />
                <CardContent>
                    {props.content}
                </CardContent>
            </Card>

        </>
    )
}

export default Cardbr