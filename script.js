'use strict';

let numberOfFilms;

function start() {
	do {
		numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
	} while (
		numberOfFilms === 0 ||
		numberOfFilms === null ||
		isNaN(numberOfFilms)
	);
}

start();

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	private: false,
};

askLastWatchedMovie(2);

function askLastWatchedMovie(countQuestions) {
	for (let i = 0; i < countQuestions; i++) {
		const lastWatchFilm = prompt(
			'Один из последних просмотренных фильмов?',
			''
		).trim();

		const ratingFilms = prompt('На сколько оцените его?', '');

		if (
			lastWatchFilm !== '' &&
			lastWatchFilm !== null &&
			lastWatchFilm.length <= 50 &&
			ratingFilms !== null &&
			!isNaN(ratingFilms) &&
			ratingFilms !== ''
		) {
			personalMovieDB.movies[lastWatchFilm] = ratingFilms;
			console.log('correct');
		} else {
			console.log('error');
			i--;
		}
	}
}

writeYourGenres();

function writeYourGenres() {
	for (let i = 1; i <= 3; i++) {
		const loveGenre = prompt(`Ваш любимый жанр под номером ${i}`, '').trim();

		if (loveGenre !== '' && loveGenre !== null) {
			personalMovieDB.genres.push(loveGenre);
		} else {
			i--;
		}
	}
}

detectPersonalLevel(personalMovieDB.count);

function detectPersonalLevel(watchedMoverCount) {
	if (watchedMoverCount < 10) {
		console.log('Просмотрено довольно мало фильмов');
	} else if (watchedMoverCount >= 10 && watchedMoverCount <= 30) {
		console.log('Вы классический зритель');
	} else if (watchedMoverCount > 30) {
		console.log('Вы киноман');
	} else {
		console.log('Произошла ошибка');
	}
}

showMyDB(personalMovieDB.private);

function showMyDB(hidden) {
	if (!hidden) {
		console.log(personalMovieDB);
	}
}
