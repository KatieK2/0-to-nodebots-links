var five = require("johnny-five"), myBoard, myLed;
myBoard = new five.Board();

myBoard.on("ready", function() {
  myLed = new five.Led(13);
  myLed.strobe( 1000 );
  this.repl.inject({ // make myLED available as "led" in REPL
    led: myLed
  });

});
