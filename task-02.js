const counter = {
    a: 1,
    b: 2
}

const copyCounter1 = Object.assign({}, counter);

const copyCounter2 = {...counter};

const copyCounter3 = JSON.parse(JSON.stringify(counter));

const copyCounter5 = structuredClone(counter);


