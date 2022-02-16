// ECMscript: ES6
// javascript: ECMscript + web api
// nodejs: ECMscript + node api

// // Primitive Data
// // sting number boolean undefined null symbol

// var a = 1;
// var b = a;

// coercion
// == vs. ===

// console.log(true + false);
// console.log(1 - 'test12');

// console.log(1 == '1'); // change the type, check it;
// console.log(1 === '1'); // check it;

// // Object Data
// var obj = {name: 'Jojo'};
// function foo(val) {
//     val.name = 'Dio'
// }
// foo(obj);
// console.log(obj);

// var vs. let vs. const

//       hoisting     scope        reassign
// var      yes init  function     yes
// let      yes       block        yes
// const     yes      block        no
// function  yes

// foo();

// const foo = () => {
//     console.log("hello");
// };

// const arr = [1, 2, 3];
// arr.push(4);

// console.log(arr);

// oop: Object oriented programming; class

// encapsulation
// class Person {
//     #name;
//     #age;

//     get name() {
//         return this.#name;
//     }
//     set name(newName) {
//         this.#name = newName;
//     }

//     constructor(name, age) {
//         this.#name = name;
//         this.#age = age;
//     }

//     walk() {
//         console.log(this.#name + ' is ' + this.#age + ' years old');
//         console.log(this.#name, 'is', this.#age, 'years old');
//         console.log(`${this.#name} is ${this.#age} years old`);
//     }

//     static walk() {
//         console.log(`David is 3 years old`);
//     }
// }
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }
// Person.walk();

// // inheritance
// class Employee extends Person {

//     constructor(name, age, company = 'Jump') {
//         super(name, age);
//         this.company = 'Jump';
//     }

//     walk(str) {
//         console.log(this.name + ' is walking' + str);
//     }
// }
// const e = new Employee('Dio', 20, 'Antra');
// console.log(e);
// e.walk();

// // Poly-morph-ism: Many Forms
// class Animal {
//     constructor(name) {
//         this.name = name;
//     }
//     move() {
//         console.log('move');
//     }

//     walk() {}
// }
// class Fash extends Animal {
//     constructor(name) {
//         super(name);
//     }
//     move() {
//         return console.log(this.name + ' can swim');
//     }
// }
// class Bird extends Animal {
//     constructor(name) {
//         super(name);
//     }
//     move() {
//         return console.log(this.name + ' can fly');
//     }
// }
// class Monkey extends Animal {
//     constructor(name) {
//         super(name);
//     }
//     move() {
//         return console.log(this.name + ' can run');
//     }
// }
// const fish = new Fash('fish');
// const bird = new Bird('bird');
// const monkey = new Monkey('monkey');
// fish.move();
// bird.move();
// monkey.move();

// Abstraction: TS

// // loop

// console.log(arr[0]);

// const arr1 = new Array(3);

// for (let i = 0; i < Object.keys(obj).length; i++) {
//     console.log(typeof i);
//     if ()
// }

// const obj = {name: 'Jojo', age: 18}

// for (let [key, val] in obj) {
//     console.log(key, val);
// }

// for (let ele of arr) {
//     console.log('with of key word: ', ele);
// }

// console.log(arr);

// Array.prototype.myForEach = function (callback) {
//     for (let i = 0; i < this.length; i++) {
//         callback(this[i], i, this);
//     }
// };

// arr.myForEach(function (val, i, array) {
//     array[i] = val + 1;
// });

// Array.prototype.myMap = function (callback) {
//     const arr = [];
//     for (let i =0; i< this.length; i++) {
//         arr.push(callback(this[i], i, this));
//     }
//     return arr;
// }

// const arr = [1, 2, 3];
// arr.map(function (val, i, array) {
//     val + 1;
// });

// Array.prototype.myFilter = function(callback) {
//     const arr = [];
//     for (let i = 0; i < this.length; i++) {
//         if (callback(this[i], i, this)){
//             arr.push(this[i]);
//         };
//     }
//     return arr;
// }

// console.log(
//     arr.myFilter(function (val, i, array) {
//         return val < 2;
//     })
// );
// console.log(arr);

// // rebuild myReduce ----> 2 args or 1 args
// Array.prototype.myReduce = function(...args) {
//     if (!this.length) return;

//     let acc = this[0];
//     let index = 1;

//     if (args.length > 1) {
//         acc = args[1];
//         index = 0;
//     }

//     for (let i = index; i< this.length; i++) {
//         acc = callback(acc, this[i], i, this);
//     }
//     return acc;
// }

// const numbers = [175, 50, 25];
// console.log('res: ', numbers.reduce(myFunc, 0));

// function myFunc(total, num) {
//     return total - num;
// }

