# Admin Panel with Cookie Authentication 🍪

A secure admin panel built with Node.js, Express.js, EJS, and cookie-based authentication. This project includes admin login, logout functionality, protected routes, and session handling using cookies.

## 🚀 Features

- Secure admin login authentication
- Cookie-based session management
- Protected admin routes
- Logout functionality
- Middleware-based authentication check
- EJS templating engine
- Express.js backend
- Clean project structure

## 🛠 Tech Stack

- Node.js
- Express.js
- EJS
- Cookie-Parser
- HTML
- CSS
- JavaScript

## 📂 Project Structure

```bash
Admin_Panel_Cookies/
│
├── middleware/
│   └── auth.js
│
├── routes/
│   └── adminRoutes.js
│
├── views/
│   ├── login.ejs
│   ├── dashboard.ejs
│
├── public/
│   ├── css/
│   ├── js/
│
├── index.js
├── package.json
└── README.md
```

## ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/priyalodha41/Admin_Panel_Cookies.git
```

Move into the project folder:

```bash
cd Admin_Panel_Cookies
```

Install dependencies:

```bash
npm install
```

Start the server:

```bash
nodemon index.js
```

Or:

```bash
node index.js
```

## 🔐 Authentication Flow

1. Admin enters login credentials
2. Server verifies credentials
3. Authentication cookie is created
4. Protected routes become accessible
5. On logout, cookie is cleared and session ends

## 📸 Features Included

✅ Login Page  
✅ Admin Dashboard  
✅ Protected Routes  
✅ Cookie Authentication  
✅ Logout System  

## Future Improvements

- JWT Authentication
- Role-based access control
- Database integration (MongoDB/MySQL)
- Password hashing with bcrypt
- Flash messages
- Better UI/UX

## Learning Purpose

This project was built to practice backend authentication concepts in Node.js and Express.

## Author

**Priya Lodha**

GitHub: https://github.com/priyalodha41