NRF.on('connect', function () {
  console.log("connected!")
  g.clear();
g.drawString("Connected!");
})


NRF.on('disconnect', function () {
  g.clear();
g.drawString("Disconnected :(");
})

// Display Hello World!
g.clear();
g.setFont('Vector', 20);
g.drawString(E.getBattery());

let timer = 0;

setInterval(function() {
  timer++
}, 1000);

let getTimer = () => {
  g.drawString(timer)
  return timer
}



NRF.setServices({
  "f8b23a4d-89ad-4220-8c9f-d81756009f0c": {
    "f8b23a4d-89ad-4220-8c9f-d81756009f0c": {
      notify: true,
        readable: true,
        value: [timer]
    }
  }
})

 NRF.setServices({
    // Battery level service
    0x2A19: {
      0x2A19: {
        notify: true,
        readable: true,
        value: [E.getBattery()]
      }
    },
 })
