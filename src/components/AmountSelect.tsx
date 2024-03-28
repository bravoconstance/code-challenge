import { Fragment, useContext } from "react";
import styled, { ThemeContext, useTheme } from "styled-components";
import CloseSVG from "@/assets/close.svg";

interface ISelect {
  label?: React.ReactNode;
  placeholder?: string;
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
}

const AmountSelect: React.FC<ISelect> = ({
  label,
  placeholder,
  startAdornment,
  endAdornment,
}) => {
  const theme = useContext(ThemeContext);

  return <div></div>;
};

export default AmountSelect;
