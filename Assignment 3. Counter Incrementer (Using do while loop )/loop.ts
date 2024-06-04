// 1. Set the starting counter to 0: Create a variable counter and initialize it to 0.
// 2. Create a variable, step, to increase your counter by: Define a variable step to hold
// the value by which the counter will be incremen
// 3. Add a do...while loop: In the loop, print the counter to the console and increment it by
// the step amount each iteration.

// 4. Continue to loop until the counter is equal to or more than 100: The loop should run
// as long as the counter is less than 


// im using a ArrowFunction 
const counterIncreamint=(step:number)=>{

    let counter = 0;
// using do while loop
do{

    console.log(counter);
    
    counter += step;
}while(counter <= 100);

};

// calling function and adding step nummber

counterIncreamint(10);



