/* eslint-disable linebreak-style */
const net = require("net");
// const host =  165.227.47.243;

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: '165.227.47.243',// IP address here,
    port : 50541 // PORT number here,
  });
  conn.on("data", (data) => {
    // code that does something when the connection is first established
    console.log('server says :',data);
  });
  conn.on('connect',()=>{
    console.log('Connected successfully');
    conn.write("Name:YMH");
    conn.write('"Move: up" ');
    conn.write("Move: down");
    conn.write("Move: left");
    conn.write("Move: right");

  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

console.log("Connecting ...");
// connect();
module.exports = connect;