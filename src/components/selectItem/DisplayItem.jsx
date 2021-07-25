import { AppBar, Grid, Box, Typography } from '@material-ui/core'
import React from 'react'
import { header } from '../../data'
import { useStyles } from './DisplayItemStyle'

export default function DisplayItem({ data }) {
    const classes = useStyles()
    console.log("components", data)
    // data.data.map((data) => {
    // console.log("data.chair_img.data", data.chair_img.data.toString('base64'))
    // const data_img = data.chair_img.data.toString('base64')
    // console.log("data", data.chair_img.data.toString('base64'))
    // const reader = new FileReader();
    // reader.readAsDataURL(data.chair_img.data);
    // reader.onloadend = function () {
    //     const base64data = reader.result
    //     console.log("baser64data", base64data)
    // }
    // const buffer = new ArrayBuffer(data.chair_img.data)
    // const image = buffer.toString('base64')
    // console.log("image url", image)
    // })
    return (
        <>
            <AppBar className={classes.appBar}>
                <Grid container spacing={5} justify="space-between" alignItems='center'>
                    <Grid item>
                        <Typography variant="h2" >{header.name}</Typography>
                    </Grid>
                    <Grid item>
                        <Box display="flex" flexDirection="row">
                            {header.links.map((link, index) => (
                                <Typography className={classes.linkStyle} variant="h6" >
                                    {link.title}
                                </Typography>
                            ))}
                        </Box>
                    </Grid>
                </Grid>
            </AppBar>
            <Grid container justify="space-between">
                <Grid item xs={12} md={4} className={classes.imgContent}>
                    <img src="./assets/chair-section/chair-image-1.jpeg" alt="chair-image" className={classes.imgStyle} />
                </Grid>
                <Grid item md={8}>
                    Name: Brio Net Chair
                </Grid>
                {data.data.map((data, index) => {
                    { console.log("single chair", data) }
                    const data_img = data.chair_img.data.toString('base64')
                    return <img src={data_img} alt="image" />
                })}
            </Grid>
        </>
    )
}