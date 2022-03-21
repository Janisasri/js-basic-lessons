/*eslint-disable*/
class Pizza {
   //constructor
   constructor(toppings = [], customer) {
       this.toppings = toppings;
       this.customer = customer;
   }
   //static property
    static extraToppings = ['pepperoni','cheese'];
    static sayThankyou() {
        console.log('ThankYou!!!');
    }
    //instance property
    slices = 10;

    get noOfSlices() {
        return this.slices;
    }
    set noOfSlices(value) {
      //slices = value;
        this.slices = value;
    }
   eat() {
       console.log(this.toppings);
       console.log(this.customer);
   }
   //instance method 
   getCokeOrPepsi = () => {
       console.log('Coke');
       console.log('Pepsi');
       console.log(this);
   }
   //private fields can only be modifies inside a class
   #bankBalance = 10000;

   get Balance() {
       return this.#bankBalance;

   }
   set Balance(value) {
       this.#bankBalance = value;
   }

}
const myLunch = new Pizza(['onion','mushroom','black olives'], 'jeni');
//console.log(myLunch);


console.log(myLunch.Balance);
myLunch.Balance=5000;
console.log(myLunch.Balance);
//myLunch.#bankBalance =2000;
//console.log(myLunch.Balance);