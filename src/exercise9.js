'use strict'

/* - throw an error -
    demonstrates that promises handle errors in a
    manner similar to synchronous code. 
*/

function parsePromised(json) {
    return new Promise(function (fulfill, reject) {
      try {
        fulfill(JSON.parse(json));
      } catch (error) {
        reject(error);
      }
    });
  }
  
  function onReject(error) {
    console.log(error.message);
  }
  
  parsePromised(process.argv[2])
  .then(console.log)
  .catch(onReject);