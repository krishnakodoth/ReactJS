var express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../db/userModel");
var router = express.Router();

/**
 * End point for new user registration
 */
router.post("/register", (request, response) => {
    bcrypt.hash(request.body.password, 10)
        .then((hashedPassword) => {
            // Hashing pasword
            const user = new User({
                username: request.body.username,
                password: hashedPassword,
            });
            user.save().then((result) => {
                response.status(201).send({
                    message: "User Created Successfully",
                    result,
                });
            })
                .catch((error) => {
                    response.status(500).send({
                        message: "Error creating user",
                        error,
                    });
                });
        })
        .catch((e) => {
            response.status(500).send({
                message: "Password was not hashed successfully",
                e,
            });
        });

});

// Endpoint for user authentication
router.post('/auth', async (request, response) => {
    // check if email exists
    User.findOne({ username: request.body.username })

        // if email exists
        .then((user) => {
            // compare the password entered and the hashed password found
            bcrypt
                .compare(request.body.password, user.password)

                // if the passwords match
                .then((passwordCheck) => {

                    // check if password matches
                    if (!passwordCheck) {
                        return response.status(400).send({
                            message: "Passwords does not match",
                            error,
                        });
                    }

                    //   create JWT token
                    const token = jwt.sign(
                        {
                            userId: user._id,
                            userEmail: user.email,
                        },
                        "RANDOM-TOKEN",
                        { expiresIn: "24h" }
                    );

                    //   return success response
                    response.status(200).send({
                        message: "Login Successful",
                        email: user.email,
                        token,
                    });
                })
                // catch error if password does not match
                .catch((error) => {
                    response.status(400).send({
                        message: "Passwords does not match",
                        error,
                    });
                });
        })
        // catch error if email does not exist
        .catch((e) => {
            response.status(404).send({
                message: "Email not found",
                e,
            });
        });
})

module.exports = router;