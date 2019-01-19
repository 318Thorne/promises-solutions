'use strict'
const http = require('q-io/http');

/* - fetch JSON -
    Demonstrates promises working with ajax for fetching over http
*/

http.read("http://localhost:1337").then(function(value){
    console.log(JSON.parse(value))
})