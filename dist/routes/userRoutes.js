import { Router } from 'express';
import { getAllUsers, getUserById, createUser, updateUser, deleteUser, addFriend, removeFriend } from '../controllers/userController.js';
const router = Router();
//User Routes
// GET all users
router.get('/', getAllUsers);
// GET a single user by ID
router.get('/:id', getUserById);
// POST a new user
router.post('/', createUser);
// PUT an existing user by ID
router.put('/:id', updateUser);
// DELETE a user by ID
router.delete('/:id', deleteUser);
//Friend Routes
// POST to add a new friend to a user's friend list
router.post('/:userId/friends/:friendId', addFriend);
// DELETE to remove a friend from a user's friend list
router.delete('/:userId/friends/:friendId', removeFriend);
export default router;
