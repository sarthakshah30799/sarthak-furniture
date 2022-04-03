import React from "react";
import { Box, Modal } from "@material-ui/core";

export const ModalWrapper = ({ isOpen, setIsOpen, children }) => {
  return (
    <Modal open={isOpen} onClose={() => setIsOpen(false)}>
      <Box
        maxWidth={"500px"}
        height={"500px"}
        overflow="scroll"
        margin={"20px auto"}
        padding={"20px"}
        style={{ background: "#ffffff" }}
      >
        {children}
      </Box>
    </Modal>
  );
};
