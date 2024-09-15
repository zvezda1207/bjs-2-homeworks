function parseCount(number) {
	let result = Number.parseFloat(number);
	if (Number.isNaN(result)) {
		throw new Error("Невалидное значение");
	}
	return result;
}

function validateCount(number) {
	try {
		return parseCount(number);
	} catch (error) {
		console.warn(error);
		return error;
	}
}

console.log(validateCount("10.5")); // 10.5
console.log(validateCount("abc")); // Невалидное значение
console.log(validateCount("123")); // 123
console.log(validateCount("0.001")); // 0.001
console.log(validateCount("NaN")); // Невалидное значение
console.log(validateCount("012")); // 12


class Triangle {
	constructor(a, b, c) {
		this.a = a;
		this.b = b;
		this.c = c;
		if (this.a + this.b < this.c || this.b + this.c < this.a || this.a + this.c < this.b) {
			throw new Error("Треугольник с такими сторонами не существует");
		}
	}
	get perimeter() {
		return this.a + this.b + this.c;
	}
	get area() {
		let p = 1 / 2 * (this.perimeter);
		return parseFloat(Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)).toFixed(3));
	}
}

function getTriangle(a, b, c) {
	try {
		return new Triangle(a, b, c);
	} catch (error) {
		return {
			get perimeter() {
				return ("Ошибка! Треугольник не существует");
			},
			get area() {
				return ("Ошибка! Треугольник не существует");
			}
		}
	}
}

const triangle1 = getTriangle(2, 5, 5);
console.log(triangle1.perimeter); // 12
console.log(triangle1.area); // 6.000

const triangle2 = getTriangle(1, 1, 3);
console.log(triangle2.perimeter); // "Ошибка! Треугольник не существует"
console.log(triangle2.area); // "Ошибка! Треугольник не существует"