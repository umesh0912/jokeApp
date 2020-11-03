// call back
let cb = function () {
    console.log("I am a call back function")
}

function doAsync (cbFunction) {
    console.log("Executing Async");
    setTimeout(() => {
        cbFunction();
       console.log(" Async Complete");
    }, 2000)
}

doAsync (cb);