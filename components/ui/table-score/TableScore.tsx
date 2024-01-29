"use client";

import { Grid } from "@mui/material";
import PlayerColumn from "@/components/PlayerColumn";
import { useContext, useEffect } from "react";
import { GameContext } from "@/context";
import { Board, Players } from "@/components/ui";
import { useRouter } from "next/navigation";

export default function TableScore() {
  const { currentPlayer, players } = useContext(GameContext);
  const router = useRouter();

  useEffect(() => {
    if (currentPlayer.name == "default") {
      router.push("/");
    }
  }, [currentPlayer]);

  return (
    <>
      <Players />
      <div style={{ display: "flex" }}>
        <Grid container spacing={2} justifyContent="center">
          <Board />
          {players.map((player) => (
            <PlayerColumn key={player.name} player={player} players={players} />
            ))}
        </Grid>
      </div>
      <script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7843971623929558"
            crossOrigin="anonymous"
          ></script>
          {/* <!-- Test --> */}
          <ins
            className="adsbygoogle"
            style={{ display: "block" }}
            data-ad-client="ca-pub-7843971623929558"
            data-ad-slot="4492566707"
            data-ad-format="auto"
            data-full-width-responsive="true"
          ></ins>
          <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
      </>
  );
}
