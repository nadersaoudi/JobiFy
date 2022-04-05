import mongoose from "mongoose";
import validator from 'validator';

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide name'],
        maxlength: 20,
        minlength: 2,
        trim: true
    },
    email: {
        type: String,
        required: [true, 'Please provide email'],
        validate: {
            validator: validator.isEmail,
            message: 'Please provide valid email'
        },
        unique: true,
    },
    password: {
        type: String,
        required: [true, 'Please provide password'],
        minlength: 6,
    },
    lastName: {
        type: String,
        maxlength: 20,
        minlength: 2,
        trim: true,
        default: 'LastName'
    },
    location: {
        type: String,
        maxlength: 20,
        trim: true,
        default: 'my city'
    }
})

export default mongoose.model('User', UserSchema)