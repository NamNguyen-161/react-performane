import React, { createContext, useState } from "react";
import { EModeTheme } from "../styles";

export interface ThemeModeContextType {
  mode: EModeTheme;
  onChangeMode: (mode: boolean) => void;
}

interface Props {
  children: React.ReactNode;
}

export const ThemeModeContext =
  createContext<ThemeModeContextType | null>(null);

const ThemeModeProvider: React.FC<Props> = ({ children }) => {
  const [mode, set_mode] = useState<EModeTheme>(EModeTheme["light"]);

  const onChangeMode = (mode: boolean) => {
    set_mode(mode ? EModeTheme["dark"] : EModeTheme["light"]);
  };

  return (
    <ThemeModeContext.Provider
      value={{
        mode: mode,
        onChangeMode: onChangeMode,
      }}
    >
      {children}
    </ThemeModeContext.Provider>
  );
};

export default ThemeModeProvider;
