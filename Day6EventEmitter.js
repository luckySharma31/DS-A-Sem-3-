import eventEmitter from 'events';

const myEmitter = new eventEmitter();

myEmitter.on("greet" , (name) => {
    console.log(`Hello, ${name}! Welcome to Node.js`)
});

myEmitter.on("exit", () =>{
    console.log(`Application Closed.`);
});

myEmitter.emit("greet","2nd year");
myEmitter.emit("exit");