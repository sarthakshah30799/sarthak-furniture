import React from "react";
import { ChairsDetails } from "../../components/chairs/admin/chair-details";
import { AdminLayout } from "../../components/layout/admin";

export default function Chair() {
  return (
    <>
      <AdminLayout>
        <ChairsDetails />
      </AdminLayout>
    </>
  );
}
