# Blog Site

This project is a blog application built with **Node.js**, **Express.js**, and **MySQL**. Users can create, update, delete, and view blog posts. Additionally, there is an **Admin Panel** where admin users can add, edit, and delete users.

## Getting Started

### Requirements:
- Node.js
- Express.js
- MySQL

### Setup:
1. Clone the project:
   ```bash
   git clone https://github.com/mekaraoglan/BlogSite_node_express_mysql

2. Install dependencies:
    ```bash
    npm install

3. Set up your **MySQL** database and configure the connection in the config.js file.

4. Start the server:
    ```bash
    node index.js

5. The app will be available at: http://localhost:3000

### Users and Admin Panel:
- **Users**: Only admins have user accounts. Admins have full permission to perform all actions, including managing user accounts and content.
- **Admin Panel**: Admin users can add, update, and delete users and blogs.

### Technologies Used
- **Frontend**: HTML, CSS, JavaScript, Ejs
- **Backend**: Node.js, Express.js, Mysql, Sequelize
- **Database**: Mysql
- **Authentication**:  Express Session  
