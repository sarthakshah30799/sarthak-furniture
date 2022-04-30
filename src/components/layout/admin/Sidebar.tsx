import React, { useMemo, useState } from "react";
import {
  ListItem,
  ListItemText,
  Drawer,
  makeStyles,
  createStyles,
  Box,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

import { Link } from "react-router-dom";

const sidebarMenuItem = ["chair", "table", "sofa-set"];

const useStyles = makeStyles(() =>
  createStyles({
    MenuIcon: {
      display: "none",
      "@media(max-width:600px)": {
        display: "block",
        position: "absolute",
        right: 20,
        top: 15,
      },
    },
    drawerWidth: {
      width: "50%",
    },
  })
);

const SideBarMenu = () => {
  return (
    <>
      {sidebarMenuItem.map((menu, index) => (
        <Link
          key={`admin-sidebar-menu-${index}`}
          href={`/admin/${menu}`}
          to={`/admin/${menu}`}
          style={{ color: "black", textDecoration: "unset" }}
        >
          <ListItem
            style={{
              borderBottom: "1px solid grey",
            }}
            button
          >
            <ListItemText primary={menu} />
          </ListItem>
        </Link>
      ))}
    </>
  );
};

export const AdminSideBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const isMobileView = useMemo(() => {
    return window.innerWidth < 600 ? true : false;
  }, []);

  const classes = useStyles();
  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Box onClick={() => toggleDrawer()}>
        {isMobileView && <MenuIcon className={classes.MenuIcon} />}
      </Box>
      {isMobileView ? (
        <Drawer
          classes={{
            paper: classes.drawerWidth,
          }}
          onClose={() => toggleDrawer()}
          open={isOpen}
        >
          <SideBarMenu />
        </Drawer>
      ) : (
        <Box
          position={"fixed"}
          width="100%"
          maxWidth="20%"
          height={"100%"}
          border={"1px solid black"}
        >
          <SideBarMenu />
        </Box>
      )}
    </>
  );
};
