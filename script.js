console.log('js ok');

for(let number = 1; number <= 100; number++) {
    // Imposto la condizione per cui il numero è divisibile

    if(!isNaN(number)) {
        const divisibilePerTre = number % 3 === 0;
        const divisibilePerCinque = number % 5 === 0;
        const divisibilePerTreePerCinque = number % 3 && number % 5 === 0;


        if(divisibilePerTre) {
            console.log(number +'fizz')
        }

        if(divisibilePerCinque) {
            console.log(number + 'buzz')
        }

        if(divisibilePerTreePerCinque) {
            console.log(number + 'fizzbuzz')
        }
    }
        

}