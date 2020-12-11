//modules
const express = require('express');
const hook = require('./hook');

const app = express();

//set up routes
app.use('/hook', hook);

app.listen(3000, () => {
  console.log('webhook now listening for requests on port 3000')
});

