//Basics

console.log("Hello world");
//window.alert("I hate school!")
console.log("")

//Variables

let firstName;
firstName = "Taha";
let age = 14;
let Hating_school = true;

console.log("Hello", firstName);
console.log("you are", age, "year old");
console.log("You hate school", Hating_school);

document.getElementById("p1").innerHTML = "Hello " + firstName;
document.getElementById("p2").innerHTML = "You are " + age + "years old";
document.getElementById("p3").innerHTML = "You hate school " + Hating_school;
console.log("")

//Arithemetic Expressions

let students = 20;

students = students + 1;

let extrastudents = students % 2;

console.log(students);
console.log(extrastudents);

let result = 1 + 3 * (3 + 7)  / 2;
console.log(result);
console.log("")

//Maths 

let     x = 4.5;

//x = Math.round(x);
//x = Math.floor(x);
//x = Math.ceil(x);
//x = Math.pow(x, 2);
//x = Math.sqrt(x);
//x = Math.abs(x);

console.log(x);
console.log("")

//User Input

//let username = window.prompt("Enter a Username :")
//console.log(username)

let username;
document.getElementById("btn1").onclick = function(){
    username = document.getElementById("in1").value;
    console.log(username);
}

//Type conversion

//let old = window.prompt("How old are you? : ");
//old = Number(old);
//old += 1;
//console.log(old);

//Hypotenuse Calculator

let a;
let b;
let c;

document.getElementById("submit").onclick = function(){
    
    a = document.getElementById("ain").value;
    a = Number(a);

    b = document.getElementById("bin").value;
    b = Number(b);

    c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

    document.getElementById("c").innerHTML = "Side C : " + Math.floor(c);
    console.log(c);
}

// Number

const inc = document.getElementById("inc");
const dec = document.getElementById("dec");
const res = document.getElementById("res");
let label = document.getElementById("no1");
let count = 0;

inc.onclick = function(){
    count = count + 1;
    label.textContent = count;
}

dec.onclick = function(){
    count -= 1;
    label.textContent = count;
}

res.onclick = function(){
    count = 0;
    label.textContent = count;
}

// Dicr roll   

const random = document.getElementById("random");
const ran = document.getElementById("ran");
const min = 1;
const max = 6;
let randomnumber;

random.onclick = function(){
    randomnumber = Math.floor(Math.random() * max) + min;
    ran.textContent = randomnumber;
}

// If statements 

let myage = 14;
myage = Number(myage);

if(myage === 14){
    console.log("You are most likely someone who hate school");
    if(username == "Headshot"){
        console.log("Ohh.. You're him...");
    }
    else{
        console.log("please enter a username given beside.");
    }
}

else if(myage >= 18){
    console.log("you are an adult!");
}
else{
    console.lot("You are propably a kid!");
}

const check = document.getElementById("cb");
const visa = document.getElementById("r1");
const mc = document.getElementById("r2");
const paypal = document.getElementById("r3");
const submit = document.getElementById("pay");
const Sresult = document.getElementById("sub");
const Presult = document.getElementById("result");

submit.onclick = function(){
    if(check.checked){
        Sresult.textContent = "You are Subscribed!";
    }
    else{
        Sresult.textContent = "YOU ARE NOT SUBSCRIBED!!";
    }

    if(visa.checked){
        Presult.textContent = "You are paying with Visa";
    }
    else if(mc.checked){
        Presult.textContent = "You are paying with MasterCard";
    }
    else{
        Presult.textContent = "You are paying with PayPal";
    }
}     

// Tenary operaters

// let myoldage = 19;
// let adult = myoldage >= 18 ? "Yor are an Adult":"You are a kid";
// console.log(adult);

// Switch

let score = 95;
let grade;

switch(true){
    case score >=90:
        grade = "A+";
        break
    case score >= 80:
        grade = "A";
        break
    case score >= 75:
        grade = "A-";
        break
    default:
        grade = "F";
        console.log("You suck");
}

console.log(grade);
console.log("");



