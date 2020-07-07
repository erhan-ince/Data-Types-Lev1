var i = 1;
console.log(typeof i);
var lastName = 'Johnson';
console.log(typeof lastName);
var x = {
     firstName: 'John',
     lastName: 'Doe',
};
console.log(typeof x);
let j = '2';
console.log(typeof j);
let status = true;
console.log(typeof status);
let hello = 'hello';
console.log(typeof hello);

let helloWorld = 'hello';
console.log(typeof helloWorld);
let name = 'John';
console.log(typeof name);
let pi = 3.14;
console.log(typeof pi);
let numb = NaN;
console.log(typeof NaN);
let val = false;
console.log(typeof val);
let array = [1, 2, 3, 4];
console.log(typeof array);
let data = { name: 'John', age: 34 };
console.log(typeof data);
let date = new Date();
console.log(typeof date);
let func = function () {};
console.log(typeof func);
let car = ' myCar';
console.log(typeof car);

let zero = null;
console.log(typeof zero);
let sym = '';
console.log(typeof sym);
let addition = 3 + 2 == 5;
console.log(typeof addition);
let addi = 3 + '3';

// -----------------------Lev1_14------------------------
console.log(Boolean(100));
console.log(Boolean(3.14));
console.log(Boolean(-15));
console.log(Boolean('hello'));
console.log(Boolean('false'));
console.log(Boolean(1 + 7 + 3.14));
console.log(Boolean(0));
console.log(Boolean(-0));
console.log(Boolean(NaN));
console.log(Boolean(null));
console.log(Boolean(false));
console.log(Boolean('Nan'));

// ---------------------------Lev1_15 ----------------------
let num = 5;
let anotherNum = 8;
console.log(num == anotherNum);
console.log(num > anotherNum);
console.log(num < anotherNum);
console.log(num >= anotherNum);
console.log(num <= anotherNum);
console.log(num == '5');
console.log(num != 8);
console.log(num != '5');

// ---------------------Lev1_8_js-einführung_arithmetic-operators---------------
let xy = 20;
let y = 30;
let z = 10;
console.log(xy + y);
console.log(y - xy);
console.log(xy * y);
console.log(xy / y);
console.log((xy * y) / z);
let resultOne = (xy * y) / z;
console.log(resultOne);
let a = 15;
let b = 9;
let c = 20;
console.log(a % b);
let resultTwo = a + b * c;
console.log(resultTwo);
console.log(a++);
console.log(b--);
let resultThree = b - a;
console.log(resultThree);
console.log(resultOne % resultTwo);

// ----------------------------Lev2_1_js-vertiefung_DOM_onclick_style--------------
//classList.toggle
function navHome() {
     console.log('toggle button is working');
     document.getElementById('navHome').classList.toggle('active');
}
function navChange() {
     console.log('toggle button is working');
     document.getElementById('navHome').classList.toggle('pink');
}
