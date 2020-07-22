const p = new Promise((resolve,reject)=>{
    //Kick of some async work
    // ...

    setTimeout(()=>{
        // resolve(1);
        reject(new Error("message"))
    },2000)

    // reject(new Error('message'))

});

p.then(result=>{
    console.log("Result",result);
}).catch(err=>console.log('Error',err.message));