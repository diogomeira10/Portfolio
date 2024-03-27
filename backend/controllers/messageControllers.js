const messages = require('../models/messageModel');
const mongoose = require('mongoose');

const createMessage = async (req, res) => {
    const { name, email, message } = req.body;

    let emptyFields = [];

    if (!name) {
        emptyFields.push('name');
    }
    if (!email) {
        emptyFields.push('email');
    }
    if (!message) {
        emptyFields.push('message');
    }




    if (emptyFields.length > 0) {
        return res.status(400).json({ error: "Please fill in all the fields", emptyFields });
    }



    try {
        const newMessage = await messages.create({ name, email, message });
        res.status(200).json(newMessage);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = {
    createMessage
};
