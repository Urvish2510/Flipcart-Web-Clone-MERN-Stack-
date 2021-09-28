const express = require('express');
const cors = require('cors'); //Cross-Origin Resourse file
const dotenv = require('dotenv');

//enable environment file
dotenv.config();

const db = require('./Database/db');
const app = express();

app.use(cors());
app.use(express.json());

const indexRoutes = require('./Routes/index.route')
app.use('/api', indexRoutes);

//Start Server Call
app.listen(process.env.PORT, () => { 
    console.log(`Listening to http://localhost:${process.env.PORT}`);
});

// {
//     "email": "mrxyz9305@gmail.com",
//     "firstname": "Mr",
//     "lastname": "XYZ",
//     "password": "mrxyz123"
// }

// {
//     "email": "mrpatel9305@gmail.com",
//     "firstname": "Mr",
//     "lastname": "Patel",
//     "password": "mrpatel123"
// }

// {
//     "email": "mrdeveloper1234@gmail.com",
//     "firstname": "Mr",
//     "lastname": "Developer",
//     "password": "mrdeveloper"
// }

// {
//     "email": "mrjs1234@gmail.com",
//     "firstname": "Mr",
//     "lastname": "JS",
//     "password": "I_am_JavaScript"
// }