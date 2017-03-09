var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];
//    remove last item in vegetable array
    vegetables.pop();
        console.log(vegetables);
//remove first item in fruit
    fruit.splice(0, 1);
        console.log(fruit);
//find index of orange    
        console.log(fruit.indexOf("orange"));
//add index that was found into fruit array
    fruit.push(1);
        console.log (fruit);
//find length of vegetable array
    console.log(vegetables.length);
//add number of vegetables.length to vege array
    vegetables.push(3);
        console.log(vegetables);

//Put the two arrays together into one array. Fruit first. Call the new Array "food".
    food = fruit.concat(vegetables);
        console.log(food);
//Remove 2 elements from your new array starting at index 4 with one method.
    food.splice(4,2);
        console.log(food);
//Reverse your array.
    food.reverse();
        console.log(food);
//Log your array as a string to the console.
    console.log(food.toString());
    console.log(food.join(", "));
        
//fruit = fruit.concat(vegetables);