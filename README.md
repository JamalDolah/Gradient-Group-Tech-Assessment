# Event Landing Page - Technical Assessment

A single-page application built with Next.js frontend and Express.js backend API for displaying event information.

## Project Structure

```
project/
├── backend/
│   ├── server.js (Express server on port 3001)
│   ├── routes/
│   │   └── events.js
│   ├── data/
│   │   ├── event1.json
│   │   └── event2.json
│   └── package.json
├── frontend/
│   ├── pages/
│   │   ├── index.js (home page with event links)
│   │   └── events/[id].js (dynamic route)
│   ├── components/
│   │   ├── Header.js
│   │   ├── Hero.js
│   │   ├── Introduction.js
│   │   ├── Agenda.js
│   │   ├── Speakers.js
│   │   ├── TheEvent.js
│   │   ├── FAQ.js
│   │   └── Footer.js
│   └── package.json
└── README.md
```

## Features

- **Backend API**: Express.js server serving event data from JSON files
- **Frontend**: Next.js with React and Tailwind CSS
- **Dynamic Routes**: Access events at `/events/1` and `/events/2`
- **Components**: Header, Hero, Introduction, Agenda, Speakers (limited to 3), The Event (event details with past events images), FAQ, Footer
- **Responsive Design**: Mobile-friendly layout with Tailwind CSS

## Setup Instructions

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the server:
   ```bash
   npm start
   ```
   
   Or for development with auto-reload:
   ```bash
   npm run dev
   ```

   The backend server will run on `http://localhost:3001`

**Additional Endpoint:**
- `GET /health` - Health check endpoint that returns server status

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. (Optional) Configure API URL:
   Create a `.env.local` file in the `frontend` directory if you need to change the backend API URL:
   ```bash
   NEXT_PUBLIC_API_URL=http://localhost:3001
   ```
   If not set, it defaults to `http://localhost:3001`

4. Start the development server:
   ```bash
   npm run dev
   ```

   The frontend will run on `http://localhost:3000`

## API Endpoints

### GET /api/events/:id

Returns event data for the specified event ID.

**Parameters:**
- `id` (path parameter) - Event ID (1 or 2)

**Example:**
- `GET http://localhost:3001/api/events/1` - Returns event 1 data
- `GET http://localhost:3001/api/events/2` - Returns event 2 data

**Response:**
```json
{
  "id": 1,
  "title": "The BluePrint Series: A Fireside Chat with Rich Tu",
  "date": "MAY 14, 2025",
  "location": "SOHO HOUSE, NEW YORK",
  "heroImage": "/images/hero-img.png",
  "introduction": {
    "heading": "INTRODUCTION OF THIS EVENT",
    "content": "..."
  },
  "agenda": [
    {
      "time": "10:30 AM - 11:00 AM",
      "title": "WELCOME AND OPENING",
      "description": "...",
      "location": "GROUND FLOOR"
    }
  ],
  "speakers": [
    {
      "id": 1,
      "name": "Rich Tu",
      "title": "Artist",
      "image": "/images/rich-tu.png"
    }
  ],
  "eventDetails": {
    "content": "..."
  },
  "faq": [
    {
      "question": "What is the schedule for the event?",
      "answer": "..."
    }
  ]
}
```

## Frontend Routes

- `/` - Home page with links to both events
- `/events/1` - Displays event 1
- `/events/2` - Displays event 2

## Technologies Used

- **Backend**: Express.js, Node.js
- **Frontend**: Next.js, React, Tailwind CSS
- **HTTP Client**: Axios

## Notes

- Hero image is reused for all events as specified in requirements
- Speaker images are displayed from `/public/images/` directory
- "Get Tickets" button in header is a placeholder (no functionality) as per requirements
- All data is stored in JSON files (no database required)
- Design matches Figma specifications with custom fonts (BRSonoma-SemiBold for titles, IBM Plex Sans for body text)

## Environment Variables

### Frontend
- `NEXT_PUBLIC_API_URL` - Backend API URL (default: `http://localhost:3001`)

To customize the API URL, create a `.env.local` file in the `frontend` directory:
```
NEXT_PUBLIC_API_URL=http://your-api-url:3001
```

