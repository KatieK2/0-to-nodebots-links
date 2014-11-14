var five = require("johnny-five"), myBoard, myMotor;
myBoard = new five.Board();

myBoard.on("ready", function() {
  myMotor = new five.Motor({ pin: 9 });

  myMotor.on("start", function( err, timestamp ) { // event handlers on start and stop
    console.log( "started", timestamp );

    myBoard.wait(2000, function() { // stop after 2 seconds
      myMotor.stop();
    });
  });

  myMotor.on("stop", function( err, timestamp ) {
    console.log( "stopped", timestamp );
  });

  myMotor.start(250); // start motor w/ optional speed argument (between 0 and 255)

  this.repl.inject({
    myMotor: myMotor
  });

});
