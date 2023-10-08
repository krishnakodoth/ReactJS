var express = require("express");
const auth = require("../auth");
var router = express.Router();

router.get("/", function (req, res, next) {
    res.send("API is working properly");
});

// free endpoint
router.get("/free-endpoint", (request, response) => {
    response.json({ message: "You are free to access me anytime" });
});

// authentication endpoint
router.get("/auth-endpoint",auth, (request, response) => {
    response.json({ message: "You are authorized to access me" });
});


module.exports = router;