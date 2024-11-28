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
RBAC
│

├── node_modules/              

├── src/                        

│   ├── config/                 

│   │   └── dbConnect.js        

│   ├── controllers/            

│   │   └── authController.js   

│   ├── middlewares/            

│   │   ├── authMiddleware.js   

│   │   └── roleMiddleware.js  

│   ├── models/                 

│   │   └── userModel.js  

│   ├── routes/                 

│   │   ├── authRoutes.js       

│   │   ├── userRoutes.js 


│   └── index.js   

│

├── .env                       

├── .gitignore           

├── package.json        

└── package-lock.json   



Run the server:
-----------------------------------------------------------------------------------------------------------------------------------------------------------
npm run dev


How to Use:
-----------------------------------------------------------------------------------------------------------------------------------------------------------
Add Roles: Admins can add roles via the /roles endpoint.

Assign Permissions: Admins can assign permissions to roles via /permissions endpoint.

User Authentication: Use the /login endpoint to authenticate users and receive a JWT token for access.

-----------------------------------------------------------------------------------------------------------------------------------------------------------
