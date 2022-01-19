//setup interface to handle user input from stdin
//In Client Setup, we returned a conn object from the connect function that allowed us to interact with the server.
//Similarly, the stdin object returned by setupInput will allow us to listen for keyboard input and react to it.
const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);   //In the handleUserInput function, you'll specify what happens when "data:" is received
  return stdin;    // stdin object returned by setupInput will allow us to listen
};


const handleUserInput = function (key) {
  // your code here
  if(key === '\u0003'){
    console.log("exiting now...");
    setTimeout(() => process.exit(), 500);
  }
  if(key === 'w'){
    conn.write("Move: up");
  }
  if(key === 's'){
    conn.write("Move: down");
  }
  if(key === 'a'){
    conn.write("Move: left");
  }
  if(key === 'd'){
    conn.write("Move: right");
  }
};



module.exports = {setupInput}