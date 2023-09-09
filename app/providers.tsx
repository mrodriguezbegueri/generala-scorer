"use client";

import { darkTheme, lightTheme } from "@/themes";
import { CssBaseline, ThemeProvider } from "@mui/material";

console.log(process.env.NEXT_PUBLIC_CLIENT_TEST)
function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}

export default Providers;
