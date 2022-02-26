const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const thoughtSchema = new mongoose.Schema({
    thoughtText: { type: String, minlength: 1, maxlength: 280, required: true },
    username: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    userId: { type: String },
    reactions: [{
        reactionId: { type: Schema.Types.ObjectId},
        reactionBody: { type: String, maxlength: 280, required: true },
        username: { type: String, required: true },
        userId: { type: String},
        createdAt: { type: Date, default: Date.now }
    }],
},
{
  toJSON: {
    getters: true,
  },
  id: false,
});

// Create a virtual property `commentCount` that gets the amount of comments per post
thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
  });

const Thought = mongoose.model('Thought', thoughtSchema);


module.exports = Thought;
