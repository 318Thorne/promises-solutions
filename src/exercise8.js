'use strict'

/* - Values and Promises -
   demonstrates that promises can return values.
   handlers will wrap in promise.s
 */

function attachTitle(surname){
    return `DR. ${surname}`;
}

Promise.resolve('MANHATTAN')
.then(attachTitle)
.then(console.log)
