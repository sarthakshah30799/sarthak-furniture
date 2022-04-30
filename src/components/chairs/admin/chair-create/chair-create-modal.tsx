import React from "react";
import { ChairCreateApollo } from "./chair-create-apollo";
import { ModalWrapper } from "../../../modal";

export const ChairCreateModal = ({ isOpen, setIsOpen }) => {
  return (
    <ModalWrapper isOpen={isOpen} setIsOpen={setIsOpen}>
      <ChairCreateApollo setIsOpen={setIsOpen} />
    </ModalWrapper>
  );
};
