import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Providers from "./providers";
import { Box } from "@mui/material";
import { GameProvider } from "@/context";
import { NavBar } from "@/components/ui";

import { GoogleAnalytics } from '@next/third-parties/google'

const roboto = Roboto({
  weight: "700",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Generala",
  description: "Anotador para generala",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <GameProvider>
        <body className={roboto.className}>
          <Providers>
            <NavBar/>
            <main>
              <Box sx={{ flexFlow: 1 }}>
                <Box sx={{ padding: "10px 20px" }}>{children}</Box>
              </Box>
            </main>
          </Providers>
        </body>
        <GoogleAnalytics gaId="G-QWFTKDT8Y8" />
      </GameProvider>
    </html>
  );
}
