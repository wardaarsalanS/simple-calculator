#!/usr/bin/env node
import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "enter your first number", type: "number", name: "firstNumber" },
  { message: "enter your second number", type: "number", name: "secondNumber" },
  {message: "select one of the operators to perform operation",
    type: "list",
    name: "operators",
    choices: [
      "addition",
      "substraction",
      "multiplication",
      "division",
      "modulus",
      "exponent",
    ],
  },
]);

if (answer.operators === "addition") {
  console.log(answer.firstNumber + answer.secondNumber);
} else if (answer.operators === "substraction") {
  console.log(answer.firstNumber - answer.secondNumber);
} else if (answer.operators === "multiplication") {
  console.log(answer.firstNumber * answer.secondNumber);
} else if (answer.operators === "division") {
  console.log(answer.firstNumber / answer.secondNumber);
} else if (answer.operators === "modulus") {
  console.log(answer.firstNumber % answer.secondNumber);
} else if (answer.operators === "exponent") {
  console.log(answer.firstNumber ** answer.secondNumber);
} else {
  console.log("please select valid operator");
}
