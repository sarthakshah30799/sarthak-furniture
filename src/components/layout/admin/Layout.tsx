import { Grid } from "@material-ui/core";
import React from "react";
import { AdminSideBar } from "./Sidebar";

export const AdminLayout = ({ children }) => {
  return (
    <Grid style={{ maxWidth: "100%", margin: "auto" }} container spacing={3}>
      <Grid item sm={3}>
        <AdminSideBar />
      </Grid>
      <Grid style={{ textAlign: "start" }} item xs={12} sm={8}>
        {children}
      </Grid>
    </Grid>
  );
};
