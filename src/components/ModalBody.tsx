import styled from "styled-components";
import { useContext } from "react";
import { ThemeContext } from "styled-components";
import AddressInput from "./AddressInput";

import FromSVG from "@/assets/input-affix1.svg";
import ToSVG from "@/assets/input-affix2.svg";
import EditSVG from "@/assets/edit.svg";
import AmountSelect from "./AmountSelect";

const ModadBodyWrapper = styled.div`
  margin-top: 16px;
`;

const FormItemInline = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  span {
    position: absolute;
    top: 66%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: ${(props) => props.theme.textColor};
  }
`;

interface IModalBody {}
const ModalTitle: React.FC<IModalBody> = () => {
  const themeContext = useContext(ThemeContext);

  return (
    <ModadBodyWrapper>
      <form>
        <FormItemInline>
          <AddressInput
            label="From Cosmos Hub"
            startAdornment={<FromSVG />}
            placeholder="atom1xy5y...m6wwz9a"
          />
          <span>{"->"}</span>
          <AddressInput
            label="To Osmosis"
            startAdornment={<ToSVG />}
            endAdornment={<EditSVG />}
            placeholder="asmo1xy5y...w9a"
          />
        </FormItemInline>
        <FormItemInline>
          <AmountSelect></AmountSelect>
        </FormItemInline>
      </form>
    </ModadBodyWrapper>
  );
};

export default ModalTitle;
