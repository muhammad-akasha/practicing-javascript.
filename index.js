// let table = 7; // table of 7
// for (let i = 1; i <= 10; i++) {
//   tableOf7 = table * i;
//   console.log(tableOf7);
// }
// // let table = 7  // reverse table of 7
// // for (let i = 10 ; i >= 1 ; i--){
// //   tableOf7 = table * i;
// //   console.log(tableOf7);
// // }

// // calucate fehraheit ;

// // formula c =(f - 32) * 5 / 9 ; f = (c * 9 / 5) + 32;

// let celcius = 25;
// let fehraheit = 70;


// function calcuCelciAndFerh() {
  //   celcius = ((fehraheit - 32) * 5) / 9;
  //   console.log(celcius + "\xB0C");
  //   fehraheit = (celcius * 9) / 5 + 32;
//   console.log(fehraheit + "\xB0F");
// }
// calcuCelciAndFerh();

// let radius = 20;
// pi = 3.142;

// function calcuCircumAndArea() {
  //   circumstanceOfCircle = 2 * pi * radius;
//   console.log(circumstanceOfCircle);
//   areaOfCircle = pi * radius ** 2;
//   console.log(areaOfCircle);
// }

// calcuCircumAndArea();

// let tabl = 5;
// let tab = Number(prompt("enter a number"));

// for (let i = 1; i <= 10; i++){
  // if (!isNaN(tab)) {
    //   $table = tab * i ;
    //   console.log($table)
    // } else {
      //     $tab = 5 * i;
      //     console.log($tab);
      //   }
      // }
      
      
// let totalMark = 100;
// let studentObt1 = +prompt("enter Obtained marks");
// let studentObt2 = +prompt("enter Obtained marks");
// let studentObt3 = +prompt("enter Obtained marks");

// let arryObt = [studentObt1,studentObt2,studentObt3];

// console.log((arryObt[0] / totalMark) * 100);
// console.log((arryObt[1] / totalMark) * 100);
// console.log((arryObt[2] / totalMark) * 100);

// arryObt = arryObt.map(Number);  // to convert in number;;

// let plusVal = arryObt.reduce((acc , curr) => acc + curr) ;  // for value plus

// // let plusVal = arryObt[0] + arryObt[1] + arryObt[2];   // for value plus

// plusVal = (plusVal / 300 ) * 100;

// if (plusVal.toString().length > 2){
  //   plusVal =  plusVal.toFixed(2)
  //    console.log(plusVal);
  //  }else{
    //    console.log(plusVal);
    //  }
    
    
    // if (plusVal >= 80){
      //   console.log("A")
      // }else if (plusVal >= 70){
        //   console.log("b")
        // }else if (plusVal >= 60){
          //   console.log("c")
          // }else if (plusVal < 60){
            //   console.log("fail")
            // }else{
              //   console.log("wrong value")
              // }
              
              // let gameNum = 8;
              
              // while (true) {
                //   let guess = +prompt("guess number");
                //   if (gameNum === guess) {
                  //     alert("correct");
                  //     break;
                  //   } else if (gameNum === guess + 1 || gameNum === guess - 1) {
                    //     alert("close enough to guess");
                    //   } else if (isNaN(guess)){
                      //     alert("invalid Value");
                      //   }else if (gameNum !== guess) {
                        //      alert("guess again");
// }else{
  //   alert("try again")
  // }
  // }
  
  // let checkDivisibleOf3 = prompt("enter any number");
  
  // if (checkDivisibleOf3 % 3 === 0){
    //   console.log("divisible of 3");
    // }else{
      //   console.log("not divisible of 3")
      // }
      
      // let checkOddOrEven = prompt("enter any number");
      
      // if (checkOddOrEven % 2 === 0){
        //   console.log("even");
        // }else{
          //   console.log("odd")
          // }
          
//   codes:- A=65, Z=90, a=97, z=122 0 = 48 ,9=57).

