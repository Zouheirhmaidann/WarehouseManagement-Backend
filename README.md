# Warehouse Management Backend

A Node.js backend service for warehouse management system built with Express.js and Supabase as the database.

## Project Structure

```
├── Config/
│   └── dbSystem.js         # Supabase database configuration
├── Models/
│   └── WarehouseModel.js   # Business logic and database operations
├── Routes/
│   ├── WarehouseRoutes.js  # API route definitions
│   └── sync/
│       └── verifyToken.js  # JWT authentication middleware
├── .env.example           # Environment variables template
├── server.js              # Main application entry point
└── package.json          # Project dependencies and scripts
```

## Features

- User Authentication with JWT
- Secure Password Hashing with bcryptjs
- Order Management System
- Protected Routes with Token Verification
- CORS Enabled API Endpoints

## API Endpoints

- `POST /loginUser`: User authentication endpoint
- `GET /fetchOrders`: Protected endpoint to fetch user-specific orders

## Prerequisites

- Node.js
- npm
- Supabase account and project

## Setup

1. Clone the repository ["git@github.com:Zouheirhmaidann/WarehouseManagement-Backend.git"]
2. Install dependencies:
   ```bash
   npm install
   ```
3. Copy `.env.example` to `.env` (create the `.env` file) and update the values:
   ```bash
   cp .env.example .env
   ```
   Configure the following environment variables:
   - `SUPABASE_URL`: Supabase project URL (copy from `.env.example` )
   - `SUPABASE_KEY`: Supabase project API key (copy from `.env.example` )
   - `PORT`: Server port (default: 3001)
   - `TOKEN_SECRET`: Secret key for JWT token generation (copy from `.env.example` )

## Running the Application

Development mode with hot-reload:

```bash
npm run dev
```

## Dependencies

- express: Web framework
- @supabase/supabase-js: Supabase client
- bcryptjs: Password hashing
- jsonwebtoken: JWT authentication
- dotenv: Environment variables management
- cors: CORS middleware
- nodemon: Development server

## Security Features

- JWT-based authentication
- Password hashing
- Protected routes
- CORS configuration
- Environment variables for sensitive data

## Database Schema

The application uses Supabase with the following main tables:

- `users`: Store user information

  - username
  - password (hashed)
  - id

- `orders`: Store order information
  - order_number
  - client_name
  - recipient_name
  - location_ar
  - location_en
  - num_items
  - notes
  - created_at
  - status
  - id
