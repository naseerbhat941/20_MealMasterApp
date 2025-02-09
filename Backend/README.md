# MealMaster App - Backend

This is the backend of **MealMaster**, a meal planning application that allows users to create meal plans, track their nutrition, and receive personalized insights based on dietary preferences.

---

## **Table of Contents**

- [Project Overview](#project-overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Folder Structure](#folder-structure)
- [API Endpoints](#api-endpoints)
- [Authentication & OAuth](#authentication--oauth)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

---

## **Project Overview**

MealMaster is a web-based meal planning and nutrition tracking application that helps users maintain a healthy diet by allowing them to:  
✅ Plan meals for the week  
✅ Generate grocery lists automatically  
✅ Track daily caloric intake  
✅ Receive AI-based meal suggestions

---

## **Features**

🔹 **User Authentication** - Secure login & registration (including OAuth with Google)  
🔹 **Profile Management** - Users can set dietary preferences, goals, and allergies  
🔹 **Recipe Management** - Users can create, edit, and delete recipes  
🔹 **Meal Planning** - Users can schedule meals for the week  
🔹 **Grocery List Generator** - Automatically generates a shopping list from the meal plan  
🔹 **Nutritional Tracking** - Logs daily food intake and calculates calories/macros  
🔹 **OAuth Login** - Supports Google login via Passport.js  
🔹 **Email Services** - Password reset functionality using **Nodemailer & Gmail SMTP**

---

## **Tech Stack**

- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Mongoose ODM)
- **Authentication**: JWT, Passport.js (Google OAuth)
- **Email Services**: Nodemailer (Gmail SMTP)
- **Environment Management**: dotenv
- **Session Management**: express-session

---

## **Installation**

### **Step 1: Clone the Repository**

```bash
git clone https://github.com/naseerbhat941/20_MealMasterApp
cd MealMaster_Backend

Step 2: Install Dependencies
npm install

 Step 3: Set Up Environment Variables
PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
GMAIL_USER=your_gmail_email
GMAIL_PASSWORD=your_gmail_app_password
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
GOOGLE_CALLBACK_URL=http://localhost:5000/auth/google/callback

Step 4: Start the Server
npm start
Folder Structure
MealMaster_Backend/
│── config/
│   ├── db.js               # Database connection
│   ├── emailService.js     # Email service (Nodemailer)
│── controllers/
│   ├── authController.js   # Authentication logic
│   ├── userController.js   # User profile management
│   ├── recipeController.js # Recipe CRUD operations
│   ├── mealController.js   # Meal planning logic
│── models/
│   ├── User.js             # User model
│   ├── Recipe.js           # Recipe model
│   ├── Meal.js             # Meal model
│── routes/
│   ├── authRoutes.js       # Authentication routes
│   ├── userRoutes.js       # User management routes
│   ├── recipeRoutes.js     # Recipe management routes
│   ├── mealRoutes.js       # Meal planning routes
│── middleware/
│   ├── authMiddleware.js   # Middleware for authentication
│── server.js               # Main server file
│── .env                    # Environment variables
│── package.json            # Dependencies
│── README.md               # Documentation

API Endpoints

Authentication (OAuth & JWT)
Method	Endpoint
POST	/auth/register
POST	/auth/login
GET	/auth/google
GET	/auth/google/callback
POST	/auth/forgot-password
POST	/auth/reset-password

User Profile

Method	Endpoint
GET	/users/
GET	/users/:id
PATCH	/users/:id
DELETE	/users/:id

Recipes

Method	Endpoint
GET	/recipes/
POST	/recipes/
GET	/recipes/:id
PATCH	/recipes/:id
DELETE	/recipes/:id

Meal Planning
Method	Endpoint
GET	/meals/
POST	/meals/
GET	/meals/:id
PATCH	/meals/:id
DELETE	/meals/:id

Authentication & OAuth

User Authentication: Uses JWT (JSON Web Token) for secure login.
OAuth Login: Supports Google OAuth via passport-google-oauth20.

Usage

Register a new user

curl -X POST http://localhost:5000/auth/register \
  -H "Content-Type: application/json" \
  -d '{"name": "John Doe", "email": "john@example.com", "password": "123456"}'

Login to get JWT Token

curl -X POST http://localhost:5000/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email": "john@example.com", "password": "123456"}'

  Contact

For any queries or contributions, reach out at:
📧 Email: naseerbhat941.com
🚀 GitHub: naseerbhat941


This **README.md** serves as a complete guide to the **MealMaster Backend** project. 🚀
```
