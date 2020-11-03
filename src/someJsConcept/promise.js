

let promise = new Promise((res,rej) => {

    setTimeout(() => {
        console.log("Executing promise");
        res();
    }, 3000)
});

promise.then(()=> console.log("call Promise"));

let p =Promise.resolve('done');  

p.then((val)=>console.log(val));

// promise chaining

let promiseChaim = Promise.resolve("umesh")
                    .then(
                        (val)=>{console.log(val)
                        return "puja"}
                    ).then(
                        (val)=>console.log(val)    
                    );