// function checkAlphabetCase() {
  //   let checkCapOrLow = prompt("Enter Any One Alphabet");
  //   console.log(checkCapOrLow, "entered alphabet");
  //   checkCapOrLow = checkCapOrLow.charCodeAt();
  //   console.log(checkCapOrLow + " entered alphabet charCode");
  //   if (checkCapOrLow >= 65 && checkCapOrLow <= 90) {
  //     console.log("capital letter");
  //   } else if (checkCapOrLow >= 97 && checkCapOrLow <= 122) {
  //     console.log("small letter");
  //   }
  //   else if (checkCapOrLow >= 48 && checkCapOrLow <= 57){
  //   alert("number")
  //   } else {
    //     console.log("invalid");
    //   }
    // }
    // checkAlphabetCase();
    
    // let vovel = "aeiou";
    // let checkword = prompt("enter an alphabet");
    // function checkVovel() {
    //   console.log(vovel);
    //   checkword = checkword.toLowerCase();
    //   found = false;
    //   if (checkword.length > 1){
    //     alert("you have to enter only one word");
    //   }
    //   for (let i = 0; i < vovel.length; i++) {
    //     if (checkword === vovel[i] && checkword.length === 1) {
      //       alert("vovel word");
      //       found = true;
      //       break;
      //     }
      //   }
      //   if (!found && checkword.length === 1) {
  //     alert("not vovel");
  //   }
  // }
  // checkVovel();
  
  // let time = prompt("enter time in 24 hour format");
                    
  // let slice_ = time.slice(0,2);
  // let lastTwo = time.slice(-2);
  // // alert(slice_);
                    
  // if (slice_ >= 12 && slice_ <= 23){
    //   slice_ = slice_ % 12;
    //   alert(slice_ + ":" + lastTwo + "PM");
    // }else{
      //   alert(slice_ + ":" + lastTwo + "PM");
      // }
                        
                        
      // let currTime = parseInt(prompt("enter current time only hour i will convert in 12 hour format"));
      // function timeFormater() {
        //   if (isNaN(currTime) || currTime >= 24){
//     console.log("invalid or entered wrong time")
//   }
//   if (currTime === 0) {
//     console.log( "12am")}
//    else if (currTime === 12) {
  //       console.log( "12pm")
  //   } else if (currTime >= 12 && currTime <= 23) {
    //     currTime = currTime % 12;
    //     console.log(currTime + "pm");
    //   }
    // }
    
    // timeFormater();
    
    // let carsName = ["civic", "corola"];
    
    // console.log(carsName);
    
    // carsName.push("mitsubhi");
    // carsName.unshift("alto");
    // carsName.splice(3, 0, "vitz", "cuore", "city");
    // console.log(carsName);
    // let removeLast = carsName.pop();
    // console.log("removing last using pop", removeLast);
    // console.log(carsName);
    // let removefirst = carsName.shift();
    // console.log("removing first using shift", removefirst);
    // console.log(carsName);
    // let newCar = carsName.slice();
    // console.log("this is a copy of cars array ", newCar);
    // newCar.reverse();
    // console.log("after reverse ", newCar);
    // console.log(newCar.indexOf("civic"));
    // console.log(newCar.join(",")); // to convert array in string with add between , comma.
    // // console.log(carsName.concat("mehran"));
    // console.log(carsName);
    
    // // entries return a pair of 1 val example index no + val
    
    // let val = carsName.entries();
    // console.log(val.next().value);
    
    // for (let [elem, index] of carsName.entries()) {
      //   console.log(elem, index);
      // }
      
      // for (let elem of val) {
        //   console.log(elem);
        // }
        
        // // copywithin first val is for index second for startcopy and third for end. its not decrease it length ..
        // console.log(carsName.copyWithin(0, 4));
        
        // console.log(carsName.at(-3)); // return the value by its index.  - mean at last index of value is -1..
        
        // let numbers = [1, 2, 3, 4, 5, 6, 10, 29, 39];
        
        // console.log(Math.max(...numbers));
        // console.log(Math.min(...numbers));
        
        // let ar = numbers.map((n) => n * 10);
        // console.log(ar);
        
        // function checkEveryVal(value) {
          //   return  value <= 39
          
// }

// alert(numbers.every(checkEveryVal)); // check every value greater or less then return true or false by callback function..

// console.log(numbers.fill(30, 7)); // add any number or value many time.
// console.log(numbers);
// console.log(numbers.sort());

// function forFilter(val) {
  //   return val - 30;
  // }
  // console.log(numbers.filter(forFilter)); // work on call back function;
  
  // let obj = { name: "akasha", age: 23 };
  // Object.keys(obj).forEach((val) => console.log(val));
  // Object.entries(obj).forEach((val) => console.log(val));
  // Object.entries(obj).forEach(([key, value]) => {
    //   console.log(key + ' ' + value);
    // });
    // console.log(numbers.includes(30));
    
    // let array_ = [20,10,2, [2,[2,[3]]],[10,[10,[20]]] , [20] ];
    
    // // console.log(array_.flat(1));
    // console.log(array_.flat(Infinity));
    
    // let tabInput = +prompt("enter a number for table");
    // let tableLength = +prompt("enter length of table");
    
    // for (let i = 1 ; i <= tableLength ; i++){
      //  table = tabInput * i ;
