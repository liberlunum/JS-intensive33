const person = {
    name: 'Настасья',
    surName: 'Холмачёва'
}

const person2 = Object.create(person, {
    name: {
        value: 'Анастасия'
    }
})

Object.setPrototypeOf(person, {logInfo() {
    console.log(this.name)
    }})


