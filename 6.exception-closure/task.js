function parseCount(number) {
    const parsedNumber = Number.parseFloat(number);
    if (isNaN(parsedNumber)) {
        throw new Error('Невалидное значение');
    }
    return parsedNumber;
}

function validateCount(number) {
    try {
        return parseCount(number);
    }
    catch (error) {
        return error;
    }
}

class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
        if (a + b < c || b + c < a || c + a < b) {
            throw new Error('Треугольник с такими сторонами не существует');
        }
    }
    get perimeter() {
        return this.a + this.b + this.c;
    }
    get area() {
        const p = this.perimeter / 2;
        const square = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
        return parseFloat(square.toFixed(3));
    }
}
function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    }
    catch (error) {
        return {
            get area() {
                return 'Ошибка! Треугольник не существует';
            },
            get perimeter() {
                return 'Ошибка! Треугольник не существует';
            }
        }
    }
}