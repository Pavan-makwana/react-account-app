#  React Account Management App

A simple yet functional **React application** built as part of the **React Internship Practical Task**.  
It allows users to **register, log in, view, and edit their account information**, using **Bootstrap 5** for design and **LocalStorage** for data persistence.

---

##  Features

**User Registration**  
- Create a new account with name, email, and password  
- Password must be **at least 6 characters**, include **1 capital letter** and **1 number**  

**Login System**  
- Validate user credentials  
- Redirects to the home page upon successful login  
- Shows personalized welcome message  

**Account Settings Page**  
- Update user profile details  
- Password validation included  
- Redirects back to home page after saving  

**Bootstrap UI**  
- Fully responsive  
- Clean and professional design  
- Show/Hide password toggle on all password fields  

**Routing with React Router v6**  
- `/` → Landing page  
- `/register` → Register new user  
- `/login` → Login user  
- `/home` → Dashboard after login  
- `/account` → Account settings page  

**LocalStorage Integration**  
- User data and login session stored locally (no backend required)

---

##  Tech Stack

- **React 18**  
- **Bootstrap 5**  
- **React Router v6**  
- **JavaScript (ES6+)**  
- **LocalStorage API**

---

## Folder Structure

```
src/
├── App.js
├── index.js
│
├── components/
│   └── Navbar.jsx
│
├── pages/
│   ├── Landing.jsx
│   ├── Login.jsx
│   ├── Register.jsx
│   ├── Home.jsx
│   └── Account.jsx
│
└── utils/
    └── auth.js
```

---

##  Installation & Setup

Follow these steps to run the project locally:

### 1 - Clone the Repository
```bash
git clone https://github.com/Pavan-makwana/react-account-app.git
```

### 2 - Navigate into the Folder
```bash
cd react-account-app
```

### 3 - Install Dependencies
```bash
npm install
```

### 4 - Run the Application
```bash
npm start
```

The app will run locally at  [http://localhost:3000](http://localhost:3000)

---



##  Password Validation Rules

 Minimum **6 characters**  
 Must contain **1 uppercase letter**  
 Must contain **1 numeric digit**  

 Example of valid password:  
```
React123
```





---

##  Deployment
To build and deploy your app:
```bash
npm run build
```
Then host the `/build` folder on **GitHub Pages**, **Vercel**, or **Netlify**.

---

##  Submission Details

 Push your final code to your GitHub repository  
 Include this README.md file  
 Submit the **GitHub Repo Link** via the **Google Form** shared with your test instructions  

---

##  Author
**Name:**  Pavan Makwana  
**Internship:** React Developer Internship Task  
**Email:** pavan561981@gmail.com  
**GitHub:** [@Pavan-makwana](https://github.com/Pavan-makwana)

---

##  Conclusion

This project demonstrates the ability to:
- Work with **React components**
- Implement **client-side routing**
- Use **Bootstrap for styling**
- Handle **user data and validation**
- Manage state and navigation effectively
