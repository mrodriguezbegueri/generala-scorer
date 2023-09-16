"use client"

import { TableScore, WinnerDialog } from "@/components/ui"
import { GameContext } from "@/context"
import { Player } from "@/interfaces"
import { getWinner, isGameOver } from "@/util"
import { useContext, useEffect, useState } from "react"

export default function Generala() {
  const { players } = useContext(GameContext)
  const [thereIsAWinnger, setThereIsAWinner] = useState(false)
  const [winner, setWinner] = useState<Player | null>(null)

  useEffect(() => {
    if (isGameOver(players)) {
      setWinner(getWinner(players))

      console.log('winner', winner)

      setThereIsAWinner(true)
    }
  }, [players])
  return (
    <>
    {
      thereIsAWinnger ? <WinnerDialog winnerPlayer={winner} /> : <TableScore />
    }
    </>
  )
}
