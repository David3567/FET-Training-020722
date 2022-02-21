const callback1 = (a) => a + 2; // 7
 const callback2 = (b) => b * 2; // 14
 const callback3 = (c) => c - 2; // 12

 console.log( runAll(5)(callback1, callback2, callback3) ); // 12

 function runAll(num) {
     return function(call, back, func) {
         let callbacks = [call, back, func];
         let res = num;
         // return callbacks.reduce((acc, cur) => cur(acc), num);
         for (let ele of callbacks) {
                 res = ele(res); } }

 }