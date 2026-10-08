# OASIS
### Understand your mind. Improve your journey.

OASIS is a student-focused wellness platform designed to help college students understand and manage academic and personal stress.

## Problem Statement
College students face immense pressure from academics, careers, and personal life, often lacking a simple, non-clinical way to track their emotional well-being and identify stress patterns.

## Proposed Solution
A lightweight, privacy-focused platform for daily mood logging and stress assessment that provides personalized wellness recommendations.

## Target Users
College and university students.

## Currently Implemented (v0.1)
- **Daily Mood Check-in**: Interactive flow to log mood, stress factors, and stress levels.
- **Stress Pattern Assessment**: A rule-based engine that categorizes stress levels (Low, Moderate, High).
- **Wellness Recommendations**: Personalized suggestions based on the assessment.
- **Mood History Dashboard**: Visual tracking of stress levels over time using a chart.
- **Theming**: Premium Light Mode (Amber/Cream) and Dark Mode (Turquoise/Charcoal).
- **Backend API**: FastAPI with SQLite storage.

## Planned Features
- **Spotify Integration**: Dynamic music recommendations based on emotional state.
- **Professional Marketplace**: Referral system to verified mental-health professionals.
- **Institutional Dashboard**: Aggregated, anonymized trends for college administrations.
- **Intelligent Personalization**: ML-driven pattern recognition for stress triggers.

## Technology Stack
- **Frontend**: React, Vite, JavaScript, CSS
- **Backend**: FastAPI, Python, Uvicorn
- **Database**: SQLite, SQLAlchemy

## Architecture
The application follows a client-server architecture:
- **Frontend**: A Single Page Application (SPA) that communicates with the backend via REST API.
- **Backend**: A FastAPI server handling business logic and database interactions.
- **Database**: A local SQLite file for persistent storage of mood logs.

## How to Run Locally

### Backend
1. Navigate to `backend/`
2. Create a virtual environment: `python -m venv venv`
3. Activate environment: `.\venv\Scripts\activate` (Windows)
4. Install dependencies: `pip install -r requirements.txt`
5. Start server: `uvicorn app.main:app --reload`

### Frontend
1. Navigate to `frontend/`
2. Install dependencies: `npm install`
3. Start development server: `npm run dev`

## API Endpoints
- `POST /api/mood`: Submit a daily check-in.
- `GET /api/mood/history`: Retrieve mood logs.

## Database Structure
- **MoodLog Table**:
    - `id`: Integer (Primary Key)
    - `mood`: String (e.g., "Great", "Stressed")
    - `stress_level`: Integer (1-10)
    - `factors`: String (Comma-separated list)
    - `note`: Text
    - `stress_category`: String (Low, Moderate, High)
    - `created_at`: DateTime

## Privacy Considerations
- Mood logs are stored locally in SQLite.
- No personally identifiable information (PII) like emails or names are collected in v0.1.
- Future institutional dashboards will use strictly anonymized and aggregated data.

## Disclaimer
OASIS provides general wellness guidance and does not diagnose or replace professional mental-health care. It is not a medical diagnosis platform.
