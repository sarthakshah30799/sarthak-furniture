import { Grid } from "@material-ui/core";
import React from "react";
import { AdminSideBar } from "./Sidebar";

export const AdminLayout = ({ children }) => {
  return (
    <Grid container spacing={0}>
      <Grid item xs={4}>
        <AdminSideBar />
      </Grid>
      <Grid item xs={8}>
        {children}
      </Grid>
    </Grid>
  );
};
