const event = require(`events`);
const nitin1 = require("./personEvent");

const em = new event.EventEmitter();

em.on(`click`, (num1, num2, num3) =>
  console.log("Click Event just ran", num1, num2, num3)
);

em.emit(`click`, 1, 2, 3);

let nitin = new nitin1("Tobu Tabaki");

nitin.on(`name`, () => console.log(nitin.getName()));
nitin.emit(`name`);
