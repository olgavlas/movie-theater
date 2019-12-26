const generateSeats = () => [0, 0, 0, 0, 0, 0, 0].map(_ => Math.floor(Math.random() * 30));

const movies = [
  {
    id: 'harry',
    title: 'Гарри Поттер и Узник Азкабана',
    description:`«Всё изменится». Потому что Альфонсо Куарон.

    Гарри Поттер, Рон и Гермиона — возвращаются уже на третий курс школы чародейства и волшебства Хогвартс.
    На этот раз они должны раскрыть тайну узника, сбежавшего из зловещей тюрьмы Азкабан, чье пребывание на воле создает для Гарри смертельную опасность…`,
    poster: 'https://bluemonkey-events.co.uk/wp-content/uploads/Harry-Potter-and-the-Prisoner-of-Azkaban-movie-poster.jpg',
    seats: generateSeats(),
    length: '2ч 22м',
    genre: 'Фэнтези',
  },
  {
    id: 'perks',
    title: 'Хорошо быть тихоней',
    description: '«Будь фильтром, а не губкой».',
    poster: 'https://img01.mgo-images.com/image/thumbnail/v2/content/1MV905528269e0d9452a2ce527e2b6921c4.jpeg',
    seats: generateSeats(),
    length: '1ч 42м',
    genre: 'Драма',
  },
  {
    id: 'fight',
    title: 'Бойцовский клуб',
    description: '«Хаос. Мыло».',
    poster: 'https://m.media-amazon.com/images/M/MV5BMmEzNTkxYjQtZTc0MC00YTVjLTg5ZTEtZWMwOWVlYzY0NWIwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
    seats: generateSeats(),
    length: '2ч 19м',
    genre: 'Триллер',
  },
  {
    id: 'spirited_away',
    title: 'Унесенные призраками',
    description: 'Фильм Хаяо Миядзаки.',
    poster: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6123/6123621_so.jpg',
    seats: generateSeats(),
    length: '2ч 5м',
    genre: 'Приключения',
  },
  {
    id: 'pulp_fiction',
    title: 'Криминальное чтиво',
    description: 'Just because you are a character doesnt mean you have character.',
    poster: 'https://j.livelib.ru/boocover/1000530481/o/10c8/Quentin_Tarantino__Pulp_Fiction_A_Quentin_Tarantino_Screenplay.jpeg',
    seats: generateSeats(),
    length: '2ч 34м',
    genre: 'Боевик',
  },
  {
    id: 'django',
    title: 'Джанго освобожденный',
    description: '«Они забрали его свободу. Он заберёт у них всё».',
    poster: 'https://i.pinimg.com/originals/6c/4b/25/6c4b25bd2689e7f9af29df964bffc98d.jpg',
    seats: generateSeats(),
    length: '2ч 32м',
    genre: 'Вестерн',
  },
  {
    id: 'birdman',
    title: 'Бёрдмэн',
    description: 'Birdman or (The Unexpected Virtue of Ignorance)',
    poster: 'https://m.media-amazon.com/images/M/MV5BODAzNDMxMzAxOV5BMl5BanBnXkFtZTgwMDMxMjA4MjE@._V1_.jpg',
    seats: generateSeats(),
    length: '1ч 59м',
    genre: 'Комедия',
  },
  {
    id: 'the_matrix',
    title: 'Матрица',
    description: '«Добро пожаловать в реальный мир»',
    poster: 'https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg',
    seats: generateSeats(),
    length: '2ч 16м',
    genre: 'Фантастика',
  },
  {
    id: 'up',
    title: 'Вверх',
    description: '«Когда проблемы тянут ко дну, смотри вверх!»',
    poster: 'https://vignette.wikia.nocookie.net/figure-skating-13/images/a/a6/Up_Poster_Run.jpg/revision/latest?cb=20170324032349',
    seats: generateSeats(),
    length: '1ч 36м',
    genre: 'Драма',
  },
  {
    id: 'home_alone',
    title: 'Один дома',
    description: 'На самом деле очень жестокий и пугающий фильм.',
    poster: 'https://i.pinimg.com/originals/4e/27/8d/4e278d8db6710b3735140c5dcf4f3f71.jpg',
    seats: generateSeats(),
    length: '1ч 43м',
    genre: 'Комедия',
  }
];

module.exports = movies;
