import React, { useState } from "react";
import { Box, Button } from "@material-ui/core";
import { ChairCreateModal } from "../chair-create/chair-create-modal";
import { ChairResultView } from "./chair-result-view";

export const ChairsDetails = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Button variant="outlined" onClick={() => setIsOpen(true)}>
        Create Chair
      </Button>
      <Box padding="20px">
        <ChairResultView />
      </Box>
      <ChairCreateModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};
