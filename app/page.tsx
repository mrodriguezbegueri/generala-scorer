"use client";

import { Box, Grid, Paper, styled } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Home() {
  return (
    <Box sx={{ flexGrow: 1 }}>

      <Grid container spacing={2} xs={12}>
        <Grid rowSpacing={2} container item xs={6}>
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

        <Grid rowSpacing={2} container item xs={6}>
          <Grid item xs={12}>
            <Item>Input</Item>
          </Grid>
          <Grid item xs={12}>
            <Item>Input</Item>
          </Grid>
          <Grid item xs={12}>
            <Item>Input</Item>
          </Grid>
          <Grid item xs={12}>
            <Item>Input</Item>
          </Grid>
          <Grid item xs={12}>
            <Item>Input</Item>
          </Grid>
          <Grid item xs={12}>
            <Item>Input</Item>
          </Grid>
          <Grid item xs={12}>
            <Item>Input</Item>
          </Grid>
          <Grid item xs={12}>
            <Item>Input</Item>
          </Grid>
          <Grid item xs={12}>
            <Item>Input</Item>
          </Grid>
          <Grid item xs={12}>
            <Item>Input</Item>
          </Grid>
          <Grid item xs={12}>
            <Item>Input</Item>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
