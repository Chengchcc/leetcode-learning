/**
 * @param {number[]} a
 * @return {number[]}
 */
var constructArr = function (a) {
    if(a.length<=1) return a
    let resLeft = new Array(a.length).fill(1)
    let resRight = new Array(a.length).fill(1)
    for(let i=1;i<a.length;i++){
        resLeft[i] = resLeft[i-1]*a[i-1]
    }
    for(let i=a.length-2;i>=0;i--){
        resRight[i] = resRight[i+1]*a[i+1]
    }
    for(let i=0;i<a.length;i++){
        resLeft[i] *= resRight[i]
    }
    return resLeft
};