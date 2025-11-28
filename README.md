# Real Estate Platform – Technical Assessment

This repository contains my solution for the **Oman Housing Bank – Developer Technical Assessment**.  
The project is a full-stack Real Estate landing page and property details view built with:

- **Frontend:** React + TypeScript (Vite)
- **Backend:** NestJS + TypeScript  
- **Database:** PostgreSQL  
- **Containerization / Dev Env:** VS Code Dev Container + Docker

---

## 🤖 AI Tool Usage Declaration

As per the assessment requirements, the following AI tools were used in this project:

**AI Tool Used:** GitHub Copilot

**Capacity:**
- Code generation assistance for boilerplate NestJS modules, controllers, and services
- TypeScript type definitions and interface creation
- React component structure and routing setup
- SQL schema design and seed data generation
- Documentation and README formatting
- CSS styling suggestions

All code was reviewed, tested, and customized to meet the specific requirements of this assessment.

---

## 1. Repository Structure

```text
.
├── .devcontainer/
│   ├── devcontainer.json        # VS Code Dev Container configuration
│   ├── docker-compose.yml       # Postgres service and dev container config
│   └── Dockerfile               # Image used by the Dev Container
├── .vscode/
│   └── settings.json
├── Projects/
│   ├── backend/                 # NestJS backend API project
│   │   ├── src/
│   │   │   ├── properties/      # Properties module (CRUD)
│   │   │   ├── lands/           # Lands module (CRUD)
│   │   │   ├── projects/        # Projects module (CRUD)
│   │   │   ├── app.module.ts
│   │   │   └── main.ts
│   │   ├── package.json
│   │   ├── tsconfig.json
│   │   └── .env
│   ├── frontend/                # React frontend project
│   │   ├── src/
│   │   │   ├── components/      # Reusable components
│   │   │   ├── pages/           # Page components
│   │   │   ├── services/        # API service layer
│   │   │   ├── types/           # TypeScript types
│   │   │   ├── App.tsx
│   │   │   └── main.tsx
│   │   ├── package.json
│   │   ├── vite.config.ts
│   │   └── .env
│   └── database/
│       └── script.sql           # DB schema, indexes, seed data
└── sample data/
    └── images/
        ├── lands/               # Land placeholder images
        ├── projects/            # Project placeholder images
        └── properties/          # Property placeholder images
```

---

## 2. Prerequisites

### Recommended (Dev Container)
- Docker Desktop  
- Visual Studio Code  
- Dev Containers extension  

### If not using containers
- Node.js 20+ (LTS)
- npm or yarn
- PostgreSQL 16+

---

## 3. Environment Setup (Using VS Code Dev Container)

### Step 1: Clone the Repository

```bash
git clone https://github.com/Oman-Housing-Bank-SAOC/developer-technical-assessment-starter-kit.git
cd developer-technical-assessment-starter-kit
```

### Step 2: Open in Dev Container

1. Open the folder in Visual Studio Code
2. Press `Ctrl+Shift+P` (or `Cmd+Shift+P` on Mac)
3. Select: **Dev Containers: Reopen in Container**
4. Wait for the container to build and start

### Step 3: Database Connection

The PostgreSQL database is automatically started in the dev container.

**Database Credentials:**

| Key      | Value    |
|----------|----------|
| Host     | db       |
| Port     | 5432     |
| User     | postgres |
| Password | postgres |
| Database | postgres |

---

## 4. Database Setup

### Initialize the Database

Run the SQL script to create tables, indexes, and seed data:

```bash
# From within the dev container terminal
cd /workspaces/developer-technical-assessment-starter-kit/Projects/database

# Connect to PostgreSQL and run the script
psql -h db -U postgres -d postgres -f script.sql
```

**What the script does:**
1. Creates tables for `properties`, `lands`, and `projects`
2. Adds performance indexes
3. Creates triggers for automatic timestamp updates
4. Inserts sample seed data (5 properties, 5 lands, 5 projects)

---

## 5. Running the Application

### Backend (NestJS)

```bash
# Navigate to backend directory
cd /workspaces/developer-technical-assessment-starter-kit/Projects/backend

# Install dependencies
npm install

# Start the development server
npm run start:dev
```

The backend API will be available at: **http://localhost:3000**

API Documentation (Swagger): **http://localhost:3000/api**

### Frontend (React + Vite)

```bash
# Open a new terminal
# Navigate to frontend directory
cd /workspaces/developer-technical-assessment-starter-kit/Projects/frontend

# Install dependencies
npm install

# Start the development server
npm run dev
```

