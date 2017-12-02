## About this Repository

This is repository is a personal project meant to develop and review the
following

* Creating a client-side using only HTML, CSS, and Javascript
* Creating a small server in Node.js, only using Express, and Jest
* Reviewing the DOM API, without using jQuery or MVC frameworks

## Why this might be useful to you

Secondarily this app-let has the meta goal of teaching the fundamentals of chess
pawn promotion in a controlled environment.

### Minimally the end-user should:

* be able to view a 5 by 5 board with black and white pawns
* have game logic that toggles turns
* be able to move the white pieces up the board
* only be able to move the white pieces on his turn
* play an AI opponent

### Desired features: The end-user should:

* not be able to beat an AI opponent playing black pieces
* should have analysis of errors that were made
* should be notified of the users errors and view why

## Retrospective

Learned something new about the fetch api. The fetch api requires that the type
of data being sent is specified in the headers. This is a new phenomenon having
utilized the cors npm module and axios module. Had been frustrated, but now glad
to have learned this now rather than later.
