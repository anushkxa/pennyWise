# PennyWise

PennyWise is a full-stack stock investing platform with user authentication, protected APIs, portfolio views, and order placement workflows.

## Overview

PennyWise is split into three apps:

1. `frontend` – landing pages + signup/login
2. `dashboard` – protected user dashboard
3. `backend` – Express API + MongoDB + JWT cookie auth

---

## Tech Stack

### Frontend & Dashboard
- React 19
- Vite
- React Router
- Axios (dashboard API calls)
- Bootstrap / MUI (UI components)

### Backend
- Node.js
- Express
- MongoDB + Mongoose
- JWT (`jsonwebtoken`)
- `cookie-parser`
- `cors`
- `bcryptjs`

---

## Architecture

- User signs up/logs in through `frontend`
- Backend validates credentials and sets `token` (httpOnly cookie)
- `dashboard` calls protected API endpoints with credentials
- Middleware validates JWT and allows/rejects access

---

## Project Structure

```bash
pennyWise/
├── backend/
│   ├── controllers/
│   ├── middleware/
│   ├── model/
│   ├── routes/
│   ├── schemas/
│   ├── util/
│   └── index.js
├── frontend/
│   ├── public/
│   └── src/
├── dashboard/
│   ├── public/
│   └── src/
└── README.md
