#!/usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(20000 + Math.random() * 8000);
let myBalance = 0;
let answer = await inquirer.prompt([
    {
        name: "student",
        type: "input",
        message: "Enter student name:",
        validate: function (value) {
            if (value.trim() !== "") {
                return true;
            }
            return "Please enter a non-empty value.";
        },
    },
    {
        name: "courses",
        type: "list",
        message: "Select the course to enrolled:",
        choices: ["Graphic Designing", "MS-Office", "Cyber Security", "Digital Marketing", "Multimedia & Animation"]
    }
]);
const tuitionFee = {
    "Graphic Designing": 10000,
    "MS-Office": 5000,
    "Cyber Security": 8000,
    "Digital Marketing": 4000,
    "Multimedia & Animation": 6000
};
console.log(`\nTution Fees: ${tuitionFee[answer.courses]}/-\n`);
console.log(`Balance: ${myBalance}\n`);
let paymentType = await inquirer.prompt([
    {
        name: "payment",
        type: "list",
        message: "Select payment method:",
        choices: ["Xpay", "Bank Transfer", "Easy Paisa"]
    },
    {
        name: "amount",
        type: "input",
        message: "Transfer Money",
        validate: function (value) {
            if (value.trim() !== "") {
                return true;
            }
            return "Please enter a non-empty value.";
        },
    }
]);
console.log(`\nYou select payment method ${paymentType.payment}\n`);
const tuitionFees = tuitionFee[answer.courses];
const paymentAmount = parseFloat(paymentType.amount);
if (tuitionFees === paymentAmount) {
    console.log(`Congratulation, you have succesfully enrolled in ${answer.courses}.\n`);
    let ans = await inquirer.prompt([
        {
            name: "select",
            type: "list",
            message: "What would you like to do next?",
            choices: ["Status Update", "Exit"]
        }
    ]);
    if (ans.select === "Status Update") {
        console.log("\n** Status **\n");
        console.log(`Student Name: ${answer.student}`);
        console.log(`Student ID: ${randomNumber}`);
        console.log(`Course: ${answer.courses}`);
        console.log(`Tuition Fee Paid: ${paymentAmount}`);
        console.log(`Balance: ${myBalance += paymentAmount}`);
    }
    else {
        console.log("\nExiting Student Management System\n");
    }
}
else {
    console.log("Invalid amount\n");
}
