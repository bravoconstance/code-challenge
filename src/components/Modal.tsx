import styled from "styled-components";
import { useSnapshot } from "valtio";
import * as GlobalStore from "@/stores/GlobalStore";

const ModalWrap = styled.div`
  width: 480px;
  height: 600px;
  border-radius: 10px;
  box-shadow: 0px 0px 18px 4px rgba(0, 0, 0, 0.3);
  background-color: ${(props) => props.theme.backgroundColor};
`;

const SwitchButton = styled.button`
  width: 40px;
  height: 20px;
`;

interface IModal {
  children: React.ReactNode;
}
const Modal: React.FC<IModal> = ({ children }) => {
  const globalStore = useSnapshot(GlobalStore.store);

  return (
    <ModalWrap>
      {children}
      <SwitchButton onClick={GlobalStore.setTheme}>切换</SwitchButton>
    </ModalWrap>
  );
};

export default Modal;
