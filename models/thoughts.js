const mongoose = require('mongoose');

const thoughtSchema = new mongoose.Schema({
    thoughtText: { type: String, minlength: 1, maxlength: 280, required: true },
    username: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

const Thought = mongoose.model('Thought', thoughtSchema);


module.exports = Thought;
