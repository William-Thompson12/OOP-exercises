console.log('Starting Person')
class Person {
  constructor(name, email, phone) {
      this.name = name;
      this.email = email;
      this.phone = phone;
  }
  greet(otherPerson) {
    console.log('Hello ' + otherPerson.name + ', I am ' + this.name + '!');
  }
  contactInfo() {
      console.log('Email:' + this.email + ", Cell:" + this.phone);
  }
}

let sonny = new Person('Sonny','sonny@hotmail.com','483-485-4948');
let jordan = new Person('Jordan','jordan@hotmail.com','495-586-3456');
sonny.greet(jordan);
jordan.greet(sonny);
//Hello Jordan, I am Sonny!
sonny.contactInfo();
jordan.contactInfo();
//Email:sonny@hotmail.com, Cell:483-485-4948