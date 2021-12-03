
function fizzBuzz (number1, number2) {
    const largerNumber = number1 > number2 ? number1 : number2
    const smallerNumber = number1 > number2 ? number2 : number1

    for(let i = smallerNumber; i <= largerNumber; i++){
        if(i % 2 === 0 && i % 3 === 0){
            console.log('bazz')
        }else{
            if(i % 2 === 0){
                console.log('fizz')
            }
            if(i % 3 === 0){
                console.log('buzz')
            }
        }
    }
}

fizzBuzz(5, 30)

function countNumbers (arrayOfNumbers) {
    let counterArray = []
    arrayOfNumbers.forEach(numberFromArray => counterArray[numberFromArray] = counterArray[numberFromArray] ? counterArray[numberFromArray] + 1 : 1)
    return counterArray
}

console.log(countNumbers([3,2,3,5,4,3,5]))

for (var i=1; i < 101; i++){
    if (i % 15 == 0) console.log("FizzBuzz");
    else if (i % 3 == 0) console.log("Fizz");
    else if (i % 5 == 0) console.log("Buzz");
    else console.log(i);
}