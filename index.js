const bindings = require("bindings");
const {internalBinding} = require('internal/test/binding');
const {getPromiseDetails} = internalBinding('util');

const addon = bindings('addon');

console.log(addon.getPromiseDetails(Promise.resolve(41)));
console.log(getPromiseDetails(Promise.resolve(40)));