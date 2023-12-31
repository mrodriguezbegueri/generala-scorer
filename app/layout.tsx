import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Providers from "./providers";
import { Box } from "@mui/material";
import { GameProvider } from "@/context";
import { NavBar } from "@/components/ui";

const roboto = Roboto({
  weight: "700",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Generala Scorer",
  description: "Application to keep score of the Generala game",
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
      </GameProvider>
    </html>
  );
}
