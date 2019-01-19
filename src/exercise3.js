'use strict';

/* - rejecting a promise - */

var promise = new Promise(function (fulfill, reject) {
  setTimeout(function(){
    reject(new Error('REJECTED!'))
  }, 300);
});

promise.then(null,function(err){
    console.log(err.message)
})