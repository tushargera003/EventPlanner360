const UserModel = require('../models/user');
const bcrypt = require('bcrypt');

async function registerUser(userData) {
    try {
        // Check if user with the provided email already exists
        const existingUser = await UserModel.getUserByEmail(userData.email);
        if (existingUser) {
            throw new Error('User with this email already exists');
        }

        // Create a new user
        const userId = await UserModel.createUser(userData);
        
        // Return the ID of the newly created user
        return { userId };
    } catch (error) {
        console.error('Error registering user:', error);
        throw new Error('Unable to register user');
    }
}

async function loginUser(email, password) {
    try {
        // Retrieve user information based on email
        const user = await UserModel.getUserByEmail(email);
        if (!user) {
            throw new Error('User with this email does not exist');
        }

        // Compare provided password with hashed password from the database
        const passwordMatch = await bcrypt.compare(password, user.password);

        // If passwords match, return user data
        if (passwordMatch) {
            return { userId: user.user_id, username: user.username, email: user.email };
        } else {
            throw new Error('Incorrect password');
        }

    } catch (error) {
        console.error('Error logging in user:', error);
        throw new Error('Unable to login user');
    }
}

async function getUserProfile(userId) {
    try {
        const user = await UserModel.getUserById(userId);
        return user;
    } catch (error) {
        throw new Error('Unable to get user profile');
    }
}

module.exports = {
    registerUser,
    loginUser,
    getUserProfile
    // Export other functions as needed
};
