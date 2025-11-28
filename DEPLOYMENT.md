# Real Estate Marketplace - Deployment Guide

Complete guide for running the Real Estate Marketplace application with or without Docker.

## Table of Contents
- [Prerequisites](#prerequisites)
- [Quick Start (Local)](#quick-start-local)
- [Quick Start (Docker)](#quick-start-docker)
- [Management Scripts](#management-scripts)
- [Database Setup](#database-setup)
- [Environment Configuration](#environment-configuration)
- [Troubleshooting](#troubleshooting)

## Prerequisites

### For Local Development
- **Node.js** 18+ and npm
- **PostgreSQL** 16+
- **Git**

### For Docker Deployment
- **Docker** 20.10+
- **Docker Compose** 2.0+

## Quick Start (Local)

### 1. Clone the Repository
```bash
git clone <repository-url>
cd developer-technical-assessment-starter-kit
```

### 2. Start Everything
```bash
chmod +x start.sh
./start.sh
```

This single command will:
- ✅ Check PostgreSQL database availability
- ✅ Initialize database schema and seed data
- ✅ Install backend dependencies
- ✅ Install frontend dependencies
- ✅ Start backend API (port 3000)
- ✅ Start frontend (port 5173)

### 3. Access the Application
- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:3000
- **Database**: localhost:5432

## Quick Start (Docker)

### 1. Start with Docker
```bash
chmod +x docker-start.sh
./docker-start.sh
```

### 2. Stop Docker Containers
```bash
./docker-stop.sh
```

See [DOCKER.md](./DOCKER.md) for complete Docker documentation.

## Management Scripts

All scripts are located in the project root and are executable.

### Start Application
```bash
./start.sh
```
- Starts PostgreSQL (if using Docker)
- Initializes database if needed
- Starts backend and frontend
- Runs in background with log files

### Stop Application
```bash
./stop.sh
```
- Stops backend and frontend processes
- Optionally stops PostgreSQL container
- Cleans up log files and PID files

### Restart Application
```bash
./restart.sh
```
- Stops all services
- Waits 2 seconds
- Starts all services

### Check Status
```bash
./status.sh
```
Shows status of:
- PostgreSQL database (connection and initialization)
- Backend API (PID and URL)
- Frontend (PID and URL)
- Docker containers (if applicable)

### Output Example
```
========================================
  Real Estate Marketplace - Status
========================================

PostgreSQL Database (Port 5432):
  ✓ Running and Ready
  Connection: psql -h localhost -U postgres -d postgres
  ✓ Database Initialized (3 tables)

Backend (Port 3000):
  ✓ Running (PID: 12345)
  URL: http://localhost:3000
  Logs: /tmp/backend.log

Frontend (Port 5173):
  ✓ Running (PID: 12346)
  URL: http://localhost:5173
  Logs: /tmp/frontend.log

========================================
  All Services Running (3/3)
========================================
```

## Database Setup

### Automatic Initialization
The `start.sh` script automatically:
1. Checks if PostgreSQL is accessible
2. Initializes the database using `Projects/database/script.sql`
3. Creates tables: `users`, `properties`, `projects`, `lands`, `agent_contacts`
4. Seeds sample data

### Manual Database Access
```bash
# Using psql
psql -h localhost -U postgres -d postgres

# Using Docker
docker exec -it real-estate-db psql -U postgres -d postgres
```

### Reset Database
```bash
# Drop and recreate
psql -h localhost -U postgres -d postgres -f Projects/database/script.sql
```

## Environment Configuration

### Backend (.env)
Located at `Projects/backend/.env`:
```env
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=postgres
DB_DATABASE=postgres
PORT=3000
NODE_ENV=development
```

### Frontend (.env)
Located at `Projects/frontend/.env`:
```env
VITE_API_URL=http://localhost:3000
```

Both files are auto-created from `.env.example` if they don't exist.

## Log Files

All logs are written to `/tmp/`:
- `/tmp/backend.log` - Backend API logs
- `/tmp/frontend.log` - Frontend development server logs

### View Logs in Real-Time
```bash
# Backend logs
tail -f /tmp/backend.log

# Frontend logs
tail -f /tmp/frontend.log

# Both
tail -f /tmp/backend.log /tmp/frontend.log
```

## Port Configuration

Default ports:
- **5432** - PostgreSQL
- **3000** - Backend API
- **5173** - Frontend

If you need to change ports, update:
1. `docker-compose.yml` for Docker deployment
2. Backend `.env` file for API port
3. Frontend Vite config for dev server port

## Troubleshooting

### PostgreSQL Not Running
```bash
# Check if running
pg_isready -h localhost -p 5432

# Start with Docker
cd .devcontainer
docker-compose up -d db

# Or install PostgreSQL locally
# Ubuntu/Debian: sudo apt install postgresql
# macOS: brew install postgresql@16
```

### Backend Won't Start
```bash
# Check logs
cat /tmp/backend.log

# Verify database connection
psql -h localhost -U postgres -d postgres

# Reinstall dependencies
cd Projects/backend
rm -rf node_modules package-lock.json
npm install
```

### Frontend Won't Start
```bash
# Check logs
cat /tmp/frontend.log

# Reinstall dependencies
cd Projects/frontend
rm -rf node_modules package-lock.json
npm install
```

### Port Already in Use
```bash
# Find process using port 3000
lsof -ti:3000

# Kill process
kill $(lsof -ti:3000)

# Or use stop script
./stop.sh
```

### Database Not Initialized
```bash
# Manually run initialization
psql -h localhost -U postgres -d postgres -f Projects/database/script.sql
```

### Docker Issues
```bash
# Check Docker status
docker ps

# Restart Docker service
sudo systemctl restart docker  # Linux
# Or restart Docker Desktop on macOS/Windows

# Clean rebuild
docker-compose down -v
docker-compose build --no-cache
docker-compose up -d
```

## Development Workflow

### Making Changes

1. **Backend changes**: The dev server auto-reloads
2. **Frontend changes**: Vite HMR handles updates
3. **Database schema**: Run migration script manually

### Typical Workflow
```bash
# Start everything
./start.sh

# Check status
./status.sh

# Make code changes...

# View logs if needed
tail -f /tmp/backend.log

# Restart after major changes
./restart.sh

# Stop when done
./stop.sh
```

## Production Deployment

For production deployment:

1. **Use Docker** for consistency
2. **Set environment variables** properly
3. **Enable HTTPS** with reverse proxy
4. **Configure proper secrets**
5. **Set up monitoring**
6. **Regular backups** of database

See [DOCKER.md](./DOCKER.md) for production Docker setup.

## Additional Resources

- **Backend Documentation**: `Projects/backend/README.md`
- **Frontend Documentation**: `Projects/frontend/README.md`
- **Database Schema**: `Projects/database/script.sql`
- **Docker Guide**: `DOCKER.md`

## Support

For issues or questions:
1. Check logs: `tail -f /tmp/backend.log /tmp/frontend.log`
2. Run status check: `./status.sh`
3. Review error messages
4. Check database connectivity

## License

See LICENSE file for details.
