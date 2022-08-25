console.log('js ok');

for(let number = 1; number <= 100; number++) {

    if(!isNaN(number)) {
        const divisibilePerDue = number % 2 === 0;
        const divisibilePerTre = number % 3 === 0;
        const divisibileperDueeTre = number % 2 && number % 3 === 0;


        if(divisibilePerDue) {
            console.log(number +'fizz')
        }

        if(divisibilePerTre) {
            console.log(number + 'buzz')
        }

        if(divisibileperDueeTre) {
            console.log(number + 'fizzbuzz')
        }
    }
        

}