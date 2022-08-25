console.log('js ok');

const container = document.getElementById('container')

for(let number = 1; number <= 100; number++) {

const square = document.createElement('div')   
square.classList.add('box')
container.append(square)
let result

    if (number % 3 === 0 && number % 5 === 0) 
    {
        result = 'fizzbuzz'
        console.log(result)
        square.innerHTML = result
        square.classList.add('bg-red')
    }

    else if (number % 3 === 0)
    {    
        result = 'fizz'
        console.log(result)
        square.innerHTML = result
        square.classList.add('bg-green')
    }


    else if (number % 5 === 0) 
    {
        result = 'buzz'
        console.log(result)
        square.innerHTML = result
        square.classList.add('bg-yellow')
    }
   
    else  {
        result = number
        console.log(result);
        square.innerHTML = number
        square.classList.add('bg-softblue')

    }
     


}


