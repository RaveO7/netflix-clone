import { Movie, Category } from './supabase'

// Fonction pour générer des langues aléatoires
const getRandomLanguages = (): string[] => {
  const allLanguages = ['VF', 'VOSTFR']
  const random = Math.random()
  
  if (random < 0.4) return ['VF']
  if (random < 0.8) return ['VOSTFR']
  return ['VF', 'VOSTFR']
}

export const mockMovies: Movie[] = [
  {
    id: '1',
    title: 'The Shawshank Redemption',
    description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
    poster_path: 'https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg',
    backdrop_path: 'https://image.tmdb.org/t/p/original/kXfqcdQKsToO0OUXHcrrNCHDBzO.jpg',
    release_date: '1994-09-22',
    runtime: 142,
    genre: ['Drama'],
    rating: 9.3,
    video_url: 'https://vidmoly.to/embed-7zo3llworr98.html',
    category: 'Drama',
    created_at: '2023-01-01',
    type: 'movie',
    languages: ['VF', 'VOSTFR'],
    director: 'Frank Darabont',
    actors: ['Tim Robbins', 'Morgan Freeman', 'Bob Gunton'],
    video_urls: {
      vf: [
        'https://vidmoly.to/embed-vqvgyfdsnp8a.html',
        'https://my.mail.ru/video/embed/7907601233697835253'
      ],
      vostfr: [
        'https://vidmoly.to/embed-7zo3llworr98.html',
        'https://my.mail.ru/video/embed/7907601233697835247'
      ]
    }
  },
  {
    id: '2',
    title: 'Inception',
    description: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.',
    poster_path: 'https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg',
    backdrop_path: 'https://image.tmdb.org/t/p/original/s3TBrRGB1iav7gFOCNx3H31MoES.jpg',
    release_date: '2010-07-16',
    runtime: 148,
    genre: ['Action', 'Adventure', 'Sci-Fi'],
    rating: 8.8,
    video_url: 'https://vidmoly.to/embed-7zo3llworr98.html',
    category: 'Sci-Fi',
    created_at: '2023-01-01',
    type: 'movie',
    languages: getRandomLanguages(),
    director: 'Christopher Nolan',
    actors: ['Leonardo DiCaprio', 'Joseph Gordon-Levitt', 'Ellen Page'],
    video_urls: {
      vf: [
        'https://vidmoly.to/embed-vqvgyfdsnp8a.html',
        'https://my.mail.ru/video/embed/7907601233697835253'
      ],
      vostfr: [
        'https://vidmoly.to/embed-7zo3llworr98.html',
        'https://my.mail.ru/video/embed/7907601233697835247'
      ]
    }
  },
  {
    id: '3',
    title: 'Pulp Fiction',
    description: 'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.',
    poster_path: 'https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg',
    backdrop_path: 'https://image.tmdb.org/t/p/original/suaEOtk1N1sgg2QM528GluxMcE.jpg',
    release_date: '1994-10-14',
    runtime: 154,
    genre: ['Crime', 'Drama'],
    rating: 8.9,
    video_url: 'https://vidmoly.to/embed-7zo3llworr98.html',
    category: 'Crime',
    created_at: '2023-01-01',
    type: 'movie',
    languages: getRandomLanguages(),
    director: 'Quentin Tarantino',
    actors: ['John Travolta', 'Uma Thurman', 'Samuel L. Jackson'],
    video_urls: {
      vf: [
        'https://vidmoly.to/embed-vqvgyfdsnp8a.html',
        'https://my.mail.ru/video/embed/7907601233697835253'
      ],
      vostfr: [
        'https://vidmoly.to/embed-7zo3llworr98.html',
        'https://my.mail.ru/video/embed/7907601233697835247'
      ]
    }
  },
  {
    id: '4',
    title: 'The Dark Knight',
    description: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
    poster_path: 'https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg',
    backdrop_path: 'https://image.tmdb.org/t/p/original/hkBaDkMWbLaf8B1lsWsKX7Ew3Xq.jpg',
    release_date: '2008-07-18',
    runtime: 152,
    genre: ['Action', 'Crime', 'Drama'],
    rating: 9.0,
    video_url: 'https://vidmoly.to/embed-7zo3llworr98.html',
    category: 'Action',
    created_at: '2023-01-01',
    type: 'movie',
    languages: ['VF', 'VOSTFR'],
    director: 'Christopher Nolan',
    actors: ['Christian Bale', 'Heath Ledger', 'Aaron Eckhart'],
    video_urls: {
      vf: [
        'https://vidmoly.to/embed-vqvgyfdsnp8a.html',
        'https://my.mail.ru/video/embed/7907601233697835253'
      ],
      vostfr: [
        'https://vidmoly.to/embed-7zo3llworr98.html',
        'https://my.mail.ru/video/embed/7907601233697835247'
      ]
    }
  },
  {
    id: '5',
    title: 'Fight Club',
    description: 'An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.',
    poster_path: 'https://image.tmdb.org/t/p/w500/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg',
    backdrop_path: 'https://image.tmdb.org/t/p/original/52AfXWuXCHn3UjD17rBruA9f5qb.jpg',
    release_date: '1999-10-15',
    runtime: 139,
    genre: ['Drama'],
    rating: 8.8,
    video_url: 'https://vidmoly.to/embed-7zo3llworr98.html',
    category: 'Drama',
    created_at: '2023-01-01',
    type: 'movie',
    languages: ['VF'],
    director: 'David Fincher',
    actors: ['Brad Pitt', 'Edward Norton', 'Helena Bonham Carter'],
    video_urls: {
      vf: [
        'https://vidmoly.to/embed-vqvgyfdsnp8a.html',
        'https://my.mail.ru/video/embed/7907601233697835253'
      ],
      vostfr: [
        'https://vidmoly.to/embed-7zo3llworr98.html',
        'https://my.mail.ru/video/embed/7907601233697835247'
      ]
    }
  },
  {
    id: '6',
    title: 'The Matrix',
    description: 'A computer programmer discovers that reality as he knows it is a simulation created by machines, and joins a rebellion to break free.',
    poster_path: 'https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg',
    backdrop_path: 'https://image.tmdb.org/t/p/original/2u7zbn8EfsGtkX9Hcd3IWCQnVSy.jpg',
    release_date: '1999-03-31',
    runtime: 136,
    genre: ['Action', 'Sci-Fi'],
    rating: 8.7,
    video_url: 'https://vidmoly.to/embed-7zo3llworr98.html',
    category: 'Action',
    created_at: '2023-01-01',
    type: 'movie',
    languages: ['VOSTFR'],
    director: 'Lana Wachowski',
    actors: ['Keanu Reeves', 'Laurence Fishburne', 'Carrie-Anne Moss'],
    video_urls: {
      vf: [
        'https://vidmoly.to/embed-vqvgyfdsnp8a.html',
        'https://my.mail.ru/video/embed/7907601233697835253'
      ],
      vostfr: [
        'https://vidmoly.to/embed-7zo3llworr98.html',
        'https://my.mail.ru/video/embed/7907601233697835247'
      ]
    }
  },
  {
    id: '7',
    title: 'Interstellar',
    description: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival.',
    poster_path: 'https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg',
    backdrop_path: 'https://image.tmdb.org/t/p/original/xu9zaAevzQ5nnrsXN6JcahLnG4i.jpg',
    release_date: '2014-11-07',
    runtime: 169,
    genre: ['Sci-Fi', 'Drama'],
    rating: 8.6,
    video_url: 'https://vidmoly.to/embed-7zo3llworr98.html',
    category: 'Sci-Fi',
    created_at: '2023-01-01',
    director: 'Christopher Nolan',
    actors: ['Matthew McConaughey', 'Anne Hathaway', 'Jessica Chastain'],
    type: 'movie',
    video_urls: {
      vf: [
        'https://vidmoly.to/embed-vqvgyfdsnp8a.html',
        'https://my.mail.ru/video/embed/7907601233697835253'
      ],
      vostfr: [
        'https://vidmoly.to/embed-7zo3llworr98.html',
        'https://my.mail.ru/video/embed/7907601233697835247'
      ]
    }
  },
  {
    id: '8',
    title: 'Forrest Gump',
    description: 'The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75.',
    poster_path: 'https://image.tmdb.org/t/p/w500/saHP97rTPS5eLmrLQEcANmKrsFl.jpg',
    backdrop_path: 'https://image.tmdb.org/t/p/original/6uoiU4r1tK2XGEdqM5jF6yF6l1n.jpg',
    release_date: '1994-07-06',
    runtime: 142,
    genre: ['Drama', 'Romance'],
    rating: 8.8,
    video_url: 'https://vidmoly.to/embed-7zo3llworr98.html',
    category: 'Drama',
    created_at: '2023-01-01',
    type: 'movie',
    languages: ['VF'],
    director: 'Robert Zemeckis',
    actors: ['Tom Hanks', 'Robin Wright', 'Gary Sinise'],
    video_urls: {
      vf: [
        'https://vidmoly.to/embed-vqvgyfdsnp8a.html',
        'https://my.mail.ru/video/embed/7907601233697835253'
      ],
      vostfr: [
        'https://vidmoly.to/embed-7zo3llworr98.html',
        'https://my.mail.ru/video/embed/7907601233697835247'
      ]
    }
  },
  {
    id: '9',
    title: 'Inception',
    description: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.',
    poster_path: 'https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg',
    backdrop_path: 'https://image.tmdb.org/t/p/original/s3TBrRGB1iav7gFOCNx3H31MoES.jpg',
    release_date: '2010-07-16',
    runtime: 148,
    genre: ['Action', 'Adventure', 'Sci-Fi'],
    rating: 8.8,
    video_url: 'https://vidmoly.to/embed-7zo3llworr98.html',
    category: 'Sci-Fi',
    created_at: '2023-01-01',
    type: 'movie',
    languages: ['VF', 'VOSTFR'],
    director: 'Christopher Nolan',
    actors: ['Leonardo DiCaprio', 'Joseph Gordon-Levitt', 'Ellen Page'],
    video_urls: {
      vf: [
        'https://vidmoly.to/embed-vqvgyfdsnp8a.html',
        'https://my.mail.ru/video/embed/7907601233697835253'
      ],
      vostfr: [
        'https://vidmoly.to/embed-7zo3llworr98.html',
        'https://my.mail.ru/video/embed/7907601233697835247'
      ]
    }
  },
  {
    id: '10',
    title: 'The Lord of the Rings: The Fellowship of the Ring',
    description: 'A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.',
    poster_path: 'https://image.tmdb.org/t/p/w500/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg',
    backdrop_path: 'https://image.tmdb.org/t/p/original/6uoiU4r1tK2XGEdqM5jF6yF6l1n.jpg',
    release_date: '2001-12-19',
    runtime: 178,
    genre: ['Action', 'Adventure', 'Drama'],
    rating: 8.8,
    video_url: 'https://vidmoly.to/embed-7zo3llworr98.html',
    category: 'Action',
    created_at: '2023-01-01',
    type: 'movie',
    languages: ['VF'],
    director: 'Peter Jackson',
    actors: ['Elijah Wood', 'Ian McKellen', 'Viggo Mortensen'],
    video_urls: {
      vf: [
        'https://vidmoly.to/embed-vqvgyfdsnp8a.html',
        'https://my.mail.ru/video/embed/7907601233697835253'
      ],
      vostfr: [
        'https://vidmoly.to/embed-7zo3llworr98.html',
        'https://my.mail.ru/video/embed/7907601233697835247'
      ]
    }
  },
  {
    id: '11',
    title: 'Pulp Fiction',
    description: 'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.',
    poster_path: 'https://image.tmdb.org/t/p/w500/fIE3lAGcZDV1G6XM5KmuWnNsPp1.jpg',
    backdrop_path: 'https://image.tmdb.org/t/p/original/suaEOtk1N1sgg2QM528GluxMcAd.jpg',
    release_date: '1994-10-14',
    runtime: 154,
    genre: ['Crime', 'Drama'],
    rating: 8.9,
    video_url: 'https://vidmoly.to/embed-7zo3llworr98.html',
    category: 'Crime',
    created_at: '2023-01-01',
    type: 'movie',
    video_urls: {
      vf: [
        'https://vidmoly.to/embed-vqvgyfdsnp8a.html',
        'https://my.mail.ru/video/embed/7907601233697835253'
      ],
      vostfr: [
        'https://vidmoly.to/embed-7zo3llworr98.html',
        'https://my.mail.ru/video/embed/7907601233697835247'
      ]
    }
  },
  {
    id: '12',
    title: 'The Goodfellas',
    description: 'The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners.',
    poster_path: 'https://image.tmdb.org/t/p/w500/aKuFiU82s5ISJpGZp7YkIr3kCUd.jpg',
    backdrop_path: 'https://image.tmdb.org/t/p/original/6uoiU4r1tK2XGEdqM5jF6yF6l1n.jpg',
    release_date: '1990-09-19',
    runtime: 146,
    genre: ['Biography', 'Crime', 'Drama'],
    rating: 8.7,
    video_url: 'https://vidmoly.to/embed-7zo3llworr98.html',
    category: 'Crime',
    created_at: '2023-01-01',
    type: 'movie',
    languages: ['VF', 'VOSTFR'],
    director: 'Francis Ford Coppola',
    actors: ['Marlon Brando', 'Al Pacino', 'James Caan'],
    video_urls: {
      vf: [
        'https://vidmoly.to/embed-vqvgyfdsnp8a.html',
        'https://my.mail.ru/video/embed/7907601233697835253'
      ],
      vostfr: [
        'https://vidmoly.to/embed-7zo3llworr98.html',
        'https://my.mail.ru/video/embed/7907601233697835247'
      ]
    }
  },
  {
    id: '13',
    title: 'The Godfather: Part II',
    description: 'The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate.',
    poster_path: 'https://image.tmdb.org/t/p/w500/hek3koDUyRQk7FIhPXsa6mT2Zc3.jpg',
    backdrop_path: 'https://image.tmdb.org/t/p/original/6uoiU4r1tK2XGEdqM5jF6yF6l1n.jpg',
    release_date: '1974-12-20',
    runtime: 202,
    genre: ['Crime', 'Drama'],
    rating: 9.0,
    video_url: 'https://vidmoly.to/embed-7zo3llworr98.html',
    category: 'Crime',
    created_at: '2023-01-01',
    type: 'movie',
    languages: ['VF'],
    director: 'Francis Ford Coppola',
    actors: ['Al Pacino', 'Robert De Niro', 'Robert Duvall'],
    video_urls: {
      vf: [
        'https://vidmoly.to/embed-vqvgyfdsnp8a.html',
        'https://my.mail.ru/video/embed/7907601233697835253'
      ],
      vostfr: [
        'https://vidmoly.to/embed-7zo3llworr98.html',
        'https://my.mail.ru/video/embed/7907601233697835247'
      ]
    }
  },
  {
    id: '14',
    title: 'The Silence of the Lambs',
    description: 'A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer.',
    poster_path: 'https://image.tmdb.org/t/p/w500/rplLJ2hPcOQmkFhTqUte0MkEaO2.jpg',
    backdrop_path: 'https://image.tmdb.org/t/p/original/6uoiU4r1tK2XGEdqM5jF6yF6l1n.jpg',
    release_date: '1991-02-14',
    runtime: 118,
    genre: ['Crime', 'Drama', 'Thriller'],
    rating: 8.6,
    video_url: 'https://vidmoly.to/embed-7zo3llworr98.html',
    category: 'Crime',
    created_at: '2023-01-01',
    type: 'movie',
    languages: ['VOSTFR'],
    director: 'Jonathan Demme',
    actors: ['Jodie Foster', 'Anthony Hopkins', 'Lawrence A. Bonney'],
    video_urls: {
      vf: [
        'https://vidmoly.to/embed-vqvgyfdsnp8a.html',
        'https://my.mail.ru/video/embed/7907601233697835253'
      ],
      vostfr: [
        'https://vidmoly.to/embed-7zo3llworr98.html',
        'https://my.mail.ru/video/embed/7907601233697835247'
      ]
    }
  },
  {
    id: '15',
    title: 'The Lion King',
    description: 'Lion prince Simba and his father are targeted by his bitter uncle, who wants to ascend the throne himself.',
    poster_path: 'https://image.tmdb.org/t/p/w500/sKCr78MXSLixuZkINyt9NnRHzNq.jpg',
    backdrop_path: 'https://image.tmdb.org/t/p/original/6uoiU4r1tK2XGEdqM5jF6yF6l1n.jpg',
    release_date: '1994-06-24',
    runtime: 88,
    genre: ['Animation', 'Adventure', 'Drama'],
    rating: 8.5,
    video_url: 'https://vidmoly.to/embed-7zo3llworr98.html',
    category: 'Animation',
    created_at: '2023-01-01',
    type: 'movie',
    languages: ['VF', 'VOSTFR'],
    director: 'Roger Allers',
    actors: ['Matthew Broderick', 'Jeremy Irons', 'James Earl Jones'],
    video_urls: {
      vf: [
        'https://vidmoly.to/embed-vqvgyfdsnp8a.html',
        'https://my.mail.ru/video/embed/7907601233697835253'
      ],
      vostfr: [
        'https://vidmoly.to/embed-7zo3llworr98.html',
        'https://my.mail.ru/video/embed/7907601233697835247'
      ]
    }
  },
  {
    id: '16',
    title: 'Back to the Future',
    description: 'Marty McFly, a 17-year-old high school student, is accidentally sent 30 years into the past.',
    poster_path: 'https://image.tmdb.org/t/p/w500/pTpxQB1N0waaSc3OSn0e9oc8kx9.jpg',
    backdrop_path: 'https://image.tmdb.org/t/p/original/xBKGJQsAIeweesB79KC89FpBrVr.jpg',
    release_date: '1985-07-03',
    runtime: 116,
    genre: ['Adventure', 'Comedy', 'Sci-Fi'],
    rating: 8.5,
    video_url: 'https://vidmoly.to/embed-7zo3llworr98.html',
    category: 'Sci-Fi',
    created_at: '2023-01-01',
    type: 'movie',
    video_urls: {
      vf: [
        'https://vidmoly.to/embed-vqvgyfdsnp8a.html',
        'https://my.mail.ru/video/embed/7907601233697835253'
      ],
      vostfr: [
        'https://vidmoly.to/embed-7zo3llworr98.html',
        'https://my.mail.ru/video/embed/7907601233697835247'
      ]
    }
  },
  {
    id: '17',
    title: 'Jurassic Park',
    description: 'During a preview tour, a theme park suffers a major power breakdown that allows its cloned dinosaur exhibits to run amok.',
    poster_path: 'https://image.tmdb.org/t/p/w500/c414cDeQ9b6qLPLeKmiJuLDUREJ.jpg',
    backdrop_path: 'https://image.tmdb.org/t/p/original/8i6ZDk97Vyh0jHohMG4vFeFuKJh.jpg',
    release_date: '1993-06-11',
    runtime: 127,
    genre: ['Adventure', 'Sci-Fi', 'Thriller'],
    rating: 8.1,
    video_url: 'https://vidmoly.to/embed-7zo3llworr98.html',
    category: 'Sci-Fi',
    created_at: '2023-01-01',
    type: 'movie',
    video_urls: {
      vf: [
        'https://vidmoly.to/embed-vqvgyfdsnp8a.html',
        'https://my.mail.ru/video/embed/7907601233697835253'
      ],
      vostfr: [
        'https://vidmoly.to/embed-7zo3llworr98.html',
        'https://my.mail.ru/video/embed/7907601233697835247'
      ]
    }
  },
  {
    id: '18',
    title: 'Titanic',
    description: 'A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.',
    poster_path: 'https://image.tmdb.org/t/p/w500/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg',
    backdrop_path: 'https://image.tmdb.org/t/p/original/6VmFqApQRyZZzmiGOQq2C92jyvH.jpg',
    release_date: '1997-12-19',
    runtime: 195,
    genre: ['Drama', 'Romance'],
    rating: 7.9,
    video_url: 'https://vidmoly.to/embed-7zo3llworr98.html',
    category: 'Drama',
    created_at: '2023-01-01',
    type: 'movie',
    video_urls: {
      vf: [
        'https://vidmoly.to/embed-vqvgyfdsnp8a.html',
        'https://my.mail.ru/video/embed/7907601233697835253'
      ],
      vostfr: [
        'https://vidmoly.to/embed-7zo3llworr98.html',
        'https://my.mail.ru/video/embed/7907601233697835247'
      ]
    }
  },
  {
    id: '19',
    title: 'The Silence of the Lambs',
    description: 'A young F.B.I. cadet must confide in an incarcerated and manipulative killer to catch another serial killer.',
    poster_path: 'https://image.tmdb.org/t/p/w500/rplLJ2hPcOQmkFhTqUte0MkEaO2.jpg',
    backdrop_path: 'https://image.tmdb.org/t/p/original/6hB3S9bIaco6h7a8a4iRjZfF6Fo.jpg',
    release_date: '1991-02-14',
    runtime: 118,
    genre: ['Crime', 'Drama', 'Thriller'],
    rating: 8.6,
    video_url: 'https://vidmoly.to/embed-7zo3llworr98.html',
    category: 'Crime',
    created_at: '2023-01-01',
    type: 'movie',
    video_urls: {
      vf: [
        'https://vidmoly.to/embed-vqvgyfdsnp8a.html',
        'https://my.mail.ru/video/embed/7907601233697835253'
      ],
      vostfr: [
        'https://vidmoly.to/embed-7zo3llworr98.html',
        'https://my.mail.ru/video/embed/7907601233697835247'
      ]
    }
  },
  {
    id: '20',
    title: 'The Departed',
    description: 'An undercover cop and a mole in the police attempt to identify each other while infiltrating an Irish gang.',
    poster_path: 'https://image.tmdb.org/t/p/w500/auZIuHEUec5NRz5hsolbT6h18Uj.jpg',
    backdrop_path: 'https://image.tmdb.org/t/p/original/6uBlEXZCUHM15UNZqNig17VdN4m.jpg',
    release_date: '2006-10-06',
    runtime: 151,
    genre: ['Crime', 'Drama', 'Thriller'],
    rating: 8.5,
    video_url: 'https://vidmoly.to/embed-7zo3llworr98.html',
    category: 'Crime',
    created_at: '2023-01-01',
    type: 'movie',
    video_urls: {
      vf: [
        'https://vidmoly.to/embed-vqvgyfdsnp8a.html',
        'https://my.mail.ru/video/embed/7907601233697835253'
      ],
      vostfr: [
        'https://vidmoly.to/embed-7zo3llworr98.html',
        'https://my.mail.ru/video/embed/7907601233697835247'
      ]
    }
  },
  {
    id: '21',
    title: 'Shrek',
    description: 'A mean lord exiles fairytale creatures to the swamp of a grumpy ogre.',
    poster_path: 'https://image.tmdb.org/t/p/w500/aiuehPz1NqX2p8vKQ8kF5Qk2J8t.jpg',
    backdrop_path: 'https://image.tmdb.org/t/p/original/1TUg5pO1VZ4B0Q1amk3OlXvlpXV.jpg',
    release_date: '2001-05-18',
    runtime: 90,
    genre: ['Animation', 'Comedy', 'Adventure'],
    rating: 7.9,
    video_url: 'https://vidmoly.to/embed-7zo3llworr98.html',
    category: 'Comedy',
    created_at: '2023-01-01',
    type: 'movie',
    video_urls: {
      vf: [
        'https://vidmoly.to/embed-vqvgyfdsnp8a.html',
        'https://my.mail.ru/video/embed/7907601233697835253'
      ],
      vostfr: [
        'https://vidmoly.to/embed-7zo3llworr98.html',
        'https://my.mail.ru/video/embed/7907601233697835247'
      ]
    }
  },
  {
    id: '22',
    title: 'The Prestige',
    description: 'After a tragic accident, two stage magicians engage in a battle to create the ultimate illusion.',
    poster_path: 'https://image.tmdb.org/t/p/w500/5MXyQfz8xUP3dIFPTubhTsbFY6N.jpg',
    backdrop_path: 'https://image.tmdb.org/t/p/original/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg',
    release_date: '2006-10-20',
    runtime: 130,
    genre: ['Drama', 'Mystery', 'Sci-Fi'],
    rating: 8.5,
    video_url: 'https://vidmoly.to/embed-7zo3llworr98.html',
    category: 'Drama',
    created_at: '2023-01-01',
    type: 'movie',
    video_urls: {
      vf: [
        'https://vidmoly.to/embed-vqvgyfdsnp8a.html',
        'https://my.mail.ru/video/embed/7907601233697835253'
      ],
      vostfr: [
        'https://vidmoly.to/embed-7zo3llworr98.html',
        'https://my.mail.ru/video/embed/7907601233697835247'
      ]
    }
  },
  {
    id: '23',
    title: 'Coco',
    description: 'Aspiring musician Miguel, confronted with his family\'s ancestral ban on music, enters the Land of the Dead.',
    poster_path: 'https://image.tmdb.org/t/p/w500/gGEsBPAijhVUFoiNpgZXqRVWJt2.jpg',
    backdrop_path: 'https://image.tmdb.org/t/p/original/askg3SMvhqEl4OL52YuvdtY40Yb.jpg',
    release_date: '2017-11-22',
    runtime: 105,
    genre: ['Animation', 'Adventure', 'Family'],
    rating: 8.4,
    video_url: 'https://vidmoly.to/embed-7zo3llworr98.html',
    category: 'Comedy',
    created_at: '2023-01-01',
    type: 'movie',
    video_urls: {
      vf: [
        'https://vidmoly.to/embed-vqvgyfdsnp8a.html',
        'https://my.mail.ru/video/embed/7907601233697835253'
      ],
      vostfr: [
        'https://vidmoly.to/embed-7zo3llworr98.html',
        'https://my.mail.ru/video/embed/7907601233697835247'
      ]
    }
  },
  {
    id: '24',
    title: 'The Social Network',
    description: 'Harvard student Mark Zuckerberg creates the social networking site that would become Facebook.',
    poster_path: 'https://image.tmdb.org/t/p/w500/n0ybibhJtQ5icDqTp8eRytcIHJx.jpg',
    backdrop_path: 'https://image.tmdb.org/t/p/original/8YGX0r8HrdO9Q7R0WJ2nF6l1n6M.jpg',
    release_date: '2010-10-01',
    runtime: 120,
    genre: ['Biography', 'Drama'],
    rating: 7.7,
    video_url: 'https://vidmoly.to/embed-7zo3llworr98.html',
    category: 'Drama',
    created_at: '2023-01-01',
    type: 'movie',
    video_urls: {
      vf: [
        'https://vidmoly.to/embed-vqvgyfdsnp8a.html',
        'https://my.mail.ru/video/embed/7907601233697835253'
      ],
      vostfr: [
        'https://vidmoly.to/embed-7zo3llworr98.html',
        'https://my.mail.ru/video/embed/7907601233697835247'
      ]
    }
  },
  {
    id: '25',
    title: 'Avatar',
    description: 'A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following orders and protecting an alien civilization.',
    poster_path: 'https://image.tmdb.org/t/p/w500/kmcqlZGaSh20zpTbuoF0Cdn07dT.jpg',
    backdrop_path: 'https://image.tmdb.org/t/p/original/8I37NtDffNV7AZlDa7uDvvqhovU.jpg',
    release_date: '2009-12-18',
    runtime: 162,
    genre: ['Action', 'Adventure', 'Sci-Fi'],
    rating: 7.8,
    video_url: 'https://vidmoly.to/embed-7zo3llworr98.html',
    category: 'Sci-Fi',
    created_at: '2023-01-01',
    type: 'movie',
    video_urls: {
      vf: [
        'https://vidmoly.to/embed-vqvgyfdsnp8a.html',
        'https://my.mail.ru/video/embed/7907601233697835253'
      ],
      vostfr: [
        'https://vidmoly.to/embed-7zo3llworr98.html',
        'https://my.mail.ru/video/embed/7907601233697835247'
      ]
    }
  },
  {
    id: '26',
    title: 'Mad Max: Fury Road',
    description: 'In a post-apocalyptic wasteland, Max helps a rebellious woman and a group of female prisoners.',
    poster_path: 'https://image.tmdb.org/t/p/w500/8tZYtuWezp8JbcsvHYO0O46tFbo.jpg',
    backdrop_path: 'https://image.tmdb.org/t/p/original/phszHPFVhPHhMZgo0fWTKBDQsJA.jpg',
    release_date: '2015-05-15',
    runtime: 120,
    genre: ['Action', 'Adventure', 'Sci-Fi'],
    rating: 8.1,
    video_url: 'https://vidmoly.to/embed-7zo3llworr98.html',
    category: 'Action',
    created_at: '2023-01-01',
    type: 'movie',
    video_urls: {
      vf: [
        'https://vidmoly.to/embed-vqvgyfdsnp8a.html',
        'https://my.mail.ru/video/embed/7907601233697835253'
      ],
      vostfr: [
        'https://vidmoly.to/embed-7zo3llworr98.html',
        'https://my.mail.ru/video/embed/7907601233697835247'
      ]
    }
  },
  {
    id: '27',
    title: 'Up',
    description: '78-year-old Carl sets out to fulfill his dream to see the wilds of South America.',
    poster_path: 'https://image.tmdb.org/t/p/w500/9yzp0ZbD7bGxk1r6yJz1y1dM5bT.jpg',
    backdrop_path: 'https://image.tmdb.org/t/p/original/6uoiU4r1tK2XGEdqM5jF6yF6l1n.jpg',
    release_date: '2009-05-29',
    runtime: 96,
    genre: ['Animation', 'Adventure', 'Comedy'],
    rating: 8.2,
    video_url: 'https://vidmoly.to/embed-7zo3llworr98.html',
    category: 'Comedy',
    created_at: '2023-01-01',
    type: 'movie',
    video_urls: {
      vf: [
        'https://vidmoly.to/embed-vqvgyfdsnp8a.html',
        'https://my.mail.ru/video/embed/7907601233697835253'
      ],
      vostfr: [
        'https://vidmoly.to/embed-7zo3llworr98.html',
        'https://my.mail.ru/video/embed/7907601233697835247'
      ]
    }
  },
  {
    id: '28',
    title: 'The Dark Knight Rises',
    description: 'Eight years after the Joker\'s reign, Batman faces a new enemy, Bane.',
    poster_path: 'https://image.tmdb.org/t/p/w500/3P52oz9HPQWxcwHOwxtyrVV1LKi.jpg',
    backdrop_path: 'https://image.tmdb.org/t/p/original/vlC8eGk7f1kEcY2r3QF1gC5hQhC.jpg',
    release_date: '2012-07-20',
    runtime: 164,
    genre: ['Action', 'Thriller'],
    rating: 8.4,
    video_url: 'https://vidmoly.to/embed-7zo3llworr98.html',
    category: 'Action',
    created_at: '2023-01-01',
    type: 'movie',
    video_urls: {
      vf: [
        'https://vidmoly.to/embed-vqvgyfdsnp8a.html',
        'https://my.mail.ru/video/embed/7907601233697835253'
      ],
      vostfr: [
        'https://vidmoly.to/embed-7zo3llworr98.html',
        'https://my.mail.ru/video/embed/7907601233697835247'
      ]
    }
  },
  {
    id: '29',
    title: 'Inside Out',
    description: 'After young Riley is uprooted from her Midwest life, her emotions conflict on how to navigate a new city.',
    poster_path: 'https://image.tmdb.org/t/p/w500/aAmfIX3TT40zUHGcCKrlOZRKC7u.jpg',
    backdrop_path: 'https://image.tmdb.org/t/p/original/2lECpi35Hnbpa4y46JX0aY3AWTy.jpg',
    release_date: '2015-06-19',
    runtime: 95,
    genre: ['Animation', 'Comedy', 'Family'],
    rating: 8.1,
    video_url: 'https://vidmoly.to/embed-7zo3llworr98.html',
    category: 'Comedy',
    created_at: '2023-01-01',
    type: 'movie',
    video_urls: {
      vf: [
        'https://vidmoly.to/embed-vqvgyfdsnp8a.html',
        'https://my.mail.ru/video/embed/7907601233697835253'
      ],
      vostfr: [
        'https://vidmoly.to/embed-7zo3llworr98.html',
        'https://my.mail.ru/video/embed/7907601233697835247'
      ]
    }
  },
  {
    id: '30',
    title: 'The Wolf of Wall Street',
    description: 'Based on the true story of Jordan Belfort, from his rise to a wealthy stock-broker to his fall.',
    poster_path: 'https://image.tmdb.org/t/p/w500/pWHf4khOloNVfCxscsXFj3jj6gP.jpg',
    backdrop_path: 'https://image.tmdb.org/t/p/original/8i6ZDk97Vyh0jHohMG4vFeFuKJh.jpg',
    release_date: '2013-12-25',
    runtime: 180,
    genre: ['Biography', 'Comedy', 'Crime'],
    rating: 8.2,
    video_url: 'https://vidmoly.to/embed-7zo3llworr98.html',
    category: 'Crime',
    created_at: '2023-01-01',
    type: 'movie',
    video_urls: {
      vf: [
        'https://vidmoly.to/embed-vqvgyfdsnp8a.html',
        'https://my.mail.ru/video/embed/7907601233697835253'
      ],
      vostfr: [
        'https://vidmoly.to/embed-7zo3llworr98.html',
        'https://my.mail.ru/video/embed/7907601233697835247'
      ]
    }
  },
  {
    id: '31',
    title: 'La La Land',
    description: 'While navigating their careers in Los Angeles, a pianist and an actress fall in love.',
    poster_path: 'https://image.tmdb.org/t/p/w500/uDO8zWDhfWwoFdKS4fzkUJt0Rf0.jpg',
    backdrop_path: 'https://image.tmdb.org/t/p/original/uzIGtyS6bbnJzGsPL93WCF1FWm8.jpg',
    release_date: '2016-12-09',
    runtime: 128,
    genre: ['Comedy', 'Drama', 'Music'],
    rating: 8.0,
    video_url: 'https://vidmoly.to/embed-7zo3llworr98.html',
    category: 'Drama',
    created_at: '2023-01-01',
    type: 'movie',
    video_urls: {
      vf: [
        'https://vidmoly.to/embed-vqvgyfdsnp8a.html',
        'https://my.mail.ru/video/embed/7907601233697835253'
      ],
      vostfr: [
        'https://vidmoly.to/embed-7zo3llworr98.html',
        'https://my.mail.ru/video/embed/7907601233697835247'
      ]
    }
  },
  {
    id: '32',
    title: 'Deadpool',
    description: 'A wisecracking mercenary gets experimented on and becomes immortal but ugly, and sets out to track down the man who ruined his looks.',
    poster_path: 'https://image.tmdb.org/t/p/w500/inVq3FRqcYIRl2la8iZikYYxFNR.jpg',
    backdrop_path: 'https://image.tmdb.org/t/p/original/n1y094tVDFATSzkTnFxoGZ1qNsG.jpg',
    release_date: '2016-02-12',
    runtime: 108,
    genre: ['Action', 'Adventure', 'Comedy'],
    rating: 8.0,
    video_url: 'https://vidmoly.to/embed-7zo3llworr98.html',
    category: 'Action',
    created_at: '2023-01-01',
    type: 'movie',
    video_urls: {
      vf: [
        'https://vidmoly.to/embed-vqvgyfdsnp8a.html',
        'https://my.mail.ru/video/embed/7907601233697835253'
      ],
      vostfr: [
        'https://vidmoly.to/embed-7zo3llworr98.html',
        'https://my.mail.ru/video/embed/7907601233697835247'
      ]
    }
  },
  {
    id: '33',
    title: 'The Grand Budapest Hotel',
    description: 'A writer encounters the owner of an aging high-class hotel, who tells him of his early years serving as a lobby boy.',
    poster_path: 'https://image.tmdb.org/t/p/w500/nX5XotM9yprCKarRH4fzOq1VM1J.jpg',
    backdrop_path: 'https://image.tmdb.org/t/p/original/6w1VjZrA1aGyZ5A2u1r7oJp0pVn.jpg',
    release_date: '2014-03-28',
    runtime: 99,
    genre: ['Adventure', 'Comedy', 'Crime'],
    rating: 8.1,
    video_url: 'https://vidmoly.to/embed-7zo3llworr98.html',
    category: 'Comedy',
    created_at: '2023-01-01',
    type: 'movie',
    video_urls: {
      vf: [
        'https://vidmoly.to/embed-vqvgyfdsnp8a.html',
        'https://my.mail.ru/video/embed/7907601233697835253'
      ],
      vostfr: [
        'https://vidmoly.to/embed-7zo3llworr98.html',
        'https://my.mail.ru/video/embed/7907601233697835247'
      ]
    }
  },
  {
    id: '34',
    title: 'The Imitation Game',
    description: 'During World War II, the English mathematical genius Alan Turing tries to crack the German Enigma code.',
    poster_path: 'https://image.tmdb.org/t/p/w500/zSqJ1qFq8NXFfi7JeIYMlzyR0dx.jpg',
    backdrop_path: 'https://image.tmdb.org/t/p/original/6uoiU4r1tK2XGEdqM5jF6yF6l1n.jpg',
    release_date: '2014-12-25',
    runtime: 113,
    genre: ['Biography', 'Drama', 'Thriller'],
    rating: 8.0,
    video_url: 'https://vidmoly.to/embed-7zo3llworr98.html',
    category: 'Drama',
    created_at: '2023-01-01',
    type: 'movie',
    video_urls: {
      vf: [
        'https://vidmoly.to/embed-vqvgyfdsnp8a.html',
        'https://my.mail.ru/video/embed/7907601233697835253'
      ],
      vostfr: [
        'https://vidmoly.to/embed-7zo3llworr98.html',
        'https://my.mail.ru/video/embed/7907601233697835247'
      ]
    }
  },
  {
    id: '35',
    title: 'Guardians of the Galaxy',
    description: 'A group of intergalactic criminals must pull together to stop a fanatical warrior.',
    poster_path: 'https://image.tmdb.org/t/p/w500/y31QB9kn3XSudA15tV7UWQ9XLuW.jpg',
    backdrop_path: 'https://image.tmdb.org/t/p/original/bHarw8xrmQeqf3t8HpuMY7zoK4x.jpg',
    release_date: '2014-08-01',
    runtime: 121,
    genre: ['Action', 'Adventure', 'Comedy'],
    rating: 8.0,
    video_url: 'https://vidmoly.to/embed-7zo3llworr98.html',
    category: 'Action',
    created_at: '2023-01-01',
    type: 'movie',
    video_urls: {
      vf: [
        'https://vidmoly.to/embed-vqvgyfdsnp8a.html',
        'https://my.mail.ru/video/embed/7907601233697835253'
      ],
      vostfr: [
        'https://vidmoly.to/embed-7zo3llworr98.html',
        'https://my.mail.ru/video/embed/7907601233697835247'
      ]
    }
  },
  {
    id: '36',
    title: 'The Revenant',
    description: 'A frontiersman on a fur trading expedition in the 1820s fights for survival after being mauled by a bear.',
    poster_path: 'https://image.tmdb.org/t/p/w500/oXUWEc5i3wYyFnL1Ycu8ppxxPvs.jpg',
    backdrop_path: 'https://image.tmdb.org/t/p/original/6uoiU4r1tK2XGEdqM5jF6yF6l1n.jpg',
    release_date: '2015-12-25',
    runtime: 156,
    genre: ['Adventure', 'Drama', 'Thriller'],
    rating: 8.0,
    video_url: 'https://vidmoly.to/embed-7zo3llworr98.html',
    category: 'Drama',
    created_at: '2023-01-01',
    type: 'movie',
    video_urls: {
      vf: [
        'https://vidmoly.to/embed-vqvgyfdsnp8a.html',
        'https://my.mail.ru/video/embed/7907601233697835253'
      ],
      vostfr: [
        'https://vidmoly.to/embed-7zo3llworr98.html',
        'https://my.mail.ru/video/embed/7907601233697835247'
      ]
    }
  },
  {
    id: '37',
    title: 'Coco Before Chanel',
    description: 'The story of Coco Chanel\'s rise from obscure beginnings to the heights of the fashion world.',
    poster_path: 'https://image.tmdb.org/t/p/w500/6uoiU4r1tK2XGEdqM5jF6yF6l1n.jpg',
    backdrop_path: 'https://image.tmdb.org/t/p/original/6uoiU4r1tK2XGEdqM5jF6yF6l1n.jpg',
    release_date: '2009-04-22',
    runtime: 110,
    genre: ['Biography', 'Drama'],
    rating: 6.7,
    video_url: 'https://vidmoly.to/embed-7zo3llworr98.html',
    category: 'Drama',
    created_at: '2023-01-01',
    type: 'movie',
    video_urls: {
      vf: [
        'https://vidmoly.to/embed-vqvgyfdsnp8a.html',
        'https://my.mail.ru/video/embed/7907601233697835253'
      ],
      vostfr: [
        'https://vidmoly.to/embed-7zo3llworr98.html',
        'https://my.mail.ru/video/embed/7907601233697835247'
      ]
    }
  },
  {
    id: '38',
    title: 'The Incredibles',
    description: 'A family of undercover superheroes, while trying to live the quiet suburban life, are forced into action.',
    poster_path: 'https://image.tmdb.org/t/p/w500/2LqaLgk4Z226KkgPJuiOQ58wvrm.jpg',
    backdrop_path: 'https://image.tmdb.org/t/p/original/6uoiU4r1tK2XGEdqM5jF6yF6l1n.jpg',
    release_date: '2004-11-05',
    runtime: 115,
    genre: ['Animation', 'Action', 'Adventure'],
    rating: 8.0,
    video_url: 'https://vidmoly.to/embed-7zo3llworr98.html',
    category: 'Action',
    created_at: '2023-01-01',
    type: 'movie',
    video_urls: {
      vf: [
        'https://vidmoly.to/embed-vqvgyfdsnp8a.html',
        'https://my.mail.ru/video/embed/7907601233697835253'
      ],
      vostfr: [
        'https://vidmoly.to/embed-7zo3llworr98.html',
        'https://my.mail.ru/video/embed/7907601233697835247'
      ]
    }
  },
  {
    id: '39',
    title: 'The Shape of Water',
    description: 'At a top secret research facility, a lonely janitor forms a unique relationship with an amphibious creature.',
    poster_path: 'https://image.tmdb.org/t/p/w500/9zfwPffUXpBrEP26yp0q1ckXDcj.jpg',
    backdrop_path: 'https://image.tmdb.org/t/p/original/6uoiU4r1tK2XGEdqM5jF6yF6l1n.jpg',
    release_date: '2017-12-01',
    runtime: 123,
    genre: ['Adventure', 'Drama', 'Fantasy'],
    rating: 7.3,
    video_url: 'https://vidmoly.to/embed-7zo3llworr98.html',
    category: 'Drama',
    created_at: '2023-01-01',
    type: 'movie',
    video_urls: {
      vf: [
        'https://vidmoly.to/embed-vqvgyfdsnp8a.html',
        'https://my.mail.ru/video/embed/7907601233697835253'
      ],
      vostfr: [
        'https://vidmoly.to/embed-7zo3llworr98.html',
        'https://my.mail.ru/video/embed/7907601233697835247'
      ]
    }
  },
  {
    id: '40',
    title: 'The Martian',
    description: 'An astronaut becomes stranded on Mars after his team assume him dead, and must rely on his ingenuity to survive.',
    poster_path: 'https://image.tmdb.org/t/p/w500/5aGhaIHYuQbqlHWvWYqMCnj40y2.jpg',
    backdrop_path: 'https://image.tmdb.org/t/p/original/6uoiU4r1tK2XGEdqM5jF6yF6l1n.jpg',
    release_date: '2015-10-02',
    runtime: 144,
    genre: ['Adventure', 'Drama', 'Sci-Fi'],
    rating: 8.0,
    video_url: 'https://vidmoly.to/embed-7zo3llworr98.html',
    category: 'Sci-Fi',
    created_at: '2023-01-01',
    type: 'movie',
    video_urls: {
      vf: [
        'https://vidmoly.to/embed-vqvgyfdsnp8a.html',
        'https://my.mail.ru/video/embed/7907601233697835253'
      ],
      vostfr: [
        'https://vidmoly.to/embed-7zo3llworr98.html',
        'https://my.mail.ru/video/embed/7907601233697835247'
      ]
    }
  },
  {
    id: '41',
    title: 'Moana',
    description: 'In Ancient Polynesia, when a terrible curse incurred by the Demigod Maui reaches Moana\'s island, she answers the Ocean\'s call to seek out the Demigod to set things right.',
    poster_path: 'https://image.tmdb.org/t/p/w500/4q2NNj4S5dG2RLF9CpXsej7yXl.jpg',
    backdrop_path: 'https://image.tmdb.org/t/p/original/6uoiU4r1tK2XGEdqM5jF6yF6l1n.jpg',
    release_date: '2016-11-23',
    runtime: 107,
    genre: ['Animation', 'Adventure', 'Comedy'],
    rating: 7.6,
    video_url: 'https://vidmoly.to/embed-7zo3llworr98.html',
    category: 'Comedy',
    created_at: '2023-01-01',
    type: 'movie',
    video_urls: {
      vf: [
        'https://vidmoly.to/embed-vqvgyfdsnp8a.html',
        'https://my.mail.ru/video/embed/7907601233697835253'
      ],
      vostfr: [
        'https://vidmoly.to/embed-7zo3llworr98.html',
        'https://my.mail.ru/video/embed/7907601233697835247'
      ]
    }
  },
  {
    id: '42',
    title: 'Logan',
    description: 'In a future where mutants are nearly extinct, an elderly and weary Logan leads a quiet life.',
    poster_path: 'https://image.tmdb.org/t/p/w500/fnbjcRDYn6YviCcePDnGdyAkYsB.jpg',
    backdrop_path: 'https://image.tmdb.org/t/p/original/6uoiU4r1tK2XGEdqM5jF6yF6l1n.jpg',
    release_date: '2017-03-03',
    runtime: 137,
    genre: ['Action', 'Drama', 'Sci-Fi'],
    rating: 8.1,
    video_url: 'https://vidmoly.to/embed-7zo3llworr98.html',
    category: 'Action',
    created_at: '2023-01-01',
    type: 'movie',
    video_urls: {
      vf: [
        'https://vidmoly.to/embed-vqvgyfdsnp8a.html',
        'https://my.mail.ru/video/embed/7907601233697835253'
      ],
      vostfr: [
        'https://vidmoly.to/embed-7zo3llworr98.html',
        'https://my.mail.ru/video/embed/7907601233697835247'
      ]
    }
  },
  {
    id: '43',
    title: 'The Intouchables',
    description: 'After he becomes a quadriplegic from a paragliding accident, an aristocrat hires a young man from the projects.',
    poster_path: 'https://image.tmdb.org/t/p/w500/w6XG1rN6vGq5M1f1Q2l2Q2l2Q2l.jpg',
    backdrop_path: 'https://image.tmdb.org/t/p/original/6uoiU4r1tK2XGEdqM5jF6yF6l1n.jpg',
    release_date: '2011-11-02',
    runtime: 112,
    genre: ['Biography', 'Comedy', 'Drama'],
    rating: 8.5,
    video_url: 'https://vidmoly.to/embed-7zo3llworr98.html',
    category: 'Drama',
    created_at: '2023-01-01',
    type: 'movie',
    video_urls: {
      vf: [
        'https://vidmoly.to/embed-vqvgyfdsnp8a.html',
        'https://my.mail.ru/video/embed/7907601233697835253'
      ],
      vostfr: [
        'https://vidmoly.to/embed-7zo3llworr98.html',
        'https://my.mail.ru/video/embed/7907601233697835247'
      ]
    }
  },
  {
    id: '44',
    title: 'Skyfall',
    description: 'Bond\'s loyalty to M is tested as her past comes back to haunt her.',
    poster_path: 'https://image.tmdb.org/t/p/w500/izrHg2UzxG3YXtbOS0eF2V6pBWS.jpg',
    backdrop_path: 'https://image.tmdb.org/t/p/original/6uoiU4r1tK2XGEdqM5jF6yF6l1n.jpg',
    release_date: '2012-11-09',
    runtime: 143,
    genre: ['Action', 'Adventure', 'Thriller'],
    rating: 7.8,
    video_url: 'https://vidmoly.to/embed-7zo3llworr98.html',
    category: 'Action',
    created_at: '2023-01-01',
    type: 'movie',
    video_urls: {
      vf: [
        'https://vidmoly.to/embed-vqvgyfdsnp8a.html',
        'https://my.mail.ru/video/embed/7907601233697835253'
      ],
      vostfr: [
        'https://vidmoly.to/embed-7zo3llworr98.html',
        'https://my.mail.ru/video/embed/7907601233697835247'
      ]
    }
  },
  {
    id: '45',
    title: 'The Pursuit of Happyness',
    description: 'A struggling salesman takes custody of his son as he\'s poised to begin a life-changing professional career.',
    poster_path: 'https://image.tmdb.org/t/p/w500/ctOEhQiFIHWkiaYp7b0ibSTe5IL.jpg',
    backdrop_path: 'https://image.tmdb.org/t/p/original/6uoiU4r1tK2XGEdqM5jF6yF6l1n.jpg',
    release_date: '2006-12-15',
    runtime: 117,
    genre: ['Biography', 'Drama'],
    rating: 8.0,
    video_url: 'https://vidmoly.to/embed-7zo3llworr98.html',
    category: 'Drama',
    created_at: '2023-01-01',
    type: 'movie',
    video_urls: {
      vf: [
        'https://vidmoly.to/embed-vqvgyfdsnp8a.html',
        'https://my.mail.ru/video/embed/7907601233697835253'
      ],
      vostfr: [
        'https://vidmoly.to/embed-7zo3llworr98.html',
        'https://my.mail.ru/video/embed/7907601233697835247'
      ]
    }
  },
  {
    id: '46',
    title: 'The Green Mile',
    description: 'The lives of guards on Death Row are affected by one of their charges: a black man accused of child murder.',
    poster_path: 'https://image.tmdb.org/t/p/w500/velWPhVMQeQKcxggNEU8YmIo52R.jpg',
    backdrop_path: 'https://image.tmdb.org/t/p/original/6uoiU4r1tK2XGEdqM5jF6yF6l1n.jpg',
    release_date: '1999-12-10',
    runtime: 189,
    genre: ['Crime', 'Drama'],
    rating: 8.6,
    video_url: 'https://vidmoly.to/embed-7zo3llworr98.html',
    category: 'Drama',
    created_at: '2023-01-01',
    type: 'movie',
    video_urls: {
      vf: [
        'https://vidmoly.to/embed-vqvgyfdsnp8a.html',
        'https://my.mail.ru/video/embed/7907601233697835253'
      ],
      vostfr: [
        'https://vidmoly.to/embed-7zo3llworr98.html',
        'https://my.mail.ru/video/embed/7907601233697835247'
      ]
    }
  },
  {
    id: '47',
    title: 'The Good, the Bad and the Ugly',
    description: 'A bounty hunting scam joins two men in an uneasy alliance against a third in a race to find a fortune.',
    poster_path: 'https://image.tmdb.org/t/p/w500/bX2xnavhMYjWDoZp1VM6VnU1xwe.jpg',
    backdrop_path: 'https://image.tmdb.org/t/p/original/6uoiU4r1tK2XGEdqM5jF6yF6l1n.jpg',
    release_date: '1966-12-23',
    runtime: 161,
    genre: ['Western'],
    rating: 8.8,
    video_url: 'https://vidmoly.to/embed-7zo3llworr98.html',
    category: 'Action',
    created_at: '2023-01-01',
    type: 'movie',
    video_urls: {
      vf: [
        'https://vidmoly.to/embed-vqvgyfdsnp8a.html',
        'https://my.mail.ru/video/embed/7907601233697835253'
      ],
      vostfr: [
        'https://vidmoly.to/embed-7zo3llworr98.html',
        'https://my.mail.ru/video/embed/7907601233697835247'
      ]
    }
  },
  {
    id: '48',
    title: '12 Angry Men',
    description: 'A jury holdout attempts to prevent a miscarriage of justice by forcing his colleagues to reconsider the evidence.',
    poster_path: 'https://image.tmdb.org/t/p/w500/ow3wq89wM8qd5X7hWKxiRfsFf9C.jpg',
    backdrop_path: 'https://image.tmdb.org/t/p/original/6uoiU4r1tK2XGEdqM5jF6yF6l1n.jpg',
    release_date: '1957-04-10',
    runtime: 96,
    genre: ['Crime', 'Drama'],
    rating: 8.9,
    video_url: 'https://vidmoly.to/embed-7zo3llworr98.html',
    category: 'Drama',
    created_at: '2023-01-01',
    type: 'movie',
    video_urls: {
      vf: [
        'https://vidmoly.to/embed-vqvgyfdsnp8a.html',
        'https://my.mail.ru/video/embed/7907601233697835253'
      ],
      vostfr: [
        'https://vidmoly.to/embed-7zo3llworr98.html',
        'https://my.mail.ru/video/embed/7907601233697835247'
      ]
    }
  },
  {
    id: '49',
    title: 'Schindler\'s List',
    description: 'In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce.',
    poster_path: 'https://image.tmdb.org/t/p/w500/sF1U4EUQS8YHUYjNl3pMGNIFyrH.jpg',
    backdrop_path: 'https://image.tmdb.org/t/p/original/6uoiU4r1tK2XGEdqM5jF6yF6l1n.jpg',
    release_date: '1993-12-15',
    runtime: 195,
    genre: ['Biography', 'Drama', 'History'],
    rating: 8.9,
    video_url: 'https://vidmoly.to/embed-7zo3llworr98.html',
    category: 'Drama',
    created_at: '2023-01-01',
    type: 'movie',
    video_urls: {
      vf: [
        'https://vidmoly.to/embed-vqvgyfdsnp8a.html',
        'https://my.mail.ru/video/embed/7907601233697835253'
      ],
      vostfr: [
        'https://vidmoly.to/embed-7zo3llworr98.html',
        'https://my.mail.ru/video/embed/7907601233697835247'
      ]
    }
  },
  {
    id: '50',
    title: 'The Lord of the Rings: The Return of the King',
    description: 'Gandalf and Aragorn lead the World of Men against evil Sauron to aid Frodo\'s quest to destroy the One Ring.',
    poster_path: 'https://image.tmdb.org/t/p/w500/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg',
    backdrop_path: 'https://image.tmdb.org/t/p/original/6uoiU4r1tK2XGEdqM5jF6yF6l1n.jpg',
    release_date: '2003-12-17',
    runtime: 201,
    genre: ['Action', 'Adventure', 'Drama'],
    rating: 8.9,
    video_url: 'https://vidmoly.to/embed-7zo3llworr98.html',
    category: 'Action',
    created_at: '2023-01-01',
    type: 'movie',
    video_urls: {
      vf: [
        'https://vidmoly.to/embed-vqvgyfdsnp8a.html',
        'https://my.mail.ru/video/embed/7907601233697835253'
      ],
      vostfr: [
        'https://vidmoly.to/embed-7zo3llworr98.html',
        'https://my.mail.ru/video/embed/7907601233697835247'
      ]
    }
  },
  {
    id: '51',
    title: 'Pulp Fiction',
    description: 'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.',
    poster_path: 'https://image.tmdb.org/t/p/w500/fIE3lAGcZDV1G6XM5KmuWnNsPp1.jpg',
    backdrop_path: 'https://image.tmdb.org/t/p/original/suaEOtk1N1sgg2QM528GluxMcAd.jpg',
    release_date: '1994-10-14',
    runtime: 154,
    genre: ['Crime', 'Drama'],
    rating: 8.9,
    video_url: 'https://vidmoly.to/embed-7zo3llworr98.html',
    category: 'Crime',
    created_at: '2023-01-01',
    type: 'movie',
    video_urls: {
      vf: [
        'https://vidmoly.to/embed-vqvgyfdsnp8a.html',
        'https://my.mail.ru/video/embed/7907601233697835253'
      ],
      vostfr: [
        'https://vidmoly.to/embed-7zo3llworr98.html',
        'https://my.mail.ru/video/embed/7907601233697835247'
      ]
    }
  },
  {
    id: '52',
    title: 'The Goodfellas',
    description: 'The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners.',
    poster_path: 'https://image.tmdb.org/t/p/w500/aKuFiU82s5ISJpGZp7YkIr3kCUd.jpg',
    backdrop_path: 'https://image.tmdb.org/t/p/original/6uoiU4r1tK2XGEdqM5jF6yF6l1n.jpg',
    release_date: '1990-09-19',
    runtime: 146,
    genre: ['Biography', 'Crime', 'Drama'],
    rating: 8.7,
    video_url: 'https://vidmoly.to/embed-7zo3llworr98.html',
    category: 'Crime',
    created_at: '2023-01-01',
    type: 'movie',
    languages: ['VF', 'VOSTFR'],
    director: 'Francis Ford Coppola',
    actors: ['Marlon Brando', 'Al Pacino', 'James Caan'],
    video_urls: {
      vf: [
        'https://vidmoly.to/embed-vqvgyfdsnp8a.html',
        'https://my.mail.ru/video/embed/7907601233697835253'
      ],
      vostfr: [
        'https://vidmoly.to/embed-7zo3llworr98.html',
        'https://my.mail.ru/video/embed/7907601233697835247'
      ]
    }
  },
  {
    id: '57',
    title: 'Goodfellas',
    description: 'The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners.',
    poster_path: 'https://image.tmdb.org/t/p/w500/aKuFiU82s5ISJpGZp7YkIr3kCUd.jpg',
    backdrop_path: 'https://image.tmdb.org/t/p/original/6uoiU4r1tK2XGEdqM5jF6yF6l1n.jpg',
    release_date: '1990-09-19',
    runtime: 146,
    genre: ['Biography', 'Crime', 'Drama'],
    rating: 8.7,
    video_url: 'https://vidmoly.to/embed-7zo3llworr98.html',
    category: 'Crime',
    created_at: '2023-01-01',
    type: 'movie',
    director: 'Martin Scorsese',
    actors: ['Robert De Niro', 'Ray Liotta', 'Joe Pesci']
  },
  {
    id: '58',
    title: 'One Flew Over the Cuckoo\'s Nest',
    description: 'A criminal pleads insanity after getting into trouble again and once in the mental institution rebels against the oppressive nurse.',
    poster_path: 'https://image.tmdb.org/t/p/w500/3jcbDmRFiQ83drXNOvRDeKHxS0C.jpg',
    backdrop_path: 'https://image.tmdb.org/t/p/original/6uoiU4r1tK2XGEdqM5jF6yF6l1n.jpg',
    release_date: '1975-11-19',
    runtime: 133,
    genre: ['Drama'],
    rating: 8.7,
    video_url: 'https://vidmoly.to/embed-7zo3llworr98.html',
    category: 'Drama',
    created_at: '2023-01-01',
    type: 'movie',
    director: 'Milos Forman',
    actors: ['Jack Nicholson', 'Louise Fletcher', 'Michael Berryman']
  },
  {
    id: '59',
    title: 'Seven Samurai',
    description: 'A poor village under attack by bandits recruits seven unemployed samurai to help them defend themselves.',
    poster_path: 'https://image.tmdb.org/t/p/w500/8OKmBV5BUFzmozIC3pPWKHy17kx.jpg',
    backdrop_path: 'https://image.tmdb.org/t/p/original/6uoiU4r1tK2XGEdqM5jF6yF6l1n.jpg',
    release_date: '1954-04-26',
    runtime: 207,
    genre: ['Action', 'Adventure', 'Drama'],
    rating: 8.6,
    video_url: 'https://vidmoly.to/embed-7zo3llworr98.html',
    category: 'Action',
    created_at: '2023-01-01',
    type: 'movie',
    director: 'Akira Kurosawa',
    actors: ['Toshirô Mifune', 'Takashi Shimura', 'Keiko Tsushima']
  },
  {
    id: '60',
    title: 'It\'s a Wonderful Life',
    description: 'An angel is sent from Heaven to help a desperately frustrated businessman by showing him what life would have been like if he had never existed.',
    poster_path: 'https://image.tmdb.org/t/p/w500/sA0cdLqx9AzO92FhkDITJ4pE3m8.jpg',
    backdrop_path: 'https://image.tmdb.org/t/p/original/6uoiU4r1tK2XGEdqM5jF6yF6l1n.jpg',
    release_date: '1946-12-20',
    runtime: 130,
    genre: ['Drama', 'Family', 'Fantasy'],
    rating: 8.6,
    video_url: 'https://vidmoly.to/embed-7zo3llworr98.html',
    category: 'Drama',
    created_at: '2023-01-01',
    type: 'movie',
    director: 'Frank Capra',
    actors: ['James Stewart', 'Donna Reed', 'Lionel Barrymore']
  },
  {
    id: '61',
    title: 'The Usual Suspects',
    description: 'A sole survivor tells of the twisty events leading up to a horrific gun battle on a boat.',
    poster_path: 'https://image.tmdb.org/t/p/w500/jgJoRWltoS17nD5MAQ1yK2Ztefw.jpg',
    backdrop_path: 'https://image.tmdb.org/t/p/original/6uoiU4r1tK2XGEdqM5jF6yF6l1n.jpg',
    release_date: '1995-08-16',
    runtime: 106,
    genre: ['Crime', 'Drama', 'Mystery'],
    rating: 8.5,
    video_url: 'https://vidmoly.to/embed-7zo3llworr98.html',
    category: 'Crime',
    created_at: '2023-01-01',
    type: 'movie',
    director: 'Bryan Singer',
    actors: ['Kevin Spacey', 'Gabriel Byrne', 'Chazz Palminteri']
  },
  {
    id: '62',
    title: 'Léon: The Professional',
    description: 'Mathilda, a 12-year-old girl, is reluctantly taken in by Léon, a professional assassin, after her family is murdered.',
    poster_path: 'https://image.tmdb.org/t/p/w500/2Hj7YcvJd0C9J8pIYcc6Z2um5C7.jpg',
    backdrop_path: 'https://image.tmdb.org/t/p/original/6uoiU4r1tK2XGEdqM5jF6yF6l1n.jpg',
    release_date: '1994-11-18',
    runtime: 110,
    genre: ['Action', 'Crime', 'Drama'],
    rating: 8.5,
    video_url: 'https://vidmoly.to/embed-7zo3llworr98.html',
    category: 'Action',
    created_at: '2023-01-01',
    type: 'movie',
    director: 'Luc Besson',
    actors: ['Jean Reno', 'Nathalie Baye', 'Gary Oldman']
  },
  {
    id: '63',
    title: 'Spirited Away',
    description: 'During her family\'s move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits.',
    poster_path: 'https://image.tmdb.org/t/p/w500/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg',
    backdrop_path: 'https://image.tmdb.org/t/p/original/6uoiU4r1tK2XGEdqM5jF6yF6l1n.jpg',
    release_date: '2001-07-20',
    runtime: 125,
    genre: ['Animation', 'Adventure', 'Family'],
    rating: 8.6,
    video_url: 'https://vidmoly.to/embed-7zo3llworr98.html',
    category: 'Comedy',
    created_at: '2023-01-01',
    type: 'movie',
    director: 'Hayao Miyazaki',
    actors: ['Rumi Hiiragi', 'Miyu Irino', 'Mari Natsuki']
  },
  {
    id: '64',
    title: 'Saving Private Ryan',
    description: 'Following the Normandy Landings, a group of U.S. soldiers go behind enemy lines to retrieve a paratrooper.',
    poster_path: 'https://image.tmdb.org/t/p/w500/uqx37cS8cpHg8U35f9U5I7rDEvW.jpg',
    backdrop_path: 'https://image.tmdb.org/t/p/original/6uoiU4r1tK2XGEdqM5jF6yF6l1n.jpg',
    release_date: '1998-07-24',
    runtime: 169,
    genre: ['Action', 'Drama', 'War'],
    rating: 8.6,
    video_url: 'https://vidmoly.to/embed-7zo3llworr98.html',
    category: 'Action',
    created_at: '2023-01-01',
    type: 'movie',
    director: 'Steven Spielberg',
    actors: ['Tom Hanks', 'Matt Damon', 'Tom Sizemore']
  },
  {
    id: '66',
    title: 'The Silence of the Lambs',
    description: 'A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer.',
    poster_path: 'https://image.tmdb.org/t/p/w500/rplLJ2hPcOQmkFhTqUte0MkEaO2.jpg',
    backdrop_path: 'https://image.tmdb.org/t/p/original/6uoiU4r1tK2XGEdqM5jF6yF6l1n.jpg',
    release_date: '1991-02-14',
    runtime: 118,
    genre: ['Crime', 'Drama', 'Thriller'],
    rating: 8.6,
    video_url: 'https://vidmoly.to/embed-7zo3llworr98.html',
    category: 'Crime',
    created_at: '2023-01-01',
    type: 'movie',
    director: 'Jonathan Demme',
    actors: ['Jodie Foster', 'Anthony Hopkins', 'Scott Glenn']
  },
  {
    id: '67',
    title: 'City of God',
    description: 'In the slums of Rio, two kids\' paths diverge as one struggles to become a photographer and the other a kingpin.',
    poster_path: 'https://image.tmdb.org/t/p/w500/gCqnQaq8Qy5EjqJEd9LqeJtK4f9.jpg',
    backdrop_path: 'https://image.tmdb.org/t/p/original/6uoiU4r1tK2XGEdqM5jF6yF6l1n.jpg',
    release_date: '2002-08-30',
    runtime: 130,
    genre: ['Crime', 'Drama'],
    rating: 8.6,
    video_url: 'https://vidmoly.to/embed-7zo3llworr98.html',
    category: 'Crime',
    created_at: '2023-01-01',
    type: 'movie',
    director: 'Fernando Meirelles',
    actors: ['Alexandre Rodrigues', 'Leandro Firmino', 'Matheus Nachtergaele']
  },
  {
    id: '68',
    title: 'Se7en',
    description: 'Two detectives, a rookie and a veteran, hunt a serial killer who uses the seven deadly sins as his modus operandi.',
    poster_path: 'https://image.tmdb.org/t/p/w500/6yOGkVyJCaNE2LscCOvn5Ro5pPx.jpg',
    backdrop_path: 'https://image.tmdb.org/t/p/original/6uoiU4r1tK2XGEdqM5jF6yF6l1n.jpg',
    release_date: '1995-09-22',
    runtime: 127,
    genre: ['Crime', 'Drama', 'Mystery'],
    rating: 8.6,
    video_url: 'https://vidmoly.to/embed-7zo3llworr98.html',
    category: 'Crime',
    created_at: '2023-01-01',
    type: 'movie',
    director: 'David Fincher',
    actors: ['Morgan Freeman', 'Brad Pitt', 'Kevin Spacey']
  },
  {
    id: '70',
    title: 'Life Is Beautiful',
    description: 'When an open-minded Jewish librarian and his son become victims of the Holocaust, he uses a perfect mixture of will.',
    poster_path: 'https://image.tmdb.org/t/p/w500/mfnkSeeVOBVheuyn2lo4tfmOPQb.jpg',
    backdrop_path: 'https://image.tmdb.org/t/p/original/6uoiU4r1tK2XGEdqM5jF6yF6l1n.jpg',
    release_date: '1997-12-20',
    runtime: 116,
    genre: ['Comedy', 'Drama', 'Romance'],
    rating: 8.6,
    video_url: 'https://vidmoly.to/embed-7zo3llworr98.html',
    category: 'Drama',
    created_at: '2023-01-01',
    type: 'movie',
    director: 'Roberto Benigni',
    actors: ['Roberto Benigni', 'Nicoletta Braschi', 'Giorgio Cantarini']
  },
  {
    id: '71',
    title: 'The Intouchables',
    description: 'After he becomes a quadriplegic from a paragliding accident, an aristocrat hires a young man from the projects.',
    poster_path: 'https://image.tmdb.org/t/p/w500/4mFsNQwbD0F237Tx7gAPot9KBJh.jpg',
    backdrop_path: 'https://image.tmdb.org/t/p/original/6uoiU4r1tK2XGEdqM5jF6yF6l1n.jpg',
    release_date: '2011-11-02',
    runtime: 112,
    genre: ['Biography', 'Comedy', 'Drama'],
    rating: 8.5,
    video_url: 'https://vidmoly.to/embed-7zo3llworr98.html',
    category: 'Comedy',
    created_at: '2023-01-01',
    type: 'movie',
    director: 'Olivier Nakache',
    actors: ['François Cluzet', 'Omar Sy', 'Anne Le Ny']
  },
  {
    id: '72',
    title: 'Modern Times',
    description: 'The Tramp struggles to live in modern industrial society with the help of a young homeless woman.',
    poster_path: 'https://image.tmdb.org/t/p/w500/7u6peLkcHwl5Gg2g6j7ZMBT5OvT.jpg',
    backdrop_path: 'https://image.tmdb.org/t/p/original/6uoiU4r1tK2XGEdqM5jF6yF6l1n.jpg',
    release_date: '1936-02-25',
    runtime: 87,
    genre: ['Comedy', 'Drama', 'Romance'],
    rating: 8.5,
    video_url: 'https://vidmoly.to/embed-7zo3llworr98.html',
    category: 'Comedy',
    created_at: '2023-01-01',
    type: 'movie',
    director: 'Charles Chaplin',
    actors: ['Charles Chaplin', 'Paulette Goddard', 'Jack Oakie']
  },
  {
    id: '73',
    title: 'Casablanca',
    description: 'A cynical expatriate American cafe owner struggles to decide whether or not to help his former lover.',
    poster_path: 'https://image.tmdb.org/t/p/w500/9UViITBCKeLYFgNa0kGtoXQ8EqK.jpg',
    backdrop_path: 'https://image.tmdb.org/t/p/original/6uoiU4r1tK2XGEdqM5jF6yF6l1n.jpg',
    release_date: '1942-11-26',
    runtime: 102,
    genre: ['Drama', 'Romance', 'War'],
    rating: 8.5,
    video_url: 'https://vidmoly.to/embed-7zo3llworr98.html',
    category: 'Drama',
    created_at: '2023-01-01',
    type: 'movie',
    director: 'Michael Curtiz',
    actors: ['Humphrey Bogart', 'Ingrid Bergman', 'Paul Henreid']
  },
  {
    id: '74',
    title: 'The Pianist',
    description: 'A Polish Jewish musician struggles to survive the destruction of the Warsaw ghetto of World War II.',
    poster_path: 'https://image.tmdb.org/t/p/w500/2hFvxCCWrqCY6uyqKOlwBWUhDqF.jpg',
    backdrop_path: 'https://image.tmdb.org/t/p/original/6uoiU4r1tK2XGEdqM5jF6yF6l1n.jpg',
    release_date: '2002-09-17',
    runtime: 150,
    genre: ['Biography', 'Drama', 'Music'],
    rating: 8.5,
    video_url: 'https://vidmoly.to/embed-7zo3llworr98.html',
    category: 'Drama',
    created_at: '2023-01-01',
    type: 'movie',
    director: 'Roman Polanski',
    actors: ['Adrien Brody', 'Thomas Kretschmann', 'Emilia Fox']
  },
  {
    id: '75',
    title: 'Psycho',
    description: 'A Phoenix secretary embezzles forty thousand dollars from her employer\'s client, goes on the run.',
    poster_path: 'https://image.tmdb.org/t/p/w500/81d8oyEFgj7FlxJqSDXWz8gAC5K.jpg',
    backdrop_path: 'https://image.tmdb.org/t/p/original/6uoiU4r1tK2XGEdqM5jF6yF6l1n.jpg',
    release_date: '1960-06-16',
    runtime: 109,
    genre: ['Horror', 'Mystery', 'Thriller'],
    rating: 8.5,
    video_url: 'https://vidmoly.to/embed-7zo3llworr98.html',
    category: 'Crime',
    created_at: '2023-01-01',
    type: 'movie',
    director: 'Alfred Hitchcock',
    actors: ['Janet Leigh', 'Anthony Perkins', 'Vera Miles']
  },
  {
    id: '77',
    title: 'The Departed',
    description: 'An undercover cop and a mole in the police attempt to identify each other while infiltrating an Irish gang.',
    poster_path: 'https://image.tmdb.org/t/p/w500/nT97ifVT2J1yMQmeq20Qblg61T.jpg',
    backdrop_path: 'https://image.tmdb.org/t/p/original/6uoiU4r1tK2XGEdqM5jF6yF6l1n.jpg',
    release_date: '2006-10-06',
    runtime: 151,
    genre: ['Crime', 'Drama', 'Thriller'],
    rating: 8.5,
    video_url: 'https://vidmoly.to/embed-7zo3llworr98.html',
    category: 'Crime',
    created_at: '2023-01-01',
    type: 'movie',
    director: 'Martin Scorsese',
    actors: ['Leonardo DiCaprio', 'Matt Damon', 'Jack Nicholson']
  },
  {
    id: '79',
    title: 'Terminator 2: Judgment Day',
    description: 'A cyborg, identical to the one who failed to kill Sarah Connor, must now protect her ten year old son.',
    poster_path: 'https://image.tmdb.org/t/p/w500/2y4dmgWYRMYXdD1UyJVcn2HSdUK.jpg',
    backdrop_path: 'https://image.tmdb.org/t/p/original/6uoiU4r1tK2XGEdqM5jF6yF6l1n.jpg',
    release_date: '1991-07-03',
    runtime: 137,
    genre: ['Action', 'Sci-Fi'],
    rating: 8.6,
    video_url: 'https://vidmoly.to/embed-7zo3llworr98.html',
    category: 'Action',
    created_at: '2023-01-01',
    type: 'movie',
    director: 'James Cameron',
    actors: ['Arnold Schwarzenegger', 'Linda Hamilton', 'Edward Furlong']
  },
  {
    id: '81',
    title: 'The Prestige',
    description: 'After a tragic accident, two stage magicians engage in a battle to create the ultimate illusion.',
    poster_path: 'https://image.tmdb.org/t/p/w500/5MXyQfz8xUP3dIFPTubhTsbFY6N.jpg',
    backdrop_path: 'https://image.tmdb.org/t/p/original/6uoiU4r1tK2XGEdqM5jF6yF6l1n.jpg',
    release_date: '2006-10-20',
    runtime: 130,
    genre: ['Drama', 'Mystery', 'Thriller'],
    rating: 8.5,
    video_url: 'https://vidmoly.to/embed-7zo3llworr98.html',
    category: 'Drama',
    created_at: '2023-01-01',
    type: 'movie',
    director: 'Christopher Nolan',
    actors: ['Christian Bale', 'Hugh Jackman', 'Scarlett Johansson']
  },
  {
    id: '82',
    title: 'The Godfather: Part II',
    description: 'The early life and career of Vito Corleone in 1920s New York City is portrayed.',
    poster_path: 'https://image.tmdb.org/t/p/w500/hek3koDUyRQk7FIhPXsa6mT2Zc3.jpg',
    backdrop_path: 'https://image.tmdb.org/t/p/original/6uoiU4r1tK2XGEdqM5jF6yF6l1n.jpg',
    release_date: '1974-12-20',
    runtime: 202,
    genre: ['Crime', 'Drama'],
    rating: 9.0,
    video_url: 'https://vidmoly.to/embed-7zo3llworr98.html',
    category: 'Crime',
    created_at: '2023-01-01',
    type: 'movie',
    director: 'Francis Ford Coppola',
    actors: ['Al Pacino', 'Robert De Niro', 'Robert Duvall']
  },
  {
    id: '83',
    title: 'The Good, the Bad and the Ugly',
    description: 'A bounty hunting scam joins two men in an uneasy alliance against a third in a race to find a fortune.',
    poster_path: 'https://image.tmdb.org/t/p/w500/bX2xnavhMYjWDoZp1VM6VnU1xwe.jpg',
    backdrop_path: 'https://image.tmdb.org/t/p/original/6uoiU4r1tK2XGEdqM5jF6yF6l1n.jpg',
    release_date: '1966-12-23',
    runtime: 161,
    genre: ['Western'],
    rating: 8.8,
    video_url: 'https://vidmoly.to/embed-7zo3llworr98.html',
    category: 'Action',
    created_at: '2023-01-01',
    type: 'movie',
    director: 'Sergio Leone',
    actors: ['Clint Eastwood', 'Eli Wallach', 'Lee Van Cleef']
  },
  {
    id: '84',
    title: 'Stranger Things',
    description: 'A group of young friends witness supernatural forces and secret government exploits.',
    poster_path: 'https://image.tmdb.org/t/p/w500/x2LSRK2Cm7MZhjluni1msVJ3wDF.jpg',
    backdrop_path: 'https://image.tmdb.org/t/p/original/56v2KjBlU4XaOv9rVYEQypROD7P.jpg',
    release_date: '2016-07-15',
    runtime: 50,
    genre: ['Drama', 'Fantasy', 'Horror'],
    rating: 8.7,
    video_url: 'https://vidmoly.to/embed-7zo3llworr98.html',
    category: 'Drama',
    created_at: '2023-01-01',
    type: 'series',
    languages: ['VF', 'VOSTFR'],
    number_of_seasons: 4,
    seasons: [
      { season: 1, episodes: 8 },
      { season: 2, episodes: 9 },
      { season: 3, episodes: 8 },
      { season: 4, episodes: 9 }
    ],
    director: 'The Duffer Brothers',
    actors: ['Millie Bobby Brown', 'Finn Wolfhard', 'Winona Ryder']
  },
  {
    id: '85',
    title: 'Breaking Bad',
    description: 'A high school chemistry teacher turned methamphetamine manufacturer partners with a former student.',
    poster_path: 'https://image.tmdb.org/t/p/w500/ggFHVNu6YYI5L9pCfOacjizRGt.jpg',
    backdrop_path: 'https://image.tmdb.org/t/p/original/tsRy63Mu5cu8etL1X7ZLyf7UP1M.jpg',
    release_date: '2008-01-20',
    runtime: 49,
    genre: ['Crime', 'Drama', 'Thriller'],
    rating: 9.5,
    video_url: 'https://vidmoly.to/embed-7zo3llworr98.html',
    category: 'Crime',
    created_at: '2023-01-01',
    type: 'series',
    languages: ['VOSTFR'],
    number_of_seasons: 5,
    seasons: [
      { season: 1, episodes: 7 },
      { season: 2, episodes: 13 },
      { season: 3, episodes: 13 },
      { season: 4, episodes: 13 },
      { season: 5, episodes: 16 }
    ],
    director: 'Vince Gilligan',
    actors: ['Bryan Cranston', 'Aaron Paul', 'Anna Gunn']
  },
  {
    id: '86',
    title: 'Game of Thrones',
    description: 'Nine noble families fight for control over the lands of Westeros.',
    poster_path: 'https://image.tmdb.org/t/p/w500/u3bZgnGQ9T01sWNhyveQz0wH0Hl.jpg',
    backdrop_path: 'https://image.tmdb.org/t/p/original/1R6cvRtZgsYCkh8UFuWFN33xBP4.jpg',
    release_date: '2011-04-17',
    runtime: 57,
    genre: ['Action', 'Adventure', 'Drama'],
    rating: 9.3,
    video_url: 'https://vidmoly.to/embed-7zo3llworr98.html',
    category: 'Drama',
    created_at: '2023-01-01',
    type: 'series',
    languages: ['VF', 'VOSTFR'],
    number_of_seasons: 8,
    seasons: [
      { season: 1, episodes: 10 },
      { season: 2, episodes: 10 },
      { season: 3, episodes: 10 },
      { season: 4, episodes: 10 },
      { season: 5, episodes: 10 },
      { season: 6, episodes: 10 },
      { season: 7, episodes: 7 },
      { season: 8, episodes: 6 }
    ],
    director: 'David Benioff, D.B. Weiss',
    actors: ['Emilia Clarke', 'Kit Harington', 'Peter Dinklage']
  },
  {
    id: '87',
    title: 'The Crown',
    description: 'Follows the political rivalries and romance of Queen Elizabeth II\'s reign.',
    poster_path: 'https://image.tmdb.org/t/p/w500/7k3O7YtJfJqHqHqHqHqHqHqHqHq.jpg',
    backdrop_path: 'https://image.tmdb.org/t/p/original/7k3O7YtJfJqHqHqHqHqHqHqHqHq.jpg',
    release_date: '2016-11-04',
    runtime: 58,
    genre: ['Biography', 'Drama', 'History'],
    rating: 8.7,
    video_url: 'https://vidmoly.to/embed-7zo3llworr98.html',
    category: 'Drama',
    created_at: '2023-01-01',
    type: 'series',
    languages: ['VF'],
    number_of_seasons: 6,
    seasons: [
      { season: 1, episodes: 10 },
      { season: 2, episodes: 10 },
      { season: 3, episodes: 10 },
      { season: 4, episodes: 10 },
      { season: 5, episodes: 10 },
      { season: 6, episodes: 10 }
    ],
    director: 'Peter Morgan',
    actors: ['Olivia Colman', 'Emma Corrin', 'Josh O\'Connor']
  },
  {
    id: '88',
    title: 'The Mandalorian',
    description: 'The travels of a lone bounty hunter in the outer reaches of the galaxy.',
    poster_path: 'https://image.tmdb.org/t/p/w500/sWgBv7LV2PRoQgkxwlibdGXKz1S.jpg',
    backdrop_path: 'https://image.tmdb.org/t/p/original/sWgBv7LV2PRoQgkxwlibdGXKz1S.jpg',
    release_date: '2019-11-12',
    runtime: 40,
    genre: ['Action', 'Adventure', 'Sci-Fi'],
    rating: 8.8,
    video_url: 'https://vidmoly.to/embed-7zo3llworr98.html',
    category: 'Sci-Fi',
    created_at: '2023-01-01',
    type: 'series',
    languages: ['VF', 'VOSTFR'],
    number_of_seasons: 3,
    seasons: [
      { season: 1, episodes: 8 },
      { season: 2, episodes: 8 },
      { season: 3, episodes: 8 }
    ],
    director: 'Jon Favreau',
    actors: ['Pedro Pascal', 'Gina Carano', 'Carl Weathers']
  },
  {
    id: '89',
    title: 'The Witcher',
    description: 'Geralt of Rivia, a solitary monster hunter, struggles to find his place in a world.',
    poster_path: 'https://image.tmdb.org/t/p/w500/7vjaCdMw15FEbXyLQTVa04URsPm.jpg',
    backdrop_path: 'https://image.tmdb.org/t/p/original/7vjaCdMw15FEbXyLQTVa04URsPm.jpg',
    release_date: '2019-12-20',
    runtime: 60,
    genre: ['Action', 'Adventure', 'Drama'],
    rating: 8.2,
    video_url: 'https://vidmoly.to/embed-7zo3llworr98.html',
    category: 'Action',
    created_at: '2023-01-01',
    type: 'series',
    languages: ['VOSTFR'],
    number_of_seasons: 3,
    seasons: [
      { season: 1, episodes: 8 },
      { season: 2, episodes: 8 },
      { season: 3, episodes: 8 }
    ],
    director: 'Lauren Schmidt Hissrich',
    actors: ['Henry Cavill', 'Anya Chalotra', 'Freya Allan']
  },
  {
    id: '90',
    title: 'Money Heist',
    description: 'An unusual group of robbers attempt to carry out the most perfect robbery.',
    poster_path: 'https://image.tmdb.org/t/p/w500/reEMJA1uzscCbkpeRJeTT2bjqUp.jpg',
    backdrop_path: 'https://image.tmdb.org/t/p/original/reEMJA1uzscCbkpeRJeTT2bjqUp.jpg',
    release_date: '2017-05-02',
    runtime: 50,
    genre: ['Action', 'Crime', 'Drama'],
    rating: 8.3,
    video_url: 'https://vidmoly.to/embed-7zo3llworr98.html',
    category: 'Crime',
    created_at: '2023-01-01',
    type: 'series',
    languages: ['VF', 'VOSTFR'],
    number_of_seasons: 5,
    seasons: [
      { season: 1, episodes: 13 },
      { season: 2, episodes: 9 },
      { season: 3, episodes: 8 },
      { season: 4, episodes: 8 },
      { season: 5, episodes: 10 }
    ],
    director: 'Álex Pina',
    actors: ['Úrsula Corberó', 'Itziar Ituño', 'Álvaro Morte'],
    video_urls: {
      vf: [
        'https://vidmoly.to/embed-vqvgyfdsnp8a.html',
        'https://my.mail.ru/video/embed/7907601233697835253'
      ],
      vostfr: [
        'https://vidmoly.to/embed-7zo3llworr98.html',
        'https://my.mail.ru/video/embed/7907601233697835247'
      ]
    }
  },
  {
    id: '91',
    title: 'The Boys',
    description: 'A group of vigilantes set out to take down corrupt superheroes.',
    poster_path: 'https://image.tmdb.org/t/p/w500/stTEycfG9928HYGEISBFaG1ngjM.jpg',
    backdrop_path: 'https://image.tmdb.org/t/p/original/stTEycfG9928HYGEISBFaG1ngjM.jpg',
    release_date: '2019-07-26',
    runtime: 60,
    genre: ['Action', 'Comedy', 'Drama'],
    rating: 8.7,
    video_url: 'https://vidmoly.to/embed-7zo3llworr98.html',
    category: 'Action',
    created_at: '2023-01-01',
    type: 'series',
    number_of_seasons: 4,
    seasons: [
      { season: 1, episodes: 8 },
      { season: 2, episodes: 8 },
      { season: 3, episodes: 8 },
      { season: 4, episodes: 8 }
    ],
    director: 'Eric Kripke',
    actors: ['Karl Urban', 'Jack Quaid', 'Antony Starr']
  },
  {
    id: '92',
    title: 'Bridgerton',
    description: 'Wealth, lust, and betrayal set against the backdrop of Regency-era England.',
    poster_path: 'https://image.tmdb.org/t/p/w500/34OGJDFE9cp0Q1v9a2J8mqk5w8t.jpg',
    backdrop_path: 'https://image.tmdb.org/t/p/original/34OGJDFE9cp0Q1v9a2J8mqk5w8t.jpg',
    release_date: '2020-12-25',
    runtime: 60,
    genre: ['Drama', 'Romance'],
    rating: 7.3,
    video_url: 'https://vidmoly.to/embed-7zo3llworr98.html',
    category: 'Drama',
    created_at: '2023-01-01',
    type: 'series',
    number_of_seasons: 3,
    seasons: [
      { season: 1, episodes: 8 },
      { season: 2, episodes: 8 },
      { season: 3, episodes: 8 }
    ],
    director: 'Chris Van Dusen',
    actors: ['Phoebe Dynevor', 'Regé-Jean Page', 'Jonathan Bailey']
  },
  {
    id: '93',
    title: 'Wednesday',
    description: 'Intelligent, sarcastic and a little dead inside, Wednesday Addams investigates a murder spree.',
    poster_path: 'https://image.tmdb.org/t/p/w500/9PFonBhy4cQy7Jz20NpMygczOkv.jpg',
    backdrop_path: 'https://image.tmdb.org/t/p/original/9PFonBhy4cQy7Jz20NpMygczOkv.jpg',
    release_date: '2022-11-23',
    runtime: 50,
    genre: ['Comedy', 'Crime', 'Fantasy'],
    rating: 8.1,
    video_url: 'https://vidmoly.to/embed-7zo3llworr98.html',
    category: 'Comedy',
    created_at: '2023-01-01',
    type: 'series',
    number_of_seasons: 1,
    seasons: [
      { season: 1, episodes: 8 }
    ],
    director: 'Tim Burton',
    actors: ['Jenna Ortega', 'Gwendoline Christie', 'Riki Lindhome']
  },
  {
    id: '94',
    title: 'The Last of Us',
    description: 'After a global pandemic destroys civilization, a hardened survivor takes charge of a 14-year-old girl.',
    poster_path: 'https://image.tmdb.org/t/p/w500/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg',
    backdrop_path: 'https://image.tmdb.org/t/p/original/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg',
    release_date: '2023-01-15',
    runtime: 60,
    genre: ['Action', 'Adventure', 'Drama'],
    rating: 8.8,
    video_url: 'https://vidmoly.to/embed-7zo3llworr98.html',
    category: 'Drama',
    created_at: '2023-01-01',
    type: 'series',
    number_of_seasons: 1,
    seasons: [
      { season: 1, episodes: 9 }
    ],
    director: 'Craig Mazin',
    actors: ['Pedro Pascal', 'Bella Ramsey', 'Gabriel Luna']
  },
  {
    id: '95',
    title: 'House of the Dragon',
    description: 'The story of House Targaryen set 200 years before the events of Game of Thrones.',
    poster_path: 'https://image.tmdb.org/t/p/w500/z2yahl2uefxDCl0nogcRBstwruJ.jpg',
    backdrop_path: 'https://image.tmdb.org/t/p/original/z2yahl2uefxDCl0nogcRBstwruJ.jpg',
    release_date: '2022-08-21',
    runtime: 60,
    genre: ['Action', 'Adventure', 'Drama'],
    rating: 8.5,
    video_url: 'https://vidmoly.to/embed-7zo3llworr98.html',
    category: 'Drama',
    created_at: '2023-01-01',
    type: 'series',
    number_of_seasons: 1,
    seasons: [
      { season: 1, episodes: 10 }
    ],
    director: 'Ryan Condal',
    actors: ['Emma D\'Arcy', 'Matt Smith', 'Olivia Cooke']
  },
  {
    id: '96',
    title: 'The Umbrella Academy',
    description: 'A family of former child heroes, now grown apart, must reunite to continue to protect the world.',
    poster_path: 'https://image.tmdb.org/t/p/w500/scZlQQYnDVlnpxFTxaIv2ki6mhl.jpg',
    backdrop_path: 'https://image.tmdb.org/t/p/original/scZlQQYnDVlnpxFTxaIv2ki6mhl.jpg',
    release_date: '2019-02-15',
    runtime: 60,
    genre: ['Action', 'Adventure', 'Comedy'],
    rating: 8.0,
    video_url: 'https://vidmoly.to/embed-7zo3llworr98.html',
    category: 'Action',
    created_at: '2023-01-01',
    type: 'series',
    number_of_seasons: 4,
    seasons: [
      { season: 1, episodes: 10 },
      { season: 2, episodes: 10 },
      { season: 3, episodes: 10 },
      { season: 4, episodes: 6 }
    ],
    director: 'Steve Blackman',
    actors: ['Ellen Page', 'Tom Hopper', 'David Castañeda']
  },
  {
    id: '97',
    title: 'Dark',
    description: 'A missing child sets four families on a frantic hunt for answers as they unearth a mind-bending mystery.',
    poster_path: 'https://image.tmdb.org/t/p/w500/apbrbWs8M9JSpxFks7R9m05aaYI.jpg',
    backdrop_path: 'https://image.tmdb.org/t/p/original/apbrbWs8M9JSpxFks7R9m05aaYI.jpg',
    release_date: '2017-12-01',
    runtime: 60,
    genre: ['Crime', 'Drama', 'Mystery'],
    rating: 8.7,
    video_url: 'https://vidmoly.to/embed-7zo3llworr98.html',
    category: 'Drama',
    created_at: '2023-01-01',
    type: 'series',
    number_of_seasons: 3,
    seasons: [
      { season: 1, episodes: 10 },
      { season: 2, episodes: 8 },
      { season: 3, episodes: 8 }
    ],
    director: 'Baran bo Odar',
    actors: ['Louis Hofmann', 'Karoline Eichhorn', 'Lisa Vicari']
  },
  {
    id: '98',
    title: 'The Queen\'s Gambit',
    description: 'Orphaned at the tender age of nine, prodigious introvert Beth Harmon discovers and masters the game of chess.',
    poster_path: 'https://image.tmdb.org/t/p/w500/34OGJDFE9cp0Q1v9a2J8mqk5w8t.jpg',
    backdrop_path: 'https://image.tmdb.org/t/p/original/34OGJDFE9cp0Q1v9a2J8mqk5w8t.jpg',
    release_date: '2020-10-23',
    runtime: 60,
    genre: ['Drama'],
    rating: 8.6,
    video_url: 'https://vidmoly.to/embed-7zo3llworr98.html',
    category: 'Drama',
    created_at: '2023-01-01',
    type: 'series',
    number_of_seasons: 1,
    seasons: [
      { season: 1, episodes: 7 }
    ],
    director: 'Scott Frank',
    actors: ['Anya Taylor-Joy', 'Chloe Pirrie', 'Bill Camp']
  },
  {
    id: '99',
    title: 'Squid Game',
    description: 'Hundreds of cash-strapped players accept a strange invitation to compete in children\'s games.',
    poster_path: 'https://image.tmdb.org/t/p/w500/dDlEmu3EZ0Pgg93K2SVNLCjCSvE.jpg',
    backdrop_path: 'https://image.tmdb.org/t/p/original/dDlEmu3EZ0Pgg93K2SVNLCjCSvE.jpg',
    release_date: '2021-09-17',
    runtime: 50,
    genre: ['Action', 'Drama', 'Mystery'],
    rating: 8.1,
    video_url: 'https://vidmoly.to/embed-7zo3llworr98.html',
    category: 'Drama',
    created_at: '2023-01-01',
    type: 'series',
    number_of_seasons: 2,
    seasons: [
      { season: 1, episodes: 9 },
      { season: 2, episodes: 13 }
    ],
    director: 'Hwang Dong-hyuk',
    actors: ['Lee Jung-jae', 'Park Hae-soo', 'Wi Ha-joon']
  },
  {
    id: '100',
    title: 'The Handmaid\'s Tale',
    description: 'Set in a dystopian future, a woman is forced to live as a concubine under a fundamentalist theocratic dictatorship.',
    poster_path: 'https://image.tmdb.org/t/p/w500/oIkxqt6ug5zTtZ6m6txp9PKqDgp.jpg',
    backdrop_path: 'https://image.tmdb.org/t/p/original/oIkxqt6ug5zTtZ6m6txp9PKqDgp.jpg',
    release_date: '2017-04-26',
    runtime: 60,
    genre: ['Drama', 'Sci-Fi', 'Thriller'],
    rating: 8.4,
    video_url: 'https://vidmoly.to/embed-7zo3llworr98.html',
    category: 'Drama',
    created_at: '2023-01-01',
    type: 'series',
    number_of_seasons: 5,
    seasons: [
      { season: 1, episodes: 10 },
      { season: 2, episodes: 13 },
      { season: 3, episodes: 13 },
      { season: 4, episodes: 10 },
      { season: 5, episodes: 10 }
    ],
    director: 'Bruce Miller',
    actors: ['Elisabeth Moss', 'Joseph Fiennes', 'Yvonne Strahovski']
  },
  {
    id: '101',
    title: 'The Good Place',
    description: 'Four people and their otherworldly friar struggle in the afterlife to define what it means to be good.',
    poster_path: 'https://image.tmdb.org/t/p/w500/6a6clrhZDmoNUL6NSEUMqGqjFEo.jpg',
    backdrop_path: 'https://image.tmdb.org/t/p/original/6a6clrhZDmoNUL6NSEUMqGqjFEo.jpg',
    release_date: '2016-09-19',
    runtime: 22,
    genre: ['Comedy', 'Drama', 'Fantasy'],
    rating: 8.2,
    video_url: 'https://vidmoly.to/embed-7zo3llworr98.html',
    category: 'Comedy',
    created_at: '2023-01-01',
    type: 'series',
    number_of_seasons: 4,
    seasons: [
      { season: 1, episodes: 13 },
      { season: 2, episodes: 13 },
      { season: 3, episodes: 13 },
      { season: 4, episodes: 14 }
    ],
    director: 'Michael Schur',
    actors: ['Kristen Bell', 'William Jackson Harper', 'Jameela Jamil']
  },
  {
    id: '102',
    title: 'Black Mirror',
    description: 'An anthology series exploring a twisted, high-tech multiverse where humanity\'s greatest innovations.',
    poster_path: 'https://image.tmdb.org/t/p/w500/7Nwnmyzrtd0FkcRyPqmdzTPppQa.jpg',
    backdrop_path: 'https://image.tmdb.org/t/p/original/7Nwnmyzrtd0FkcRyPqmdzTPppQa.jpg',
    release_date: '2011-12-04',
    runtime: 60,
    genre: ['Drama', 'Sci-Fi', 'Thriller'],
    rating: 8.8,
    video_url: 'https://vidmoly.to/embed-7zo3llworr98.html',
    category: 'Sci-Fi',
    created_at: '2023-01-01',
    type: 'series',
    number_of_seasons: 6,
    seasons: [
      { season: 1, episodes: 3 },
      { season: 2, episodes: 3 },
      { season: 3, episodes: 6 },
      { season: 4, episodes: 6 },
      { season: 5, episodes: 3 },
      { season: 6, episodes: 5 }
    ],
    director: 'Charlie Brooker',
    actors: ['Various', 'Anthology', 'Series']
  },
  {
    id: '103',
    title: 'The Office',
    description: 'A mockumentary on a group of typical office workers, where the workday consists of ego clashes.',
    poster_path: 'https://image.tmdb.org/t/p/w500/qWnJzyZhyy74gjpSjIXWmuk0ifX.jpg',
    backdrop_path: 'https://image.tmdb.org/t/p/original/qWnJzyZhyy74gjpSjIXWmuk0ifX.jpg',
    release_date: '2005-03-24',
    runtime: 22,
    genre: ['Comedy'],
    rating: 8.9,
    video_url: 'https://vidmoly.to/embed-7zo3llworr98.html',
    category: 'Comedy',
    created_at: '2023-01-01',
    type: 'series',
    number_of_seasons: 9,
    seasons: [
      { season: 1, episodes: 6 },
      { season: 2, episodes: 22 },
      { season: 3, episodes: 25 },
      { season: 4, episodes: 19 },
      { season: 5, episodes: 28 },
      { season: 6, episodes: 26 },
      { season: 7, episodes: 26 },
      { season: 8, episodes: 24 },
      { season: 9, episodes: 25 }
    ],
    director: 'Greg Daniels',
    actors: ['Steve Carell', 'Rainn Wilson', 'John Krasinski']
  }
]

