import { Schema, model } from 'mongoose';

//create User Schema

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },

    //ensure email formatting

    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        match: [/.+@.+\..+/, 'Please enter a valid e-mail address'],
    },

    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User',
        },
    ],

    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Thought',
        },
    ],

}, {
    //Convert data to JSON, and include virtual properties(friendCount) 

    toJSON: {
        virtuals: true,
    },
    id: false,

});

//defining the virtual property

userSchema.virtual('friendCount').get(function () {
    return this.friends.length;

});

//create User model using userSchema and export

const User = model('User', userSchema);

export default User;

