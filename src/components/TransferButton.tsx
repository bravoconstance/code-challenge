import { useContext } from "react";
import styled, { ThemeContext, useTheme } from "styled-components";
import CloseSVG from "@/assets/close.svg";

const ButtonBg = styled.button`
  width: 100%;
  height: 50px;
  color: ${(props) => props.theme.transfer.textColor};
  background: ${(props) => props.theme.transfer.bgColor};
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  border: none;
  font-size: 16px;
  font-weight: 600;
`;

const TransferButton = () => {
  const theme = useContext(ThemeContext);

  return <ButtonBg>Transfer</ButtonBg>;
};

export default TransferButton;
