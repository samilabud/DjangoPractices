# Django & React Practice Project

This repository contains a practice project integrating a Django REST API backend with a React frontend. The goal is to build and reinforce skills with modern web development tools and best practices.

## 📚 Project Overview

* **Purpose:** This is a practice project to explore full-stack development using Django and React.
* **Frontend:** Powered by React with Vite for build tooling.
* **Backend:** Powered by Django and Django REST Framework for creating a JWT‑secured API.

## ⚙️ Tech Stack

### Frontend

* **Vite**: Development and build tool
* **React**: UI library
* **Axios**: HTTP client for API calls
* **React Router DOM**: Client-side routing
* **jwt-decode**: Decode JWT tokens on the client

### Backend

* **asgiref**: ASGI support for Django
* **Django**: Web framework
* **django-cors-headers**: Handling Cross-Origin Resource Sharing (CORS) in Django
* **djangorestframework**: Building RESTful APIs
* **djangorestframework-simplejwt**: JWT authentication for DRF
* **PyJWT**: JWT encoding/decoding
* **pytz**: Timezone support
* **sqlparse**: SQL formatting library (used by Django)
* **psycopg2-binary**: PostgreSQL database adapter
* **python-dotenv**: Loading environment variables from `.env`

## 🚀 Getting Started

### Prerequisites

* **Node.js** (v14+)
* **Python** (v3.8+)
* **PostgreSQL**

### Frontend Setup

1. Navigate to the frontend directory:

   ```bash
   cd frontend
   ```
2. Install dependencies:

   ```bash
   npm install
   ```
3. Create a `.env` file (if needed) and add any frontend environment variables.
4. Start the development server:

   ```bash
   npm run dev
   ```
5. Open your browser at `http://localhost:5173`.

### Backend Setup

1. Navigate to the backend directory:

   ```bash
   cd backend
   ```
2. Create and activate a virtual environment:

   ```bash
   python -m venv venv
   source venv/bin/activate    # On Windows use `venv\Scripts\activate`
   ```
3. Install Python dependencies:

   ```bash
   pip install -r requirements.txt
   ```
4. Create a `.env` file at the project root and configure:

   ```ini
   DEBUG=True
   SECRET_KEY=your_django_secret_key
   DATABASE_URL=postgres://user:password@localhost:5432/dbname
   ```
5. Run database migrations:

   ```bash
   python manage.py migrate
   ```
6. Create a superuser (optional, for admin access):

   ```bash
   python manage.py createsuperuser
   ```
7. Start the Django development server:

   ```bash
   python manage.py runserver
   ```
8. API will be available at `http://127.0.0.1:8000/api/`

## 🔑 Authentication Flow

* **Login:** User submits credentials to `/api/token/` endpoint.
* **JWT Issuance:** Backend returns `access` and `refresh` tokens.
* **Client Storage:** Frontend decodes and stores `access` token (e.g., in memory or localStorage).
* **Protected Routes:** Axios attaches `Authorization: Bearer <access>` header on requests.
* **Token Refresh:** Use `/api/token/refresh/` to obtain new access tokens when expired.

## 🗂️ Project Structure

```
root/
├── frontend/          # React + Vite app
│   ├── src/
│   ├── public/
│   ├── vite.config.js
│   └── package.json
└── backend/           # Django REST API
    ├── app/
    ├── config/        # Django project settings
    ├── manage.py
    ├── requirements.txt
    └── .env
```

## 🤝 Contributing

This is purely for practice, so feel free to experiment and learn. There are no strict guidelines—just have fun!

## 📄 License

This project is for learning purposes only and is not licensed for production use.
