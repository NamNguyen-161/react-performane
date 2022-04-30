import React, { createContext, useState } from "react";

export interface ThemeModeContextType {
  mode: "dark" | "light";
  onChangeMode: (mode: boolean) => void;
}

interface Props {
  children: React.ReactNode;
}

export const ThemeModeContext =
  createContext<ThemeModeContextType | null>(null);

const ThemeModeProvider: React.FC<Props> = ({ children }) => {
  const [mode, set_mode] = useState<"dark" | "light">("light");

  const onChangeMode = (mode: boolean) => {
    set_mode(mode ? "dark" : "light");
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
