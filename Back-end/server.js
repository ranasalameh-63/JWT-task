require("dotenv").config();
const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken"); 
const cookiesParser = require("cookie-parser");
const bodyParser = require("body-parser");

// Express js server
const app = express();
const PORT = 9000;

app.use(bodyParser.json());
app.use(cookiesParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());

// Array to save users data, database alternative
const users = [];

// Create Token to users
const generateToken = (user) => {
  return jwt.sign({ username: user.username }, "Secretkey", {
    expiresIn: "1h",
  });
};

// Middleware to Protect Routes
const authenticateToken = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) return res.status(401).json({ message: "Access Denied" });

  jwt.verify(token, "Secretkey", (err, user) => {
    if (err) return res.status(403).json({ message: "Invalid Token" });
    req.user = user;
    next();
  });
};

// Sign up
app.post("/signup", (req, res) => {
  const { username, password } = req.body;

  if (users.find((u) => u.username === username)) {
    return res.status(400).json({ message: "User already exists" });
  }

  users.push({ username, password });
  res.status(201).json({ message: "User registered successfully" });
});

// Login
app.post("/login", (req, res) => { 
  const { username, password } = req.body;
  const user = users.find((u) => u.username === username && u.password === password);

  if (!user) return res.status(400).json({ message: "Invalid credentials" });

  const token = generateToken(user);
  res.cookie("token", token, { httpOnly: true }); 
  res.json({ message: "Login successful" });
});

// User Profile
app.get("/profile", authenticateToken, (req, res) => { 
  res.json({ message: `Welcome ${req.user.username}` });
});

// Logout
app.post("/logout", (req, res) => {
  res.clearCookie("token" ,{httpOnly :true});
  console.log("done");
  res.json({ message: "Logged out successfully" });
});

app.get("/allusers", (req, res) => { 
    res.json({ users });
  });



// To appear it
app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});
