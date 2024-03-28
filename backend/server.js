require('dotenv').config()

const messagesRoutes = require('./routes/messagesRoutes')

const express = require('express')
const cors = require('cors')
const app  = express()
const mongoose = require('mongoose')

app.use(cors())

app.use(express.json())

app.use('/api/messages', messagesRoutes)

app.get('/', (req, res) => {
    res.send('Hello World!')
})

// Add CORS handling middleware
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // Allow requests from any origin
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
        return res.status(200).json({});
    }
    next();
});

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    app.listen(process.env.PORT, () => {
        console.log("Connected to db & listening on port", process.env.PORT);
    });
})
.catch((error) => {
    console.error("Error connecting to the database:", error);
    process.exit(1); // Exit the process if unable to connect to the database
});
