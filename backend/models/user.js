const db = require('../db');
const bcrypt = require('bcrypt');

async function createUser(userData) {
    try {
        // Destructure userData object
        const { username, email, password } = userData;

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10); // Salt rounds: 10

        // Insert new user into the database with hashed password
        const [result, fields] = await db.execute('INSERT INTO users (username, email, password) VALUES (?, ?, ?)', [username, email, hashedPassword]);
        
        // Return the ID of the newly created user
        return result.insertId;
    } catch (error) {
        console.error('Error creating user:', error);
        throw new Error('Unable to create user');
    }
}

async function getUserById(userId) {
    try {
        // Retrieve user information from the database based on user ID
        const [rows, fields] = await db.execute('SELECT * FROM users WHERE user_id = ?', [userId]);
        
        // Check if user with the given ID exists
        if (rows.length === 0) {
            throw new Error('User not found');
        }

        // Return the user information
        return rows[0];
    } catch (error) {
        console.error('Error getting user by ID:', error);
        throw new Error('Unable to get user information');
    }
}

async function getUserByEmail(email) {
    try {
        // Retrieve user information from the database based on email
        const [rows, fields] = await db.execute('SELECT * FROM users WHERE email = ?', [email]);
        
        // Check if user with the given email exists
        if (rows.length === 0) {
            return null; // Return null if user is not found
        }

        // Return the user information
        return rows[0];
    } catch (error) {
        console.error('Error getting user by email:', error);
        throw new Error('Unable to get user information by email');
    }
}

// Implement other CRUD operations as needed

module.exports = {
    createUser,
    getUserById,
    getUserByEmail,
    // Export other functions as needed
};
