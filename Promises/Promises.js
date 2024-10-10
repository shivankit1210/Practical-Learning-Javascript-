let result=true;

let Pro = new Promise(function (res,rej){
if(result){
    res("Promise is resolved");
}
else{
    rej("Promise is rejected");
}
})

Pro
.then((result)=>console.log(result))
.catch((error)=>console.log(error))
.finally(()=>console.log("Finally all task done"));