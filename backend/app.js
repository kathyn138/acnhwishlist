const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

// add logging system
const morgan = require("morgan");
app.use(morgan("tiny"));

const villagersRoutes = require("./routes/villagers");
const wakeRoutes = require("./routes/wake");

app.use("/villagers", villagersRoutes);
app.use("/", wakeRoutes);

/** 404 Not Found handler. */

app.use(function (req, res, next) {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
});

/** Generic error handler. */

app.use(function (err, req, res, next) {
  if (err.stack) console.error(err.stack);

  res.status(err.status || 500).json({
    message: err.message,
  });
});

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", '*');
  res.header("Access-Control-Allow-Credentials", true);
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
  next();
});

module.exports = app;