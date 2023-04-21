Array.prototype.myMap = function(callback){
console.log(this)
let arr = [];
for(let i = 0; i< this.length;i++){
arr.push(callback(this[i]))
}
return arr
}

a = [2,3]
b=a.myMap(x=>x*2)
console.log(b)
