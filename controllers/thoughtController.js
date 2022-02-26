const  Thought  = require('../models/thoughts');
const User = require('../models/users');

module.exports = {
  getThought(req, res) {
    Thought.find({})
      .then((thought) => res.json(thought))
      .catch((err) => res.status(500).json(err));
  },

  getSingleThought(req, res) {
    Thought.findOne({ _id: req.params.thoughtId })
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No Thought with that ID' })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },
  // create a new Thought
  createThought(req, res) {
    Thought.create(req.body)
    .then((dbThoughtData) => {
        User.updateOne({_id:req.body.userId}, {
            $push: {
                thoughts: dbThoughtData._id
            }
        },{new: true}).catch(err => console.log(err));
        res.json(dbThoughtData);
    }).catch((err) => res.status(500).json(err));
  },

  deleteThought(req, res) {
    console.log(req.params.thoughtId);
    Thought.deleteOne({ _id: req.params.thoughtId })
    .then(res.send(`Deleted ${req.params.thoughtId}`))
    .catch((err) => res.status(500).json(err));
  },
    // create a new Reaction
    createReaction(req, res) {
        Thought.updateOne({_id: req.params.thoughtId},
            {$push: {reactions : req.body}}, {new: true})
        .then((reactionData) => res.json(reactionData))
        .catch((err) => res.status(500).json(err));
    },
  
    deleteReaction(req, res) {
      Thought.findById(req.params.thoughtId).then(function(thoughts) {
       if(!thoughts){
              return res.status(404).send('No thoughts by that ID');
          }
          thoughts.update({$pull: { reactions: req.body.reactionId }});
      }).then(res.send(`Deleted ${req.params.thoughtId}`));
    }
};
