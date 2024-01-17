/* eslint-disable linebreak-style */
const net = require("net");
// const host =  165.227.47.243;

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: '165.227.47.243',// IP address here,
    port : 50541 // PORT number here,
  });
  conn.on("connect", (data) => {
    // code that does something when the connection is first established
    console.log('server says :',data);
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

console.log("Connecting ...");
connect();
