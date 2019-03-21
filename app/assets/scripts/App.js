function Person(fullName, favColor) {
    this.name = fullName;
    this.favoriteColour = favColor;
    this.greet = function() {
    console.log("hello, my name is " + this.name + "and my favourite colour is " + this.favoriteColor + ".")
}
}

var john = new Person("John Doe", "blue");
john.greet();

var jane = new Person("Jane Smith", "green")
jane.greet();