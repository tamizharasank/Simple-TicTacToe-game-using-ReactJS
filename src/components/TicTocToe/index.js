import { useEffect, useState } from "react";
import "./index.css";
import pattern from "./pattern";

const initBoard = ["", "", "", "", "", "", "", "", ""];

const TikTokToe = () => {
  const [board, setBoard] = useState([...initBoard]);
  const [player, setPlayer] = useState("X");
  const [lstIdx, setlstIdx] = useState(-1);

  const changeTile = (idx) => {
    if (board[idx] !== "") return;
    setlstIdx(idx);
    const res = board.map((sq, i) => {
      if (idx === i) return player;
      return sq;
    });
    setBoard(res);
    setPlayer(player === "X" ? "O" : "X");
    // console.log(res);
  };

  const checkWin = () => {
    if (lstIdx < 0) return;
    const prevPlayer = player === "X" ? "O" : "X";
    pattern[lstIdx].forEach((arr) => {
      if (board[arr[0]] === prevPlayer && board[arr[1]] === prevPlayer && board[arr[2]] === prevPlayer) {
        alert(`${prevPlayer} Won the game`);
        reset();
      }
    })
  };

  const reset = () => {
    setBoard([...initBoard]);
    setPlayer('X');
    setlstIdx(-1);
  }

  useEffect(() => {
    checkWin();
     //eslint-disable-next-line
  }, [board]);

  return (
    <>
      <h1>Hello</h1>
      <h4>Current player is : {player}</h4>
      <div className="board">
        {board.map((sq, i) => (
          <div key={i} className="tiles" onClick={() => changeTile(i)}>
            {sq}
          </div>
        ))}
      </div>
      <div className="btn-reset" onClick={() => reset()}>
        Reset
      </div>
    </>
  );
};

export default TikTokToe;
