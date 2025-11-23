// 1️⃣ Import dependencies
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

const app = express(); 
const url="mongodb+srv://appUser:EliteBook863@cluster0.inmff1g.mongodb.net/?appName=Cluster0"
mongoose.connect(url)
  .then(() => console.log("MongoDB connected"))
 
const PORT = 5000;

//  Middleware
app.use(cors()); 
app.use(express.json());//read json data from request body
app.use(express.urlencoded({ extended: true }));           
 

//  Routes
app.post('/login', (req, res) => {
  console.log("Backend API for login hit");
  console.log('Received Login Data:', req.body);
  
});
app.post('/Booking', (req, res) => {
  console.log("Backend API for Booking hit");
  console.log('Received Booking Data:', req.body);
 
});

app.post('/Signin', (req, res) => {
  console.log("Backend API for Signin hit");
  console.log('Received Signin Data:', req.body);
 
});

app.post('/addProduct', (req, res) => {
  console.log("Backend API for add product hit");
  console.log('Received Product Data:', req.body);
 
});





//  Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
