
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