// String method 

let myname = "Headshot   ";

console.log(myname.charAt(0));
console.log(myname.indexOf("a"));
console.log(myname.lastIndexOf("h"));
console.log(myname.length);
console.log(myname.trim());
console.log(myname.toUpperCase());
console.log(myname.toLowerCase());
console.log(myname.repeat(2));

let mymyname = myname.startsWith("a");
console.log(mymyname);

let numbername = "124-456-7890";
numbername = numbername.replaceAll("-", " ");
console.log(numbername);

numbername = numbername.padStart(20, "0 ");
console.log(numbername);

numbername = numbername.padEnd(20, "0 ");
console.log(numbername);


// String slicing

let email = "Headshot@gmail.com";
let emailusername = email.slice(0, email.indexOf("@"));

console.log(emailusername);

// Method Chaining 

let methodchainingusername = "headshot       ";
methodchainingusername = methodchainingusername.trimEnd().charAt(0).toUpperCase() + methodchainingusername.trim().slice(1).toLowerCase();
        
console.log(methodchainingusername);

// Logical operators

let temp = 20;

if(temp > 0 && temp <= 30){
    console.log("The weather is Good");
     
}
else if(temp <= 0 || temp > 30){
    console.log("The weather is Bad");
}
else{
    console.log("Something went wrong!");
}
console.log("");

// while loops 

// let loopsusername = "";

// while(loopsusername === "" || loopsusername === null){
//     loopsusername = window.prompt("Enter your uesername : ");
//     console.log(loopsusername);
// }

// for loops 

for (let i = 0; i <= 10; i++) {
    // console.log("I hate school");
    if(i == 7){
        continue;
    }
    else if(i == 9){
        break;
    }
    else{
        console.log(i);
    }
}
console.log("");

// functions

function birthday(name, age){
    console.log(`Happy birthday ${name}`);
    age = age + 1;
    console.log(`You are now ${age} old`);
}

birthday("Headshot", 14)
birthday("Shazz", 16)

function addition(x, y){
    return x + y;
}
function subtraction(x, y){
    return x - y;
}

console.log(addition(5, 4));
console.log(subtraction(9,4));
console.log("");


// Arrays (list kinda)

let fruits = ["Apple", "Banana", "coconut"];

fruits.push("Dragon");
fruits.pop();
fruits.unshift("Z-fruit");
fruits.shift();


for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}
console.log(" ");

// Spread operators

let numbers = ["1", "2", "3", "4", "5"];
let maxofthenumber = Math.max(...numbers);
console.log(maxofthenumber);
console.log(...numbers);

// Rest perameters

function foodsofthefridge(...foods){
    console.log(...foods);
}

const food1 = "Apple";
const food2 = "Biryani";
const food3 = "cold-water";
const food4 = "watermelon";

foodsofthefridge(food1, food2, food3, food4);

function add(...numberstosum){
    let result = 0;
    for(let no of numberstosum){
        result = result + numberstosum;
    }
    return result;
}

const total = add(1, 4, 56, 6);
console.log(total);

// Call back

function callbacksum(call, x, y){   // <--
    let result = x + y;             //   |
    call(result);                   //   |
}                                   //   |
function displaythesum(result){     // <--
    console.log(result);
}

callbacksum(displaythesum, 5, 9);

// for each

let numbersforeach = ['1', '2', '3', '4','5'];

function show(element){
    console.log(element);
}

numbersforeach.forEach(show);

let fforeach = ["Apple", "banana", "watermelon"];

function capital(element, array, index){
    array[index] = element.toUpperCase();
    console.log(element);
}

fforeach.forEach(capital);

// map

let dates = ['2024-16-4', '2025-1-1', '2027-4-27'];

function format(element){
    const divis = element.split("-");
    return `${divis[1]}/${divis[2]}/${divis[0]}`;
}
const dated = dates.map(format);
console.log(dated);

// Filter

let myclass = [14, 15, 14, 16, 13, 15, 17];

