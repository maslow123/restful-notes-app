const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const routes = require('./routes');
const cors = require('cors');
const port = process.env.PORT || 3000;

const url = require('url');
const queryString = require('querystring');

app.use(
    bodyParser.urlencoded({
        extended:true
    })
);

app.use(bodyParser.json());
routes(app,cors);

// Error handler
app.use((err, req, res, next) => {
  const { start, httpStatus, message, previousError, stack } = err;
  console.log(stack);

  res.status(httpStatus || 406).json({
    status: false,
    code: httpStatus || 406,
    message,
    data: previousError,
  })
});

app.listen(port);

console.log(port);