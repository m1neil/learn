'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	private: false
};

const countQuestions = 2;

for (let i = 0; i < countQuestions; i++) {
	const lastWatchFilm = prompt('Один из последних просмотренных фильмов?', ''),
		ratingFilms = prompt('На сколько оцените его?', '');

	if (lastWatchFilm !== '' && lastWatchFilm !== null && lastWatchFilm.length <= 50 && ratingFilms !== null &&
		!isNaN(ratingFilms) && ratingFilms !== '') {
		personalMovieDB.movies[lastWatchFilm] = ratingFilms;
		console.log('correct');
	} else {
		console.log('error');
		i--;
	}
}

const watchedMoverCount = personalMovieDB.count;

if (watchedMoverCount < 10) {
	console.log('Просмотрено довольно мало фильмов');
} else if (watchedMoverCount >= 10 && watchedMoverCount <= 30) {
	console.log('Вы классический зритель');
} else if (watchedMoverCount > 30) {
	console.log('Вы киноман');
} else {
	console.log('Произошла ошибка');
}

console.log(personalMovieDB);