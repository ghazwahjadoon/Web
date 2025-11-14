// 1️⃣ Import dependencies
import express from 'express';
import cors from 'cors';

// 2️⃣ Create the app
const app = express();  
const PORT = 5000;

// 3️⃣ Middleware
app.use(cors());           // ✅ enable CORS
app.use(express.json());   // ✅ parse JSON bodies

// 4️⃣ Routes
app.post('/login', (req, res) => {
  console.log("Backend API for login hit", req.body);
  res.json({ message: "Login API hit" });
});
app.post('/Booking', (req, res) => {
  console.log("Backend API for Booking hit", req.body);
  res.json({ message: "Booking API hit" });
});

app.post('/Signin', (req, res) => {
  console.log("Backend API for Signin hit", req.body);
  res.json({ message: "Signin API hit" });
});


// 5️⃣ Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
