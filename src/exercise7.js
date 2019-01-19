'use strict'

/* - promise after promise -
   demonstrates that promises can be chained /
   used asynchronously.
 */

first()
.then(second)
.then(function(fulfill){
    return fulfill;
})
.then(console.log)