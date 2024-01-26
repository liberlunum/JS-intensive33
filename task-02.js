function logger(param) {
    console.log(`I output only external context: ${this.item} (${param})`);
}
const obj = {
    item: 'some value'
}

logger.apply(obj, ['by apply']);
logger.call(obj, 'by call');

const anotherLogger = logger.bind(obj, 'by bind');
anotherLogger();