const { red } = require('color-name');
const { User } = require('../models/users');

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
        _id: req.params.friendsId
    }}).then(res.json(User))
    .catch((err) => res.status(500).json(err));
  },
//Delete friend
  deleteFriend(req, res) {
    User.updateOne({ _id: req.params.userId }, {$pullAll: {
        _id: req.params.friendsId
    }}).then(res.json(User))
    .catch((err) => res.status(500).json(err));
  },
    //get a User
    getAllUsers(req, res) {
      User.findById(req.body)
        .then((user) => res.json(user))
        .catch((err) => res.status(500).json(err));
    },

  //getAllUsers
  getAllUsers(req, res) {
    User.find()
      .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err));
  },
  //remove user

  deleteUser(req, res) {
    console.log(req.params.userId);
    User.deleteOne({ _id: req.params.userId })
    .then(res.json(User))
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
    User.updateOne({ _id: req.params.userId },
      req.body
    )
    res.json(User);
  }
};
