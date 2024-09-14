class PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this.state = 100;
		this.type = null;
	}
	fix() {
		this.state = this.state * 1.5;
	}
	set state(newState) {
		if (newState < 0) {
			this._state = 0;
		} else if (newState > 100) {
			this._state = 100;
		} else {
			this._state = newState;
		}
	}

	get state() {
		return this._state;
	}
}

class Magazine extends PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.type = "magazine";
	}
}

class Book extends PrintEditionItem {
	constructor(author, name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.type = "book";
		this.author = author;
	}
}

class NovelBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = "novel";
	}
}

class FantasticBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = "fantastic";
	}
}

class DetectiveBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = "detective";
	}
}

const picknick = new FantasticBook(
	"Аркадий и Борис Стругацкие",
	"Пикник на обочине",
	1972,
	168,
);

console.log(picknick.author); //"Аркадий и Борис Стругацкие"
picknick.state = 10;
console.log(picknick.state); //10
picknick.fix();
console.log(picknick.state); //15

const magazine = new Magazine("Космо", 2022, 100);
console.log(magazine.type); // "magazine"

const book = new Book("Джордж Оруэлл", "1984", 1949, 328);
console.log(book.type); // "book"
console.log(book.author); // "Джордж Оруэлл"

const novel = new NovelBook("Харпер Ли", "Убить пересмешника", 1960, 336);
console.log(novel.type); // "novel"


class Library {
	constructor(name) {
		this.name = name;
		this.books = [];
		this._state = 40;
	}

	addBook(book) {
		if (this._state > 30) {
			this.books.push(book);
		}
	}

	findBookBy(type, value) {
		for (let book of this.books) {

			if (book[type] === value) {
				return book;
			}
		}
		return null;
	}

	giveBookByName(bookName) {
		for (let i = 0; i < this.books.length; i++) {
			if (this.books[i].name === bookName) {
				let bookToGive = this.books[i];
				this.books.splice(i, 1);
				return bookToGive;
			}
		}
		return null;
	}
}

const library = new Library("Библиотека имени Ленина");

library.addBook(
	new DetectiveBook(
		"Артур Конан Дойл",
		"Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
		2019,
		1008
	)
);
library.addBook(
	new FantasticBook(
		"Аркадий и Борис Стругацкие",
		"Пикник на обочине",
		1972,
		168
	)
);
library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
library.addBook(new Magazine("Мурзилка", 1924, 60));

console.log(library.findBookBy("name", "Властелин колец")); //null
console.log(library.findBookBy("releaseDate", 1924).name); //"Мурзилка"

console.log("Количество книг до выдачи: " + library.books.length); //Количество книг до выдачи: 4
library.giveBookByName("Машина времени");
console.log("Количество книг после выдачи: " + library.books.length); //Количество книг после выдачи: 3

library.addBook(new Book("1984", 1949, "George Orwell"));
library.addBook(new Book("F. Scott Fitzgerald", "The Great Gatsby", 1925));
library.addBook(new Book("Unknown Author", "Some Book", 1919, 230));

let book1919 = library.findBookBy("releaseDate", 1919);
console.log(book1919.name);

let issuedBook = library.giveBookByName("The Great Gatsby");
console.log("Выдана книга " + issuedBook.name);
issuedBook.state = 10;
console.log(issuedBook.state);
issuedBook.fix();
console.log(issuedBook.state);
library.addBook(issuedBook);
console.log(library.books.length);


class Student {
	constructor(name) {
		this.name = name;
		this.marks = {};
	}

	addMark(mark, subject) {
		if (mark < 2 || mark > 5) {
			console.log("Оценка не валидна");
			return;
		}
		if (!this.marks[subject]) {
			this.marks[subject] = [];
		}
		this.marks[subject].push(mark);
	}

	getAverageBySubject(subject) {
		if (!this.marks[subject] || this.marks[subject].length === 0) {
			return 0;
		}
		let summ = this.marks[subject].reduce((acc, mark) => acc + mark, 0);
		return summ / this.marks[subject].length;
	}
	getAverage() {
		let subjects = Object.keys(this.marks);
		let summOfAverageGrades = subjects.reduce((acc, subject) => {
			return acc + this.getAverageBySubject(subject);
		}, 0);
		return summOfAverageGrades / subjects.length;
	}
}

const student = new Student("Олег Никифоров");
student.addMark(5, "химия");
student.addMark(5, "химия");
student.addMark(5, "физика");
student.addMark(4, "физика");
student.addMark(6, "физика"); // Invalid mark

console.log(student.getAverageBySubject("физика")); // 4.5
console.log(student.getAverageBySubject("биология")); // 0
console.log(student.getAverage()); // 4.75