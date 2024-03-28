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