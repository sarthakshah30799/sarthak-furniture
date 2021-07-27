import { Box, Grid, makeStyles, Typography } from '@material-ui/core';
import { createStyles } from '@material-ui/styles';
import React from 'react'
import CallIcon from '@material-ui/icons/Call';
import MailIcon from '@material-ui/icons/Mail';
import InstagramIcon from '@material-ui/icons/Instagram';
import { footer } from '../../data';

const useStyles = makeStyles(() =>
    createStyles({
        footer: {
            borderTop: '3px solid black',
            marginTop: '30px',
            backgroundColor: 'lightgrey'
        },
        footerContent: {
            paddingTop: '20px',
            maxWidth: '1100px',
            margin: '0 auto'
        },
        aboutUsContent: {
            textAlign: 'left'
        }
    }))
export default function Footer() {
    const classes = useStyles();
    return (
        <>
            <div className={classes.footer} id="about">
                <Grid container className={classes.footerContent} direction="row" justify="space-between">
                    <Grid item className={classes.aboutUsContent}>
                        <Typography variant="h2">{footer.title}</Typography>
                        <Box textAlign="left" paddingTop="20px">
                            <Typography variant="h5">
                                {footer.add1}
                            </Typography>
                            <Typography variant="h5">
                                {footer.add2}

                            </Typography>
                            <Typography variant="h5">
                                {footer.city}, {footer.state} - {footer.pincode}
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item>
                        <Typography variant="h5">Contact Us</Typography>
                        <Box paddingTop="20px" display="flex" justifyContent="space-between">
                            <CallIcon />
                            <MailIcon />
                            <InstagramIcon />
                        </Box>
                    </Grid>
                </Grid>
            </div>
        </>
    )
}