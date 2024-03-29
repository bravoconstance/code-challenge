import { useContext } from "react";
import styled, { ThemeContext, useTheme } from "styled-components";

interface IButton {
  onClick?: () => void;
}

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
  cursor: pointer;
`;

const TransferButton: React.FC<IButton> = ({ onClick }) => {
  const theme = useContext(ThemeContext);

  return <ButtonBg>Transfer</ButtonBg>;
};

export default TransferButton;
