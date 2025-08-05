src/
│
├── app/                           # ⚙️ Точка входа и инициализация приложения
│   ├── router.tsx                 # Роутинг (например, React Router)
│   └── providers.tsx             # Подключение провайдеров: auth, theme, i18n и др.
│
├── shared/                        # ♻️ Переиспользуемые утилиты, UI и конфиги
│   ├── ui/                        # Общие UI-компоненты (кнопки, инпуты, модалки)
│   │   ├── Button.tsx            # Универсальная кнопка
│   │   ├── Input.tsx             # Универсальное поле ввода
│   │   └── Modal.tsx             # Универсальное модальное окно
│   │
│   └── lib/                       # Хелперы, axios, форматтеры
│       ├── axios.ts              # Настройка axios-инстанса
│       ├── formatDate.ts         # Утилита форматирования даты
│       └── storage.ts            # Работа с localStorage и sessionStorage
│
├── components/                   # 🧩 Глобальные переиспользуемые компоненты
│   ├── Header.tsx                # Шапка сайта с навигацией
│   ├── Footer.tsx                # Подвал сайта
│   └── Logo.tsx                  # Логотип, используемый в разных местах
│
├── features/                     # 🔌 Фичи: независимые части функционала
│   ├── auth/                     # Фича авторизации/регистрации
│   │   ├── ui/                   # Формы входа и регистрации
│   │   ├── api/                  # Запросы: login, register, logout
│   │   └── model/                # Состояния, типы, валидаторы (zod/yup)
│   │
│   ├── movie/                    # Фича отображения фильмов
│   │   ├── MovieCard.tsx         # Карточка одного фильма
│   │   ├── api/                  # API-запросы: getMovies, getMovieById
│   │   └── model/                # Типы, стейт, фильтры
│   │
│   ├── player/                   # Фича видеоплеера
│   │   ├── VideoPlayer.tsx       # Компонент плеера
│   │   └── controls/             # Кнопки управления: play, pause, volume
│   │
│   └── profile/                  # Фича личного профиля
│       ├── ProfileForm.tsx       # Форма смены имени и аватарки
│       ├── AvatarList.tsx        # Выбор аватарки из набора
│       └── api/                  # Запросы: updateProfile, getUserInfo
│
├── pages/                        # 📄 Страницы (роуты)
│   ├── Home/                     # Главная страница
│   │   ├── Home.tsx              # Компонент страницы
│   │   └── components/           # Компоненты, используемые только внутри Home
│   │       ├── MovieSlider.tsx   # Слайдер фильмов
│   │       └── PromoBanner.tsx   # Баннер акции
│   │
│   ├── Login/                    # Страница входа
│   │   └── Login.tsx             # Использует компоненты из features/auth
│   │
│   └── MovieDetails/            # Страница подробной информации о фильме
│       └── MovieDetails.tsx      # Получение и отображение данных фильма
│
└── index.tsx                     # 🚀 Точка запуска React-приложения

API 

const API_KEY_TMDb = 'f0b0b2303007a87e9939a71289ae05a6';
const TMDb_URL = 'https://api.themoviedb.org/3';

// Тренды за день
`${TMDb_URL}/trending/movie/day?api_key=${API_KEY_TMDb}&language=ru-RU`

// Тренды за неделю
`${TMDb_URL}/trending/movie/week?api_key=${API_KEY_TMDb}&language=ru-RU`

// Популярные фильмы
`${TMDb_URL}/movie/popular?api_key=${API_KEY_TMDb}&language=ru-RU&page=1`

// Топ рейтинга (по рейтингу)
`${TMDb_URL}/movie/top_rated?api_key=${API_KEY_TMDb}&language=ru-RU&page=1`

// Сейчас в кинотеатрах
`${TMDb_URL}/movie/now_playing?api_key=${API_KEY_TMDb}&language=ru-RU&page=1&region=RU`

// Скоро в кинотеатрах
`${TMDb_URL}/movie/upcoming?api_key=${API_KEY_TMDb}&language=ru-RU&page=1&region=RU`

// Последние релизы
`${TMDb_URL}/movie/latest?api_key=${API_KEY_TMDb}&language=ru-RU`

// Получить список всех жанров
`${TMDb_URL}/genre/movie/list?api_key=${API_KEY_TMDb}&language=ru-RU`

// Фильмы по конкретному жанру
`${TMDb_URL}/discover/movie?api_key=${API_KEY_TMDb}&language=ru-RU&with_genres=28&sort_by=popularity.desc&page=1`

ID жанров:
28 - Боевик
12 - Приключения
16 - Мультфильм
35 - Комедия
80 - Криминал
99 - Документальный
18 - Драма
10751 - Семейный
14 - Фэнтези
36 - История
27 - Ужасы
10402 - Музыка
9648 - Детектив
10749 - Мелодрама
878 - Научная фантастика
10770 - Телевизионный фильм
53 - Триллер
10752 - Военный
37 - Вестерн

// Поиск фильмов
`${TMDb_URL}/search/movie?api_key=${API_KEY_TMDb}&language=ru-RU&query=название&page=1`

// Расширенный поиск с фильтрами
`${TMDb_URL}/discover/movie?api_key=${API_KEY_TMDb}&language=ru-RU&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`

// По году
`${TMDb_URL}/discover/movie?api_key=${API_KEY_TMDb}&language=ru-RU&primary_release_year=2024&sort_by=popularity.desc&page=1`

// По рейтингу
`${TMDb_URL}/discover/movie?api_key=${API_KEY_TMDb}&language=ru-RU&vote_average.gte=8&sort_by=vote_average.desc&page=1`

// Фильмы за определенный период
`${TMDb_URL}/discover/movie?api_key=${API_KEY_TMDb}&language=ru-RU&primary_release_date.gte=2024-01-01&primary_release_date.lte=2024-12-31&sort_by=popularity.desc&page=1`

// Фильмы этого года
`${TMDb_URL}/discover/movie?api_key=${API_KEY_TMDb}&language=ru-RU&primary_release_year=2024&sort_by=popularity.desc&page=1`

// Фильмы с высоким рейтингом (8+)
`${TMDb_URL}/discover/movie?api_key=${API_KEY_TMDb}&language=ru-RU&vote_average.gte=8&sort_by=vote_average.desc&page=1`

// Фильмы с большим количеством голосов
`${TMDb_URL}/discover/movie?api_key=${API_KEY_TMDb}&language=ru-RU&vote_count.gte=1000&sort_by=vote_average.desc&page=1`

// Фильмы определенной компании (например, Disney)
`${TMDb_URL}/discover/movie?api_key=${API_KEY_TMDb}&language=ru-RU&with_companies=2&sort_by=popularity.desc&page=1`

// Детали фильма
`${TMDb_URL}/movie/{movie_id}?api_key=${API_KEY_TMDb}&language=ru-RU`

// Похожие фильмы
`${TMDb_URL}/movie/{movie_id}/similar?api_key=${API_KEY_TMDb}&language=ru-RU&page=1`

// Рекомендации
`${TMDb_URL}/movie/{movie_id}/recommendations?api_key=${API_KEY_TMDb}&language=ru-RU&page=1`

// Актеры фильма
`${TMDb_URL}/movie/{movie_id}/credits?api_key=${API_KEY_TMDb}&language=ru-RU`

// Видео (трейлеры)
`${TMDb_URL}/movie/{movie_id}/videos?api_key=${API_KEY_TMDb}&language=ru-RU`
