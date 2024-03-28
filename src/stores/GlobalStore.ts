import { proxy, useSnapshot, subscribe } from "valtio";

type Theme = "light" | "dark";

export const store = proxy<{ theme: Theme }>({
  theme: (localStorage.getItem("currentTheme") as Theme) ?? "light",
});

export const setTheme = () => {
  store.theme = store.theme === "light" ? "dark" : "light";
};

subscribe(store, () => {
  localStorage.setItem("currentTheme", store.theme);
});
