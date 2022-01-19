const { builtinModules } = require("module");
const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541,
  });
  //The conn object that Node returned to you represents the connection that you have with the server.
  //The conn object that Node gave you has everything you need to listen for events that occur on your connection
  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log(`Hiya!`);
    conn.write("Successfully connected to game server");
    conn.write("Name: MIC");
    conn.on("connect", () => {
      conn.write("Move: up");
    });
  });

  conn.on("data", (data) => {
    console.log("Server says: ", data);
  });

  return conn;
};

console.log("Connecting ...");
connect();

module.exports = {
  connect,
};
