import { useContext } from "react";
import styled, { ThemeContext, useTheme } from "styled-components";
import CloseSVG from "@/assets/close.svg";

const ButtonBg = styled.div`
  width: 30px;
  height: 30px;
  background: ${(props) => props.theme.closeButtonBg};
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const CLoseButton = () => {
  const theme = useContext(ThemeContext);

  return (
    <ButtonBg>
      <CloseSVG color={theme?.closeButton} />
    </ButtonBg>
  );
};

export default CLoseButton;
