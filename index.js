import inquirer from "inquirer";
import chalk from "chalk";
let idNumber = Math.floor(10000 + Math.random() * 90000);
let myBalance = 0;
console.log(`${chalk.cyanBright("\t\t\t\t Welcome TO STUDENT MANAGEMENT")}`);
let askInformation = await inquirer.prompt([{
        name: "name",
        type: "input",
        message: `${chalk.rgb(255, 193, 205)("What Is Your Name")}`,
        validate: function (value) {
            if (value.trim() !== "") {
                return true;
            }
            return "please enter a non empty value.";
        }
    }, {
        name: "courses",
        type: "list",
        message: `${chalk.green("Select One Of The Course")}`,
        choices: ["Typescript", "Javascript", "Python", "NextJs"]
    }]);
const tutionFees = {
    "Typescript": 1000,
    "Javascript": 2000,
    "Python": 3000,
    "NextJs": 4000
};
console.log(`\n Tuition Fees ${tutionFees[askInformation.courses]}/-\n`);
console.log(`Your Current Balance is ${myBalance}/-\n`);
let paymentMethod = await inquirer.prompt([{
        name: "payment",
        type: "list",
        message: `${chalk.greenBright("Select One Of The Payment Method")}`,
        choices: ["EasyPaisa", "JazzCash", "Bank Transfer"]
    }, {
        name: "amount",
        type: "input",
        message: `${chalk.greenBright("Transfer Money")}`,
        validate: function (value) {
            if (value.trim() !== "") {
                return true;
            }
            return "please enter a non empty value.";
        }
    }]);
console.log(`\nYou Selected ${paymentMethod.payment} AS Payment Method\n`);
let TuitionFee = tutionFees[askInformation.courses];
let paymentAmount = parseFloat(paymentMethod.amount);
if (TuitionFee === paymentAmount) {
    console.log(`Congratulation you have enrolled in ${askInformation.courses}\n`);
    let ans = await inquirer.prompt({
        name: "viewStatus",
        type: "list",
        message: "what do you want to do next?",
        choices: ["View Status", "Exit"]
    });
    if (ans.viewStatus === "View Status") {
        console.log(`************ View Status *************`);
        console.log(` STUDENT NAME : ${askInformation.name}`);
        console.log(`STUDENT ID :${idNumber}`);
        console.log(`COURSE :${askInformation.courses}`);
        console.log(`TUITION FEES : ${TuitionFee}`);
        console.log(`BALANCE :${myBalance += paymentAmount}`);
    }
    else {
        console.log(`${chalk.red("Exiting student management system")}`);
    }
}
else {
    console.log("Invalid amount according to course");
}
