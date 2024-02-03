class PersonThree {
    constructor(name) {
        this._name = name;
    }

    get name () {
        return this._name;
    }

    set name (some) {
        this._name = some;
    }
}

const personThree = new PersonThree('Анастасия');

class Person extends PersonThree {}
const person = new Person('Настасья');
