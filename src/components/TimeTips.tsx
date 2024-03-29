import { Fragment, useContext } from "react";
import styled, { ThemeContext, useTheme } from "styled-components";
import ClockSVG from "@/assets/clock.svg";

interface ITip {}

const TipWrapper = styled.div`
  width: 100%;
  height: 32px;
  border-radius: 6px;
  margin-top: 50px;
  margin-bottom: 20px;
  padding: 4px 10px;
  background: ${(props) => props.theme.tip.bgColor};
  display: flex;
  align-items: center;
  gap: 6px;
  svg {
    color: ${(props) => props.theme.tip.textColor};
  }
`;
const Tip = styled.p`
  font-size: 12px;
  color: ${(props) => props.theme.tip.textColor};
`;

const TimeTip: React.FC<ITip> = () => {
  const theme = useContext(ThemeContext);

  return (
    <TipWrapper>
      <ClockSVG />
      <Tip>Estimated time: 20 seconds</Tip>
    </TipWrapper>
  );
};

export default TimeTip;
