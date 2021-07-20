// imports
const express = require('express');
const app = express();
// custom libraries
const users = require('./tables/crud/users.js'); // this file contains all the userdata crud functions
const invoices = require('./tables/crud/invoices.js'); // this file contains all the invoice data crud functions
// current port
const port = process.env.port || 3000;

// home page of the dal rest api
app.get ('/', (req, res) => {
    res.send('Welcome to the homepage of the dal rest api :) \n \n Why are you here?')
});

// userdata methods
app.get('/api/db/users/get', (req, res) => {
    res.send(users.getUsers());
});

// invoice data methods
app.get('/api/db/users/get', (req, res) => {
    res.send("404 - no data available yet");
});

// console output to verify the current port
app.listen(port, () => console.log(`listening on port ${port}...`));