🛠️ Equipment Maintenance Logger

A full-stack MEAN (MongoDB, Express.js, Angular, Node.js) application designed to efficiently manage equipment, track maintenance activities, and proactively identify service requirements.
The project focuses on real-world usability, clean architecture, and scalable design rather than just fulfilling basic CRUD operations.

📌 Project Overview

The Equipment Maintenance Logger helps organizations maintain operational reliability by:

Registering equipment and tracking service dates

Logging maintenance activities

Automatically determining service status

Providing a clear maintenance history per equipment

The application is built with a modular backend, a component-driven frontend, and persistent data storage, closely resembling how real production systems are structured.

✨ Key Features
🔧 Equipment Management

Register equipment with:

Equipment Name

Serial Number (unique)

Last Service Date

Input validation on both frontend and backend

Persistent storage using MongoDB

📊 Smart Equipment Dashboard

View all registered equipment in a clean tabular layout

Automatic service status calculation:

🟢 OK – Serviced recently

🟡 Due Soon – Approaching service threshold

🔴 Due for Service – Requires immediate attention

Color-coded status badges for instant visibility

🛠️ Maintenance Logging

Log maintenance activities using a dedicated form

Each log updates the equipment’s last service date

Ensures data consistency between equipment and maintenance records

📜 Maintenance History

View complete maintenance history for a selected equipment

Sorted by most recent service first

Clear timeline with service date and description

📈 Summary Insights

Total number of registered equipment

Count of equipment that are due for service

Enables quick high-level monitoring

📱 Responsive & User-Friendly UI

Clean Teal & Charcoal professional theme

Mobile-responsive layout

Loading indicators and clear user feedback messages

🧠 Design & Architecture Decisions
Backend

RESTful API design with proper separation of concerns

Controllers, routes, models, and utilities organized modularly

Centralized logic for service-status calculation

Robust error handling using middleware

Environment-based configuration

Frontend

Angular standalone components with clear folder structure

Reactive Forms for predictable state and validation

Shared components (status badges, loaders) for reusability

Services layer for API communication

Pipes used for clean UI logic abstraction

Data Modeling

One-to-many relationship between Equipment and Maintenance

Maintenance records linked using equipmentId

Equipment service status derived dynamically from service date

🧰 Tech Stack
Frontend

Angular (latest stable)

TypeScript

Reactive Forms

SCSS

Backend

Node.js

Express.js

Mongoose (MongoDB ODM)

Database

MongoDB

📂 Project Structure
equipment-maintenance-logger/
│
├── backend/
│   ├── src/
│   │   ├── config/
│   │   ├── models/
│   │   ├── controllers/
│   │   ├── routes/
│   │   ├── utils/
│   │   ├── middlewares/
│   │   ├── app.js
│   │   └── server.js
│
├── frontend/
│   ├── src/
│   │   ├── app/
│   │   │   ├── core/
│   │   │   ├── shared/
│   │   │   ├── pages/
│   │   │   ├── app-routing.module.ts
│   │   │   └── app.module.ts
│   │   ├── environments/
│   │   └── styles.scss
│
└── README.md

⚙️ Local Setup Instructions
Prerequisites

Node.js (v18 or higher)

MongoDB (local or Atlas)

Backend Setup
cd backend
npm install


Create a .env file:

PORT=5000
MONGODB_URI=<your_mongodb_connection_string>


Start backend:

npm run dev

Frontend Setup
cd frontend
npm install
npm start


Open:

http://localhost:4200

🧪 Validation & Error Handling

Required field validation on all forms

User-friendly success and error messages

Graceful handling of API failures

Data remains consistent across refreshes

👨‍💻 Author

Gagan Naik
Master of Computer Applications (MCA)
Passionate about building scalable, real-world web applications using modern full-stack technologies.