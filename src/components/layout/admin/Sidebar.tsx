import React from "react";
import { List, ListItem, ListItemText } from "@material-ui/core";
import { Link } from "react-router-dom";

const sidebarMenu = ["chair", "table", "sofa-set"];

export const AdminSideBar = () => {
  return (
    <List style={{ border: "1px solid grey", height: "100%" }}>
      {sidebarMenu.map((menu, index) => (
        <Link
          key={`admin-sidebar-menu-${index}`}
          href={`/admin/${menu}`}
          to={`/admin/${menu}`}
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
    </List>
  );
};
