import { createMuiTheme } from "@material-ui/core";

export const theme = createMuiTheme({
    typography: {
        // fontFamily: [
        //     "Roboto Mono", "Montserrat"
        // ],
        h1: {
            fontSize: '55px',
            fontWeight: '700',
        },
        h2: {

            fontSize: '30px',
            fontWeight: '600',
        },
        h4: {

            fontSize: '25px',
            fontWeight: '700',
        },
        h5: {

            fontSize: '20px',
            fontWeight: 'normal'
        },
        h6: {
            fontSize: '15px',
            fontWeight: '600',
        }
    }
})