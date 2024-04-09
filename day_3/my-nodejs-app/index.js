const express = require('express');
const axios = require('axios');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

const options = {
  method: 'GET',
  url: 'https://covid-193.p.rapidapi.com/countries',
  headers: {
    'X-RapidAPI-Key': process.env.API_KEY,
    'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
  }
};


app.get('/', (req, res) => {
  const message = "Values from Config variables:\n";
  const envVars = {
    service_name: process.env.SERVICE_NAME,
    service_endpoint: process.env.SERVICE_HOST,
  };
  const response = message + JSON.stringify(envVars, null, 2);
  res.send(response);
});

app.get('/public_covid_data', async (req, res) => {
  try {
      console.log("================API-KEY==================")
      console.log(process.env.API_KEY)
      console.log("================API-KEY==================")
      const response = await axios.request(options);
      const prettyResponse = JSON.stringify(response.data, null, 2);
      res.setHeader('Content-Type', 'application/json');
      res.send(prettyResponse);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: error });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