function kidz(element){
    return element <= 14;
}
let myactualclass = myclass.filter(kidz);
console.log(myactualclass);


// Random password Generator

let noofchar;
document.getElementById("buttforpass").onclick = function(){
    noofchar = Number(document.getElementById("leng").value);
}


const lowercaseCharacters = true;
const uppercaseCharacters = true;
const number = true;
const symbols = true;

let allowencelower = document.getElementById("pass1");
let allowenceupper = document.getElementById("pass2");
let allowencenumber = document.getElementById("pass3");
let allowencesymbol = document.getElementById("pass4");
let pa = document.getElementById("forpass");

let wronggg = "Select atleast one set of charecters";
const passs = document.getElementById("pass");
let wrongggg = document.getElementById("itswrong");
let wronggggg = "Only Numbers (1 - 12), 12 is Default"
let mis = "Number must be choosen from 1 - 12";

passs.onclick = function(){
   
        console.log(noofchar);

        if(isNaN(noofchar)){
            noofchar = 12;
            wrongggg.textContent = wronggggg;
        }
        else if(noofchar <= 0){
            noofchar = 12;
            wrongggg.textContent = mis;
        }
        else if(noofchar > 12){
            noofchar = 12;
            wrongggg.textContent = mis;
        }

        

    

    const lower = "abcdefghijklmnopqrstuvwxyz";
    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const notLetter = "0123456789";
    const symbol = "!@#$%^&*()_-+=";
    allowed = "";
    if(allowencelower.checked){
        allowed += lower;
    }
    if(allowenceupper.checked){
        allowed += upper;
    }
    if(allowencenumber.checked){
        allowed += notLetter;
    }
    if(allowencesymbol.checked){
        allowed += symbol;
    }
    if(allowed.length === 0){
        pa.textContent = wronggg;
        
    }
    else{
        let password = "";

        console.log(allowed);
        
    
    
        for (let i = 0; i < noofchar; i++) {
            const randomIndex = Math.floor(Math.random() * allowed.length);
            password += allowed[randomIndex];
        }
        console.log(password);
    
    
        pa.textContent = password;

    }

}
// WEATHER THINGY YAY

const weatherForm = document.querySelector(".weatherForm");
const input = document.querySelector(".inputWeather");
const card = document.querySelector(".cardSyle");
const apiKey = "9dfb251c1c3775e899639d503a745448";

weatherForm.addEventListener("submit", async event => {
    event.preventDefault();
    const city = input.value;
    if(city){
        try{
            const weatherData = await myWeatherData(city);
            showWeatherData(weatherData);
        }
        catch(error){
            console.error(error);
            ohNoError(error);
        }
    }
    else{
        ohNoError("Please Enter a City");
    }
})

