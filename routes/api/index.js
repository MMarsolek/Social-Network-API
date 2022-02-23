const router = require('express').Router();
const reactionRoutes = require('./reaction-routes');
const userRoutes = require('./user-routes');
const thoughtsRoutes = require('./thoughts-routes');

router.use('/reactions', reactionRoutes);
router.use('/users', userRoutes);
router.use('/thoughts', thoughtsRoutes);

module.exports = router;