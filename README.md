# CRUDZASO - Task Management System

A modern task management web application built with Vite and JSON Server, designed based on Figma specifications.

## Design

This project is built to match the provided Figma designs for the performance exam:
- Clean, professional UI with CRUDZASO branding
- Table-based task management interface
- Statistical dashboard with metrics
- Modern color scheme and typography
- Responsive design for all screen sizes

##  Features

### User Role (user)
-  User registration and authentication
-  Personal task dashboard with statistics
-  Full CRUD operations on personal tasks
-  Task filtering (All, Pending, Completed)
-  Search functionality
-  Task prioritization (Low, Medium, High)
-  Task status management (Pending, In Progress, Completed)
-  Profile management
-  Session persistence

### Admin Role (admin)
-  Admin authentication
-  System-wide dashboard with metrics
-  Manage ALL tasks across all users
-  View and manage user accounts
-  Task assignment to users
-  Comprehensive filtering and search
-  Full CRUD operations on all tasks

##  Technologies

- **Frontend**: HTML5, CSS3, Vanilla JavaScript (ES6+)
- **Build Tool**: Vite 5.0
- **Backend (Mock)**: JSON Server
- **UI**: Custom CSS with Bootstrap Icons
- **Architecture**: SPA with custom routing
- **Storage**: LocalStorage for session management

##  Installation

1. **Extract the ZIP file**
   ```bash
   unzip crudzaso-project.zip
   cd crudtask-project
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

##  Running the Application

### Development Mode

Run both servers simultaneously:
```bash
npm start
```

This will start:
- **Vite Dev Server**: http://localhost:5173
- **JSON Server API**: http://localhost:3000

### Alternative: Run Separately

**Terminal 1 - JSON Server:**
```bash
npm run server
```

**Terminal 2 - Vite:**
```bash
npm run dev
```

## 👤 Test Accounts

### Administrator Account
- **Email**: `admin@crudzaso.com`
- **Password**: `admin123`
- **Access**: Full system management, view all tasks, manage users

### User Accounts
- **Email**: `sarah@crudzaso.com`
- **Password**: `user123`
- **Access**: Personal task management

Additional user accounts are available in the system (Raj Patel, Michelle O., Carlos M.)

## 📂 Project Structure

```
crudtask-project/
├── public/
│   ├── js/
│   │   ├── main.js              # Application entry point
│   │   ├── router.js            # SPA routing system
│   │   ├── auth.js              # Authentication service
│   │   └── api.js               # API communication layer
│   ├── styles/
│   │   └── main.css             # Complete styling (Figma-based)
│   └── views/
│       ├── login.js             # Login page
│       ├── register.js          # Registration page
│       ├── user-dashboard.js    # User task dashboard
│       ├── user-profile.js      # User profile page
│       └── admin-dashboard.js   # Admin dashboard
├── db.json                      # JSON Server database
├── index.html                   # Entry HTML file
├── package.json                 # Dependencies
├── vite.config.js               # Vite configuration
└── README.md                    # This file
```

##  Key Features Breakdown

### Task Management
- **Create**: Add new tasks with title, description, priority, status, and due date
- **Read**: View tasks in a clean table format with search and filters
- **Update**: Edit any task property inline
- **Delete**: Remove tasks with confirmation

### Dashboard Statistics
- **Total Tasks**: Overview of all tasks in the system
- **Completed**: Track finished tasks
- **Pending**: Monitor outstanding work
- **Overall Progress**: Visual percentage of completion

### Role-Based Access Control
- Automatic routing based on user role
- Protected routes (users can't access admin pages and vice versa)
- Session validation on every navigation

##  Security Features

- Password validation
- Email uniqueness checking
- Session-based authentication
- Role-based route protection
- Automatic session recovery
- Secure logout with session clearing

## 🌐 API Endpoints

The JSON Server provides RESTful endpoints:

### Users
- `GET /users` - Get all users
- `GET /users/:id` - Get user by ID
- `GET /users?email=<email>` - Find user by email
- `POST /users` - Create new user
- `PATCH /users/:id` - Update user

### Tasks
- `GET /tasks` - Get all tasks
- `GET /tasks/:id` - Get task by ID
- `GET /tasks?userId=<id>` - Get user's tasks
- `POST /tasks` - Create new task
- `PATCH /tasks/:id` - Update task
- `DELETE /tasks/:id` - Delete task

##  Responsive Design

The application is fully responsive:
- **Desktop**: Full sidebar and table layout
- **Tablet**: Collapsible sidebar, responsive cards
- **Mobile**: Stacked layout, touch-optimized buttons

##  Troubleshooting

### Port Already in Use
```bash
# Kill process on port 3000
npx kill-port 3000

# Kill process on port 5173
npx kill-port 5173
```

### Cannot Find Module Errors
```bash
rm -rf node_modules package-lock.json
npm install
```

### JSON Server Not Starting
Make sure port 3000 is available and db.json is present

### Vite Not Opening Browser
```bash
npm run dev -- --open
```


## 📄 License

MIT License - feel free to use this project for learning and development

## 👨‍💻 Author

Built as an academic task management system demonstration

- [Github](https://github.com/KamiKoni/)

- [Link to the official Repository](https://github.com/KamiKoni/Examen_RendimientoIII)
- Email: Argenisdavid212@gmail.com
- CLAN: Thompson
- Identity Document: 5873302

---

