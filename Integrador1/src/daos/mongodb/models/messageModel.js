import mongoose from 'mongoose';

const messageSchema = new mongoose.Schema({
    username: { type: String, required: true },
    message: { type: String, required: true }
});

export const MessageModel = mongoose.model('messages', messageSchema);