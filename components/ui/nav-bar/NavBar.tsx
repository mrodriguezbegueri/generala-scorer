import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "next/link";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{ backgroundColor: "#333333" }} position="sticky">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Generala
          </Typography>
          <Link href="/">
            <Button variant="outlined" sx={{ color: '#FFFFFF', textTransform: 'none' }}>
              Nuevo Juego
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
