import { Fragment, useContext } from "react";
import styled, { ThemeContext, useTheme } from "styled-components";
import CloseSVG from "@/assets/close.svg";

interface IInput {
  label?: React.ReactNode;
  placeholder?: string;
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
}

const Label = styled.p`
  font-size: 12px;
  color: #8a8a8a;
  margin-bottom: 10px;
`;

const Input = styled.input`
  width: 160px;
  height: 40px;
  border: none;
  outline: none;
  color: ${(props) => props.theme.input.textColor};
  background: ${(props) => props.theme.input.bgColor};
  border-radius: 0 10px 10px 0;
  padding: 2px 4px;
`;

const SVGWrapper = styled.div`
  width: 40px;
  height: 40px;
  position: relative;
  background: ${(props) => props.theme.input.bgColor};
  border-radius: 10px 0 0 10px;
  svg {
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    left: 50%;
  }
`;

const EditSVGWrapper = styled.div`
  height: 16px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 3%;
  cursor: pointer;
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

const AddressInput: React.FC<IInput> = ({
  label,
  placeholder,
  startAdornment,
  endAdornment,
}) => {
  const theme = useContext(ThemeContext);

  return (
    <div>
      <Label>{label}</Label>
      <InputWrapper>
        <SVGWrapper>{startAdornment}</SVGWrapper>
        <Input type="text" placeholder={placeholder} />
        <EditSVGWrapper>{endAdornment}</EditSVGWrapper>
      </InputWrapper>
    </div>
  );
};

export default AddressInput;