//   console.log(table);
// }

// let str = "karachi";

// console.log(str.split(" "));
// console.log(str.charAt(4));

// let stri = "hyderabad";

// console.log(stri.replace("hyder", "islam"));

// let word = "html css and javascript";

//  /\w\S*/g , /\b\w+\b/g formula for titleCase.
// substr() function return all the character by giving its index mean if 0 index add . its show all the characters. ;

// function toTitleCase(sentence) {
  //   return sentence.replace(/\b\w+\b/g, function(text) {
    //     return text.charAt(0).toUpperCase() + text.substr(1).toLowerCase();
    //   });
    // }
    
    // console.log(toTitleCase(word));
    
    // let spec =  ["@","!",".", ","]
    // console.log(spec)
    // let input = prompt ("enter password")
    
    
    // while (true) {
//   let found = false
//   for (let i = 0 ; i < input.length ; i++){
  //     if (spec.includes(input[i])){
//       alert("correct");
//       found = true;

//       break;
//     }
//   }if (!found){
//     input =  prompt ("enter password");
//   }
//   else{
//     break;
//   }
// }

// let n = 99.99;

// console.log(n.toString().replace(".",""));

// let arrayBak = ["cake", "apple pie", "cookie", "chips", "patties" ,"cake rusk" , "cold drink"];
// let flag = false
// let order = prompt("order please");
// for(let i = 0 ; i < arrayBak.length ; i++){
// if (order.toLowerCase().includes(arrayBak[i])){
// alert(order + " yes availabe at index " + i);
// flag = true;
// break;
// }
// }if (!flag){
//   alert( " not available " );
// }

// let uni = "university of karachi";

// uni = toTitleCase(uni);

// uni.split(" ").forEach((word) => {
//   for (let i = 0; i < word.length; i++) {
//     console.log(word[i]);
//   }
// });
// let pak = "pakistan";

// console.log("last char is ", pak.substr(-1));

// var message =
//   "Ali and Sami are best friends. They play cricket and football together";

// console.log(message.replaceAll("and", "&"));
// var modifiedMessage = "";

// for (let i = 0; i < message.length; i++) {
//   if (message.slice(i, i + 3) === "and") {
//     modifiedMessage += "&";
//     i += 3;
//   }
//   modifiedMessage += message[i];
// }
// console.log(modifiedMessage);

// let fruit = ["mango", "apple", "peach", "grapes", "pineApple"];

// for (let i = 0; i < fruit.length; i++) {
//   console.log(i, fruit[i]);
// }

// let checkAvailOffruit = prompt("enter a fruit name");

// console.log(fruit);

// function checkAvail(check) {
//   checkAvailOffruit = checkAvailOffruit.toLowerCase();
//   if (check.includes(checkAvailOffruit)) {
//     console.log("yes", checkAvailOffruit, "available ");
//   } else {
//     console.log("not available ", checkAvailOffruit);
//   }
// }
// checkAvail(fruit);

// let degree = ["matric" , "intermediate"];
// let learningLanguages = ["HTML", "CSS", "JAVASCRIPT"];
// let edu = prompt ("Enter Your Education matric or inter must be required")
// let inp = prompt("Enter which language you have been learn");
// let ok = true;
// let deg = false;

// inp = inp.toUpperCase();
// edu = edu.toLowerCase();

// if (edu === "matric" || edu === "intermediate"){
//   console.log("Your Degree is " + edu );
//   deg = true;
//   for (let i = 0 ; i < learningLanguages.length ; i++){
//     allLanguage = learningLanguages[i].toUpperCase();
//     if (!inp.includes(allLanguage)){
//       console.log("not selected required lang are html css and javascript");
//       ok = false;
//       break;
//     }
//   }
// }
// if (ok && deg) {
//   console.log("selected");
// }else{
//   console.log("invalid values or not enter the required language or degree")
// }

// let specialChar = /[!"#$%&'()*+,-/:;<=>?@[\]^_`{|}~]/;
// let password;
// let lowerRegex = /[a-z]/;
// let upperRegex = /[A-Z]/;
// let numRegex = /[0-9]/;

