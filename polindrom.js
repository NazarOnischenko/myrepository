function isPolindrom(number){
    let temp = number.slice('');
    let ind = true;
    for (let index = 0; index < temp.length; index++) {
        const element = temp[index];
        if (element!=temp[temp.length - 1 - index]) {
            ind = false;
        }
    }
    return ind;
};

function sumator(number){
    let arrNumbers = number.slice('');
    let sum = 0;
    let pair = 'pair';
    for (let index = 0; index < arrNumbers.length; index++) {
        const element = +arrNumbers[index];
        sum += element;
    } 
    if (sum%2!=0) {
        pair = 'odd';
    }
    return [sum,pair];
}

console.log(sumator('21345'));
console.log(sumator('999'));

console.log(isPolindrom('10001'));
console.log(isPolindrom('12345'));
console.log(isPolindrom('123321'));