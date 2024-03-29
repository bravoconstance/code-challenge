import styled from "styled-components";
import { Fragment, useContext } from "react";
import { ThemeContext } from "styled-components";
import AddressInput from "./AddressInput";

import FromSVG from "@/assets/input-affix1.svg";
import ToSVG from "@/assets/input-affix2.svg";
import EditSVG from "@/assets/edit.svg";
import AmountSelect from "./AmountSelect";
import TaggedButton from "./TaggedButton";
import TimeTip from "./TimeTips";
import TransferButton from "./TransferButton";

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

const FormItem = styled.div`
  margin-top: 20px;
  width: 100%;
`;

const ButtonList = styled.ul`
  display: flex;
  gap: 5px;
  float: right;
  margin-top: 5px;
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
        <FormItem>
          <AmountSelect />
        </FormItem>
        <ButtonList>
          <TaggedButton content={"Max"} onClick={() => {}}></TaggedButton>
          <TaggedButton content={"1/2"} onClick={() => {}}></TaggedButton>
          <TaggedButton content={"1/3"} onClick={() => {}}></TaggedButton>
        </ButtonList>
        <TimeTip />
        <TransferButton />
      </form>
    </ModadBodyWrapper>
  );
};

export default ModalTitle;
