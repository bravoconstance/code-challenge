import { Fragment, useContext } from "react";
import styled, { ThemeContext, useTheme } from "styled-components";
import CoinSVG from "@/assets/cosmos-icon30.svg";

interface ISelect {}

const LabelWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Label = styled.div`
  font-size: 12px;
  color: #8a8a8a;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  span {
    font-weight: bold;
  }
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const SVGWrapper = styled.div`
  width: 48px;
  height: 48px;
  position: relative;
  background: transparetn;
  border-radius: 8px 0 0 8px;
  border: 1px solid #8a8a8a;
  svg {
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    left: 50%;
  }
`;

const Input = styled.input`
  width: calc(100% - 168px);
  height: 48px;
  color: ${(props) => props.theme.input.textColor};
  border: 1px solid #8a8a8a;
  border-left: none;
  border-right: none;
  outline: none;
  background: transparent;
  padding: 2px 4px;
`;

const EndAdornment = styled.div`
  width: 120px;
  height: 48px;
  border-radius: 0 8px 8px 0;
  border: 1px solid #8a8a8a;
  border-left: none;
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${(props) => props.theme.input.textColor};
  p {
    color: #8a8a8a;
  }
`;

const AmountSelect: React.FC<ISelect> = ({}) => {
  const theme = useContext(ThemeContext);

  return (
    <div>
      <LabelWrapper>
        <Label>
          <h4>Select amount</h4>
        </Label>
        <Label>
          <p>
            Avaliable
            <span> 2 ATOM</span>
          </p>
        </Label>
      </LabelWrapper>

      <InputWrapper>
        <SVGWrapper>
          <CoinSVG />
        </SVGWrapper>
        <Input type="text" placeholder={"Input your ATOM amount here."} />
        <EndAdornment>
          <h5>ATOM</h5>
          <p>≈ $1013</p>
        </EndAdornment>
      </InputWrapper>
    </div>
  );
};

export default AmountSelect;
