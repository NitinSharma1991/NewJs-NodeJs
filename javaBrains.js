let a = {
    name: "Nitin", age: 10, myobject: {
        name: "Kaka", age: "10"
    }
};

let b = {
    name: "Nitin", age: 10, myobject: {
        name: "Kaka", age: "10"
    }
};

delete b.age;
console.log(b);

let arr = [10, 8910, 45];
newArray = arr.slice(1, 2);
console.log(arr.push(1) + " " + arr);

arr.forEach((i) => { console.log("Array for Each " + i) });

let lo = (a) => {
    a = 11;
    return a;
};


console.log(lo(17))

let myobj = { name: "Nitin" };
myobj.age = () => { return 10 };

console.log("myobj " + myobj.age());

let person = {
    name: "Nitin",
    lastname: "Sharma",
    getFullName: () => { return person.name + " " + person.lastname; },
    "address": {
        street: "123 shakti khand 2",
        city: "ghaziabad",
        state: "UP"
    },
    isfromState: (state) => { return person.address.state === state; }

};

console.log(person.getFullName());
console.log(person.isfromState("UC"));

// scopes
var number = 10;
outer();

function outer() {
    var b = number;
    console.log(b);
    function inner() {
        var b = 20;
        var c = b;
        console.log(c);
    }
    inner();
}



// date
function setTimeZoneInCookie() {
    var _myDate = new Date();
    var _offset = _myDate.getTimezoneOffset();
    // document.cookie = "TIMEZONE_COOKIE=" + _offset; //Cookie name with value

    return _offset;
}

console.log(setTimeZoneInCookie());

//closures
var i;
for (i = 0; i < 10; i++)
    setTimeout(print, 1000, i);
function print(i) {

    console.log(i);
}


function obj(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

const obj1 = new obj("Nitin", "Sharma");

console.log(obj1);
