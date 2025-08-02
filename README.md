# 🧾 Resource Booking System

A full-stack application that allows users to view, book, and manage resources (e.g. vehicles, fruits, places, etc.) with quantity limits.

This project is built with:
- **Backend:** Django + Django REST Framework + PostgreSQL
- **Frontend:** React
- **Authentication:** JWT
- **Containerization:** Docker & Docker Compose

---

## 📌 Features

✅ List available resources  
✅ Book a resource with specific quantity  
✅ View user-specific bookings  
✅ JWT login system  
✅ Dockerized for simple deployment  
✅ Unit tests included  
✅ PostgreSQL database

---
---

## 🚀 Running the App with Docker

### 1. Prerequisites
- Docker Desktop installed
- Git installed

### 2. Clone the Repository

```bash
git clone https://github.com/mitpatil07/resource-booking-system.git
cd resource_booking_system

3. Create .env (Optional)
Create a .env file if needed (currently DB credentials are hardcoded in settings.py).

4. Build and Run Containers
docker-compose up --build

5. Run Migrations and Create Superuser
docker-compose exec backend python manage.py migrate
docker-compose exec backend python manage.py createsuperuser

🧪 Running Unit Tests
docker-compose exec backend python manage.py test

Test coverage includes:
Resource listing
Resource booking
User-specific bookings

🔐 API Authentication (JWT)
Get Token
POST to /api/token/

{
  "username": "youruser",
  "password": "yourpass"
}
Use Token in Headers

Authorization: Bearer <access_token>
🧭 API Endpoints
Endpoint	Method	Description
/api/resources/	GET	List all resources
/api/resources/	POST	Add a new resource (auth required)
/api/book/	POST	Book a resource (auth required)
/api/my-bookings/	GET	View user’s bookings (auth required)
/api/token/	POST	Get JWT access + refresh token
/api/token/refresh/	POST	Refresh access token

🖥️ Frontend (React)
React App lives in /booking-frontend

📦 To build and serve React:
cd booking-frontend
npm install
npm start

With Docker:
docker-compose up --build

☁️ Deployment
You can deploy to:
Render (easy, free PostgreSQL + web services)
Railway (easy backend deployments)
Heroku (Docker supported)
DigitalOcean App Platform or Droplets
AWS EC2
For Render or Railway: simply connect your GitHub repo and configure backend + frontend as separate services.

📝 Tech Stack
Python 3.10
Django 5.x
Django REST Framework
PostgreSQL 15
JWT (SimpleJWT)
React 18 (Create React App)
Docker & Docker Compose

