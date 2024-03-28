import { useContext } from "react";
import styled, { ThemeContext, useTheme } from "styled-components";
import * as GlobalStore from "@/stores/GlobalStore";
import { useSnapshot } from "valtio";

import MoonSVG from "@/assets/moon.svg";
import SunSVG from "@/assets/sun.svg";

const SwitchWrapper = styled.div`
  cursor: pointer;
  height: 20px;
`;

const ThemeSwitcher = () => {
  const theme = useTheme();
  const globalStore = useSnapshot(GlobalStore.store);

  return (
    <SwitchWrapper onClick={GlobalStore.setTheme}>
      {globalStore.theme === "dark" ? (
        <MoonSVG color={theme.switcherColor} />
      ) : (
        <SunSVG color={theme.switcherColor} />
      )}
    </SwitchWrapper>
  );
};

export default ThemeSwitcher;
