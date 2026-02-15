# AI Interview Mock 🎤

An interactive AI-powered mock interview platform built with Next.js, Clerk authentication, and Neon PostgreSQL. Practice your interview skills with AI-generated questions tailored to your job position, experience level, and tech stack.

## Features ✨

- **🔐 Secure Authentication** - Clerk-powered sign-in/sign-up
- **🤖 AI Interview Generation** - Dynamic interview questions generated based on job details
- **💾 Interview History** - Save and review your mock interviews
- **📊 Performance Tracking** - Track your progress across multiple interview sessions
- **🎯 Personalized Questions** - Customized questions based on job role, tech stack, and experience
- **⚡ Real-time Feedback** - Instant feedback on your interview responses
- **🎨 Modern UI** - Responsive design with Tailwind CSS and Radix UI components

## Tech Stack 🛠️

### Frontend
- **Next.js 14** - React framework with App Router
- **React 18** - UI library
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Unstyled, accessible component library
- **Lucide React** - Icon library

### Backend & Services
- **Node.js** - Runtime environment
- **Clerk** - Authentication & user management
- **Neon** - Serverless PostgreSQL database
- **Drizzle ORM** - Type-safe database ORM
- **Hugging Face Inference API** - AI model integration

### AI & ML
- **Google Gemini AI** (optional) - Advanced interview generation
- **Hugging Face Models** - Alternative AI provider for question generation

## Getting Started 🚀

### Prerequisites

