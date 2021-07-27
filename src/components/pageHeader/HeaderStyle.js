import { createStyles, makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) =>
    createStyles({
        appBar: {
            color: theme.palette.common.black,
            background: 'url("./assets/header/background-image.jpg")',
            borderRadius: '50px',
            position: 'relative',
            boxShadow: '0px 10px 10px rgb(0,0,0,0.7)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100% 100%',
            margin: '10px auto',
            padding: '15px 30px',
        },
        linkStyle: {
            padding: '0 15px'
        },
        imgContent: {
            background: 'lightgrey',
            // padding: '20px'
        },
        imgStyle: {
            height: '350px',
        }
    }))