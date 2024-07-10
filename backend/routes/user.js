const express = require('express');
const router = express.Router();
const UserController = require('../controllers/user');

// Register a new user
router.post('/register', async (req, res) => {
    try {
        const newUser = await UserController.registerUser(req.body);
        res.status(201).json(newUser);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Log in an existing user
router.post('/login', async (req, res) => {
    try {
        const user = await UserController.loginUser(req.body.email, req.body.password);
        res.status(200).json(user);
    } catch (error) {
        console.error(error);
        res.status(401).json({ message: 'Invalid credentials' });
    }
});

// Logout Route
router.post('/logout', (req, res) => {
    // Implement logout functionality here
    // Typically, logout involves destroying the session or clearing the authentication token
    res.send({ message: "Logged out successfully" });
});

module.exports = router;
