console.log("Hello, World!");

//sychronous
console.log("Hello, World!");
for(i=0; i<5; i++){
    console.log(i);
}
console.log("End of Synchronous code");

//asynchronous
console.log("Hello, World!");
setTimeout(() => {
    console.log("Inside setTimeout");
}, 1000);

//execution order
console.log("synchronous code");
Promise.resolve().then(() => {
    console.log("Promise resolved");
});
setTimeout(() => {
    console.log("Inside setTimeout");
}, 2000);


import fs from "fs";
 function greet(name) {
    console.log(`Hello, ${name}!`);
}
greet()
