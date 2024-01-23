const counter1 = {
    firstName: 'Nastasya',
    lastName: 'Kholmacheva'
};

const counter2 = new Counter();
function Counter() {
    this.birthday = '04.07.1995';
}

class OtherCounter {
    constructor(gender, age) {
        this.gender = gender;
        this.age = age;
    }
}
const counter3 = new OtherCounter('female', 28);

const counter4 = Object.create({},{
    zodiacSign: {
        value: 'cancer',
        writable: false,
        configurable: false,
        enumerable: true
    }
});

const counter5 = Object.assign({}, counter1, counter2, counter3, counter4)