// const str = 'abc';
// // // ['a', 'b', 'c']
// console.log(str.split('').myReduce(
//     function(acc, cur) {
//         return acc + cur + cur;
//     },
//     ''
// ));

// '' + a + a = aa + b + b = aabb + c + c = 'aabbcc'

// 'aabbcc';

// const arr = [2, 2, 3, 4].reduce(
//   function ([2, 4], cur) {
//     const newitem = [2, 4].length !== 0
//       ? [2, 4][[2, 4].length - 1] + 3
//       : cur;
//     return [...[2, 4], 7]; // [2, 4, 7, 11]
//   },
//   []
// );

// // console.log(arr); // [2, 4, 7, 11];

// const foo = arr => arr.myReduce( (acc, cur) => {
//     // acc[cur.name] = cur.age;
//     // return acc;
//     return {...acc, [cur.name]: cur.age};
// }, {});

// const arr = [
//     { name: "sam", age: 18 },
//     { name: "jane", age: 10 },
//     { name: "john", age: 20 },
// ];
// console.log(foo(arr)); // output new obj:
// { sam: 18, jane: 10, john: 20 }

// // // {sam: 18}

// spread operator vs. rest parameter

// function foo(num, ...a) {
//     console.log(a);
// }

// foo(1, 2, 3);

// let arr = [1, 2, 3];
// // arr.push()
// arr = [...arr, 0];

// console.log(arr);

// immutable data; mutable data

// // ~~~~~~interview question~~~~~~~~~~~~
// const first = [
//     { userid: 2, name: 'Velen' },
//     { userid: 56, name: 'Illidan' },
//     { userid: 23, name: 'Muradin' },
//     { userid: 12, name: 'Sylvanas' },
//     { userid: 44, name: 'Cenarius' },
//     { userid: 4, name: 'Gul\'Dan' }
// ];
// const second = [
//     { userid: 2, role: 'Mage' },
//     { userid: 4, role: 'Worlock' },
//     { userid: 56, role: 'Demon Hunter' },
//     { userid: 66, role: 'Druid' },
//     { userid: 87, role: 'Shaman' },
//     { userid: 12, role: 'Hunter' },
// ];
// const third = [
//     { userid: 2 },
//     { userid: 4 },
//     { userid: 56 },
//     { userid: 66 },
//     { userid: 87 },
//     { userid: 12 },
// ];

// function solution(fir, sec, thd) {
//     const arr = [...sec, ...fir];
//     const map = {}
//     arr.forEach(ele => {
//         map[ele.userid] = {
//             userid: ele.userid
//         }
//     });
//     return Object.values(map);
// }

// { userid: 2, name: 'Velen'},
// {  userid: 87, name: Null}
// [
//     {},
//     {}
//     ...
// ]

// {
//     2: { userid: 2, name: 'Velen'},
//     56: { userid: 56, name: 'Illidan', role: 'Demon Hunter' },
//     ...
// }
// console.log(solution(first, second));

// [
//     { userid: 2, name: 'Velen', role: 'Mage' },
//     { userid: 56, name: 'Illidan', role: 'Demon Hunter' },
//     { userid: 23, name: 'Muradin', role: null },
//     { userid: 12, name: 'Sylvanas', role: 'Hunter' },
//     { userid: 44, name: 'Cenarius', role: null },
//     { userid: 4, name: 'Gul\'Dan', role: 'Worlock' },
//     { userid: 66, name: null, role: 'Druid' },
//     { userid: 87, name: null, role: 'Shaman' },
// ]

// // destructure;

// let [a, b] = [0, 1];
// console.log(a, b);

// let obj = { name: 'Jojo', age: 18, company: 'Jump' };
// console.log(obj.age, obj.name, company);

// const {links} = {
//     id: 1,
//     name: 'David Dong',
//     links: [
//         { name: 'wechat',       link: 'wechat.com'      },
//         { name: 'apple',        link: 'apple.com'       },
//         { name: 'cnn',          link: 'cnn.com'         },
//         { name: 'fox',          link: 'fox.com'         },
//         { name: 'hbo',          link: 'hbo.com'         },
//     ]
// };

// console.log(links.find(({name}) => name === 'cnn').link);

// // object copy; shallow copy and deep copy;

// const obj = {
//     name: 'Jojo',
//     age: 18,
//     links: [1, 2, 3],
//     // date: new Date(), // new Data(obj.date)
//     // foo: function() {
//     //     console.log('this is foo')
//     // }
// };
// const obj1 = obj;
// const obj2 = {...obj};

// console.log(obj1.links === obj2.links);

// console.log(obj.links[0]);
// obj2.links[0] = 321;
// console.log(obj.links[0]);

