/* eslint-disable linebreak-style */
const net = require("net");
const { IP, PORT } = require("./constants");
// const host =  165.227.47.243;

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: IP,// IP address here,
    port : PORT // PORT number here,
  });
  conn.on("data", (data) => {
    // code that does something when the connection is first established
    console.log('server says :',data);
  });
  conn.on('connect',()=>{
    console.log('Connected successfully');
    conn.write("Name:ymh");
    conn.write("Say:go long");
   

  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

module.exports = {connect};