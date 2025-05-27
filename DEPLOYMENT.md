# Not A House But A Home - Deployment Guide

## Quick Demo Access
- **Live Frontend:** [Your deployed frontend URL]
- **API Backend:** [Your deployed backend URL]

## For Professor/Reviewer

### What This Application Does
- **Frontend:** React application for housing design submissions and resource library
- **Backend:** Django REST API handling file uploads, user contributions, and design management
- **Key Features:**
  - Design submission system with file uploads
  - Materials library
  - Weather protection guides
  - Contributor management

### User Flow for Testing
1. **Visit Homepage** - Overview of the platform
2. **Browse Designs** - View submitted housing designs
3. **Essentials Section** - Weather protection guides and materials
4. **Contribute Page** - Submit new designs (key feature to test)
5. **About/Guide** - Information pages

### Test the Main Feature (Contribute)
1. Go to `/contribute` page
2. Fill out the form:
   - Title: "Test Design"
   - Select a material or add custom
   - Add description
   - Upload a file (PDF/PNG/JPEG, max 5MB)
   - Fill contributor info
   - Accept terms
3. Submit and see success/error handling

## Local Development Setup

### Prerequisites
- Node.js 18+
- Python 3.8+
- Django backend running on port 8000

### Frontend Setup
```bash
cd nahbah-frontend
npm install
npm run dev
# Runs on http://localhost:5173
```

### Backend Setup (if available)
```bash
cd your-django-backend
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
# Runs on http://localhost:8000
```

## Technology Stack
- **Frontend:** React, TypeScript, Tailwind CSS, Vite
- **Backend:** Django, Django REST Framework
- **File Handling:** Multipart form uploads
- **API Integration:** Axios for HTTP requests

## API Endpoints Used
- `GET /api/designs/` - Fetch all designs
- `POST /api/designs/` - Submit new design
- `GET /api/materials/` - Fetch materials list
- `GET /api/contributors/` - Fetch contributors

## Deployment Architecture
[Describe your chosen deployment setup here]
