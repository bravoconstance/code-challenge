import { useContext } from "react";
import styled, { ThemeContext, useTheme } from "styled-components";

const Button = styled.button`
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.textColor};
`;

const ThemedButton = () => {
  // const theme = useContext(ThemeContext);
  const theme = useTheme();

  return <Button>Transfer</Button>;
};

export default ThemedButton;
