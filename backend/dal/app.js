const express = require('express');
const app = express();
const port = 3000;
let users = [
    {ID: 1, Username: "Max"},
    {ID: 2, Username: "Dave"},
    {ID: 3, Username: "Admin"}]

// home page of the dal rest api
app.get ('/', (req, res) => {
    res.send('Welcome to the homepage of the dal rest api :) \n \n Why are you here?')
});

// get userdata page
app.get('/api/db/users', (req, res) => {
    res.send(users);
});

app.listen(port, () => console.log(`listening on port ${port}...`));