'use strict'
const http = require('q-io/http');

/* - do some work -
    Demonstrates talking to two remote processes
*/

http.read("http://localhost:7000")
.then(function(value){
    return http.read(`http://localhost:7001/${value.toString()}`)
})
.then(function(value){
    console.log(JSON.parse(value))
})
