const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Define the route for user registration
router.post('/register', userController.registerUser);

router.post('/register', (req, res) => {
    console.log("POST request received at /register");
    res.send("Route is working!");
});


module.exports = router;
