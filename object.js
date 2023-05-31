
let car = {
    make: 'bmw',
    model: '7451i',
    year: 2010,
    getprice: function() {
        //perform some calc
        return 5000;
    },
    printDescription: function() {
        console.log(this.make + ' ' + this.model);
    }
}

car.printDescription();
console.log(car.year);
  //or u can use
console.log(car['year']);
/*
var anothercar = {};
anothercar.whatever = 'bob';
console.log(anothercar.whatever);

var a = {
    myproperty: { b: 'hi' }
};
console.log(a.myproperty.b);
*/
var c = {
    myProperty: [
        { d: 'this' },
        { e: 'can' },
        { f: 'get' },
        { g: 'crazy' },
    ]
};
