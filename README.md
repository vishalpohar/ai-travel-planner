# AI Travel Planner

AI Travel Planner is a full-stack web application that helps users create personalized travel itineraries using Generative AI. Users can create trips, generate AI-powered travel plans, estimate trip budgets, manage activities, track packing lists, and regenerate itinerary days based on custom preferences.

---

## Live Demo

Website Url: https://ai-travel-planner-alpha-dusky.vercel.app

Walkthrough Video: https://drive.google.com/file/d/1rPiXvuqH-M3Th8NAm8X_lLXjR0gFkbzJ/view?usp=sharing

---

# Features

### Authentication & Authorization

* Secure JWT Authentication
* User Registration & Login
* Protected Routes
* Multi-user Support
* Strict User Data Isolation

### Trip Management

* Create New Trips
* View All Trips
* View Trip Details
* Delete Trips

### AI Itinerary Generation

Generate personalized itineraries based on:

* Destination
* Number of Days
* Budget Preference
* Interests

Example:

* Food
* Culture
* Adventure
* Shopping
* Nature

### Budget Estimation

Automatically calculates:

* Accommodation
* Transportation
* Food
* Activities
* Total Budget

### Activity Management

Users can:

* Add Activities
* Remove Activities
* Regenerate Specific Days Using AI

Example:

"Regenerate Day 3 with more outdoor activities"

### Hotel Recommendations

AI suggests:

* Budget Option
* Mid-range Option
* Premium Option

### Smart Weather-Aware Packing List

Custom Feature

The application fetches destination weather information and generates a smart packing list based on:

* Weather Conditions
* Trip Activities
* Destination

Users can:

* Mark Items as Packed
* Track Packing Progress

---

# Tech Stack

## Frontend

* Next.js 16
* TypeScript
* Tailwind CSS
* Zustand
* Axios
* Motion
* React Hot Toast

## Backend

* Node.js
* Express.js
* TypeScript

## Database

* MongoDB Atlas
* Mongoose

## AI & External APIs

* Gemini API
* OpenWeather API

## Deployment

* Vercel (Frontend)
* Render (Backend)
* MongoDB Atlas

---

# System Architecture

Frontend (Next.js)

↓

REST API (Express.js)

↓

MongoDB Atlas

↓

Gemini AI

↓

OpenWeather API

### Flow

1. User creates a trip.
2. Backend fetches weather data.
3. Gemini generates:
   * Itinerary
   * Hotels
   * Packing List
4. Backend calculates budget.
5. Trip is stored in MongoDB.
6. User can edit and regenerate itinerary days.

---

# Project Structure

## Frontend

frontend/

├── app/

├── components/

├── services/

├── store/

├── types/

└── lib/

## Backend

backend/

├── src/

│ ├── controllers/

│ ├── routes/

│ ├── middleware/

│ ├── models/

│ ├── services/

│ ├── utils/

│ ├── constants/

│ └── types/

└── server.ts

---

# Authentication & Authorization

### Authentication

* JWT-based Authentication
* Password Hashing using bcryptjs

### Authorization

Every trip is associated with a user.

Example:

```js
{
  userId: ObjectId
}
```

Users can only access their own:

* Trips
* Activities
* Packing Lists
* Generated Itineraries

All trip queries are scoped by:

```js
{
  _id: tripId,
  userId: req.user.id
}
```

This prevents unauthorized access to other users' data.

---

# AI Design

The application uses Gemini AI to generate:

### Itinerary

Day-by-day travel plans.

### Hotel Recommendations

Destination-aware hotel suggestions.

### Smart Packing List

Weather-aware packing recommendations.

### Prompt Engineering

The prompts enforce:

* Structured JSON Output
* Consistent Data Format
* Cost Estimation Rules
* Time-of-Day Constraints
* Hotel Recommendation Rules
* Packing List Constraints

This minimizes hallucinations and ensures predictable responses.

---

# Custom Feature

## Weather-Aware Smart Packing Assistant

### Problem

Most itinerary planners generate travel schedules but ignore packing requirements.

Users often forget essential items based on weather and planned activities.

### Solution

The application integrates OpenWeather API and AI-generated recommendations.

The packing list is generated using:

* Destination Weather
* Trip Activities
* Travel Duration

Benefits:

* Better Travel Preparation
* Reduced Packing Errors
* Personalized Packing Suggestions

---

# Performance Optimizations

Implemented:

* MongoDB Indexing
* Lean Queries
* Component Reusability
* Zustand State Management
* Protected Route Middleware
* Centralized API Services
* Responsive Design
* Optimized Prompt Design

---

# Responsive Design

Fully responsive across:

* Mobile Devices
* Tablets
* Laptops
* Desktop Screens

Includes:

* Mobile Navigation Drawer
* Responsive Dashboard
* Responsive Trip Details Page

---

# Environment Variables

## Backend

```env
PORT=5000

MONGODB_URI=your_mongodb_uri

JWT_SECRET=secret_key

GEMINI_API_KEY=your_gemini_api_key

OPENWEATHER_API_KEY=your_openweather_key

FRONTEND_URL=your_frontend_url
```

## Frontend

```env
NEXT_PUBLIC_API_URL=your_backend_url
```

---

# Local Setup

## Clone Repository

```bash
git clone https://github.com/vishalpohar/ai-travel-planner.git
```

## Backend Setup

```bash
cd backend

npm install

npm run dev
```

## Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

Frontend:

```text
http://localhost:3000
```

Backend:

```text
http://localhost:5000
```

---

# API Endpoints

## Authentication

POST /api/auth/register

POST /api/auth/login

GET /api/auth/me

## Trips

POST /api/trips

GET /api/trips

GET /api/trips/:id

DELETE /api/trips/:id

## AI

POST /api/ai/generate/:tripId

POST /api/ai/regenerate-day

## Activities

POST /api/trips/:tripId/day/:dayNumber/activity

DELETE /api/trips/:tripId/activity/:activityId

## Packing List

PATCH /api/trips/:tripId/packing/:itemId

---

# Known Limitations

* AI output may occasionally vary.
* Hotel recommendations are AI-generated and not live booking results.
* Weather information depends on OpenWeather API availability.
* Budget estimates are approximate and may differ from real-world costs.

---

# Future Improvements

* Google Maps Integration
* Flight Recommendations
* Currency Conversion
* Trip Sharing
* PDF Export
* Real Hotel Search APIs
* Collaborative Trip Planning
* AI Chat Assistant

---

# Author

Vishal Pohar

GitHub: https://github.com/vishalpohar

Email: [vishalpohar11@gmail.com](mailto:vishalpohar11@gmail.com)
