"use client";

import Modal from "@/components/Modal";
import ModalTitle from "@/components/ModalTitle";
import styled from "styled-components";
import ThemeProvider from "./provider";
import EnterAddress from "@/components/AddressInput";
import ModalBody from "@/components/ModalBody";
import CancelButton from "@/components/CancelButton";

const MainWrap = styled.div`
  background: #b7b7b7;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export default function Home() {
  return (
    <ThemeProvider>
      <MainWrap>
        <Modal>
          <ModalTitle title="Deposit ATOM" />
          <ModalBody />
          <CancelButton />
        </Modal>
      </MainWrap>
    </ThemeProvider>
  );
}
