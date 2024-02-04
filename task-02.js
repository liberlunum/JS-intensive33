function doSmth() {
    return Promise.resolve("123");
}

doSmth()
    .then(function (a) {
        console.log("1", a); // результатом консоль лога будет "1" 123.
        return a; // возвращаем 123.
    })
    .then(function (b) {
        console.log("2", b); // результатом консоль лога будет "2" 123.
        return Promise.reject("321"); // меняем состояние промиса на rejected, возвращаем 321.
    })
    .catch(function (err) { // мы "зайдём" в этот обработчик, так как промис в состояние rejected.
        console.log("3", err); // результатом консоль лога будет "3" 321.
        //явно ничего не возвращаем.
    })
    .then(function (c) {
        console.log("4", c); // результатом консоль лога будет "4" undefined, так как в предыдущем обработчике мы ничего
        //явно не возвращали => в качестве аргумента будет принят undefined
        return c;
    });