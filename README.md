# ScoutAI - Modern Football Scouting Platform

A cutting-edge football scouting platform with AI-powered player analytics, transfer market insights, and club fit analysis. Built with modern technologies for a seamless analytics experience.

![Stack](https://img.shields.io/badge/Next.js-13+-black?style=flat-square&logo=next.js)
![Stack](https://img.shields.io/badge/NestJS-9+-EA2845?style=flat-square&logo=nestjs)
![Stack](https://img.shields.io/badge/PostgreSQL-14+-336791?style=flat-square&logo=postgresql)
![Stack](https://img.shields.io/badge/TypeScript-5+-3178C6?style=flat-square&logo=typescript)

## 🎯 Features

### MVP Capabilities
- **Player Database** - Comprehensive player profiles with detailed statistics
- **Transfer Market** - Real-time transfer insights and market analysis
- **AI Scout Score** - Intelligent player evaluation using ML algorithms
- **Player Profiles** - In-depth player information, stats, and analytics
- **Wonderkid Discovery** - AI-powered young talent identification
- **Club Fit Analysis** - Analyze player compatibility with clubs
- **Dark Analytics Dashboard** - Modern, responsive UI inspired by Transfermarkt & SofaScore

## 🏗️ Project Structure

```
app-project/
├── frontend/                 # Next.js + TypeScript + TailwindCSS
│   ├── src/
│   │   ├── app/             # App router
│   │   ├── components/      # Reusable components
│   │   ├── pages/           # Page components
│   │   ├── hooks/           # Custom hooks
│   │   ├── services/        # API services
│   │   ├── styles/          # Global styles
│   │   ├── types/           # TypeScript types
│   │   └── utils/           # Utility functions
│   ├── public/              # Static assets
│   ├── package.json
│   ├── tsconfig.json
│   ├── tailwind.config.ts
│   └── next.config.js
│
├── backend/                  # NestJS + PostgreSQL + Prisma
│   ├── src/
│   │   ├── main.ts
│   │   ├── app.module.ts
│   │   ├── config/          # Configuration
│   │   ├── common/          # Common utilities
│   │   ├── modules/
│   │   │   ├── players/
│   │   │   ├── clubs/
│   │   │   ├── transfers/
│   │   │   ├── scout-score/
│   │   │   └── analytics/
│   │   └── prisma/          # Database schema
│   ├── test/
│   ├── package.json
│   ├── tsconfig.json
│   ├── nest-cli.json
│   └── .env.example
│
└── docker-compose.yml       # PostgreSQL setup

```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- PostgreSQL 14+
- Docker (optional)

### Installation

#### 1. Clone and Install Dependencies

```bash
# Frontend
cd frontend
npm install

# Backend
cd ../backend
npm install
```

#### 2. Setup Environment Variables

```bash
# Backend
cd backend
cp .env.example .env
# Edit .env with your database credentials
```

#### 3. Database Setup

```bash
# Start PostgreSQL (with Docker)
docker-compose up -d

# Run Prisma migrations
cd backend
npx prisma migrate dev --name init
npx prisma db seed
```

#### 4. Start Development Servers

```bash
# Terminal 1 - Backend (Port 3001)
cd backend
npm run start:dev

# Terminal 2 - Frontend (Port 3000)
cd frontend
npm run dev
```

Visit `http://localhost:3000` in your browser.

## 📡 API Documentation

### Base URL
```
http://localhost:3001/api
```

### Main Endpoints

#### Players
```
GET    /api/players              # Get all players
GET    /api/players/:id          # Get player by ID
POST   /api/players              # Create player (admin)
PUT    /api/players/:id          # Update player (admin)
DELETE /api/players/:id          # Delete player (admin)
GET    /api/players/search       # Search players
GET    /api/players/wonderkids   # Get wonderkids
```

#### Clubs
```
GET    /api/clubs                # Get all clubs
GET    /api/clubs/:id            # Get club by ID
GET    /api/clubs/:id/squad      # Get club squad
```

#### Scout Score
```
GET    /api/scout-score/:playerId           # Get player scout score
POST   /api/scout-score/analyze             # Analyze player
GET    /api/scout-score/recommendations    # AI recommendations
```

#### Transfer Market
```
GET    /api/transfers                       # Get transfers
GET    /api/transfers/market-value         # Market analysis
GET    /api/transfers/trending             # Trending players
```

#### Analytics
```
GET    /api/analytics/club-fit/:playerId/:clubId  # Club fit analysis
GET    /api/analytics/performance/:playerId      # Performance analytics
GET    /api/analytics/comparison                 # Player comparison
```

## 🎨 UI/UX Design

The frontend features:
- **Dark Theme** - Eye-friendly dark analytics dashboard
- **Modern Cards** - Glassmorphism design elements
- **Responsive Grid** - Works on desktop, tablet, mobile
- **Real-time Charts** - Player statistics visualization
- **Interactive Filters** - Advanced player filtering
- **Performance Optimized** - Image optimization, lazy loading

## 🔧 Tech Stack

### Frontend
- **Next.js 13+** - React framework with App Router
- **TypeScript** - Type-safe development
- **TailwindCSS** - Utility-first CSS
- **React Query** - Data fetching & caching
- **Zustand** - State management
- **Recharts** - Data visualization
- **Axios** - HTTP client

### Backend
- **NestJS** - Progressive Node.js framework
- **TypeScript** - Type safety
- **PostgreSQL** - Relational database
- **Prisma** - ORM & database client
- **class-validator** - DTO validation
- **JWT** - Authentication
- **@nestjs/swagger** - API documentation

### DevOps
- **Docker** - Containerization
- **Docker Compose** - Multi-container setup

## 📦 Database Schema

### Core Tables
- `players` - Player information
- `clubs` - Club information
- `positions` - Player positions
- `transfers` - Transfer history
- `scout_scores` - AI scout evaluations
- `player_stats` - Performance statistics
- `club_fit_analysis` - Club compatibility scores

## 🤖 AI Features

### Scout Score Calculation
- Physical attributes (pace, strength, height)
- Technical skills (dribbling, passing, shooting)
- Mental attributes (intelligence, decision-making)
- Positional fit analysis
- Market value prediction

### Wonderkid Discovery
- Age-based filtering (16-23)
- Potential rating analysis
- Market value growth projection
- Club fit optimization

## 🔐 Security

- JWT authentication
- Input validation (class-validator)
- Rate limiting
- CORS configuration
- Environment variable protection
- SQL injection prevention (Prisma)

## 📈 Performance

- Database indexing on key fields
- Response caching with React Query
- Image optimization
- Code splitting
- API pagination
- Lazy loading

## 🧪 Testing

```bash
# Backend tests
cd backend
npm run test
npm run test:e2e

# Frontend tests
cd frontend
npm run test
```

## 📚 Documentation

- [Backend API Docs](./backend/docs/API.md)
- [Frontend Setup](./frontend/README.md)
- [Database Schema](./backend/prisma/schema.prisma)
- [Environment Variables](./backend/.env.example)

## 🚢 Deployment

### Docker Build
```bash
docker-compose up --build
```

### Production Build
```bash
# Frontend
cd frontend
npm run build

# Backend
cd backend
npm run build
npm run start:prod
```

## 📝 License

MIT License - feel free to use this project for learning and development.

## 🤝 Contributing

Contributions are welcome! Please follow the code style and submit pull requests.

## 📧 Support

For issues and questions, please create an issue in the repository.

---

**Built with ⚽ for football analytics**
