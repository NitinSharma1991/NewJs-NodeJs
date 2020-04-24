const event = require("events");

class Person extends event.EventEmitter {
  constructor(name) {
    super();
    this.name = name;
  }

  getName() {
    return this.name;
  }
}

module.exports = Person;
