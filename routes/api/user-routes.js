const router = require('express').Router();
const {
  getFriendList,
  addFriend,
  deleteFriend,
  getAllUsers,
  deleteUser,
  addUser,
  updateUser,
  getSingleUser
} = require('../../controllers/userController');


router.route('/friends/:userId').get(getFriendList);

router.route('/:userId/friends/:friendsId').delete(deleteFriend).post(addFriend);

router.route('/:userId').put(updateUser).delete(deleteUser).get(getSingleUser);

router.route('/').get(getAllUsers).post(addUser);

module.exports = router;