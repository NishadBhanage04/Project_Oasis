# Architecture

OASIS is a student wellness platform designed for stress pattern assessment.

## System Architecture
The application is divided into a React frontend and a FastAPI backend.

```text
                  ┌──────────────────────┐
                  │      React UI        │
                  │   OASIS Frontend     │
                  └──────────┬───────────┘
                             │
                         REST API
                             │
                  ┌──────────▼───────────┐
                  │     FastAPI          │
                  │      Backend         │
                  ├──────────────────────┤
                  │ Mood Management      │
                  │ Stress Assessment    │
                  │ Recommendations      │
                  │ Music Service        │
                  │ Support Service      │
                  └──────────┬───────────┘
                             │
                  ┌──────────▼───────────┐
                  │       SQLite         │
                  │      Database        │
                  └──────────────────────┘

Future:

                  ┌──────────────────────┐
                  │     Spotify API      │
                  └──────────────────────┘

                  ┌──────────────────────┐
                  │ Verified Professionals│
                  └──────────────────────┘

                  ┌──────────────────────┐
                  │ Educational Partners │
                  └──────────────────────┘
```

## Data Flow
1. **Check-in**: Frontend sends mood, factors, and stress level to `/api/mood`.
2. **Assessment**: Backend runs the `StressEngine` to categorize the stress level (Low, Moderate, High).
3. **Recommendation**: Backend uses the category to fetch wellness suggestions.
4. **Storage**: The result is stored in the SQLite database.
5. **Dashboard**: Frontend fetches mood history from `/api/mood/history` to render the stress chart and current overview.

## Privacy
Mood data is stored locally. Future institutional features will only receive aggregated, anonymized data to protect student identity.
