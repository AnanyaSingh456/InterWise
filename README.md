# InterWise

An AI-powered interview preparation platform designed to help job seekers improve their communication skills, technical depth, and professional confidence through realistic mock interviews.

[**Live Demo**](https://interwise-client.onrender.com/)

## Features

- **AI-Powered Mock Interviews**: Role-based interviews with smart follow-up questions
- **Multiple Interview Modes**: HR and Technical interview modes
- **Resume Analysis**: Upload your resume for personalized interview questions
- **Real-Time Evaluation**: AI evaluates answers on confidence, communication, and correctness
- **Performance Analytics**: Track progress with detailed reports and insights
- **Voice Interview Support**: Practice with voice-based interviews
- **PDF Reports**: Download detailed performance reports
- **Interview History**: View and analyze past interview sessions

## Tech Stack

### Client
- **React 19** - UI framework
- **Vite** - Build tool
- **Redux Toolkit** - State management
- **TailwindCSS** - Styling
- **React Router** - Navigation
- **Firebase** - Authentication
- **Axios** - HTTP client
- **jsPDF** - PDF generation
- **Recharts** - Data visualization
- **Framer Motion** - Animations

### Server
- **Node.js** - Runtime
- **Express** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM
- **JWT** - Authentication
- **Multer** - File uploads
- **PDF.js** - PDF parsing
- **OpenRouter API** - AI services

## Project Structure

```
InterWise/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # Reusable components
│   │   ├── pages/         # Page components
│   │   ├── redux/         # Redux store
│   │   └── utils/         # Utility functions
│   ├── public/            # Static assets
│   └── package.json
├── server/                # Express backend
│   ├── config/           # Database configuration
│   ├── controllers/      # Route controllers
│   ├── middlewares/      # Custom middlewares
│   ├── models/           # Mongoose models
│   ├── routes/           # API routes
│   ├── services/         # External services
│   └── package.json
└── README.md
```

## Prerequisites

- Node.js (v18 or higher)
- MongoDB (local or cloud instance)
- Firebase account (for Google authentication)
- OpenRouter API key (for AI services)

## Installation

### 1. Clone the repository

```bash
git clone <repository-url>
cd InterWise
```

### 2. Install dependencies

#### Client
```bash
cd client
npm install
```

#### Server
```bash
cd server
npm install
```

### 3. Environment Setup

#### Client Environment Variables
Create a `.env` file in the `client` directory:

```env
VITE_FIREBASE_APIKEY=your_firebase_api_key
```

#### Server Environment Variables
Create a `.env` file in the `server` directory:

```env
PORT=6000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
OPENROUTER_API_KEY=your_openrouter_api_key
```

### 4. Firebase Setup

1. Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
2. Enable Google Authentication
3. Copy your Firebase configuration
4. Update the Firebase config in `client/src/utils/firebase.js`

### 5. MongoDB Setup

- For local development: Install MongoDB and run `mongod`
- For production: Use MongoDB Atlas or any MongoDB hosting service

### 6. OpenRouter API Setup

1. Sign up at [OpenRouter](https://openrouter.ai/)
2. Get your API key
3. Add it to your server `.env` file

## Running the Application

### Start the Server
```bash
cd server
npm run dev
```
Server runs on `http://localhost:6000`

### Start the Client
```bash
cd client
npm run dev
```
Client runs on `http://localhost:5173`

## Usage

1. **Sign Up/Sign In**: Use Google authentication to create an account
2. **Setup Interview**: Choose your role, experience level, and interview mode
3. **Upload Resume** (Optional): Upload your resume for personalized questions
4. **Start Interview**: Answer AI-generated questions within time limits
5. **View Results**: Get detailed feedback on your performance
6. **Track Progress**: View interview history and analytics

## API Endpoints

### Authentication
- `POST /api/auth/google` - Google authentication
- `GET /api/auth/logout` - Logout user
- `GET /api/user/current-user` - Get current user

### Interview
- `POST /api/interview/resume` - Analyze resume
- `POST /api/interview/generate-questions` - Generate interview questions
- `POST /api/interview/submit-answer` - Submit answer for evaluation
- `POST /api/interview/finish` - Finish interview and get results
- `GET /api/interview/my-interviews` - Get user's interview history
- `GET /api/interview/report/:id` - Get interview report

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License.

## Support

For support, please open an issue in the repository.

## Acknowledgments

- OpenRouter for AI services
- Firebase for authentication
- MongoDB for database hosting
