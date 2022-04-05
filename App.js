// this is more common
// this import express to app variable
// const app = require('express');

// used less common
const express = require('express');

// calles express
const app = express();

// we create our route like this
app.get('/', (req,res) => {
    res.send('Hello World!')
});

app.listen(4000);


// eslint => helps make syntax clear
// and readable for all apps / its a rule enforcer for 
// syntax for teams and more cases

// Do: node App.js
// then => on browser go to localhost:4000