export interface MediaItem {
  title: string;
  type: 'game' | 'show' | 'book' | 'movie';
  status: 'current' | 'completed';
  coverImage: string;
  startDate: string;
  thoughts?: string;
  link?: string;
}

export const libraryItems: MediaItem[] = [
  {
    title: "Lost Ark",
    type: "game",
    status: "current",
    coverImage: "/library/games/lost-ark.jpg",
    startDate: "2022-03",
    thoughts: "MMORPG with good top-down combat and a lot of content. Fun when new content is released."
  },
  {
    title: "My Hero Academia",
    type: "show",
    status: "current",
    coverImage: "/library/shows/my-hero.jpg",
    startDate: "2025-08",
    thoughts: "I don't watch a lot of anime, but I've really been enjoying this one."
  },
  {
    title: "Teamfight Tactics",
    type: "game",
    status: "current",
    coverImage: "/library/games/teamfight-tactics.jpg",
    startDate: "2019-06",
    thoughts: "I don't play every season, but I love the strategies and analytics that come with playing it."
  },
  {
    title: "Bojack Horseman",
    type: "show",
    status: "completed",
    coverImage: "/library/shows/bojack-horseman.jpg",
    startDate: "2019-09",
    thoughts: "Quite dark but very philosophical and gets you thinking at the same time."
  },
  {
    title: "Arcane",
    type: "show",
    status: "completed",
    coverImage: "/library/shows/arcane.jpg",
    startDate: "2021-11",
    thoughts: "Every League of Legends fan's dream come true."
  },
  {
    title: "The Matrix",
    type: "movie",
    status: "completed",
    coverImage: "/library/movies/the-matrix.jpg",
    startDate: "2015-10",
    thoughts: "I've watched this movie countless times and every time I watch, I still see something new or think about something differently."
  },
  {
    title: "Inception",
    type: "movie",
    status: "completed",
    coverImage: "/library/movies/inception.jpg",
    startDate: "2016-10",
    thoughts: "I have no idea how this movie did not win best picture. It raises so many philosophical questions about reality and how one should be okay without definitive answers."
  },
  {
    title: "1984",
    type: "book",
    status: "completed",
    coverImage: "/library/books/1984.jpg",
    startDate: "2014-10",
    thoughts: "My favorite George Orwell novel, exploring the dangers of totalitarianism and mass surveillance."
  },
  {
    title: "Fahrenheit 451",
    type: "book",
    status: "completed",
    coverImage: "/library/books/fahrenheit-451.jpg",
    startDate: "2015-06",
    thoughts: "Another classic dystopian novel, moreso exploring ideas of anti-intellectualism."
  }
];

