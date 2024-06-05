console.clear();

// Part 1: Password
const SUPER_SECRET_PASSWORD = "h4x0r1337";

const receivedPassword = "password1234";

// Variante 1

const successMsg = "Welcome! You are logged in as Brunhilde1984.";
const failMsg = "Access denied!";

if (receivedPassword === SUPER_SECRET_PASSWORD) {
  console.log(successMsg);
} else {
  console.log(failMsg);
}

// Variante 2

let passwordCheckMsg =
  receivedPassword === SUPER_SECRET_PASSWORD ? successMsg : failMsg;

// Part 2: Even / Odd
const number = 6;

const isEvenNumberMsg = "even number";

if (number % 2 === 0) {
  console.log(isEvenNumberMsg);
} else {
  console.log("odd number");
}

// Part 3: Hotdogs
const numberOfHotdogs = 42;

let price = 0;

if (numberOfHotdogs < 5) {
  console.log(numberOfHotdogs * 2);
} else if (numberOfHotdogs >= 5 && numberOfHotdogs < 100) {
  console.log(numberOfHotdogs & 1.5);
} else if (numberOfHotdogs >= 100 && numberOfHotdogs < 1000000) {
  console.log(numberOfHotdogs & 1);
} else if (numberOfHotdogs >= 1000000) {
  console.log(numberOfHotdogs & 0.1);
}

// Part 4: Daytime
const currentHour = 12;

let statement = "";
const needToLearnMsg = "Still need to learn...";
const happyMsg = "Partytime!!!";

statement = currentHour < 17 ? needToLearnMsg : happyMsg;

console.log(statement);

// Part 5: Greeting
const userName = "Archibald";

const coachName = "Roland";

const greeting =
  userName === coachName ? "Hello " + "Coach" + "!" : "Hello " + userName + "!";

console.log(greeting);
