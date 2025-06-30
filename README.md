# Netflix Clone

A fully functional Netflix clone built with Next.js, TypeScript, Tailwind CSS, and Supabase. This project demonstrates modern web development practices with a focus on responsive design and user experience.

## Features

### 🎬 Core Features
- **No Authentication Required**: Simple nickname-based entry system
- **Responsive Design**: Works perfectly on mobile, tablet, and desktop
- **Dark Theme**: Netflix-like dark UI with red accents
- **Video Player**: Full-featured video player with custom controls
- **Movie Categories**: Browse movies by different categories
- **My List**: Save and manage your favorite movies
- **Continue Watching**: Track your viewing progress
- **Admin Panel**: Manage content and users (optional)

### 🛠 Technical Features
- **Next.js 14**: App Router with server-side rendering
- **TypeScript**: Full type safety
- **Tailwind CSS**: Utility-first styling
- **Supabase**: PostgreSQL database for data storage
- **React Player**: Video playback functionality
- **Framer Motion**: Smooth animations and transitions
- **Responsive Design**: Mobile-first approach

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Supabase account (for database)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd netflix-clone
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url_here
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key_here
   NEXT_PUBLIC_TMDB_API_KEY=your_tmdb_api_key_here
   ```

4. **Set up Supabase Database**
   
   Create the following tables in your Supabase database:

   ```sql
   -- Users table
   CREATE TABLE users (
     id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
     nickname TEXT NOT NULL UNIQUE,
     created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
   );

   -- Movies table
   CREATE TABLE movies (
     id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
     title TEXT NOT NULL,
     description TEXT,
     poster_path TEXT,
     backdrop_path TEXT,
     release_date DATE,
     runtime INTEGER,
     genre TEXT[],
     rating DECIMAL(3,1),
     video_url TEXT,
     category TEXT,
     created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
   );

   -- Watch history table
   CREATE TABLE watch_history (
     id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
     user_id UUID REFERENCES users(id) ON DELETE CASCADE,
     movie_id UUID REFERENCES movies(id) ON DELETE CASCADE,
     watched_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
     progress DECIMAL(5,2) DEFAULT 0
   );

   -- My list table
   CREATE TABLE my_list (
     id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
     user_id UUID REFERENCES users(id) ON DELETE CASCADE,
     movie_id UUID REFERENCES movies(id) ON DELETE CASCADE,
     added_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
   );

   -- Categories table
   CREATE TABLE categories (
     id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
     name TEXT NOT NULL UNIQUE,
     description TEXT,
     created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
   );
   ```

5. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
netflix-clone/
├── app/                    # Next.js App Router
│   ├── browse/            # Browse page
│   ├── watch/[id]/        # Video player page
│   ├── my-list/           # My list page
│   ├── admin/             # Admin panel
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Landing page
├── components/            # Reusable components
│   ├── Navbar.tsx         # Navigation bar
│   ├── MovieCard.tsx      # Movie card component
│   ├── CategoryRow.tsx    # Category row component
│   └── Layout.tsx         # Layout wrapper
├── lib/                   # Utility libraries
│   └── supabase.ts        # Supabase client and types
├── public/                # Static assets
└── package.json           # Dependencies and scripts
```

## Key Components

### 🎯 Core Components

- **Navbar**: Responsive navigation with user menu
- **MovieCard**: Interactive movie cards with hover effects
- **CategoryRow**: Horizontal scrollable movie rows
- **Layout**: Authentication wrapper and page structure
- **VideoPlayer**: Custom video player with controls

### 🎨 Styling

- **Tailwind CSS**: Custom Netflix-like color scheme
- **Responsive Design**: Mobile-first approach
- **Animations**: Smooth transitions and hover effects
- **Dark Theme**: Consistent dark UI throughout

### 🗄 Database Schema

The application uses Supabase (PostgreSQL) with the following main entities:

- **Users**: Simple nickname-based user system
- **Movies**: Movie metadata and video URLs
- **Watch History**: Track viewing progress
- **My List**: User's saved movies
- **Categories**: Movie categories and genres

## Deployment

### Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy to Vercel**
   - Connect your GitHub repository to Vercel
   - Add environment variables in Vercel dashboard
   - Deploy automatically on push

### Other Platforms

The app can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## Customization

### Adding New Movies

1. **Via Admin Panel**: Use the built-in admin interface
2. **Direct Database**: Insert into the `movies` table
3. **API Integration**: Connect to TMDB API for real data

### Styling Changes

- Modify `tailwind.config.js` for theme customization
- Update `app/globals.css` for custom styles
- Edit component-specific styles in individual files

### Database Integration

- Update `lib/supabase.ts` for database operations
- Add new tables as needed
- Implement real-time subscriptions

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Netflix for the design inspiration
- Next.js team for the amazing framework
- Supabase for the backend infrastructure
- Tailwind CSS for the styling system

## Support

If you encounter any issues or have questions:

1. Check the [Issues](../../issues) page
2. Create a new issue with detailed information
3. Contact the maintainers

---

**Note**: This is a demo project for educational purposes. No real content is being streamed, and all video URLs point to sample videos. 