

let person1 = new Object({
    name: 'Chris',
    age: 38,
    greeting: function() {
        console.log('Hi! I\'m ' + this.name + '.');
    }
});
person1.name;
person1.greeting ();