var async = require('async');
var async = require("async"); //require async library to perform async waterfall() method.

/**
* Aim: Calculate square root of given number. 
* @objective : To understand use of async waterfall() method.
* @async waterfall():The waterfall() method is useful when you need the results of a previous function to perform an operation with the next function in the series. An example appears below:
*
*/

async.waterfall([
  // here we take two values to find out 
  function(callback) {
    callback(null, 15, 25);
  },
  function(a, b, callback) {
    //here we add value a and valu b and multiply by 10
    callback(null, (a + b) * 10);
  },
  function(c, callback) {
    //here we take square root of c which is result of second function
    callback(null, Math.sqrt(c));
  }
], function(error, c) {
  console.log("Square root = "+c);
});