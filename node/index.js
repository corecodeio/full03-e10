const express = require('express');
const app = express();
const oracle = require('./src/utils/db');
const { server } = require('./src/config/config');
const cors = require('cors');

const routes_person = require('./src/routes/person');
const routes_category = require('./src/routes/category');
const routes_invalid = require('./src/routes/404');

app.use(cors({ origin: true }));
app.use(express.json());

app.use(routes_person);
app.use(routes_category);
app.use(routes_invalid);

oracle
  .start()
  .then(() => {
    console.log('Oracle database connected!');
    app.listen(server.port, () => {
      console.log(`Server running on port: ${server.port}`);
    });
  })
  .catch((error) => console.log(error));
