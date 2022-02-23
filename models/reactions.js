const mongoose = require('mongoose');

const reactionSchema = new mongoose.Schema({
    reactionId: { type: Schema.Types.ObjectId, required: true },
    reactionBody: { type: String, maxlength: 280, required: true },
    username: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

const Reaction = mongoose.model('Reaction', reactionSchema);


module.exports = Reaction;
