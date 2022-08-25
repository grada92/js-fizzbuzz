console.log('js ok');

for(let number = 1; number <= 100; number++) {
    // Imposto la condizione per cui il numero è divisibile
    
    if(!isNaN(number)) {
        const divisibilePerDue = number % 3 === 0;
        const divisibilePerTre = number % 5 === 0;
        const divisibileperDueeTre = number % 3 && number % 5 === 0;


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