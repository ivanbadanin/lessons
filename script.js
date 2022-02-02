// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// // const a = prompt('Один из последних просмотренных фильмов?', ''),
// //       b = prompt('На сколько оцените его?', ''),
// //       c = prompt('Один из последних просмотренных фильмов?', ''),
// //       d = prompt('На сколько оцените его?', '');

// // personalMovieDB.movies[a] = b;
// // personalMovieDB.movies[c] = d;


// for (let i = 0; i < 2; i++) {
//     const a = prompt('Один из последних просмотренных фильмов?', ''),
//           b = prompt('На сколько оцените его?', '');

//     if(a != null && b != null && a != '' && b != '' && a.length < 50) {     
//         personalMovieDB.movies[a] = b;
//         console.log('done');
//     } else {
//         console.log('error');
//         i--;
//     }
// }


// if (personalMovieDB.count <10) {
//     console.log("Просмотрено довольно мало фильмов");
// } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
//     console.log("Вы классический зритель");
// } else if (personalMovieDB.count >= 30) {
//     console.log("Вы киноман");
// } else {
//     console.log("произошла ошибка");
// }

// console.log(personalMovieDB);

 
// function showFirstMessage(text) {
//     console.log(text);
// }

// showFirstMessage("Hello world!");

// const str = "trst";
// const arr = [1, 2, 3];
// console.log(str.length);
// console.log(arr.length);
// console.log(str[2]);

// console.log(str.toUpperCase());

// const fruit = "Some fruit";
// console.log(fruit.indexOf("fruit"));

// const logg = "Hello world";
// console.log(logg.slice(6, 11));

// console.log(logg.substring(6, 11));
// console.log(logg.substr(6, 5));


// const num = 12.2;
// console.log(Math.round(num));

// const test = "12.2px";
// console.log(parseInt(test));

// console.log(parseFloat(test));


let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;


for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
          b = prompt('На сколько оцените его?', '');

    if(a != null && b != null && a != '' && b != '' && a.length < 50) {     
        personalMovieDB.movies[a] = b;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }
}

console.log(personalMovieDB);