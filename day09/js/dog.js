class Dog {
    constructor(name) {
        this.name = name;
    }
    
    speak() {
        console.log(`${this.name} says Woof!`);
        return this;
    }
}