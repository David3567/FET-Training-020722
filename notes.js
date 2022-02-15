new Promise((resolve, reject) => {
  //resolve ('hello'); //resolve passes hello
  reject ('hello'); //reject passes data into the catch
}).then((str) => { //you can chain .thens
	console.log (str + ' world');
  return 'Jojo'; //passes jojo into the next .then()
}).then((name) => {
	console.log (name);
}).catch (err => console.log ('err: ', err))

//resolve will handle some data and then 'transfer' it to then

// class MyPromise {
// 	constructor (exectuor) {
//   	executor();
//   }
  
//   then (thenFn)
//   {
//   	return this;
//   }
  
//   catch(){}
// }

const getTodo = id => 
{
	const baseURL = "https://jsonplaceholder.typicode.com/todos/"; 
  
  return new Promise ((resolve, reject) => 
  {
  	const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
    	if (this.readyState == 4 && this.status == 200) {
      	resolve (JSON.parse (xhttp.response));
      }
    };
    xhttp.open("GET", baseURL + id);
    xhttp.send();
  });
};

const print = data => console.log (data);

getTodo (5)
	.then ((data) => {
  	print (data);
    return getTodo(12);
  }).then (data => {
  	print (data);
    return getTodo(78);
  }).then (data =>
  {
  	print (data);
  }).then (console.log)
