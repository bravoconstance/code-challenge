import { useContext } from "react";
import styled, { ThemeContext } from "styled-components";

interface IButton {
  onClick?: () => void;
}

const ButtonBg = styled.button`
  width: 100%;
  height: 50px;
  color: ${(props) => props.theme.textColor};
  background: transparent;
  margin-top: 5px;
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

const CancelButton: React.FC<IButton> = ({ onClick }) => {
  const theme = useContext(ThemeContext);

  return <ButtonBg>Cancel</ButtonBg>;
};

export default CancelButton;
