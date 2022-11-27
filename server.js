const express = require("express");

const port = 4000;

const app = express();

app.use(express.urlencoded());
app.use(express.json());

app.set("view engine", "ejs");

const userRouter = require("./routes/user");
const shopRouter = require("./routes/shop");

app.use("/", function (req, res, next) {
    console.log(req.method, req.url)
    next();
})

app.get("/", function (req, res) {
    res.status(200).render("index");
});

app.use("/users", userRouter);
app.use("/shops", shopRouter)

app.use("/", function (req, res) {
  res.status(404).render("404");
});

app.listen(port, function () {
  console.log(`Server running on port:${port}`);
});
