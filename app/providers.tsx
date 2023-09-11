"use client";

import { darkTheme, lightTheme } from "@/themes";
import { CssBaseline, ThemeProvider } from "@mui/material";

function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}

export default Providers;
