import { Grid, Typography, Button } from '@material-ui/core'
import React from 'react'
import { useStyles } from './HomePageStyle.js'
import Header from './pageHeader/Header.jsx'


export default function HomePage({ data }) {
    const classes = useStyles();

    return (
        <>
            <Grid>
                <Header />
                <Grid container spacing={5} className={classes.root}>
                    {data.map((data, index) => (
                        <Grid item lg={4} key={`chairs-image-${index}`} style={{ paddingBottom: '50px' }}>
                            <img src={data} alt={data} className={classes.img} />
                            <Grid className={classes.prodInfo}>
                                <Typography variant="h5" className={classes.title}>Name: <span style={{ fontWeight: '400' }} >Brio Net Chair</span></Typography>
                                <Typography variant="h5" className={classes.title}>Type: <span style={{ fontWeight: '400' }} >Brio Net Chair</span></Typography>
                            </Grid>
                            <Button className={classes.viewAllButton}>
                                View Full Detail
                            </Button>
                        </Grid>
                    ))}
                    
                </Grid>
            </Grid>
        </>
    )
}