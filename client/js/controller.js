const print = console.log;

function fetchGameState() {
  return fetch("/start")
    .then(res => res.json())
    .then(data => data)
    .catch(err => err);
}

let move = {};

function appendSqCtrls($sq, sq) {
  const row = $sq.getAttribute("row");
  const col = $sq.getAttribute("col");

  $sq.addEventListener("dragstart", e => {
    move.currSq = `${row}-${col}`;
  });
  $sq.addEventListener("dragover", e => e.preventDefault());

  $sq.addEventListener("dragend", e => {
    postMove(move);
  });

  $sq.addEventListener("drop", e => {
    move.targetSq = `${row}-${col}`;
  });
}

function postMove(move) {
  const init = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(move)
  };
  const postMove = new Request("/move", init);
  fetch(postMove)
    .then(res => res.json())
    .then(data => renderView(data.board))
    .catch(err => print(err));
}
