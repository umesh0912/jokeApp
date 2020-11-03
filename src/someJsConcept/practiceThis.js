let obj= {
    name : 'umesh',
    sayLetter : function () {
        console.log("Inside Obj define function--> " + this.name)//here conext of this is obj

        setTimeout( () => {
            console.log("Inside sayLetter() -->" + this.name);//here conext of this is setTimeout
        }, 1000)
    }


}

obj.sayLetter();

/*
 O/P
    Inside Obj define function--> umesh
    Inside sayLetter() -->undefined
*/

// Just change to fat aarrow and see the magic
/*
O/P
    Inside Obj define function--> umesh
    Inside sayLetter() -->umesh
*/

/*
 What just happned?

 In this case, It uses the value of this from surrounding code for its context.
 i.e what ever this points to in the surrounding code this will point to in the function body of the 
 fat arrow function.

*/
