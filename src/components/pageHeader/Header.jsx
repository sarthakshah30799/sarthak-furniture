import React from 'react'
import { AppBar, Grid, Box, Typography } from '@material-ui/core'
import { useStyles } from './HeaderStyle'
import { header } from '../../data';

export default function Header() {
    const classes = useStyles();
    return (
        <>
            <AppBar className={classes.appBar}>
                <Grid container spacing={5} justify="space-between" alignItems='center'>
                    <Grid item>
                        <Typography variant="h3" >{header.name}</Typography>
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
        </>
    )

}