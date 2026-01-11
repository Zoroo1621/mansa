import mongoose from "mongoose";

const FormSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    gmail: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    date: String,
    time: String,
    message: String,
}, {
    timestamps: true // Adds createdAt and updatedAt automatically
});

// Correct model definition
const Form = mongoose.models.Form || mongoose.model('Form', FormSchema);

export default Form;