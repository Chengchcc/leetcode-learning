/**
 * @param {number[]} numbers
 * @return {number}
 */
var minArray = function (numbers) {
    let l = 0, r = numbers.length - 1
    while(l < r){
        let mid = Math.floor((l + r) / 2)
        if(numbers[mid] > numbers[r]){
            l = mid + 1
        }else if(numbers[mid] < numbers[r]){
            r = mid
        }else{
            r--
        }
    }
    return numbers[l]
};