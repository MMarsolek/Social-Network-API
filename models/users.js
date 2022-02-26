const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Thought = require('./thoughts');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, unique: true, required: true, validate: {
        validator: function(email) {
            return email != undefined && email != null && /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
        },
        message: "Please enter a valid email"
      }},
      thoughts: [{type: Schema.Types.ObjectId, ref: 'Thought'}],
      friends: [{type: Schema.Types.ObjectId, ref: 'User'}],
      createdAt: {type: Date, default: Date.now}
},
{
    toJSON: {
      getters: true,
      virtuals: true,
    },
    id: false,
  }
);
userSchema.virtual('thoughtsCount').get(function () {
    return this.thoughts.length;
  });
  
userSchema.virtual('friendsCount').get(function () {
return this.friends.length;
});


const User = mongoose.model('User', userSchema);


module.exports = User;