The frontend will be available at: **http://localhost:5173**

---

## 6. Project Features

### Backend API Endpoints

**Properties:**
- `GET /properties` - List all properties
- `GET /properties/:id` - Get property details
- `POST /properties` - Create new property
- `PATCH /properties/:id` - Update property
- `DELETE /properties/:id` - Delete property

**Lands:**
- `GET /lands` - List all lands
- `GET /lands/:id` - Get land details
- `POST /lands` - Create new land
- `PATCH /lands/:id` - Update land
- `DELETE /lands/:id` - Delete land

**Projects:**
- `GET /projects` - List all projects
- `GET /projects/:id` - Get project details
- `POST /projects` - Create new project
- `PATCH /projects/:id` - Update project
- `DELETE /projects/:id` - Delete project

### Frontend Features

- **Modern Landing Page**: 3-column layout with glassmorphism sidebars and animated backgrounds
- **Property Cards**: Gradient border reveals, image zoom effects, and smooth animations
- **Detail Pages**: Enhanced image gallery with glassmorphism navigation and ripple effect buttons
- **Responsive Design**: Mobile, tablet, and desktop optimized with elegant breakpoints
- **Type Safety**: Full TypeScript implementation with strict type checking
- **API Integration**: Axios-based service layer with error handling
- **Glassmorphism UI**: Frosted glass effects with backdrop blur throughout
- **Gradient Theming**: Purple-blue gradient system with consistent accent colors
- **Micro-interactions**: Hover effects, ripple buttons, shimmer badges, and smooth transitions
- **Performance Optimized**: GPU-accelerated CSS animations, 60fps smooth scrolling

---

## 7. Technology Stack

### Frontend
- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing
- **Axios** - HTTP client

### Backend
- **NestJS 10** - Node.js framework
- **TypeScript** - Type safety
- **TypeORM** - ORM for PostgreSQL
- **PostgreSQL 16** - Relational database
- **Swagger** - API documentation
- **Class Validator** - Input validation

### DevOps
- **Docker** - Containerization
- **VS Code Dev Containers** - Development environment

---

## 8. Database Schema

### Properties Table
- Stores residential properties (villas, apartments, townhouses)
- Fields: title, description, price, location, type, bedrooms, bathrooms, area, images, status, features

### Lands Table
- Stores land parcels for sale
- Fields: title, description, price, location, area, zoning, images, status, features

### Projects Table
- Stores real estate development projects
- Fields: title, description, location, developer, total_units, available_units, starting_price, images, status, amenities, completion_date

---

## 9. Development Commands

### Backend

```bash
# Development
npm run start:dev

# Production build
npm run build
npm run start:prod

# Testing
npm run test
npm run test:e2e

# Linting
npm run lint
```

### Frontend

```bash
# Development
npm run dev

# Production build
npm run build

# Preview production build
npm run preview

# Linting
npm run lint
```

---

## 10. Environment Variables

### Backend (.env)

```env
DB_HOST=db
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=postgres
DB_DATABASE=postgres
PORT=3000
NODE_ENV=development
```

### Frontend (.env)

```env
VITE_API_URL=http://localhost:3000
```

---

## 11. Testing the Application

1. Ensure the database is initialized with seed data
2. Start the backend server (http://localhost:3000)
3. Start the frontend development server (http://localhost:5173)
4. Navigate to the frontend URL in your browser
5. Browse properties, lands, and projects
6. Click on any card to view details
7. Test the API directly using Swagger UI at http://localhost:3000/api

---

## 12. Troubleshooting

### Database Connection Issues
- Ensure the dev container is running
- Check that PostgreSQL service is up: `docker ps`
- Verify database credentials in `.env` files

### Backend Won't Start
- Run `npm install` in the backend directory
- Check for port conflicts (port 3000)
- View logs for error messages

### Frontend Won't Start
- Run `npm install` in the frontend directory
- Check for port conflicts (port 5173)
- Verify `VITE_API_URL` in `.env`

### No Data Showing
- Ensure `script.sql` was executed successfully
- Check backend API is responding: http://localhost:3000/api
- Check browser console for errors

---

## 13. Future Enhancements

- Image upload functionality
- User authentication and authorization
- Advanced search and filtering
- Pagination for large datasets
- Real-time updates using WebSockets
- Unit and E2E test coverage
- CI/CD pipeline setup
- Production deployment configuration

---

## 14. License

This project is created for the Oman Housing Bank Technical Assessment.

---

## 15. Contact

For questions or clarifications about this assessment submission, please contact the candidate through the appropriate channels.
