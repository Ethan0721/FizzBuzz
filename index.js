// If the value is a multiple of 3 then output the word “Fizz”
// If the value is a multiple of 5 then output the word “Buzz”
// If the value is divisible by both 3 and 5 then output the word “FizzBuzz”
// At the end of the run the program should display each division that was performed. See Sample Output below.
const arrayInput = [1, 3, 5 , , 15, 'A', 23];

const fizzBuzz = (numArray)=>{
    console.log(`Your enter array is ${numArray}`);
	for(let i=0; i<numArray.length; i++){
		if(Number.isInteger(numArray[i])){
			if(numArray[i] % 3 !== 0 && numArray[i] % 5 !== 0){
                console.log(`Divided by ${numArray[i]} by 3`);
			}
			if(numArray[i] % 5 !== 0 && numArray[i] % 3 !== 0){
                console.log(`Divided by ${numArray[i]} by 5`);
			}
			if(numArray[i] % 3 === 0 && numArray[i] % 5 === 0){
                console.log("FizzBuzz");
			}else if(numArray[i] % 3 === 0 && numArray[i] % 5 !== 0){
                console.log("Fizz");
			}else if(numArray[i] % 5 === 0 && numArray[i] % 3 !== 0){
                console.log("Buzz");
			}
		}else{
            console.log("invalid item");
		}
    }
}

fizzBuzz(arrayInput);
