const arr = [10, 12, 15, 21];
const iterator = arr.keys();

function showIndex() {
    for (const key of iterator) {
        setTimeout(()=>{
            console.log(key);
        }, 3000*(key+1));
    }
}

showIndex();