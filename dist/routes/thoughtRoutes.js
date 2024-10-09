import { Router } from 'express';
import { getAllThoughts, getThoughtById, createThought, updateThought, deleteThought, addReaction, removeReaction } from '../controllers/thoughtController';
const router = Router();
//Thought Routes
// GET all thoughts
router.get('/', getAllThoughts);
// GET a single thought by ID
router.get('/:id', getThoughtById);
// POST a new thought
router.post('/', createThought);
// PUT an existing thought by ID
router.put('/:id', updateThought);
// DELETE a thought by ID
router.delete('/:id', deleteThought);
//Reaction Routes
// POST to add a new reaction to a thought
router.post('/:thoughtId/reactions', addReaction);
// DELETE to remove a reaction from a thought
router.delete('/:thoughtId/reactions/:reactionId', removeReaction);
export default router;
