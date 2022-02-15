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

class MyPromise {
	constructor (exectuor) {
  	executor();
  }
  
  then (thenFn)
  {
  	return this;
  }
  
  catch(){}
}
