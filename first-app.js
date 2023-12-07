//console.log('Hello world from node js');

const product = (a,b) =>  a *b;
console.log(product(3,2));

const student = {
    name : "Anurag",
    age : 25,
    greet(){
       console.log('hi, I am ' + this.name);
    }
};

student.greet();