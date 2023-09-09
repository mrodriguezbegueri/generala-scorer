"use client"

import { Box, Grid } from "@mui/material";
import { Item } from "@/components";
import PlayerColumn from "@/components/PlayerColumn";
import { useContext } from "react";
import { GameContext } from "@/context";


export default function Home() {
  const { players } = useContext(GameContext)

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} >
        <Grid rowSpacing={2} container item xs={2}>
          <Grid item xs={12}>
            <Item>1</Item>
          </Grid>
          <Grid item xs={12}>
            <Item>2</Item>
          </Grid>
          <Grid item xs={12}>
            <Item>3</Item>
          </Grid>
          <Grid item xs={12}>
            <Item>4</Item>
          </Grid>
          <Grid item xs={12}>
            <Item>5</Item>
          </Grid>
          <Grid item xs={12}>
            <Item>6</Item>
          </Grid>
          <Grid item xs={12}>
            <Item>Escalera</Item>
          </Grid>
          <Grid item xs={12}>
            <Item>Full</Item>
          </Grid>
          <Grid item xs={12}>
            <Item>Poker</Item>
          </Grid>
          <Grid item xs={12}>
            <Item>Generala</Item>
          </Grid>
          <Grid item xs={12}>
            <Item>Doble</Item>
          </Grid>
        </Grid>

        {
          players.map((item) => (
            <PlayerColumn players={players} key={item} />
          ))
        }
      </Grid>
    </Box>
  );
}
