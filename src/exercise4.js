'use strict'
/* - to reject or not to reject. -
   demonstrates that a promise can only be fulfilled/rejected
   once in its lifetime.
*/
const myPromise = new Promise(function(fulfill, reject){
    fulfill("I FIRED");
    reject(Error("I DID NOT FIRE"));
})

function onRejected(error){
    console.log(error.message);
}

myPromise.then(function(fulfill){
    console.log(fulfill);
}, onRejected);