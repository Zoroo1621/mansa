import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
// import Form from './models/Form.js'; // Import the model
import Form from './models/FormSchema.js';

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(express.json()); // This is missing - needed to parse JSON bodies
app.use(express.urlencoded({ extended: true })); // For form data

const db = 'mongodb://localhost:27017/mansa';

// Connect to MongoDB and start server
mongoose.connect(db)
  .then(() => {
    console.log("DB connected successfully");
    app.listen(port, () => {
      console.log(`App is running on port ${port}`);
    });
  })
  .catch((err) => {
    console.log("MongoDB connection error:", err);
  });

// Routes
app.post('/', async (req, res) => {
  try {
    const { name, phone, gmail, date, time, message } = req.body;
    
    // Validate required fields
    if (!name || !phone || !gmail) {
      return res.status(400).json({ 
        success: false, 
        message: 'Name, phone, and email are required' 
      });
    }

    const formData = new Form({
      name,
      phone,
      gmail,
      date,
      time,
      message,
    });

    await formData.save();
    
    res.status(201).json({ 
      success: true, 
      message: 'Form submitted successfully', 
      data: formData 
    });
  } catch (err) {
    console.error("Error saving form:", err);
    res.status(400).json({ 
      success: false, 
      message: err.message 
    });
  }
});

// Optional: Add a test route
app.get('/', (req, res) => {
  res.json({ message: 'API is working' });
});