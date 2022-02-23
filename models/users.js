const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Thought = require('./thoughts');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, unique: true, required: true, validate: {
        validator: function(v) {
            return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
        },
        message: "Please enter a valid email"
      }},
      thoughts: [{type: Schema.Types.ObjectId, ref: "Thought"}],
      friends: [{type: Schema.Types.ObjectId, ref: "User"}],
    createdAt: { type: Date, default: Date.now }
});

const User = mongoose.model('Reaction', userSchema);


module.exports = {User};
