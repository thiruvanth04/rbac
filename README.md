RBAC Project _(Find Working of this project at rbac_postman.mp4 file)_
-----------------------------------------------------------------------------------------------------------------------------------------------------------
Description
-----------------------------------------------------------------------------------------------------------------------------------------------------------

This project implements a Role-Based Access Control (RBAC) system to manage and assign user roles and permissions in a secure and organized way. It provides a scalable solution for controlling access to different parts of an application based on user roles.


Features
-----------------------------------------------------------------------------------------------------------------------------------------------------------
Permission Management: Assign permissions to roles to control access to various system features.

User Management: Assign roles to users, granting them specific permissions.

Authentication: User authentication is handled using JWT (JSON Web Tokens).

MongoDB Integration: MongoDB is used to store user data, roles, and permissions.



Technologies Used
-----------------------------------------------------------------------------------------------------------------------------------------------------------
Backend: Node.js, Express.js

Database: MongoDB

Authentication: JWT (JSON Web Tokens)

Mongo DB Details with Schema:
-----------------------------------------------------------------------------------------------------------------------------------------------------------
![image](https://github.com/user-attachments/assets/4c294a80-b80c-4324-80eb-68208b084b37)

![image](https://github.com/user-attachments/assets/6f5896ec-35da-4789-9c9d-892ed7a33c43)



Installation
-----------------------------------------------------------------------------------------------------------------------------------------------------------
Install dependencies:

npm install express dotenv mongoose nodemon bcryptjs jsonwebtoken

-----------------------------------------------------------------------------------------------------------------------------------------------------------

*Create a .env file with the following variables:*

PORT=7001

JWT_SECRET=my-secret-key

CONNECTION_STRING=mongodb+srv://Thiruvanth:thiru_rbac_project@cluster0.mongodb.net/rbac_project


Project File Structure
-----------------------------------------------------------------------------------------------------------------------------------------------------------

### Project Structure Description

The project follows a standard Node.js backend structure for implementing Role-Based Access Control (RBAC).

1. **`src/config/dbConnect.js`**  
   Handles the connection to the database (e.g., MongoDB). Typically includes logic for connecting using environment variables from `.env`.

2. **`src/controllers/authController.js`**  
   Contains the logic for authentication, such as user login, registration, and token generation.

3. **`src/middlewares/authMiddleware.js`**  
   Middleware that verifies if a user is authenticated by checking tokens or session data.

4. **`src/middlewares/roleMiddleware.js`**  
   Middleware responsible for checking the user's role (e.g., admin, user) and ensuring they have the required permissions.

5. **`src/models/userModel.js`**  
   Defines the user schema using a library like Mongoose. Includes fields such as username, password, and role.

6. **`src/routes/authRoutes.js`**  
   Defines the routes related to authentication (e.g., `/login`, `/register`).

7. **`src/routes/userRoutes.js`**  
   Contains routes for managing user-specific actions, such as fetching user data or updating profiles.

8. **`src/index.js`**  
   Main entry point to combine and export all the routes. Helps organize the application routes centrally.

---

### Project File Structure

```
RBAC
│
├── node_modules/               # Node.js dependencies
├── src/                        # Source code directory
│   ├── config/                 
│   │   └── dbConnect.js        # Database connection configuration
│   ├── controllers/            
│   │   └── authController.js   # Controller for authentication logic
│   ├── middlewares/            
│   │   ├── authMiddleware.js   # Middleware for authentication verification
│   │   └── roleMiddleware.js   # Middleware for role-based access control
│   ├── models/                 
│   │   └── userModel.js        # User schema/model definition
│   ├── routes/                 
│   │   ├── authRoutes.js       # Authentication routes
│   │   ├── userRoutes.js       # User-related routes
│   └── index.js                # Main server entry point
│
├── .env                        # Environment variables
├── .gitignore                  # Git ignore file
├── package.json                # Project metadata and dependencies
└── package-lock.json           # Lockfile for exact dependency versions
```

Run the server:
-----------------------------------------------------------------------------------------------------------------------------------------------------------
npm run dev


How to Use:
-----------------------------------------------------------------------------------------------------------------------------------------------------------
refer rback_postman.mp4 file


-----------------------------------------------------------------------------------------------------------------------------------------------------------
