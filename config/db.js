const { Sequelize } = require('sequelize');

// Set up a connection to the MySQL database using Sequelize
const sequelize = new Sequelize('smoketrees', 'root', 'Sai@2003', {
    host: 'localhost',
    dialect: 'mysql', 
});

// Test the connection
sequelize.authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

module.exports = sequelize;

// const sequelize = new Sequelize('smoketrees', 'root', 'your_password', {
//     host: 'localhost',
//     dialect: 'mysql',
// });