export const mockCategories: Category[] = [
  { id: '1', name: 'Action', description: 'Action movies and shows', created_at: '2023-01-01' },
  { id: '2', name: 'Drama', description: 'Drama movies and shows', created_at: '2023-01-01' },
  { id: '3', name: 'Comedy', description: 'Comedy movies and shows', created_at: '2023-01-01' },
  { id: '4', name: 'Sci-Fi', description: 'Science fiction content', created_at: '2023-01-01' },
  { id: '5', name: 'Crime', description: 'Crime and thriller content', created_at: '2023-01-01' }
]

export const trendingContent = [
  { id: 1, title: 'Squid Game', image: 'https://image.tmdb.org/t/p/w500/dDlEmu3EZ0Pgg93K2SVNLCjCSvE.jpg' },
  { id: 2, title: 'Ginny & Georgia', image: 'https://image.tmdb.org/t/p/w500/5gzzkR7y3hnY8AD1wXjCnVlHba5.jpg' },
  { id: 3, title: 'STRAW', image: 'https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg' },
  { id: 4, title: 'K.O.', image: 'https://image.tmdb.org/t/p/w500/9GBhzTMFmUqS6Vk2aQc6UI6ac6Q.jpg' },
  { id: 5, title: 'Olympo', image: 'https://image.tmdb.org/t/p/w500/7RyHsO4yDXtBv1zUU3mTpHeQ0d5.jpg' },
  { id: 6, title: 'Asterix & Obelix', image: 'https://image.tmdb.org/t/p/w500/8b8R8l88Qje9dn9OE8PY05Nxl1X.jpg' },
  { id: 7, title: 'Kung Fu Panda 4', image: 'https://image.tmdb.org/t/p/w500/kDp1vUBnMpe8ak4rjgl3cLELqZQ.jpg' },
  { id: 8, title: 'KPop Demon Hunters', image: 'https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg' },
  { id: 9, title: 'La Brea', image: 'https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg' },
  { id: 10, title: 'You', image: 'https://image.tmdb.org/t/p/w500/5gzzkR7y3hnY8AD1wXjCnVlHba5.jpg' }
]

export const faqs = [
  { q: 'What is Netflix?', a: 'Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.' },
  { q: 'How much does Netflix cost?', a: 'Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from USD 7.99 to USD 24.99 a month. No extra costs, no contracts.' },
  { q: 'Where can I watch?', a: 'Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app.' },
  { q: 'How do I cancel?', a: 'Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks.' },
  { q: 'What can I watch on Netflix?', a: 'Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more.' },
  { q: 'Is Netflix good for kids?', a: 'The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.' },
]

// Fonctions utilitaires pour filtrer les données
export const getMoviesByCategory = (categoryName: string) => {
  return mockMovies.filter(movie => movie.category === categoryName)
}

export const getContinueWatching = () => {
  return mockMovies.slice(0, 4)
}

export const getTrending = () => {
  return mockMovies.slice(0, 6)
} 
