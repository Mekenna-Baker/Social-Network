import { Request, Response } from 'express';
import User from '../models/user.js';

// GET all users
export const getAllUsers = async (_req: Request, res: Response) => {
    try {
        const usersData = await User.find();
        res.json(usersData);
    } catch {
        res.status(500).json({ error: 'Failed to find users' });
    }
};

// GET a single user by ID
export const getUserById = async (req: Request, res: Response) => {
    try {
        const userData = await User.findOne({ _id: req.params.id });
        if (!userData) {
            res.status(404).json({ error: 'No user with that ID' });
            return;
        }
        res.json(userData);
    } catch (error) {
        res.status(500).json({ error: 'Failed to find user' });
    }
};

// POST a new user
export const createUser = async (req: Request, res: Response) => {
    try {
        const newUser = await User.create(req.body);
        res.json(newUser);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create user' });
    }
};

// PUT an existing user by ID
export const updateUser = async (req: Request, res: Response) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!user) {
            res.status(404).json({ error: 'User not found' });
            return;
        }
        res.json(user);
    } catch (error) {
        res.status(400).json({ error: 'Failed to update user' });
    }
};

// DELETE a user by ID
export const deleteUser = async (req: Request, res: Response) => {
    try {
        const userData = await User.findByIdAndDelete(req.params.id);
        if (!userData) {
            res.status(404).json({ error: 'User not found' });
            return;
        }
        res.json({ message: 'User deleted' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete user' });
    }
};

// POST a new friend to user friend list
export const addFriend = async (req: Request, res: Response) => {
    try {
        const userData = await User.findByIdAndUpdate(
            req.params.userId,
            { $addToSet: { friends: req.params.friendId } },
            { new: true }
        );
        if (!userData) {
            res.status(404).json({ error: 'User not found' });
            return;
        }
        res.json(userData);
    } catch (error) {
        res.status(500).json({ error: 'Failed to add friend' });
    }
};

// DELETE a friend from user friend list
export const removeFriend = async (req: Request, res: Response) => {
    try {
        const userData = await User.findByIdAndUpdate(
            req.params.userId,
            { $pull: { friends: req.params.friendId } },
            { new: true }
        );
        if (!userData) {
            res.status(404).json({ error: 'User not found' });
        }
        res.json({ message: 'Friend removed', userData });
    } catch (error) {
        res.status(500).json({ error: 'Failed to remove friend' });
    }
};