- Node.js 18+ and npm
- Git
- Clerk account (free at https://clerk.com)
- Neon database account (free at https://neon.tech)
- Hugging Face account (free at https://huggingface.co) or Google AI Studio account

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/omdesale777/Ai-interview-mock.git
   cd Ai-interview-mock
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file in the project root:
   ```bash
   # Clerk Authentication
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_YOUR_KEY
   CLERK_SECRET_KEY=sk_test_YOUR_KEY
   
   # Database
   NEXT_PUBLIC_DRIZZLE_DB_URL=postgresql://user:password@host/database
   
   # AI Model (choose one)
   NEXT_PUBLIC_GEMINI_API_KEY=AIzaSy_YOUR_KEY  # For Google Gemini
   HUGGING_FACE_API_KEY=hf_YOUR_TOKEN          # For Hugging Face
   
   # Interview Configuration
   NEXT_PUBLIC_INTERVIEW_QUESTION_COUNT=5
   ```

4. **Set up database**
   ```bash
   npm run db:push
   ```
   This creates the necessary tables in your Neon database.

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Visit [http://localhost:3000](http://localhost:3000)

## Environment Variables 🔑

### Required Variables

| Variable | Description | Get From |
|----------|-------------|----------|
| `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` | Clerk publishable key | [Clerk Dashboard](https://dashboard.clerk.com) |
| `CLERK_SECRET_KEY` | Clerk secret key | [Clerk Dashboard](https://dashboard.clerk.com) |
| `NEXT_PUBLIC_DRIZZLE_DB_URL` | PostgreSQL connection string | [Neon Console](https://console.neon.tech) |
| `HUGGING_FACE_API_KEY` | Hugging Face API token | [HF Settings](https://huggingface.co/settings/tokens) |

### Optional Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `NEXT_PUBLIC_GEMINI_API_KEY` | Google Gemini API key | - |
| `NEXT_PUBLIC_INTERVIEW_QUESTION_COUNT` | Number of interview questions | 5 |

## Project Structure 📁

```
Ai-interview-mock/
├── app/
│   ├── (auth)/              # Authentication pages
│   ├── dashboard/           # Dashboard & interview pages
│   ├── layout.js            # Root layout with Clerk provider
│   ├── page.js              # Home page
│   └── globals.css          # Global styles
├── components/
│   ├── ui/                  # Radix UI components
│   └── Header.jsx           # Header component
├── utils/
│   ├── db.js                # Database connection
│   ├── schema.js            # Database schema
│   ├── MistralAIModal.js    # Hugging Face AI integration
│   ├── GeminiAIModal.js     # Google Gemini integration (optional)
│   └── GeminiAIModal.js     # AI utility functions
├── middleware.js            # Clerk middleware
├── drizzle.config.js        # Drizzle ORM configuration
├── next.config.mjs          # Next.js configuration
├── package.json             # Dependencies
└── .env.local               # Environment variables (not in repo)
```

## Available Scripts 📝

```bash
# Development
npm run dev          # Start dev server on localhost:3000

# Production
npm run build        # Build for production
npm start            # Start production server

# Database
npm run db:push      # Push schema changes to database
npm run db:studio    # Open Drizzle Studio UI

# Linting
npm run lint         # Run ESLint
```

## Database Schema 🗄️

### MockInterview Table
Stores mock interview sessions created by users.

```typescript
{
  id: number (PK)
  mockId: string (unique)
  jsonMockResp: string (JSON questions & answers)
  jobPosition: string
  jobDesc: string
  jobExperience: string
  createdBy: string (user email)
  createdAt: string (date)
}
```

### UserAnswer Table
Stores user responses and feedback for interview questions.

```typescript
{
  id: number (PK)
  mockIdRef: string (FK to MockInterview)
  question: string
  correctAns: string
  userAns: string
  feedback: string
  rating: string
  userEmail: string
  createdAt: string (date)
}
```

## Setup Guide 🔧

### 1. Clerk Setup

1. Go to [Clerk Dashboard](https://dashboard.clerk.com)
2. Create a new application
3. Copy `Publishable Key` and `Secret Key`
4. Add to `.env.local`
5. Go to **Configure** → **Domains**
6. Add:
   - `http://localhost:3000` (development)
   - Your Vercel URL (production)

### 2. Neon Database Setup

1. Go to [Neon Console](https://console.neon.tech)
2. Create a new project
3. Copy the connection string (PostgreSQL)
4. Add to `.env.local` as `NEXT_PUBLIC_DRIZZLE_DB_URL`
5. Run `npm run db:push` to create tables

### 3. Hugging Face Setup

1. Go to [HF Settings](https://huggingface.co/settings/tokens)
2. Create a new token with "Read" access
3. Copy the token
4. Add to `.env.local` as `HUGGING_FACE_API_KEY`

### 4. Google Gemini Setup (Optional)

1. Go to [Google AI Studio](https://aistudio.google.com/app/apikey)
2. Create API Key
3. Copy the key
4. Add to `.env.local` as `NEXT_PUBLIC_GEMINI_API_KEY`

## Deployment 🚀

### Deploy to Vercel

1. **Push to GitHub** (if not already done)
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [Vercel](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Click "Import"

3. **Add Environment Variables**
   - In Vercel project settings → "Environment Variables"
   - Add all variables from `.env.local`:
     - `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`
     - `CLERK_SECRET_KEY`
     - `NEXT_PUBLIC_DRIZZLE_DB_URL`
     - `HUGGING_FACE_API_KEY`
     - `NEXT_PUBLIC_INTERVIEW_QUESTION_COUNT`

4. **Update Clerk Domains**
   - Go to Clerk Dashboard
   - Add your Vercel URL to **Configure** → **Domains**
   - Format: `https://your-project.vercel.app`

5. **Deploy**
   - Click "Deploy"
   - Wait for build to complete
   - Visit your live URL! 🎉

## Troubleshooting 🐛

### Database Connection Error
- Verify `NEXT_PUBLIC_DRIZZLE_DB_URL` is correct
- Check Neon database is active
- Run `npm run db:push` again

### Clerk Authentication Issues
- Verify keys in `.env.local`
- Check authorized domains in Clerk dashboard
- Hard refresh browser (Ctrl+Shift+R)

### AI Generation Fails
- Check API key is correct
- Verify API is enabled in respective service
- Check rate limits (especially for free tiers)
- Try alternative AI provider (Mistral or Gemini)

### Environment Variables Not Loading
- Restart dev server: `Ctrl+C` then `npm run dev`
- Ensure `.env.local` is in project root
- Check for typos in variable names

## Contributing 🤝

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/YourFeature`
3. Commit changes: `git commit -m 'Add YourFeature'`
4. Push to branch: `git push origin feature/YourFeature`
5. Open a Pull Request

## Future Enhancements 🌟

- [ ] Speech-to-text for spoken answers
- [ ] Video recording of interviews
- [ ] Advanced performance analytics
- [ ] Interview difficulty levels
- [ ] Resume integration
- [ ] Mobile app
- [ ] Interview sharing & collaboration
- [ ] Custom interview templates
- [ ] Interview scheduling reminders

## License 📄

This project is open source and available under the MIT License.

## Support 💬

For issues, questions, or feature requests:
- Open an issue on GitHub
- Check existing documentation
- Review troubleshooting section

## Changelog 📋

### v0.1.0 (Feb 2026)
- Initial release
- Clerk authentication
- Neon database integration
- Drizzle ORM setup
- AI interview generation (Gemini & Hugging Face)
- User interview history
- Dashboard functionality

## Authors ✍️

- **Danny** (Om Desale) - Initial development
- Contributors welcome!

---

**Built with ❤️ for interview preparation**

Visit the live app: [AI Interview Mock](https://ai-interview-mock.vercel.app)
