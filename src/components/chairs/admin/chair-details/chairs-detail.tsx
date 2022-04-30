import React, { useState } from "react";
import { Box, Button, createStyles, makeStyles } from "@material-ui/core";
import { ChairCreateModal } from "../chair-create/chair-create-modal";
import { ChairResultView } from "./chair-result-view";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      "@media(max-width:600px)": {
        padding: "10px",
      },
    },
    createButton: {
      margin: "20px 0",
      "@media(max-width:600px)": {
        margin: "10px",
        textAlign: "center",
      },
    },
  })
);

export const ChairsDetails = () => {
  const [isOpen, setIsOpen] = useState(false);
  const classes = useStyles();

  return (
    <>
      <Button
        variant="outlined"
        className={classes.createButton}
        onClick={() => setIsOpen(true)}
      >
        Create Chair
      </Button>
      <Box className={classes.root}>
        <ChairResultView />
      </Box>
      <ChairCreateModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};
