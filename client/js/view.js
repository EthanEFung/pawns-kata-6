function renderView(board) {
  const $board = renderBoard();
  board.forEach((row, i) => {
    const $row = renderRow();
    $board.appendChild($row);
    row.forEach((sq, j) => {
      const $sq = renderSq(sq, i, j);
      appendSqCtrls($sq, sq);
      $row.appendChild($sq);
      if (!!sq) {
        const $pawn = renderPawn(sq);
        $sq.appendChild($pawn);
      }
    });
  });
}

function renderBoard() {
  let $board;
  if (document.getElementById("board")) {
    $board = document.getElementById("board");
    while ($board.firstChild) {
      $board.removeChild($board.firstChild);
    }
  } else {
    $board = document.createElement("tbody");
    $board.setAttribute("id", "board");
    document.body.appendChild($board);
  }
  return $board;
}

function renderRow() {
  const $row = document.createElement("tr");
  $row.setAttribute("class", "row");
  return $row;
}

function renderSq(sq, i, j) {
  const $sq = document.createElement("td");
  $sq.setAttribute("class", "square");
  $sq.setAttribute("row", i);
  $sq.setAttribute("col", j);
  return $sq;
}

function renderPawn(sq) {
  const $pawn = document.createElement("span");
  $pawn.setAttribute("class", "pawn");
  $pawn.setAttribute("draggable", true);
  $pawn.textContent = sq.side;
  return $pawn;
}

window.onload = function() {
  //fetchGameState defined in controller
  fetchGameState().then(data => renderView(data.board));
};
