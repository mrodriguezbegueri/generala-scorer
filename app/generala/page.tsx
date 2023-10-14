"use client"

import { TableScore, WinnerDialog } from "@/components/ui"
import { GameContext } from "@/context"
import { Player } from "@/interfaces"
import { getWinner, isGameOver } from "@/util"
import { useContext, useEffect, useState } from "react"

export default function Generala () {
  const { players, setNextPlayerToCurrentPlayer } = useContext(GameContext)
  const [thereIsAWinner, setThereIsAWinner] = useState(false)
  const [winner, setWinner] = useState<Player | null>(null)

  const playWinnerSounds = (): void => {
    const winAudio = new Audio('/win2.mp3')
    winAudio.play()
    const utterance = new SpeechSynthesisUtterance(`El Ganador es ${winner?.name}`);
    window.speechSynthesis.speak(utterance);
  }

  useEffect(() => {
    if (isGameOver(players)) {
      setWinner(getWinner(players))

      setThereIsAWinner(true)
    }
  }, [setNextPlayerToCurrentPlayer])
  return (
    <div>
    {
      thereIsAWinner ? <WinnerDialog winnerPlayer={winner} playSounds={playWinnerSounds} /> : <TableScore />
    }
    </div>
  )
}
