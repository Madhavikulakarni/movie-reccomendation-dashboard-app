# movie-reccomendation-dashboard-app
Movie-reccomendation-dashboard-app with React, Redux Toolkit, Nodejs, Firebase, Express, MongoDB

Setup Instructions::
1️⃣ Clone Repository
git clone https://github.com/your-username/movie-reccomendation-dashboard-app.git
cd movie-reccomendation-dashboard-app

2️⃣ Setup Backend
cd backend
npm install


Create a .env file in /backend with the following:

MONGO_URI=mongodb://localhost:27017/moviedb
PORT=5000
TMDB_API_KEY=your_tmdb_api_key


Run backend server:

npm start


Server runs at: http://localhost:5000

3️⃣ Setup Frontend
cd ../frontend
npm install


Create a .env file in /frontend with:

REACT_APP_TMDB_API_KEY=your_tmdb_api_key
REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
REACT_APP_BACKEND_URL=http://localhost:5000


Run frontend app:

npm start


Frontend runs at: http://localhost:3000

▶️ Execution

Start backend (npm start inside /backend).

Start frontend (npm start inside /frontend).

Open browser → http://localhost:3000
.

🧪 Testing Edge Cases

Here are 5 edge cases you can mention for your Movie Recommendation Dashboard::

Genre with No Results:

When the user selects a genre that has no movies available from the TMDB API, the app displays a friendly "No movies found" message instead of breaking.

Invalid or Expired API Key:

If the TMDB API key is invalid/expired, the app handles the error gracefully by showing an error message instead of crashing.

Network Failure / API Timeout:

If the API request fails due to poor internet or server issues, the app notifies the user with an error state and allows retry.

Empty Favorites List:

When a logged-in user hasn’t saved any movies yet, the "Favorites" section shows a placeholder message instead of rendering a blank UI.

Duplicate Favorites Prevention:

If a user tries to add the same movie multiple times to favorites, the system prevents duplication and shows a proper notification.
