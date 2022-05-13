const express = require("express");
const app = express();
const port = 5000;

const cors = require("cors");

const userRouter = require("./routers/userRouter");
const queryRouter = require("./routers/queryRouter");
const utilRouter = require("./routers/util");
const solutionRouter = require("./routers/solutionRouter.js");

app.use(
  cors({
    origin: ["http://localhost:3000"],
  })
);
app.use(express.json());
app.use(express.static("./static"));

app.use("/user", userRouter);
app.use("/query", queryRouter);
app.use("/util", utilRouter);
app.use("/solution", solutionRouter);

app.listen(port, () => {
  console.log("server started");
});