// console.log(obj, JSON.stringify(obj));

// const obj3 = JSON.parse(JSON.stringify(obj));

// console.log(obj3);

// console.log(obj, obj3);
// console.log(obj.links[0]);
// obj3.links[0] = 321;
// console.log(obj.links[0]);

// Lodash | _.cloneDeep() Method

// // closure

// // curring

// function foo(a) {
// // ~~~~~~~~~~~~~~~~~~~
//     function print() {}

//     let pi = 3.14;

// // ~~~~~~~~~~~~~~~~~~~
//     return function(b) {
//         return a + b
//     }
// }

// console.log( foo(4)(5)(6) ); // 15

// const obj = (function () {
//     // let pi = 3.14;
//     // function print(data) {
//     //     console.log(data);
//     // }
//     // function sum(...args) {
//     //     return args.reduce((acc, cur) => acc + cur);
//     // }
//     return {
//         print: function (data) {
//             console.log(data);
//         },
//         pi,
//         sum
//     };
// // }());
// })();

// obj.print(obj.sum(1, 2, 1, 51, 123, 3));

// bar.print(bar.pi);

// function foo(num) {
//     console.log(num);
// }
// foo(4); // <--------

// // iife

// ~~~~~~~~~~~~~~~~ interview question ~~~~~~~~~~~~~~~~~~~~

// const target = (a, b) => console.log(a + b);
// const target0 = (a, b, c, d) => console.log(a + b * c - d);

// let fn = limitedFunction(2, target);

// fn(6, 2); // 8
// fn(2, 6); // 8
// fn(6, 3); // 9
// fn(9, 4); // 13
// fn(5, 1); // over limited!
// fn(2, 9); // over limited!

// const fn0 = limitedFunction(3, target0);

// fn0(1, 2, 3, 4)
// fn0(1, 2, 3, 4)
// fn0(1, 2, 3, 4)
// fn0(1, 2, 3, 4)
// fn0(1, 2, 3, 4)

// function limitedFunction (num, callback) {

//     let counter = num;

//     return function(...args) { // rest parameter

//         if (counter > 0) {
//             counter--;
//             callback(...args); // spread operator
//         } else {
//             console.log('over limited!')
//         }
//     }
// }

// ~~~~~~~~~~~~~~~~ interview question ~~~~~~~~~~~~~~~~~~~~

// const callback1 = (a) => a + 2; // 7
// const callback2 = (b) => b * 2; // 14
// const callback3 = (c) => c - 2; // 12

// console.log( runAll(5)(callback1, callback2, callback3) ); // 12

// function runAll(num) {
//     return function(...args) {
//         let callbacks = [...args];
//         let res = num;
//         // return callbacks.reduce((acc, cur) => cur(acc), num);
//         for (let ele of callbacks) {
//             res = ele(res);
//         }
//         return res;
//     }
// }

// this in js;

// (function foo() {
//     console.log(window);
// })();

// const obj = {
//     name: 'Dio',
//     age: 200,

//     constuctor() {
//         console.log('foo: ', this); // this ====> obj

//         function baz() {
//             console.log('baz: ', this);
//         }
//         resolve();

//         // const bar = () => {
//         //     console.log('baz: ', this); // this ====> obj
//         // }
//         bar();
//     },

//     person: {
//         name: 'Jojo',
//         age: 18,

//         bar() {
//             console.log(this);
//         }
//     }
// };

// obj.foo();

// function foo() {
//     console.log('foo: ', this);

//     function baz() {
//         console.log('baz: ', this);
//     }

//     baz();
// }
// foo();

// class Person {
//     name = 'Jojo';
//     age = 18;

//     bar() {
//         console.log(this.name);
//     }
// }
// const p = new Person();

// p.bar();

// // call, apply, bind

// const obj = {
//     pi: 3.14159265,
//     getPi() {
//         return this.pi;
//     }
// }
// // console.log(obj.getPi());
// function getArea(num1, num2) { // 100
//     console.log(this.getPi(), num1, num2)
// }

// const test = {
//     getPi() {
//         console.log('from test');
//     }
// }

// // const newgetArea = getArea.bind(obj);
// const newget1 = getArea.bind(test);
// // newgetArea(20, 21);
// newget1(20, 21);

// getArea.call(obj, 20, 21); // obj + args.length
// getArea.apply(obj, [20, 21]); // obj + [args.length]

// arrow function;
// (function foo() {
//     console.log(arguments);
// })();
// const bar = () => {
//     console.log(arguments);
// };
// bar();

// // event loop

// for (var i = 0; i < 5; i++) {
//     setTimeout(
//         () => console.log(i),
//         (5 - i) * 1000
//     );
// }

// call stack: [    ]

