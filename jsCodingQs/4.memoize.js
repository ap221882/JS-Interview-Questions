function memoize(fn, ctx){
const collector = {};
return function(...args){
let argsString = JSON.stringify(args);
if(!collector[argsString]){
collector[argsString] = fn.call(ctx || this, ...args)
}
return collector[argsString]
}
}
