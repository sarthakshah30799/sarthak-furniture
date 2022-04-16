import React, { useState } from "react";
import { Button } from "@material-ui/core";
import { ChairCreateModal } from "../chair-create/chair-create-modal";

export const ChairsDetails = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Button variant="outlined" onClick={() => setIsOpen(true)}>
        Create Chair
      </Button>
      <ChairCreateModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};
