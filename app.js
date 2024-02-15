const express = require('express');
const app = express();
const port = 5000;

const { helloWorldController } = require('./controller');

// Define a route that uses the controller
app.get('/', helloWorldController);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
