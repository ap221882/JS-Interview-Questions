function db (cb,dl){
let time;
return (...args)=>{
cleartimeOut(time);
time =setTimeOut(cb(...args),cl)
}
}

function tl(cb,dl){
let shouldWait = false;
return (...args)=>{
if(shouldWait)return;
cb(...args);
shouldWait = true;
setTimeOut(()=>{
shouldWait = false;
},delay)

}
}
