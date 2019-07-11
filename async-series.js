var async = require("async"); //require async library to perform async series() method.

/**
* Aim: Sort array element and calculate area of rectangle and square by using async series() method.
* @objective : To understand use of async series() method.
* @async series():The series() method takes an array of functions as an argument
  (or an object that contains the functions). The functions are executed
  in the order in which they exist in the array
*
*/

var array = [9, 20, 1, 45, 8, 5],a=10,b=20;
async.series([
    // function for sort element in ascending order
    function (callback) {
        for (let i = 0; i < array.length; i++) {
            // Last i elements are already in place    
            for (let j = 0; j < array.length - i - 1; j++) {
                if (array[j] > array[j + 1]) {
                    var temp = 0;
                    temp = array[j];
                    array[j] = array[j + 1];
                    array[j + 1] = temp;
                }
            }
        }
        console.log("Sorted element are ==>"+array);
        
        callback(null, 1);
    },
    function (callback) {
        //function for calculate area of rectangle
        var area_of_rectangle = a * b;
        console.log("Area of rectangle ==>  " + area_of_rectangle);
        callback(null, 2);
    },
    function (callback) {
        //function for calculate area of square
        var area_of_square = a * a;
        console.log("Area of square ==>  " + area_of_square);
        callback(null, 3);
    }
], function (error, results) {
    if (error) {
        //if error is accure then return error
        console.log(error);
    }
    else {
        // if resolve result then return result 
        console.log(results);
    }
});

