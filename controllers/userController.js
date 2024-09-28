const User = require('../models/User');
const Address = require('../models/Address');

// Function to register user and address
exports.registerUser = async (req, res) => {
    try {
        const { name, address } = req.body;  // Get name and address from the request body

        // Create a new user
        const user = await User.create({ name });
        // Create the address and associate it with the user
        await Address.create({ address, userId: user.id });

        res.status(201).json({ message: 'User and address created successfully!' });
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while registering the user' });
    }
};
