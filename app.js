// foreach method ga bisa return
/*
const angka = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function print(element) {
    console.log(element);
}
// angka.forEach(print);
angka.forEach(function (el) { // el is callback isinya element angka
    if (el % 2 === 0) {
        console.log(el);
    }
})
*/
/*
const animes = [
    {
        title: 'attack on titan',
        rating: 90,
    },
    {
        title: 'one piece',
        rating: 89,
    },
    {
        title: 'bleach',
        rating: 82,
    },
    {
        title: 'hunter x hunter',
        rating: 90,
    },
    {
        title: 'naruto',
        rating: 84,
    },
];

animes.forEach(function (label) {
    console.log(`${label.title} - ${label.rating}/100`);
});
*/


// map method bisa return
/*
const angka = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const angkadouble = angka.forEach(function (num) {
    return num * 2;
});

const animes = [
    {
        title: 'attack on titan',
        rating: 90,
    },
    {
        title: 'one piece',
        rating: 89,
    },
    {
        title: 'bleach',
        rating: 82,
    },
    {
        title: 'hunter x hunter',
        rating: 90,
    },
    {
        title: 'naruto',
        rating: 84,
    },
];

const animeslist = animes.map(function(anime){
    return anime.title.toUpperCase();
});
*/


// Arrow function
/*
const hasil = function(x){ // finction expression
    return x*x;
};

const perpangkatan = (x) => { // Arrow function
    return x*x;
}

const random = () => { // arrow function
    return Math.floor(Math.random() * 6) + 1;
}
*/


// implisit return arrow function yaitu kodingan tanpa return jika sederhana
/*
const random = () => ( //pemggunaan kurung biasa hanya untuk satu baris tanpa return (karena otomatis return) dan ; di akhirkalimat
    Math.floor(Math.random() * 1000)
);
const add = (a,b) => a + b
*/


// setTimeout dan setInterval
/*
console.log('Halo...');
setTimeout(() => {
    console.log('masih disana gak?');
}, 3000);
console.log('saya pergi ya');
*/
/*
// setInterval(() => {
//     console.log(Math.random());
// }, 2000);

const a = setInterval(() => { // untuk stop harus buat variabel cara stop clearinterval(varnya)
    console.log(Math.random());
}, 2000);
*/


// filter method
/*
const angka = [1,2,3,4,5,6,7,8,9];
const angkaganjil = angka.filter(n => {
    return n % 2 === 1
});
const angkabaru = angka.filter(n => {
    return n < 5
});

const animes = [
    {
        title: 'attack on titan',
        rating: 90,
    },
    {
        title: 'one piece',
        rating: 89,
    },
    {
        title: 'bleach',
        rating: 82,
    },
    {
        title: 'hunter x hunter',
        rating: 90,
    },
    {
        title: 'naruto',
        rating: 84,
    },
];

const animesbagus = animes.filter(anime => anime.rating >= 85);
const animescukupbagus = animes.filter(anime => anime.rating < 85);
const judulanimesbagus = animesbagus.map(anime => anime.title);

const a = animes.filter(anime => anime.rating >= 90).map(anime => anime.title); // cara gabung
*/


// every (true jika semua element benar) and some (true jika salah satu element benar) method 
/*
const examScore = [75,78,80,90];
const examScore1 = [75,78,80,90];
const a = examScore.every(score => score > 70); // true karena semua benar > 70
const b = examScore1.every(score => score > 76); // false karena salah satu ga memenuhi yaitu 75

const c = examScore.some(score => score > 70); // true
const d = examScore1.some(score => score > 80); // true
*/


// reduce 
/*
const examScore = [75,78,80,90];
let total = 0;
for (const score of examScore) { // gambaranya seperti forof
    total += score;
}
const a = examScore.reduce((total, score) => {
    return total + score;
});
// cara kerja reduce

    proses 1 :
    total = 75 
    score = 78  => di jumlah 153 
    proses 2 :
    total = 153
    score = 80 => 233
    proses 3 : 
    total = 233
    score = 90 => 323
    baru deh return 323
*/
/*
const animes = [
    {
        title: 'one piece',
        rating: 89,
    },
    {
        title: 'bleach',
        rating: 82,
    },
    {
        title: 'attack on titan',
        rating: 90,
    },
    {
        title: 'hunter x hunter',
        rating: 90,
    },
    {
        title: 'naruto',
        rating: 84,
    },
];

const bestanime = animes.reduce((a, b) => {
    console.log(a,b); // melihat prosesnya
    if(a.rating > b.rating){
        return a;
    }
    return b;
});
*/


// dalam sebuah object, obejct this di dalam arrow function ruang lingkup nya object gblbal window
/*
const person = {
    firstname: 'john',
    lastname: 'doe',
    fullname: function() { // function reguler
        return `${this.firstname} ${this.lastname}`;
    },

};
*/
/*
const person = {
    firstname: 'john',
    lastname: 'doe',
    fullname: () => { 
        console.log(this); // cek ruang lingkup
        return `${this.firstname} ${this.lastname}`;
    },
    panggilnanti: function () {
        setTimeout( function () { //settimout merupakan object global jadi this di dalamnya mengacu objek global
            console.log(this);
            console.log(this.firstname);
        }, 3000);
        console.log(this.firstname); // di luar object global settimout maka masuk ke local
    }
};
*/
