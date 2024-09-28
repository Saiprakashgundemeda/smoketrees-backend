const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/db');  // Ensure the database is connected
const userRoutes = require('./routes/userRoutes');

 // Import your user routes

const app = express();

app.use(bodyParser.json());  // Middleware to parse JSON requests
app.use(bodyParser.urlencoded({ extended: true }));

// Define routes here, making sure '/api' is linked to userRoutes
app.use('/api', userRoutes);


const PORT = 3000;
app.listen(PORT, () => {
   console.log(`Server is running on port ${PORT}`);
});
