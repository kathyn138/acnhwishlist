const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const wtf = require("./fillDatabase");

// const postsRoutes = require("./routes/posts");
// const postCommentsRoutes = require("./routes/postComments");

const app = express();

app.use(morgan("tiny"));
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

app.use("", wtf);

// app.use("/api/posts/:post_id/comments", postCommentsRoutes);
// app.use("/api/posts", postsRoutes);


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


module.exports = app;