const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const total = 13;
const firstSum = (arr, total) => {
    for( let i = 0; i <= arr.length-1; i++) {
        for( let b = 1 ; b <= arr.length-1; b++) {
            let res = arr[i] + arr[b]
             if ( res === total) {
                 return [arr[i], arr[b]]
             }
        }
    }
}
console.log(firstSum(arr, total))