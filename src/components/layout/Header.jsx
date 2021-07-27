import { AppBar, Box, createStyles, Link, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import { header } from '../../data';

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            background: 'url("./assets/header/background-image.jpg")',
            padding: '30px',
            borderRadius: '0px 0px 50px 50px',
            position: 'relative',
            boxShadow: '0px 10px 10px rgb(0,0,0,0.7)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100% 100%',
            color: 'black',
            marginBottom: '100px'
        },
        gstNo: {
            position: 'absolute',
            fontWeight: '600',
            top: '0',
            right: '10px',
        },
        title: {
            fontSize: '6rem',
            fontWeight: '700',
            padding: '30px 0'
        },
        headerLink: {
            color: 'black',
            padding: '10px 30px',
            fontSize: '20px',
            fontWeight: "500",
            transition: 'transform .2s',
            display: 'inline-block',
            "&:hover": {
                transform: 'scale(1.5)',
                textDecoration: 'none'
            },
        }
    }))
export default function Header() {
    const classes = useStyles();
    return (
        <>
            <div>
                <AppBar className={classes.root}>
                    <Typography variant="h5" className={classes.gstNo}>GST No : {header.gstNo}</Typography>
                    <Typography variant="h1" className={classes.title}>{header.name}</Typography>
                    <Box>
                        {header.links.map((link, index) => (
                            <Link key={`header-menu-id-${index}`} href={link.link} className={classes.headerLink}>
                                {link.title}
                            </Link>
                        ))}
                    </Box>
                </AppBar>
            </div>
        </>
    )
}