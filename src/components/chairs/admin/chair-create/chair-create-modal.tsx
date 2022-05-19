import React, { useEffect } from "react";
import { ChairCreateApollo } from "./chair-create-apollo";
import { ModalWrapper } from "../../../modal";
import { useLocation } from "react-router-dom";
import { useInstagramMedia } from "../../../../instagram/hooks";

export const ChairCreateModal = ({ isOpen, setIsOpen }) => {
  const { search } = useLocation();
  const queryParams = React.useMemo(() => new URLSearchParams(search), [
    search,
  ]);
  const code = queryParams.get("code");
  const { media, loading: mediaLoading } = useInstagramMedia(code || "");
  useEffect(() => {
    if (!!code) {
      setIsOpen(true);
    }
  }, []);

  console.log("media ", media);
  return (
    <ModalWrapper isOpen={isOpen} setIsOpen={setIsOpen}>
      <ChairCreateApollo setIsOpen={setIsOpen} mediaLoading={mediaLoading} />
    </ModalWrapper>
  );
};