// while (true) {
//   password = prompt("Enter your password");
// if (password === null){
//   alert("you click on cancel please enter password")
//   continue;
// } if (password.length < 6 || password.length > 15) {
//     alert("Password Length Must in Between 6 to 15");
//   } else if (password.indexOf(" ") !== -1 || password.indexOf(".") !== -1) {
//     alert("Password Cannot Contain Spaces And Dots");
//   } else if (!password.match(specialChar)) {
//     alert("Password Must Have Atleast One Special Character");
//   } else if (!lowerRegex.test(password)) {
//     alert("Your Password Must Have One Lowercase Character");
//   } else if (!upperRegex.test(password)) {
//     alert("Your Password Must Have One Uppercase Character");
//   } else if (!numRegex.test(password)) {
//     alert("Your Password Must Have One Digit");
//   } else if (password.charAt(0) >= 0 || password.charAt(0) <= 9) {
//     alert("Your Pasword Cannot Start With Number");
//   } else {
//    let confirmPass = prompt("Confirm Password");
//    if (password !== confirmPass){
//      alert("Password Not Match")
//    }
//    else{
//      alert("Sign in")
//      break;
//    }
//   }
// }

// let sen = "the quick brown fox jumps over the lazy dog";
// sen = sen.split(" ");
// let count = 0;
// for (let i = 0; i < sen.length; i++) {
//   if (sen[i] === "the") {
//     count++;
//   }
// }
// console.log(count);

// let number = -2.474;

// console.log(Math.round(number));
// console.log(Math.ceil(number));
// console.log(Math.floor(number));
// console.log(Math.abs(number));

// let dice = Math.round(Math.random() * 6 + 1);
// console.log(dice);

// let coin = Math.floor(Math.random() * 10 + 1);
// if (coin <= 5) {
//   console.log("head");
// } else {
//   console.log("tail");
// }

// let date = new Date();
// console.log(date);
// console.log("time", date.getTime()); // current time in mili second since 1 jan
// console.log("hour", date.getHours());
// console.log("minute", date.getMinutes());
// console.log("second", date.getSeconds());
// console.log("miliseconds", date.getMilliseconds());
// console.log("date", date.getDate());
// console.log("month", date.getMonth() + 1);
// console.log("year", date.getFullYear());

// let firNum = prompt("Enter Val 1");
// let secNum = prompt("Enter Val 1");
// let ope = prompt("Enter operator");

// function convert(firNum, secNum) {
//   firNum = Number(firNum);
//   secNum = Number(secNum);
// }

// function add() {
//   return firNum + secNum;
// }
// function sub() {
//   return firNum - secNum;
// }

// function multi() {
//   return firNum * secNum;
// }

// function divide() {
//   return firNum / secNum;
// }

// function calcu() {
//   convert();
//   if (isNaN(firNum) || isNaN(secNum)) {
//     console.log("invalid num");
//   }
//   if (ope !== "+" && ope !== "-" && ope !== "*" && ope !== "/") {
//     console.log("Please enter a valid operator");
//   }
//   if (ope === "+") {
//     convert(firNum,secNum);
//     return add();
//   }
//   if (ope === "-") {
//     return sub();
//   }
//   if (ope === "*") {
//     return multi();
//   }
//   if (ope === "/") {
//     return divide();
//   }
// }
// console.log(calcu(firNum, secNum));

// let squ = +prompt("Enter a number for Square ");

// function forSquareArg(num) {
//   if (isNaN(num)) {
//     return console.log("invalid");
//   } else {
//     return num * num;
//   }
// }
// console.log(forSquareArg(squ));

// function factorial (num){
//   if (num <= 1){
//     return 1;
//   }else{
//     return num * factorial (num - 1)
//   }
// }
// console.log(factorial(squ));

// let start = +prompt("enter num 1");
// let end = +prompt("enter num 2");

// function counting(num1, num2) {
//   if (num1 > num2) {
//     for (let i = num1; i >= num2; i--) {
//       console.log(i);
//     }
//   } else {
//     for (let i = num1; i <= num2; i++) {
//       console.log(i);
//     }
//   }
// }
// counting(start, end);

