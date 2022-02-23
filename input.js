// Stores the active TCP connection object.
let connection;
//setup interface to handle user input from stdin
//In Client Setup, we returned a conn object from the connect function that allowed us to interact with the server.
//Similarly, the stdin object returned by setupInput will allow us to listen for keyboard input and react to it.
const setupInput = function(conn) {
  connection = conn;    //will now accept an object that lets you interact with the server //You need to allow the connection object to have access to the data coming in from the keyboard.
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);   //In the handleUserInput function, you'll specify what happens when "data:" is received
  return stdin;    // stdin object returned by setupInput will allow us to listen
};
//When data comes in from your keyboard, the stdin event handler can now interact with the server because the scope in the handler now includes both data from the keyboard AND the connection object!



const handleUserInput = function(key) {
  // your code here
  if(key === '\u0003'){
    console.log("exiting now...");
    process.exit();
  }
  if(key === 'w'){
    console.log("moving up...");
    connection.write("Move: up");
  }
  if(key === 's'){
    console.log("going down...");
    connection.write("Move: down");
  }
  if(key === 'a'){
    console.log("to the left...");
    connection.write("Move: left");
  }
  if(key === 'd'){
    console.log("you got that right...");
    connection.write("Move: right");
  }
};



module.exports = {setupInput}