# Account Setup Project

This project is a full-stack application for account setup, including both frontend and backend implementations.

## Technologies Used

### Frontend:
- React.js
- CSS
- Axios

### Backend:
- Node.js
- Express.js
- MongoDB
- Mongoose

## Features
- User selects actions during account setup.
- JAM Policy is fetched and displayed with a copy button.
- Responsive UI with smooth design.
- API endpoints for storing selected actions.

## Folder Structure
```
project-root/
│── backend/
│   ├── models/
│   │   ├── actionModel.js
│   ├── routes/
│   │   ├── actionRoutes.js
│   ├── server.js
│── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── JamPolicy.js
│   │   │   ├── AccountSetup.js
│   │   ├── services/
│   │   │   ├── api.js
│   │   ├── styles.css
│   │   ├── App.js
│   ├── package.json
│── README.md
```

## Installation and Setup
### Backend Setup:
1. Navigate to the backend folder:
   ```sh
   cd backend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the backend server:
   ```sh
   node server.js
   ```

### Frontend Setup:
1. Navigate to the frontend folder:
   ```sh
   cd frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the frontend server:
   ```sh
   npm start
   ```

## API Endpoints
### Backend API
#### 1. Save Selected Actions
**Endpoint:** `POST /api/actions`

**Request Body:**
```json
{
  "userId": "12345",
  "selectedActions": ["Action1", "Action2"]
}
```

**Response:**
```json
{
  "message": "Actions saved successfully"
}
```

#### 2. Fetch JAM Policy
**Endpoint:** `GET /api/jam-policy`

**Response:**
```json
{
  "policy": "This is the JAM policy content."
}
```

## Deployment
 https://chimerical-kringle-34f66e.netlify.app/


## License
This project is licensed under the MIT License.

