import React, { useState } from "react";
import {
  AppBar,
  Box,
  createStyles,
  Drawer,
  Link,
  List,
  ListItem,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { header } from "../../data";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      background: 'url("./assets/header/background-image.jpg")',
      padding: "30px",
      borderRadius: "0px 0px 50px 50px",
      position: "relative",
      boxShadow: "0px 10px 10px rgb(0,0,0,0.7)",
      backgroundRepeat: "no-repeat",
      backgroundSize: "100% 100%",
      color: "black",
      marginBottom: "80px",
      "@media (max-width:900px)": {
        padding: "20px",
        marginBottom: "50px",
      },
      "@media (max-width:600px)": {
        marginBottom: "50px",
      },
    },
    gstNo: {
      position: "absolute",
      fontWeight: 600,
      top: "0",
      right: "10px",
      "@media (max-width:900px)": {
        display: "none",
      },
    },
    header: {
      "@media (min-width:900px)": {
        justifyContent: "center",
      },
    },
    title: {
      fontSize: "6rem",
      fontWeight: 700,
      padding: "30px 0",
      "@media (max-width:1100px)": {
        fontSize: "4rem",
        padding: "20px 0",
      },
      "@media (max-width:900px)": {
        padding: "0",
        fontSize: "3rem",
      },
      "@media (max-width:600px)": {
        fontSize: "1.5rem",
      },
      "@media (max-width:350px)": {
        fontSize: "1rem",
      },
    },
    headerLink: {
      color: "black",
      padding: "10px 30px",
      fontSize: "20px",
      fontWeight: 500,
      transition: "transform .2s",
      display: "inline-block",
      "&:hover": {
        transform: "scale(1.5)",
        textDecoration: "none",
      },
      "@media (max-width:1100px)": {
        fontSize: "18px",
      },
      "@media (max-width:900px)": {
        fontSize: "15px",
        padding: "8px 20px",
      },
    },
    hamburger: {
      padding: "8px 20px",
      display: "flex",
      cursor: "pointer",
      "@media (max-width:600px)": {
        padding: "0",
      },
      "@media (min-width:900px)": {
        display: "none",
      },
    },
    hamburgerIcon: {
      fontSize: "2.4rem",
      "@media (max-width:600px)": {
        fontSize: "2rem",
      },
      "@media (max-width:350px)": {
        fontSize: "1.5rem",
      },
    },
    menuItem: {
      "@media (max-width:900px)": {
        display: "none",
      },
    },
    displayNone: {
      display: "none",
    },
    mobileHeaderLink: {
      padding: "10px",
      color: "black",
      fontSize: "20px",
      fontWeight: 500,
      transition: "transform .2s",
      "&:hover": {
        transform: "scale(1.5)",
        textDecoration: "none",
      },
    },
    drawer: {
      width: "50%",
      backgroundColor: "#D3D3D3",
    },
  })
);
export default function Header() {
  const classes = useStyles();
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <>
      <div>
        <AppBar className={classes.root}>
          <Typography variant="h5" className={classes.gstNo}>
            GST No : {header.gstNo}
          </Typography>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            className={classes.header}
          >
            <Typography variant="h1" className={classes.title}>
              {header.name}
            </Typography>
            <div
              className={classes.hamburger}
              onClick={() => setOpenDrawer(!openDrawer)}
            >
              <MenuIcon
                className={
                  openDrawer ? classes.displayNone : classes.hamburgerIcon
                }
              />
            </div>
          </Box>
          <Box className={classes.menuItem}>
            {header.links.map((link, index) => (
              <Link
                key={`header-menu-id-${index}`}
                href={link.link}
                className={classes.headerLink}
              >
                {link.title}
              </Link>
            ))}
          </Box>
        </AppBar>
      </div>
      <Drawer
        anchor="left"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        classes={{
          paper: classes.drawer,
        }}
      >
        <List>
          {header.links.map((link, index) => (
            <Link
              key={`mobile-header-menu-id-${index}`}
              href={link.link.toLowerCase()}
              className={classes.mobileHeaderLink}
              onClick={() => setOpenDrawer(false)}
            >
              <ListItem>{link.title}</ListItem>
            </Link>
          ))}
        </List>
      </Drawer>
    </>
  );
}
