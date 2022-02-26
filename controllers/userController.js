const { red } = require('color-name');
const Thought = require('../models/thoughts');
const User  = require('../models/users');

module.exports = {
    //get all friends
  getFriendList(req, res) {
    User.findById(req.params.userId)
      .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err));
  },
  // create a new user
  addFriend(req, res) {
    User.updateOne({ _id: req.params.userId }, {$push: {
        friends: req.params.friendsId
    }},{new: true}).then((user) => res.json(user))
    .catch((err) => res.status(500).json(err));
  },
//Delete friend
  deleteFriend(req, res) {
    User.updateOne({ _id: req.params.userId }, {$pull: {
      friends: req.params.friendsId
    }},{new: true}).then((user) => res.json(user))
    .catch((err) => res.status(500).json(err));
  },
    //get a User
    getSingleUser(req, res) {
      User.findById(req.params.userId)
        .then((user) => res.json(user))
        .catch((err) => res.status(500).json(err));
    },

  //getAllUsers
  getAllUsers(req, res) {
    User.find({})
      .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err));
  },
  //remove user

  deleteUser(req, res) {
    console.log(req.params.userId);
    User.deleteOne({ _id: req.params.userId })
    .then(function(){
        Thought.deleteMany({reactions: {userId: req.body.params}});
        Thought.deleteMany({_id: req.params.userId })
        res.json('Deleted')
    })
    .catch((err) => res.status(500).json(err));
  },

  //post new user
  addUser(req, res) {
    User.create(req.body)
    .then((user) => res.json(user))
    .catch((err) => res.status(500).json(err));
  },

  // Update User data
  updateUser(req, res){
    User.findByIdAndUpdate(req.params.userId,
      req.body
    ).then((user) => res.json(user))
  }
};