// function calcuHypo (base,perpendicular){
//   convert(base)
//   convert(perpendicular);
//   baseSqu = base * base;
//   perpendicularsqu = perpendicular * perpendicular;
//   addingBoth = baseSqu + perpendicularsqu;
// hypotenuse = Math.sqrt(addingBoth);
// return hypotenuse;
// }

// let base = prompt("enter base");
// let perpendicular = prompt("enter perpendicular");

// console.log(calcuHypo(base,perpendicular));

// let words = "the quick brown fox";

// function capitilize(word) {
//   return word.replace(/\w\S*/g, function(word) {
//     return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
//   });
// }
// console.log(capitilize(words));

let checkLong = "web development in pakistan";

function longWord(word) {
  sen = word.split(" ");
  let wordLong = "";
  for (let i = 0; i < sen.length; i++) {
    if (sen[i].length >= wordLong.length) {
      wordLong = sen[i];
    }
  }
  console.log(wordLong);
}
longWord(checkLong);



// function checkLongestStr(findLongest) {
//   let words = findLongest.split(" ");

//   let longestWords = [];
//   let longestLength = 0;

//   words.forEach(function(word) {
//     let wordLength = word.length;

//     if (wordLength > longestLength) {
//       longestLength = wordLength;
//       longestWords = [word];
//     } else if (wordLength === longestLength) {
//       longestWords.push(word);

//     }
//   });

//   return longestWords.join("");
// }

// let occ = "the spider is climbing to the wall";
// function findOccurence (Occurence) {
// Occurence = Occurence.split(" ")
// let c = 0;
// for (let i = 0 ; i < Occurence.length ; i++){
//   if (Occurence[i] === "the"){
//     c++;
//   }
// }
// console.log(" Occurence of word the is ",c);
// }
// findOccurence(occ);

// let radius = 25;

// function calcCircumference (radius) {
// let calcCir = 2 * Math.PI * radius;
// return calcCir.toFixed(2);
// }

// console.log("circumference",calcCircumference(radius));

// function calcArea (radius) {
//   let calcArea = Math.PI * (radius * radius);
//   return calcArea.toFixed(2);
//   }

//   console.log("Area",calcArea(radius));

// let year = prompt ("enter an year");

// function isLeapYear (year){
//  if  (year % 4!== 0 && year % 400 !== 0){
//    return false;
//  }
//  if (year % 100 === 0 ){
//    return false
//  }
//  return true
// }

// if (isLeapYear(year) === true){
//  console.log("is leap year ")
//  }else {
//  console.log("not a leap year");
//  }

//  let currMonth = prompt("Enter a Month By Number example January is 1")

//  let months = "january feburary march april may june july augest september october november december";

//  let seperate = months.split(" ");

//  function checkMonth (month) {
// if (month >= 1 && month <= 12){
//   console.log(" month is ", seperate[month - 1]);}
// else{
//   console.log("you entered not a month");
// }
// }
// checkMonth(currMonth);

// let age = prompt("enter your age");

// function adultCheck (){
//   if (age >= 18 && age <= 35){
//     console.log( "you are eligible for selection");
//   }else{
//     console.log("not eligible")
//   }
// }
// adultCheck(age);

// let time = prompt("enter time in 24 hour format like 1230 and 740");

// function timeGreet() {
//   if (time >= 500 && time <= 1159) {
//     alert("good morning");
//   } else if (time >= 1200 && time <= 1659) {
//     alert("good afternoon");
//   } else if (time >= 1700 && time <= 2059) {
//     alert("good evening");
//   } else if ((time >= 2100 && time <= 2359) || (time >= 0 && time <= 459)) {
//     alert("good night");
//   } else {
//     alert("invalid input");
//   }
// }
// timeGreet(time);

// let salary = Number(prompt("enter your monthly salary"));

// function taxCalcu(income) {
//   let tax;
//   if (income <= 10000) {
//     alert(" you have 0 % tax ");
//   } else if (income >= 10001 && income <= 40000) {
//     tax =income / 10
//      alert("you have to pay the " + tax.toFixed(2) + " tax");
//   } else if (income >= 40001 && income <= 80000) {
//     tax = income / 20;
//      alert("you have to pay the " + tax.toFixed(2) + " tax");
//   } else if (income > 80000) {
//     tax = income / 30;
//      alert("you have to pay the " + tax.toFixed(2) + " tax");
//   }else{
//      alert("invalid number");
//   }
// }
// taxCalcu(salary);

// let num = 12.33441;

// // num = Math.floor(num)

// console.log(Math.floor(num)); // its only remove after . all integers

