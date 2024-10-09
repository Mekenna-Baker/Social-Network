import Thought from '../models/thought.js';
import User from '../models/user.js';
// GET all thoughts
export const getAllThoughts = async (_req, res) => {
    try {
        const thoughtsData = await Thought.find();
        res.json(thoughtsData);
    }
    catch {
        res.status(500).json({ error: 'Failed to find thoughts' });
    }
};
// GET a single thought by ID
export const getThoughtById = async (req, res) => {
    try {
        const thoughtData = await Thought.findOne({ _id: req.params.id });
        if (!thoughtData) {
            res.status(404).json({ error: 'No thought with that ID' });
        }
        res.json(thoughtData);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to find thought' });
    }
};
// POST a new thought
export const createThought = async (req, res) => {
    try {
        const newThought = await Thought.create(req.body);
        await User.findByIdAndUpdate(req.body.userId, { $push: { thoughts: newThought._id } }, { new: true });
        res.json(newThought);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to create thought' });
    }
};
// PUT an existing thought by ID
export const updateThought = async (req, res) => {
    try {
        const thought = await Thought.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!thought) {
            res.status(404).json({ error: 'No thought with that ID' });
            return;
        }
        res.json(thought);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to update thought' });
    }
};
// DELETE a thought by ID
export const deleteThought = async (req, res) => {
    try {
        const thoughtData = await Thought.findByIdAndDelete(req.params.id);
        if (!thoughtData) {
            res.status(404).json({ error: 'No thought with that ID' });
        }
        await User.findByIdAndUpdate(req.body.userId, { $pull: { thoughts: req.params.id } }, { new: true });
        res.json({ message: 'Thought deleted' });
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to delete thought' });
    }
};
// POST a new reaction to a thought
export const addReaction = async (req, res) => {
    try {
        const thoughtData = await Thought.findByIdAndUpdate(req.params.thoughtId, { $push: { reactions: req.body } }, { new: true });
        if (!thoughtData) {
            res.status(404).json({ error: 'No thought with that ID' });
        }
        res.json(thoughtData);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to add reaction' });
    }
};
// DELETE a reaction from a thought
export const removeReaction = async (req, res) => {
    try {
        const thought = await Thought.findByIdAndUpdate(req.params.thoughtId, { $pull: { reactions: { _id: req.params.reactionId } } }, { new: true });
        if (!thought) {
            res.status(404).json({ message: 'No thought with that ID ' });
        }
        res.json({ message: 'Reaction removed', thought });
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to remove reaction' });
    }
};
