# Quick Start Guide

This is a quick reference for getting the Real Estate Platform up and running.

## 1. Quick Setup (5 minutes)

```bash
# 1. Open in Dev Container
# - Open VS Code
# - Press Ctrl+Shift+P
# - Select "Dev Containers: Reopen in Container"
# - Wait for container to build

# 2. Initialize Database
cd /workspaces/developer-technical-assessment-starter-kit/Projects/database
psql -h db -U postgres -d postgres -f script.sql

# 3. Start Backend
cd /workspaces/developer-technical-assessment-starter-kit/Projects/backend
npm install
npm run start:dev

# 4. Start Frontend (in new terminal)
cd /workspaces/developer-technical-assessment-starter-kit/Projects/frontend
npm install
npm run dev
```

## 2. Access the Application

- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:3000
- **API Docs (Swagger)**: http://localhost:3000/api

## 3. Project Structure Summary

```
Projects/
├── backend/        → NestJS API (Port 3000)
├── frontend/       → React App (Port 5173)
└── database/       → PostgreSQL Schema & Seeds
```

## 4. Key Features Implemented

✅ NestJS backend with TypeScript
✅ React frontend with TypeScript (Vite)
✅ PostgreSQL database with TypeORM
✅ Full CRUD operations for Properties, Lands, Projects
✅ RESTful API with Swagger documentation
✅ Responsive UI with detail pages
✅ Database indexes for performance
✅ Sample seed data included
✅ Dev Container setup for easy development

## 5. Testing Checklist

- [ ] Database initialized with seed data
- [ ] Backend running on port 3000
- [ ] Frontend running on port 5173
- [ ] Can view properties list
- [ ] Can view lands list
- [ ] Can view projects list
- [ ] Can click and see property details
- [ ] Can access Swagger API docs
- [ ] Backend responds to API calls

## 6. Common Issues

**Database not initialized?**
```bash
psql -h db -U postgres -d postgres -f Projects/database/script.sql
```

**Port already in use?**
- Kill the process using the port or change the port in .env files

**Dependencies missing?**
```bash
# Backend
cd Projects/backend && npm install

# Frontend
cd Projects/frontend && npm install
```

## 7. Technologies Used

- **Frontend**: React 18 + TypeScript + Vite + React Router + Axios
- **Backend**: NestJS 10 + TypeScript + TypeORM + Swagger
- **Database**: PostgreSQL 16
- **Dev Environment**: Docker + VS Code Dev Containers

## 8. AI Tool Declaration

**GitHub Copilot** was used for:
- Code generation and boilerplate
- TypeScript types and interfaces
- SQL schema and seed data
- Documentation

All generated code was reviewed and customized.
