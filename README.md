# ⏱️ Stopwatch Backend API

A RESTful backend service for managing stopwatch sessions with user authentication.  
Built with **Node.js**, **Express**, and **MongoDB**, following a modular and scalable architecture.

---

## 🚀 Features

- User authentication (Register & Login)
- JWT-based authentication middleware
- Protected stopwatch routes
- Create, start, stop, reset, and fetch stopwatches
- Modular folder structure
- Environment-based configuration

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- JSON Web Tokens (JWT)
- dotenv

---

## 📁 Project Structure

```bash
StopWatch/
│
├── auth/
│   ├── auth.routes.js
│   ├── auth.controller.js
│   ├── auth.middleware.js
│
├── modules/
│   └── stopwatch/
│       ├── stopwatch.routes.js
│       ├── stopwatch.controller.js
│       ├── stopwatch.model.js
│
├── config/
│   └── db.js
│
├── app.js
├── server.js
├── package.json
├── package-lock.json
└── .env
