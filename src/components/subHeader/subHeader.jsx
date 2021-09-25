import React, { useState } from "react";
import {
  AppBar,
  Grid,
  Box,
  Typography,
  Drawer,
  List,
  ListItem,
} from "@material-ui/core";
import { useStyles } from "./SubHeaderStyle";
import { header } from "../../data";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";

export default function SubHeader() {
  const classes = useStyles();
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <AppBar className={classes.appBar}>
      <Grid container justify="space-between" alignItems="center">
        <Grid item className={classes.headerContent}>
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            <Typography variant="h2">{header.name}</Typography>
          </Link>
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
        </Grid>
        <Grid item className={classes.headerLinkContent}>
          <Box display="flex" flexDirection="row">
            {header.links.map((link, index) => (
              <Link
                to={`/${link.title}`}
                key={`page-header-${index}`}
                style={{ textDecoration: "none" }}
              >
                <Typography className={classes.linkStyle} variant="h6">
                  {link.title}
                </Typography>
              </Link>
            ))}
          </Box>
        </Grid>
      </Grid>
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
              to={`/${link.title}`}
              className={classes.mobileHeaderLink}
              onClick={() => setOpenDrawer(false)}
            >
              <ListItem>{link.title}</ListItem>
            </Link>
          ))}
        </List>
      </Drawer>
    </AppBar>
  );
}
