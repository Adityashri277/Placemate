export interface ProjectBlueprint {
  id: string;
  domain: string;
  title: string;
  difficulty: 'Intermediate' | 'Advanced';
  summary: string;
  techStack: string[];
  keyFeatures: string[];
  architectureOverview: string;
  databaseSchema: string[];
}

export const PROJECT_BLUEPRINTS: ProjectBlueprint[] = [
  // --- FULL-STACK / BACKEND DOMAIN ---
  {
    id: 'proj-backend-1',
    domain: 'Full-Stack Development',
    title: 'Placemate - Placement Management System',
    difficulty: 'Intermediate',
    summary: 'A centralized portal for tracking software recruitment drives, student application status, and automated dynamic test scheduling.',
    techStack: ['Node.js', 'Express', 'React', 'MySQL', 'Tailwind CSS'],
    keyFeatures: [
      'Role-based Access Control (Admin, Recruiter, Student)',
      'Real-time job application tracking dashboard',
      'Automated dynamic placement test scheduler'
    ],
    architectureOverview: 'Client-server architecture using React single-page application communicating via REST APIs with Express.js server, persisting data in MySQL relational database.',
    databaseSchema: ['users (id, role, email)', 'drives (id, company_name, deadline)', 'applications (id, user_id, drive_id, status)']
  },
  {
    id: 'proj-backend-2',
    domain: 'Full-Stack Development',
    title: 'CodeBucket - Code Snippet Manager',
    difficulty: 'Intermediate',
    summary: 'A fast, developer-focused code snippet indexing tool with tagged categorization and syntax highlighting.',
    techStack: ['React', 'JavaScript', 'CSS Modules', 'LocalStorage/Supabase'],
    keyFeatures: [
      'Tag-based filtering and instant fuzzy search',
      'Syntax highlighting for multi-language code blocks',
      'One-click snippet copy and share links'
    ],
    architectureOverview: 'Client-side SPA leveraging React context API for local state management with persistence sync via Supabase REST service.',
    databaseSchema: ['snippets (id, title, code_body, language, tags)']
  },
  {
    id: 'proj-backend-3',
    domain: 'Full-Stack Development',
    title: 'PixHunt - Dynamic Image Search Engine',
    difficulty: 'Intermediate',
    summary: 'A clean single-page UI fetching high-resolution photography assets from Unsplash via asynchronous web APIs.',
    techStack: ['Vanilla JavaScript', 'HTML5', 'CSS3', 'REST API'],
    keyFeatures: [
      'Infinite scroll image pagination',
      'Instant keyword search debouncing',
      'High-resolution image modal download views'
    ],
    architectureOverview: 'Lightweight static single-page application built with modular JavaScript native fetch handlers.',
    databaseSchema: ['N/A - External REST API Client']
  },

  // --- AI / MACHINE LEARNING DOMAIN ---
  {
    id: 'proj-ai-1',
    domain: 'Artificial Intelligence & ML',
    title: 'FinAdvisor - AI-Powered Financial Assistant',
    difficulty: 'Advanced',
    summary: 'Conversational assistant analyzing live financial intent and providing real-time market insights.',
    techStack: ['React', 'Node.js', 'MySQL', 'Gemini API', 'Dialogflow'],
    keyFeatures: [
      'Natural language intent detection using Dialogflow',
      'Generative market query handling via Gemini API',
      'Historical query logging and personalized dashboard'
    ],
    architectureOverview: 'Express API gateway handles authentication, forwards natural language intents to Dialogflow/Gemini API, and caches response histories inside MySQL.',
    databaseSchema: ['users (id, username, password_hash)', 'chats (id, user_id, message, bot_response, timestamp)']
  },
  {
    id: 'proj-ai-2',
    domain: 'Artificial Intelligence & ML',
    title: 'Smart Placement Resume Screening Pipeline',
    difficulty: 'Advanced',
    summary: 'Automated candidate résumé parser using natural language processing to match applicant skills against job postings.',
    techStack: ['Python', 'FastAPI', 'scikit-learn', 'React', 'Tailwind CSS'],
    keyFeatures: [
      'PDF résumé text extraction & vectorization',
      'Cosine similarity score calculation for job postings',
      'Recruiter ranking leaderboard UI'
    ],
    architectureOverview: 'FastAPI microservice executing NLP extraction pipelines linked to a React user interface for visual match scores.',
    databaseSchema: ['candidates (id, name, parsed_skills)', 'job_postings (id, title, required_skills)', 'matches (candidate_id, job_id, score)']
  },
  {
    id: 'proj-ai-3',
    domain: 'Artificial Intelligence & ML',
    title: 'Conversational Code Debugger Bot',
    difficulty: 'Advanced',
    summary: 'Interactive AI developer assistant capable of parsing stack traces, identifying bugs, and suggesting refactored fixes.',
    techStack: ['Next.js', 'TypeScript', 'Gemini API', 'Tailwind CSS'],
    keyFeatures: [
      'Stack trace parsing & syntax error identification',
      'Multi-turn code refactoring recommendations',
      'Side-by-side code diff comparison viewer'
    ],
    architectureOverview: 'Serverless Next.js App Router application integrating Gemini API streaming endpoints for real-time response rendering.',
    databaseSchema: ['sessions (id, session_token)', 'messages (id, session_id, role, content)']
  }
];