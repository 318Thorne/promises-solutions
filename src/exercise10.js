'use strict'

/* - An important rule -
    demonstrates that it is best practice to always put an
    exception handler at the end of your chain
*/
function alwaysThrows(){
    throw "OH NOES";
}

function iterate(num){
    console.log(num);
    return num + 1;
}

Promise.resolve(iterate(1))
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.then(alwaysThrows)
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.catch(console.log);