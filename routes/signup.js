const express = require("express");
const router = express.Router();
const signupCtrl = require("../controller/signup-controller");
const { check, validationResult } = require('express-validator');

router.get("/", (req, res, next) => {
    res.render("index", { errors: {}, data: {} });
})

router.post("/add", [check('email', 'Email is not valid!').isEmail(), check('password', 'Password must be alphanumeric and atleast 7 characters long!').isLength({ min: 7, max: 10 }).isAlphanumeric()], signupCtrl.signup);

module.exports = router;
