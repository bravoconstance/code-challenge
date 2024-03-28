"use client";

import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "@/theme";
import * as GlobalStore from "@/stores/GlobalStore";
import { useSnapshot } from "valtio";

export default function Providers({ children }: { children: React.ReactNode }) {
  const globalStore = useSnapshot(GlobalStore.store);

  const theme = {
    light: lightTheme,
    dark: darkTheme,
  };

  return (
    <ThemeProvider theme={theme[globalStore.theme]}>{children}</ThemeProvider>
  );
}
