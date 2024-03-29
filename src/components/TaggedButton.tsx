import { useContext } from "react";
import styled, { ThemeContext, useTheme } from "styled-components";

const ButtonBg = styled.li`
  width: 30px;
  height: 20px;
  background: ${(props) => props.theme.input.bgColor};
  color: #8a8a8a;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 12px;
`;

interface IButton {
  content: React.ReactNode;
  onClick: () => void;
}

const TaggedButton: React.FC<IButton> = ({ content, onClick }) => {
  const theme = useContext(ThemeContext);

  return <ButtonBg>{content}</ButtonBg>;
};

export default TaggedButton;
