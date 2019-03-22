function Person(fullName, favColor) {
    this.name = fullName;
    this.favoriteColour = favColor;
    this.greet = function() {
        console.log("Hello, my name is " + " and my favorite color is " + this.favoriteColor + ".";
        ;
        )
    }
}

module.exports = Person;