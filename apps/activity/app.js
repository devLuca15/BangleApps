// !! My Sport App

var starActivity = true;

var timer = 0;
var totalSeconds = 0;

var Layout = require("Layout");
var layout = new Layout(
  {
    type: "v",
    c: [
      { type: "txt", font: "6x8:2", label: "                ", id: "timer" },
      {
        type: "btn",
        font: "6x8:1",
        label: "Start Activity",
        pad: 6,
        cb: (l) => setLabel(),
        id: "btn",
      },
    ],
  },
  { btns: [], lazy: true }
);

function countUpTimer() {
  totalSeconds = totalSeconds + 1;
  var hour = Math.floor(totalSeconds / 3600);
  var minute = Math.floor((totalSeconds - hour * 3600) / 60);
  var seconds = totalSeconds - (hour * 3600 + minute * 60);

  timer = hour + ":" + minute + ":" + seconds;
  layout.timer.label = timer;

  console.log(layout.timer.label);

  layout.render();
}

function setLabel() {
  if (starActivity) {
    //Lancio una nuova attivtà

    startTimer = setInterval(countUpTimer, 1000);

    //layout.timer.label = '12:10:02';
    layout.btn.label = "Stop Activity";

    starActivity = false;
  } else {
    //Fermo una attivtà

    console.log("Final seconds: " + totalSeconds);

    timer = 0;
    totalSeconds = 0;
    clearInterval(startTimer);

    layout.timer.label = "         ";
    layout.btn.label = "Start Activity";

    starActivity = true;

    //TODO: Post con tempo attività aggiornata;

    console.log("Posting activity...");

    //TODO: Fine Post
  }

  layout.render();
}

g.clear();
layout.render();