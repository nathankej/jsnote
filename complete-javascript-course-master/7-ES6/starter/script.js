/*
function Person(name){
    this.name = name;
}

Person.prototype.myFriends5 = 
    function(friends){
        var arr = friends.map(function(el){
            return this.name + 'is friends with ' + el;                     
        }.bind(this));
        console.log(arr);
    }

var friends = ['Bob', 'Jane', 'Mark'];
new Person('John').myFriends5(friends);


const boxes = document.querySelectorAll('.box');

//ES5
var boxesArr5 = Array.prototype.slice.call(boxes);
boxesArr5.forEach(function(cur){
    cur.style.backgroundColor = 'dodgerblue';
})

//ES6
const boxesArr6 = Array.from(boxes);
Array.from(boxes).forEach(cur => cur.style.nackgroundColor = 'dodgerblue');

var obj = {0:'hello',1:'world',length:2};
console.log(Array.prototype.slice.call(obj,0));

/*
for(var i =0; i<boxesArr5.length;i++){
    if(boxesArr5[i].className === 'box blue'){
       continue;
        break;
    }
      
    boxesArr5[i].textContent = 'I changed to blue!';
}


for(const cur of boxesArr6){
    if(cur.className.includes('blue')){
        continue;
    }
    cur.textContent = 'I changed to blue!';
}


var ages = [12, 17, 8 ,21,14 ,11];

var full = ages.map(function(cur){
    return cur >=18;
})

console.log(full);

console.log(full.indexOf(true));



function addFourAges (a , b , c ,d){
    return a+ b+c +d;
}

var sum1 = addFourAges(18,20,12,21);
console.log(sum1);

var ages = [18,20,12,21];
var sum2 = addFourAges.apply(null,ages);
*/
