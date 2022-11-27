const { Router } = require("express");
const userControllers = require("../controllers/user");

const router = Router();

router.get("/", userControllers.getUsers);

router.post("/", userControllers.postUsers);

router.put("/", function (req, res) {
  res.status(200).send("PUT: /users => Successfull");
});

router.delete("/", function (req, res) {
  res.status(200).send("DELETE: /users => Successfull");
});

module.exports = router;
