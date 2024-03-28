"use client";

import Modal from "@/components/Modal";
import ModalTitle from "@/components/ModalTitle";
import Button from "@/components/Button";
import styled from "styled-components";
import ThemeProvider from "./provider";

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
          <Button></Button>
        </Modal>
      </MainWrap>
    </ThemeProvider>
  );
}
