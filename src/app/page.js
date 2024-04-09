"use client"
import { useState } from "react"

//squares: will hold value of null, X or O
//clicking in square will set value
function Square({value, onClick}) {
  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  )
}

//board: will display the squares
function Board() {
  function onSquareClick() {}

  return (
    <>
      <div className="board-row">
        <Square value={"X"} onClick={() => onSquareClick()} />
        <Square value={"X"} onClick={() => onSquareClick()} />
        <Square value={"X"} onClick={() => onSquareClick()} />
      </div>
      <div className="board-row">
        <Square value={"X"} onClick={() => onSquareClick()} />
        <Square value={"X"} onClick={() => onSquareClick()} />
        <Square value={"X"} onClick={() => onSquareClick()} />
      </div>
      <div className="board-row">
        <Square value={"X"} onClick={() => onSquareClick()} />
        <Square value={"X"} onClick={() => onSquareClick()} />
        <Square value={"X"} onClick={() => onSquareClick()} />
      </div>
    </>
  )
}

export default function Game() {
  return (
    <div>
      <Board />
    </div>
  )
}