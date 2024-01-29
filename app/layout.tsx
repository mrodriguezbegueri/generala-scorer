import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Providers from "./providers";
import { Box } from "@mui/material";
import { GameProvider } from "@/context";
import { NavBar } from "@/components/ui";

import { GoogleAnalytics } from "@next/third-parties/google";

const roboto = Roboto({
  weight: "700",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Anotador de Generala - Tu mejor opción para anotar tus partidas de Generala",
  description:
    "Anotador de Generala es una app diseñada para facilitar el registro de partidas de Generala. Registra tus puntajes de forma rápida y sencilla. ¡Descárgala ahora y mejora tu experiencia de juego!",
  keywords: "Anotador, Generala, juego de dados, puntajes, registro de partidas",
  other: {
    "google-adsense-account": "ca-pub-7843971623929558",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <GameProvider>
        <body className={roboto.className}>
          <Providers>
            <NavBar />
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