// console.log(num.toFixed(5));
// console.log(Math.round(num)); // if value after . is greater of = to 5 value + 1.

// let num2 = 10;

// console.log(Math.pow(num2, 2));

// definition = "chemistry is a branch of science";

// definition = definition.replace("chemistry", "bio");

// console.log(definition);

// definition = definition.replaceAll("e", "o");

// console.log(definition);

// console.log(definition.charAt(1));

// console.log(Math.ceil(num));

// num = Math.round(Math.random(num) * 10 + 1);

// console.log(num);

// num2 = num2.toString(num2);

// // citiesToCheck = prompt("enter city name");

// // var toBreak = false;

// // var cleanestCities = "islamabad , quetta , multan , peshawar , kashmir";
// // for (let i = 0; i <= 4; i++) {
// //   if (
// //     citiesToCheck.toLowerCase() === cleanestCities[i] ||
// //     cleanestCities[i] === citiesToCheck.toUpperCase()
// //   ) {
// //     alert("Its One Of The Cleanest Cities");
// //     toBreak = true;
// //     break;
// //   }
// // }
// // if (!toBreak) {
// //   alert("its not in the list" + citiesToCheck);
// // }

// // cleanestCities_2 = cleanestCities.split(",");

// // console.log(cleanestCities_2)

// // let string = prompt("enter anything");

// // let flag = false

// // for (let i = 0 ; i <= string.length ; i++){
// //     if (string.slice(i , i + 2) === "  "){
// //         alert("no double space");
// //         flag = true
// //         break;

// //     }
// // }

// // if (!flag){
// //     alert("Correct")
// // }


let formInput = document.getElementById("formInput");
let outputtable = document.getElementById("outputtable");

formInput.addEventListener("submit",function(event){
event.preventDefault(); // Prevent default form submission behavior

let tableInput = parseInt(document.getElementById("tableInput").value);
let tableLength = parseInt(document.getElementById("tableLength").value)

tableHtml = "<h1> Table </h1> <ol>"
for (let i = 1 ; i <= tableLength ; i++){
  table = tableInput * i ;
  if (i <= 9){
    i = "0" + i;
  }else{
    i = i
  }
  if (table <= 9){
    table = "0" + table;
  }else{
    table = table
  }
  tableHtml += "<li>" + tableInput +  "&nbsp;"  + " * " + "&nbsp;"+ i + " = " +  "&nbsp;" + table + "</li>" ;
}
tableHtml += "</ol>"

outputtable.innerHTML = tableHtml
});

let form2 = document.getElementById("form2");
let outputofcelcius = document.getElementById("outputofcelcius");

form2.addEventListener("submit",function (event) {
event.preventDefault()

let celcius = parseInt(document.getElementById("celcius").value);
let fehreheit= parseInt(document.getElementById("fehreheit").value);

let pr = "<h2> After Calculate Celcius And Fehreheit </h2>"
celcius = ((fehreheit - 32) * 5) / 9;
 let one = (celcius + "\xB0C");
  fehraheit = (celcius * 9) / 5 + 32;
  let two = (fehreheit + "\xB0F");
  


outputofcelcius.innerHTML = pr + "<h2> Celcius Is " + one + "</h2>" + "<h2> Fehreheit is " + two + "</h2>"

});

let calculatePercent = document.getElementById("percentCalcu");
let percentage = document.getElementById("percentage");

calculatePercent.addEventListener("submit" , function(event){
  event.preventDefault();
  
  let getOb1 =  document.getElementById("SubjectOne").value;
  let getOb2 = document.getElementById("SubjectTwo").value;
  let getOb3 = document.getElementById("SubjectThree").value;
  
if (getOb1.toString().length > 2 || getOb2.toString().length > 2 || getOb3.toString().length > 2){
  alert("please enter only 2 or three number beacause total marks is 100 for each subject")
}else{
  let adding = parseInt(getOb1) + parseInt(getOb2) + parseInt(getOb3);
  
  let percent = (adding / 300) * 100;

  if (percent.toString().length > 2){
    percent = percent.toFixed(2);
  }else{
    percent = percent
  }
  percentage.innerHTML = "<h2> subject 1 obtained : " + getOb1 + " , subject 2 obtained : " + getOb2 + 
  " and subject 3 obtained : " + getOb3 + "<br>" + " After Calculation Percentage of All Subject Is " + percent;
} 
});


