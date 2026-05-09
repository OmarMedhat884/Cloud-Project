# Task Management System

## Project Overview

This project is a cloud-based Task Management System developed using Node.js, Express.js, MongoDB, Docker, and AWS EC2.

The system allows users to:

- Register and login
- Create tasks
- View tasks
- Update tasks
- Delete tasks

Each user can manage their own tasks securely using authentication and session management.

The project demonstrates cloud deployment concepts, Docker containerization, backend development, database integration, and authentication systems.

---

# Project Objectives

The main objectives of this project are:

- Build a full-stack web application
- Use MongoDB for persistent data storage
- Implement CRUD operations
- Apply user authentication
- Containerize the application using Docker
- Deploy the application on AWS cloud services

---

# Technologies Used

| Technology | Purpose |
|---|---|
| Node.js | Backend runtime |
| Express.js | Backend framework |
| MongoDB | Database |
| Docker | Containerization |
| Docker Compose | Multi-container management |
| HTML/CSS/JavaScript | Frontend |
| AWS EC2 | Cloud deployment |

---

# Features

- User Authentication (Register/Login)
- CRUD Operations
- REST API
- MongoDB Database
- Docker Containerization
- Logging using Morgan
- Error Handling

---

# System Architecture

The system consists of:

## 1. Frontend
A simple user interface developed using:
- HTML
- CSS
- JavaScript

The frontend allows users to:
- Register
- Login
- Manage tasks

---

## 2. Backend

The backend was developed using Express.js.

It provides REST API endpoints for:
- Authentication
- Task management
- CRUD operations

---

## 3. Database

MongoDB was used as a NoSQL database for storing:
- User accounts
- User tasks

Each task is connected to a specific user.

---

## 4. Authentication System

The application includes:
- User Registration
- User Login
- Session-based authentication
- Password encryption using bcryptjs

This ensures that users can only access their own tasks.

---

# Project Structure

```bash
app/
│
├── controllers/
├── middleware/
├── models/
├── public/
├── routes/
├── Dockerfile
├── package.json
├── server.js
│
docker-compose.yml
```

---

# CRUD Operations

| Operation | Description |
|---|---|
| Create | Add tasks |
| Read | View tasks |
| Update | Edit tasks |
| Delete | Remove tasks |

---

# API Endpoints

## Authentication

| Method | Endpoint | Description |
|---|---|---|
| POST | /register | Register new user |
| POST | /login | Login user |
| GET | /logout | Logout user |

---

## Tasks

| Method | Endpoint | Description |
|---|---|---|
| GET | /items | Get all tasks |
| POST | /add | Add new task |
| PUT | /update/:id | Update task |
| DELETE | /delete/:id | Delete task |

---

# Docker Usage

Docker was used to containerize the application.

The project includes:
- Dockerfile
- docker-compose.yml

Docker Compose was used to run:
- Application container
- MongoDB container

---

# How to Run Locally

## Build and Run Containers

```bash
docker-compose up --build
```

---

# Access the Application

Open your browser:

```bash
http://localhost:3000
```

---

# AWS Deployment

The application was deployed on AWS EC2.

## Deployment Steps

1. Create an Ubuntu EC2 instance
2. Install Docker and Docker Compose
3. Upload project files to the server
4. Run containers using Docker Compose
5. Open port 3000 in the Security Group

The application becomes publicly accessible using:

```bash
http://<EC2-PUBLIC-IP>:3000
```

---

# Non-Functional Requirements

## Scalability
The application uses Docker containers, making it easier to scale and deploy.

## Reliability
Error handling and middleware were implemented to reduce crashes and improve stability.

## Maintainability
The project follows a clean structure using:
- Controllers
- Routes
- Models
- Middleware

## Logging
Morgan middleware was used for request logging.

---

# Challenges Faced

Some challenges during development included:

- Connecting MongoDB with Docker containers
- Implementing authentication
- Managing sessions
- Deploying Docker containers on AWS EC2

These challenges were solved successfully.

---

# Conclusion

This project demonstrates the implementation of a cloud-based Task Management System using modern backend technologies, MongoDB integration, Docker containerization, and AWS cloud deployment.

The project successfully fulfills all required functional and cloud deployment requirements.

---
