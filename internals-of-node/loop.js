/**
 * This file is to understand the node loop event operations.
 * note that , those are dummy codes, just to visualize the process
 * TICK : one execution of the even loop
 */

// node myFile.js
const pendingTimers = [];
const pendingOSTasks = [];
const pendingOperations = [];

// New timers, tasks , operations are recorded from myFile running
myFile.runContents();

function shouldContinue() {
  // Check one: Any pending setTimeOut , setInterval, setImmediate?
  // Check two: Any pending OS tasks? (like server listening to port)
  // Check three: Ny pending long running operations? (like fs module)

  return (
    pendingTimers.length || pendingOSTasks.length || pendingOperations.length
  );
}

// Entire body executes in one 'tick'
while (shouldContinue()) {
  // 1) Node looks at pendingTimers and sees if any functions are ready to be called. setTimeout, setInterval
  // 2) Node looks at pendingOSTasks and pendingOperations and calls relevant callbacks
  // 3) Pause execution. Continue when ...
  //    - a new pendingOSTasks is done
  //    - a new pendingOperation is done
  //    - a timer is about to complete
  // 4) Look at pendingTimers
  // 5) Handle any 'close' events
}
