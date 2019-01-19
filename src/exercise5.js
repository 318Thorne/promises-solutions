'use strict'
/* - always asynchronous. -
   demonstrates that a promise is always asynchronous
*/

const myPromise = new Promise(function(fulfill, reject){
    fulfill('PROMISE VALUE');
})

myPromise.then(function(fulfill){
    console.log(fulfill);
});

console.log('MAIN PROGRAM');