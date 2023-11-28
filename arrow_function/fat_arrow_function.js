function number(){
    return 10;
}
console.log(number());

let num = () => 5;
console.log(num());

let ber = () => console.log(15);

ber();

let n = (n) => 20;
console.log(n(20))

let math = (a,b) => a*b;

console.log(math(10,50));


        // right way
        
var java = {
    name: 'Java',
    library: ["React","Agular","Vue"],
    printLibrary: function(){
        var selfy = this;
        this.library.forEach(function(a){
            console.log(`${selfy.name} loves ${a}`);
        })
    }
};

java.printLibrary();

// wrong way
//
// var javascript = {
//     name: 'JavaScript',
//     libraries: ["React","Agular","Vue"],
//     printLibraries: function(){
//         this.libraries.forEach(function(a){
//             console.log(`${this.name} loves ${a}`);
//         })
//     }
// };

// arrow function's way

var javascript = {
    name: "JavaScript",
    libraries: ["React","Agular","Vue"],
    printLibraries: function(){
        this.libraries.forEach((a) => console.log(`${this.name} loves ${a}`));
    },
};

javascript.printLibraries();



function Person(name) {
        this.name = name;
    }
var sakib = new Person("Sakib");
console.log(sakib.name);