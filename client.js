// const { builtinModules } = require("module");
const net = require("net");
const { IP, PORT } = require("./constants");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({  //You used Node's net library (specifically, the createConnection function) to create an object named conn in the code above.
    host: IP,
    port: PORT,
  });
  //The conn object that Node returned to you represents the connection that you have with the server.
  //The conn object that Node gave you has everything you need to listen for events that occur on your connection
  
  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on("connect", () => {   //You will use the conn object to handle messages from the server.
    console.log("Hiya!, Successfully connected to game server");
    conn.write("Name: MIC");
  });
  
  conn.on("data", (data) => {
    console.log("Server says: ", data);
  });
  return conn;
};

module.exports = {
  connect,
};
