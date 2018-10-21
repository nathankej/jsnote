/*
var john ={
    name:'John',
    yearOfBrith:1990,
    job:'teacher'  
};

var Person = function(name, yearOfBirth,job){
    this.name = name;
    this.yearOfBrith = yearOfBirth;
    this.job = job;  
}

Person.prototype.calcAge = function(){
     console.log(2016 - this.yearOfBrith);
}

var john = new Person('John', 1990,'teacher');

john.calcAge();

var jane = new Person('Jane',1969,'designer');
var mark = new Person('Mark',1948,'retired');

var personProto = {
    calcAge :function(){
        console.log(2016-this.yearOfBirth);
    }
};

var john = Object.create(personProto);
john.name = 'john';
john.yearOfBirth = 1990;
john.job = 'teacher';

var jane= Object.create(personProto,{
    name:{value:'jane'},
    yearOfBirth : {value: 1990},
    job: { value:'designer'}
});


var years = [1990, 1965, 1938 ,2005, 1998];

function arrayCalc(arr, fn){
    var  arrRes = [];
    for(var i = 0; i< arr.length;i++ ){
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calcAge(el){
    return 2016 - el;
}

function isFullAge(el){
    return el >= 18;
}

function maxHeartRate(el){
    if(el >= 18 && el <= 81){
       return Math.round(206.9-(0.67*el)); 
    }else{
        return -1;
    }
}

var ages = arrayCalc(years,calcAge);
var fullAges = arrayCalc(ages, isFullAge);
var rates = arrayCalc(ages,maxHeartRate);

console.log(ages);
console.log(fullAges);
console.log(rates);

function retirement(retirementAge){
    var a =' years left until retirement.';
    return function(yearOfBirth){
        var age = 2016 - yearOfBirth;
        console.log((retirementAge-age) +a); 
    }
}；

var retirementUS = retirement(66);
retirementUS(1990);
*/

function Question(question,answers,correct){
    this.question = question;
    this.answers = answers;
    this.correct = correct;
}

Question.prototype.displayQuestion() {
    console.log(this.question);
    for (var i =0; i <this.answers.length;i++){
        console.log(this.answers[i]);
    }
}

var q1 = new Question('Is Javascript coolest programming language',     ['Yes','No'],
                     0);

var q2 = new Question('what is the name of this course\'s teacher?',    ['john','mike','jonas'], 2 );

var q3 = new Question('What does best describe coding',   ['boring','fun','hard','teadious'],      1 );


var questions  =  [q1, q2, q3];

var number = Math.floor(Math.random()*questions.length);

//console.log(number);
questions[number];