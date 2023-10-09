
## FAQ

#### 1. Write the correct answer from the following options and give an explanation (2-5 lines).
    let greeting;
    greetign = {};
    console.log(greetign);

    .A: {}
    .B: ReferenceError: greetign is not defined
    .C: undefined

    #Answer: A:{}.
    #explanation here:
       
    =The code declares a variable called `greeting`,
    and it has an empty  `{}` object to it, 
    and then logs (prints) the empty object to the console.
    so The output in the console is simply `{}` representing the empty object.


#### 2. Write the correct answer from the following options and give an explanation (2-5    lines).
    function sum(a, b) {
    return a + b;
    }
    sum(1, "2");
    
    
    .A: NaN
    .B: TypeError
    .C: "12"
    .D: 3
    
    #Answer: C: "12".
    #explanation here:
    The code defines a (sum) function that takes two arguments
    and returns their sum. if one of the arguments is a number and the other
    is a string, JavaScript will automatically attempt to convert the string into a number
    and then perform the addition. In there, calling (sum(1, "2");) results 
    in the string concatenation of "1" and "2,"giving the string "12" as the output.


#### 3. Write the correct answer from the following options and give an explanation (2-5 lines).
    const food = ["🍕", "🍫", "🥑", "🍔"];
    const info = { favoriteFood: food[0] };

    info.favoriteFood = "🍝";

    console.log(food);

    .A: ['🍕', '🍫', '🥑', '🍔']
    .B: ['🍝', '🍫', '🥑', '🍔']
    .C: ['🍝', '🍕', '🍫', '🥑', '🍔']
    .D: ReferenceError


    #Answer: ['🍕', '🍫', '🥑', '🍔'].
    #explanation here:
    An array called `food` is created with four emoji elements.
    An object called `info` is created with a property `favoriteFood` 
    set to the first element of the `food` array, which is "🍕".
    The value of `info.favoriteFood` is changed to "🍝".
    When log the `food` array, it remains unchanged and still contains
    the original elements: ["🍕", "🍫", "🥑", "🍔"]. Changing `info.favoriteFood` 
    does not modify the `food` array.

#### 4. Write the correct answer from the following options and give an explanation (2-5 lines).
    function sayHi(name) {
    return `Hi there, ${name}`;
    }

    console.log(sayHi());

    .A: Hi there,
    .B: Hi there, undefined
    .C: Hi there, null
    .D: ReferenceError

    #Answer: Hi there, undefined.
    #explanation here:
    The Code define a function called sayHi that takes a parameter name,with a      
    default value of "there" if no argument is provided. We it call sayHi() without
    passing any argument. Since no argument is provided, the default value of
    "there" is used for the name parameter.


#### 5. Write the correct answer from the following options and give an explanation (2-5 lines).
    let count = 0;
    const nums = [0, 1, 2, 3];

    nums.forEach((num) => {
    if (num) count += 1;
    });

    console.log(count);

    
    .A: 1
    .B: 2
    .C: 3
    .D: 4
    
    
    #Answer: C:4.
    #explanation here:
    This code initializes a variable called `count` to 0 and creates an array 
    called `nums` containing the numbers [0, 1, 2, 3].  
    it prints the value of `count` to the console.
    In this case, the code counts and outputs the number of truthy values 
    in the `nums` array, which is 3.

