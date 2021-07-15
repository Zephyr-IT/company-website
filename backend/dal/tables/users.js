// imports
// custom libraries
const userModel = require('./models/userModel.js');

let users = [
    {ID: 1, Username: "Max"},
    {ID: 2, Username: "Dave"},
    {ID: 3, Username: "Admin"}];

function getUsers(){
    return users;
}

module.exports = { getUsers };