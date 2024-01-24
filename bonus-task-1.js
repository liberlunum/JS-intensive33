const object1 = {
    here: {
        is: "on",
        other: "3"
    },
    object: "Y"
}

const object2 = {
    here: {
        is: "on",
        other: "3"
        },
    object: "Y"
}

const deepEqual = (obj1, obj2) => {
    return JSON.stringify(obj1) === JSON.stringify(obj2)
}

console.log(deepEqual(object1, object2));