async function myWeatherData(city){
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`

    const reply = await fetch(apiUrl);
    if(!reply.ok){
        throw new Error("Could not find the Place");
    }
    return await reply.json();
}

function showWeatherData(data){
    const {name: city, 
           main: {temp, humidity},
           weather: [{description}]} = data;
    
    card.textContent = "";
    card.style.display = "flex";
    
    const cityName = document.createElement("h1");
    cityName.textContent = city;
    cityName.classList.add("cityName");

    card.appendChild(cityName);
    
    const tempDisplay = document.createElement("p");
    tempDisplay.textContent = (`Temparature : ${(temp - 273.15).toFixed(1)}°c`);
    tempDisplay.classList.add("temp");

    card.appendChild(tempDisplay);

    const humidityDisplay = document.createElement("p");
    humidityDisplay.textContent = `Humidity: ${humidity}%`;
    humidityDisplay.classList.add(`humidity`);

    card.appendChild(humidityDisplay);

    const desc = document.createElement("p");
    desc.textContent = `Weather : ${description}`;
    desc.classList.add("descWeather");

    card.appendChild(desc);
}

function ohNoError(message){
    const error = document.createElement("p");
    error.textContent = message;
    error.classList.add("error");

    card.textContent = '';
    card.style.display = "flex";
    card.appendChild(error);
}

//To do list
const buttTodo = document.getElementById("buttTodo");
const inputContainer = document.querySelector(".inputContainer");
const deleteButt = document.getElementById("deletee");

const eor = "Please Enter a Value";

let someKind = 1;

buttTodo.addEventListener("click", function(){

    let listValue = document.querySelector(".inputTodo").value;

    if(listValue == ''){
        console.error("Please enter a Sting");
        let theError = document.getElementById("wow");
        if(!theError){
            const errorLabel = document.createElement("label");
    
            errorLabel.textContent = "Please enter your desired work";
            errorLabel.id = "wow";
            errorLabel.classList.add("lsts");
        
            inputContainer.appendChild(errorLabel);
            setTimeout(function(){errorLabel.remove()}, 3000);
        }

    }
    else{ 
        const newInput = document.createElement("input");

        newInput.type = 'checkbox';
        newInput.id = `input${someKind}`;
    
        const newLabel = document.createElement("label");

        newLabel.id = `label${someKind}`;        
        newLabel.setAttribute("for", newInput.id);
        newLabel.textContent = listValue;

        newLabel.classList.add("lsts");
       
        inputContainer.appendChild(newInput);
        inputContainer.appendChild(newLabel);

        console.log(`Before increaing : ${someKind}`);

        newInput.addEventListener("change", function(){
            if(newInput.checked){
                newLabel.style.textDecoration = 'line-through';
            }
            else if(!newInput.checked){
                newLabel.style.textDecoration = 'none';
            }
        })

        someKind++;

        console.log(`AFter increaing : ${someKind}`);

        const newLine = document.createElement("br");
        newLine.id = `line${someKind}`;
        inputContainer.appendChild(newLine);
        document.querySelector(".inputTodo").value = "";
    }
})

deleteButt.addEventListener("click", function(){

    const iwannadelete = document.getElementById(`input${someKind - 1}`);
    const ihavedelete = document.getElementById(`label${someKind - 1}`);

    console.log(`delete one : ${someKind}`);

    iwannadelete.remove();
    ihavedelete.remove();

    const removeLine = document.getElementById(`line${someKind}`);
    removeLine.remove();

    someKind--;

})

// rock paper scissors !6

const clickedRock = document.getElementById("rock");
const clickedPaper = document.getElementById("paper");
const clickedScissors = document.getElementById("scissors");

gamebutton.addEventListener("click", function(){

    let optionsOfGame = ["rock", "paper", "scissors"];
    let computer = optionsOfGame[Math.floor(Math.random() * optionsOfGame.length)];
    
    while(true){
        let player = window.prompt("Rock Paper or Scissors : ").toLowerCase();
        if(optionsOfGame.includes(player)){
        
            if(player == computer){
                window.alert("Draw");
                console.log("Draw");
                break;
            }
            else if(player == "rock"){
                if(computer == "paper"){
                    window.alert("computer Wins");
                    break;
                }
                else if(computer == "scissors"){
                    window.alert("Player wins");
                    break;
                }
            }

            else if(player == "paper"){
                if(computer == "rock"){
                    window.alert("Player wins");
                    break;
                }
                else if(computer == "scissors"){
                    window.alert("Computer Wins");
                    break;
                }
            }

            else if(player == "scissors"){
                if(computer == "paper"){
                    window.alert("Player wins");
                    break;
                }
                else if(computer == "rock"){
                    window.alert("Computer wins");
                    break;
                }
            }
    
        }
        else{
            window.alert("Invalid answere Choose again.");

        }
    } 

})

function alternate(a1, a2) {
    // Write code here
    let alternating = [];
    for(let i = 0; i < a1.length; i ++){
        let a1_one = a1[i];
        let a2_two = a2[i];

        alternating += a1.unshift(a1_one) + a2.unshift(a2_two);
    }
    return alternating;
}

let one = [1,2,3];
let two = [4,5,6];
let whate = alternate(one, two);
console.log(whate);