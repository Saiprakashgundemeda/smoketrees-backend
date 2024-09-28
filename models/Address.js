const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');  // Import the sequelize instance

// Define the Address model
const Address = sequelize.define('Address', {
    address: {
        type: DataTypes.STRING,
        allowNull: false,  // Ensures the address field is required
    },
    userId: {
        type: DataTypes.INTEGER,
        references: {
            model: 'Users',  // Foreign key reference to User
            key: 'id',
        },
    },
});

module.exports = Address;
