'use strict';

// start();

const personalMovieDB = {
	count: 0,
	movies: {},
	actors: {},
	genres: [],
	private: false,

	start: function () {
		do {
			this.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
		} while (this.count === 0 || this.count === null || isNaN(this.count));
	},

	askLastWatchedMovie: function () {
		for (let i = 0; i < 2; i++) {
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
				this.movies[lastWatchFilm] = ratingFilms;
				console.log('correct');
			} else {
				console.log('error');
				i--;
			}
		}
	},

	writeYourGenres: function () {
		for (let i = 1; i < 2; i++) {
			const loveGenre = prompt('Ваш любимый жанры через запятую', '');

			if (loveGenre === null || loveGenre.trim() === '') {
				i--;
				continue;
			}

			this.genres = loveGenre.toLocaleLowerCase().split(', ');
			this.genres.sort();
		}

		personalMovieDB.genres.forEach((genre, i) => {
			console.log(`Любимый жанр ${i + 1} - это ${genre}`);
		});
	},

	detectPersonalLevel: function () {
		if (this.count < 10) {
			console.log('Просмотрено довольно мало фильмов');
		} else if (this.count >= 10 && this.count <= 30) {
			console.log('Вы классический зритель');
		} else if (this.count > 30) {
			console.log('Вы киноман');
		} else {
			console.log('Произошла ошибка');
		}
	},

	showMyDB: function () {
		if (!this.private) {
			console.log(this);
		}
	},

	toggleVisibleMyDB: function () {
		if (this.private) {
			this.private = false;
		} else {
			this.private = true;
		}
	},
};
