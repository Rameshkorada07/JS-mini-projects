

class Person {
    constructor(name,age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log("Person name is " + this.name);
        
    }
}

class Student extends Person {

    greet() {
        console.log("Student name is " + this.name);
    }
}

const student1 = new Student("Vinnu",20);
const person1 = new Person("Vinnu");
student1.greet();
person1.greet();



