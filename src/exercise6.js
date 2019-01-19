'use strict'
/* - shortcuts -
   demonstrates some syntactic sugar for promises
 */


// promise.resolve:
const promise = Promise.resolve('value');
// is equivalent to
const oldPromise = new Promise(function(fulfill, reject){
    fulfill('value');
});

// promise.reject:
const reject = Promise.reject(new Error('message'));
// is equivalent to

const oldReject = new Promise(function(fulfill, reject){
    reject(new Error('message'));
});

// .catch
reject.catch(function(err){
    console.error(err.message);
});