// async api, web api:
/**
 * () => console.log(0), 5
 * () => console.log(1), 4
 * () => console.log(2), 3
 * () => console.log(3), 2
 * () => console.log(4), 1
 */

// task queue:
/** [
 * () => console.log(4),
 * () => console.log(3),
 * () => console.log(2),
 * () => console.log(1),
 * () => console.log(0),
 * ]
 */

// // callback function; callback hell
// const foo = () => console.log('foo');

// const randomNumber = () => Math.floor((Math.random() * 6));

// const callFnInRandomTime = (callback, callback) => {
//     const timer = randomNumber();
//     console.log(`${timer}s`);

//     setTimeout(callback, timer * 1000);
// }

// callFnInRandomTime(() => {
//     callFnInRandomTime(() => {
//         callFnInRandomTime(() => {
//             callFnInRandomTime(() => {
//                 callFnInRandomTime(() => {
//                     callFnInRandomTime(() => {
//                         callFnInRandomTime(() => {
//                             callFnInRandomTime(foo);
//                         });
//                     });
//                 });
//             });
//         });
//     });
// });

// // XHR

// const getTodo = (id) => {
//     const baseUrl = "https://jsonplaceholder.typicode.com/todos/";

//     return new Promise((resolve, reject) => {
//         const xhttp = new XMLHttpRequest();
//         xhttp.onreadystatechange = function () {
//             if (this.readyState == 4 && this.status == 200) {
//                 // Typical action to be performed when the document is ready:
//                 resolve(JSON.parse(xhttp.response));
//             }
//         };
//         xhttp.open("GET", baseUrl + id);
//         xhttp.send();
//     });
// };
// const print = (data) => console.log(data);

// getTodo((data) => {
//     print(data);
//     getTodo((data) => {
//         print(data);
//         getTodo((data) => {
//             print(data);
//         }, 78);
//     }, 12);
// }, 5);

// // async, await
// (async () => {
//     try {
//         const todo5 = await getTodo(5);
//         console.log(todo5);

//         const todo12 = await getTodo(12);
//         console.log(todo12);

//         const todo78 = await getTodo(78);
//         console.log(todo78);
//     } catch (error) {
//         console.log(error);
//     }
// })();

// getTodo(5)
//     .then((data) => {
//         print(data);
//         return getTodo(12);
//     })
//     .then((data) => {
//         print(data);
//         return getTodo(78);
//     })
//     .then(console.log);

// // 5, 12, 78, 1, 123, 1, 31, 123,
// getTodo(5, print);
// getTodo(12, print);
// getTodo(78, print);

// // Promise

// console.log(1111);

// new Promise((resolve, reject) => {
//     console.log(2222);

//     resolve(3333)
// }).then((str) => {
//     console.log(str);
//     return '4444';
// }).then((name) => {
//     console.log(name);
// }).catch(err => console.log('err: ', err));

// console.log(5555);

// task queue: [3333, 4444]

// // MyPromise

class MyPromise {
    thenCallBackqueue = [];
    catchCallBackqueue = [];
    currentData = undefined;

    constructor(executor) {
        try {
            executor(this.resolve.bind(this), this.reject);
        } catch (error) {
            this.reject(error);
        }
    }

    resolve(resData) {
        try {
            setTimeout(() => {
                this.currentData = resData;
                while (this.thenCallBackqueue.length) {
                    const cb = this.thenCallBackqueue.shift();

                    if (this.currentData instanceof MyPromise) {
                        this.currentData.then((data) => {
                            this.currentData = cb(data);
                        });
                    } else {
                        this.currentData = cb(this.currentData);
                    }
                }
            }, 0); 
        } catch (error) {
            this.catch(error);
        }
    }
    reject = (rejData) => {
        setTimeout(() => {
            const cb = this.catchCallBackqueue.shift();
            cb(rejData);
        }, 0);
    };

    then(thenFn) {
        this.thenCallBackqueue.push(thenFn);
        return this;
    }
    catch(catchFn) {
        this.catchCallBackqueue.push(catchFn);
        return this;
    }
}
// // MyFetch

// console.log(1);

const randomNumber = () => Math.floor(Math.random() * 6);

new MyPromise((resolve, reject) => {
    // const timer = randomNumber();
    // console.log(timer);

    // if (timer > 2) {
    //     reject("this is from reject" + timer);
    // } else resolve("this is from resolve" + timer);
    console.log(a);
})
    // .then((data) => {
    //     console.log(data);
    //     return new Promise((res, rej) => {
    //         res(4);
    //     });
    // })
    .then((data) => {
        console.log(data);
    })
    .catch(console.log);

// console.log(5); // 12534

// task queue: [resolve(5)]；
