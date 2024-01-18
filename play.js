/* eslint-disable linebreak-style */
const { connect } = require("./client");
const { setupInput } = require("./input");

console.log("Connecting ...");
setupInput();
connect();