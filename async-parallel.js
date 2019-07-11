var async = require("async"); //require async library to perform async parallelLimit() method.

/**
* Aim:Calculate area of triangle,rectangle and square by using async parallel() method.
* @objective : To understand use of async parallelLimit() method.
* @async parallel():parallel() method, which takes an extra argument to specify the positional limit of the last function to be executed in parallel
*
*/


var a = 20, b = 30;
async.parallel([
    function (callback) {
        // function for calculate area of triangle with setting time for execution
        setTimeout(function () {
            var area_of_triangle = (1 / 2) * a * b;
            console.log("Area of triangle ==>  " + area_of_triangle);
            callback(null, 1);
        }, 300);

    },
    function (callback) {
        // function for calculate area of rectangle with setting time for execution
        setTimeout(function () {
            var area_of_rectangle = a * b;
            console.log("Area of rectangle ==>  " + area_of_rectangle);
            callback(null, 2);
        }, 400);

    },
    function (callback) {
        // function for calculate area of square with setting time for execution
        setTimeout(function () {
            var area_of_square = a * a;
            console.log("Area of square ==>  " + area_of_square);
            callback(null, 3);
        }, 100);

    }
], 3, function (error, results) { // parameter value 3 define the which function execute first 
    if (error) {
        //if error is accure then return error
        console.log(error);
    }
    else {
        // if resolve result then return result 
        console.log(results);

    }
});