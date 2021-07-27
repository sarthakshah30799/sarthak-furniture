import { createStyles, makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            maxWidth: '1100px',
            paddingTop: '100px',
            margin: 'auto',
        },
        img: {
            maxHeight: '350px',
            borderRadius: '10px',
            boxShadow: `0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)`,
        },
        prodInfo: {
            paddingTop: "20px",
            paddingBottom: '10px',
            paddingInline: "30px",
            display: "flex",
            flexDirection: 'column',
            textAlign: 'center',
        },
        title: {
            fontWeight: 'bold',
            padding: '3px 0'
        },
        viewAllButton: {
            textTransform: "capitalize",
            borderRadius: '20px',
            background: '#D3D3D3',
            fontSize: '12px',
            fontWeight: "700",
            paddingInline: '20px'
        }
    }))