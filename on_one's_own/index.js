// ////////////////////////
// 10 > 20 ? console.log("true") : console.log("false")
//
// ///////////////////////////
// const userName = 'Baitik'
// console.log(`Поырвис, ${userName} snf`);  //интерполяция строк это ${}
// console.log('kjhsdc'+userName+'kjdncdn') //конкатенация строк это куча '' кавычек
//
// //////////////////////////
// function bbb(a, b) {
//     return  result = a + b;
// }
// console.log(bbb(5, 4));
//
// //////////////////////////
// (function (){
//     console.log('hello')
// })();
// let summ = (function (a, b){
//     return a + b;}
// )(15, 10);
// console.log(summ)
//
// ///////////////////////// стреллочная функция
// const summ = (a, b) => a + b;
// const resu = summ(10,20);
// console.log(resu);
//
// //////////////////////// array = массивы  []
// const numbers = [1, 2, 3, [4,5,6]];
// console.log(numbers);
// console.log(numbers[0]);
// console.log(numbers[3]);
// console.log(numbers.length);
// ////////// методы массивов
// push,splice.
// ////////////////////////
// const brands = ['audi', 'mazda', 'tayota', 'honda'];
// for (i = 0; i < brands.length; i++ ) {
//     console.log(brands[i]);
// }
// /////////////////////////
// const autobrand = ['audi', 'mazda', 'tayota', 'honda'];
// for (let item of autobrand) {
//     console.log(item);
// }
// const autoBrand = ['audi', 'mazda', 'tayota', 'honda'];
// autoBrand.forEach(function (brand,index){
//     console.log(`${brand} => ${index}`);
// })
//
// /////////////////////// obj
// const person = {
//     userName: 'Baitik',
//     age: 20,
//     isMarried: false
// }
// console.log(person);
//
// person.professional = 'js developer';
// console.log(person);
//
// delete person.isMarried;
// console.log(person);
// ////////// obj this
// const person = {
//     userName: 'Baitik',
//     age: 20,
//     isMarried: false,
//     sayHi: function (name){
//         console.log(this);
//         console.log(`hello, ${name}, My name is ${this.userName}`)
//     }
// }
//
// for (let key in person) {
//     console.log(key, ':', person[key]);
// }
//
// /////////////
// class Person {
//     constructor(userName, age, isMarried) {
//         this.userName = userName;
//         this.age =age;
//         this.isMarried = isMarried;
//     }
//     sayHi(name) {
//         console.log(`hello, ${name}! My name is ${this.userName}`);
//     }
// }
// const person1 = new Person('Mark',30,false);
// const person2 = new Person('Bob',20,true);
//
// console.log(person1);
// console.log(person2);
//
//
// //////////////////////////////////////  DOM
//
// ////   ООП
//
// ////////////////////////////////// работа с координатами
// const posX = document.getElementById('posX')
// const posY = document.getElementById('posY')
// const coordinates = document.getElementById('son')
//
// coordinates.addEventListener("mousemove", (e) => {
//     // let x = event.screenX
//     // let y = event.screenY
//     posX.innerHTML = event.screenX;
//     posY.innerHTML = event.screenY;
//
// })
//
//
//
//
//
//
//
//
//
// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// let registration = document.querySelector('.registration')
// let inputNumber = document.querySelector('.number')
// let phoneResult = document.querySelector('.phoneResult')
// // let inputGmail = document.querySelector('.gmail')
// // let inputPassword = document.querySelector('.password')
// // let btn = document.querySelector('#btn')
// // let formInputs = document.querySelectorAll(".js-input")
//
// // function validateEmail(email) {
//     // let em = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     // return em.test(String(email).toLowerCase())
// // }
//
// const regExp = /^\+996 [5|7|9] \d{2}-\d{2}-\d{2}$/
//
// registration.addEventListener('click', () => {
//     if (regExp.test(inputNumber.value)) {
//         phoneResult.innerText = 'ok!'
//         phoneResult.style.color = 'green'
//     }else {
//         phoneResult.innerText = 'not ok :('
//         phoneResult.style.color = 'red'
//     }
// })
// registration.onsubmit = function () {
//     let emailVal = inputGmail.value,
//         phoneVal = inputNumber.value,
//         emptyInputs = Array.from(formInputs).filter(input => input.value === '');
//
//     formInputs.forEach(function (input){
//         if (input.value === '') {
//             input.classList.add('error')
//         }else {
//             input.classList.remove('error')
//         }
//     })
//
//     if (emptyInputs.length !== 0) {
//         console.log("inputs not filled")
//         return false;
//     }
//
//     if (!validateEmail(emailVal)) {
//         console.log('email not valid')
//         inputGmail.classList.add('error');
//         return false
//     }else {
//         inputGmail.classList.remove('error');
//     }
// }
// /////////////////////////////////////////////////////////////
// let registration = document.querySelector('.registration')
// let inputNumber = document.querySelector('.input_number')
// let phoneResult = document.querySelector('.phoneResult')
//
// const regExp = /^\+996 [5|7|9]\d{2} \d{2}-\d{2}-\d{2}$/
//
// registration.innerText = "Click!"
//
// registration.addEventListener('click', () => {
//     if (inputNumber.value === '') {
//             inputNumber.classList.add('error')
//         }else {
//             inputNumber.classList.remove('error')
//         }
// })
//
//
// let registrationTwo = document.querySelector('.registrationTwo')
// let gmailNumber = document.querySelector('.input_gmail')
// let gmailResult = document.querySelector('.gmailResult')
//
// const regExpTwo = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9_.+-]+\.(com|ru)$/
//
// registration.addEventListener('click', () => {
//     if (regExpTwo.test(gmailNumber.value)) {
//         gmailResult.innerText = 'ok!'
//         gmailResult.style.color = 'green'
//     }else {
//         gmailResult.innerText = 'not ok :('
//         gmailResult.style.color = 'red'
//     }
//     if (gmailNumber.value === '') {
//             gmailNumber.classList.add('error')
//         }else {
//             gmailNumber.classList.remove('error')
//         }
// })
// ///////1///////////////1///////1//////////////1///////////////
// let counter = 0
// let interval = setInterval( () => {
//     if (counter < 100 ) {
//         counter+=5
//         console.log(counter)
//     }
// }, 1000)
//
// ////////2//////2//////////2///////2/////////
// const arr = [10, 20, 30, 40, 50]
// console.log(arr.map((total) => total + 5))
//
// const arr = [10, 20, 30, 40, 50]
// function res() {
//     console.log(arr.map((total) => total + 5))
// }
// res()
// /////////////3////////3////////3//////////3////////
//
// const one = document.querySelector('.one')
// const two = document.querySelector('.two')
// const three = document.querySelector('.three')
// const four = document.querySelector('.four')
// const five = document.querySelector('.five')
// const sub = document.querySelector("#sub")
//
// function on () {
//     sub.addEventListener("click",() => {
//         console.log(one.value)
//         console.log(two.value)
//         console.log(three.value)
//         console.log(four.value)
//         console.log(five.value)
//     })
// }
// on()
//
// document.addEventListener('keydown', direction) //проверка =>
// function direction (event) {                    // => keyCode
//     console.log(event.keyCode)                  //
// }
