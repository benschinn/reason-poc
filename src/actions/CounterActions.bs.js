// Generated by BUCKLESCRIPT VERSION 5.0.6, PLEASE EDIT WITH CARE
'use strict';


function incrementCounter(param) {
  return {
          type: "counter/increment",
          tag: /* Increment */0
        };
}

function decrementCounter(param) {
  return {
          type: "counter/decrement",
          tag: /* Decrement */1
        };
}

exports.incrementCounter = incrementCounter;
exports.decrementCounter = decrementCounter;
/* No side effect */
