import styled from "styled-components";
import { useSnapshot } from "valtio";
import * as GlobalStore from "@/stores/GlobalStore";

const ModalWrap = styled.div`
  padding: 10px 20px;
  box-sizing: border-box;
  width: 480px;
  height: 600px;
  border-radius: 10px;
  box-shadow: 0px 0px 18px 4px rgba(0, 0, 0, 0.3);
  background-color: ${(props) => props.theme.backgroundColor};
`;

interface IModal {
  children: React.ReactNode;
}
const Modal: React.FC<IModal> = ({ children }) => {
  return <ModalWrap>{children}</ModalWrap>;
};

export default Modal;
