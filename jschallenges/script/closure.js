/*eslint-disable*/

function doSomeTask() {
    const x = 100;
    const y = 20;
    console.log('x: ' + x + ' y: ' + y);

}
doSomeTask();
console.log('completed');

function outer(){
    const outerVar = 'Hey Iam the outer Var!';
    //console.log(outerVar);
    function inner(){
        const innerVar = 'Hey Iam the inner Var!';
        console.log(innerVar);
        console.log(outerVar);//closure-captuerd variable//

    }
    //console.log(innerVar);//Uncaught ReferenceError: innerVar is not defined//
    //inner(); //call to  inner() from outer()//
    return inner;
}
//outer();
//outer.inner();
const innerFunc = outer();
innerFunc();

function createGreeting(greeting='') {
    const myGreet = greeting.toUpperCase();
    return function (name) {
        return `${myGreet} ${name}`;
    }
}
const sayHello = createGreeting('hello');
const sayVanakkam = createGreeting('vanakkam');


console.log(sayHello('jeni'));
console.log(sayVanakkam('jeni'));
console.log(sayVanakkam('jeni'));

function createGame(gameName) {
    let score = 0;
    return function win() {
      score++;
      return `Your name ${gameName} score is ${score}`;
    }
  }
  const game = createGame('jeni');
  console.log(game());

  //const name = win();
  //const score = win();
  //console.log(name('jeni'));
  //console.log(score('1'));
  
  const hockeyGame = createGame('Hockey');
  const soccerGame = createGame('Soccer');
  hockeyGame();
  hockeyGame();
  hockeyGame();
  soccerGame();
console.log(hockeyGame());
console.log(soccerGame());