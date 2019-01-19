'use strict'
/*
    - Multiple Promises -
    demonstrates a promise can wait for multiple async tasks 
    to complete before resolving.
*/

function all(one, two){
    const promise = new Promise(function(resolve, reject){
        let arr = []
        let counter = 0;
        function increment(value, i){
            counter++
            arr[i] = value;
            if(counter == 2){
               resolve(arr);
            }
        }
        one.then(function(value){
            increment(value, 0);
        })
        two.then(function(value){
            increment(value, 1);
        })
    })  
    return promise;
}
all(getPromise1(), getPromise2()).then(console.log)