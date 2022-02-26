const router = require('express').Router();
const {
  getSingleThought,
  getThought,
  createThought,
  deleteThought,
  deleteReaction,
  createReaction,
} = require('../../controllers/thoughtController');

router.route('/').get(getThought).post(createThought);

router.route('/:thoughtId').delete(deleteThought).get(getSingleThought);

router.route('/:thoughtId/reactions').delete(deleteReaction).post(createReaction);

module.exports = router;
