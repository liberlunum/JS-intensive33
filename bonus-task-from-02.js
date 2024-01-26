function logger(param) {
    console.log(`I output only external context: ${this.item} (${param})`);
}
const obj = {
    item: 'some value'
}
function myBindByApply (func, context) {
    return function () {
        return func.apply(context, arguments);
    }
}
const byApply = myBindByApply( logger, obj);
byApply('bind by apply');

function myBindByCall(func, context) {
    return function() {
        return func.call(context, ...arguments);
    }
}

const byCall = myBindByCall(logger, obj);
byCall('bind by call')