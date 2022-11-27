const { Router } = require("express");

const router = Router();

router.get("/", function (req, res) {
    res.status(200).send("GET: /shops => Successful")
})

module.exports = router;