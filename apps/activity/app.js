var starActivity = true;

var timer = 0;
var totalSeconds = 0;

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

    //TODO: Post con tempo attività aggiornata;

    Bluetooth.println(totalSeconds);

    //TODO: Fine Post

    timer = 0;
    totalSeconds = 0;
    clearInterval(startTimer);

    layout.timer.label = "         ";
    layout.btn.label = "Start Activity";

    starActivity = true;
  }

  layout.render();
}

g.clear();
layout.render();

NRF.on("connect", function () {
  console.log("connected!");
  g.clear();
  g.drawString("Connected!");
});

NRF.on("disconnect", function () {
  g.clear();
  g.drawString("Disconnected :(");
});

// Display Hello World!
g.clear();
g.setFont("Vector", 20);
g.drawString(E.getBattery());

let timerConnection = 0;

setInterval(function () {
  timerConnection++;
}, 1000);

let getTimer = () => {
  g.drawString(timerConnection);
  return timerConnection;
};

NRF.setServices({
  "f8b23a4d-89ad-4220-8c9f-d81756009f0c": {
    "f8b23a4d-89ad-4220-8c9f-d81756009f0c": {
      notify: true,
      readable: true,
      value: [timerConnection],
    },
  },
});

NRF.setServices({
  0x2a19: {
    0x2a19: {
      notify: true,
      readable: true,
      value: [E.getBattery()],
    },
  },
});
