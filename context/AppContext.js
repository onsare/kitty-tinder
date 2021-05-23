import { createContext } from "react";

export const AppContext = createContext({
  isAuthenticated: false,
  kittys: null,
});
