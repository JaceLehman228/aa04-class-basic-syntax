// Your code here 
class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  introduce() {
    console.log(`Hi, I'm ${this.firstName} ${this.lastName}, and I'm ${this.age} years old.`);
  }

  static introducePeople(arr) {
    if(!(Array.isArray(arr))) {
      throw new Error('introducePeople only takes an array as an argument.');
    } else {
      arr.forEach(person => {
        if(!(person instanceof Person)) {
          throw new Error("All items in array must be Person class instances.");
        } else {
          person.introduce();
        }
      });
    }
  }
}
let person1 = new Person('Jace', 
  'Lehman', 
  20);
let person2 = new Person('Jack', 
  'Driver',
  24);
Person.introducePeople([person1, person2]);
/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Person;
} catch {
  module.exports = null;
}
