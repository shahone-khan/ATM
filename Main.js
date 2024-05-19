import inquirer from "inquirer";
let myBalance = 30000; // Dollar
let myPin = 1596;
let pinAnswer = await inquirer.prompt([
    {
        name: "SA",
        message: "enter your pin",
        type: "number"
    }
]);
// 15965   ===   1596  - false
if (pinAnswer.SA === myPin) {
    console.log("correct pin code!!!");
}
let operationAns = await inquirer.prompt([
    {
        name: "operation",
        message: "please select option",
        type: "list",
        choices: ["withdraw", "check balance"]
    }
]);
if (operationAns.operation === "withdraw") {
    let amountAns = await inquirer.prompt([
        {
            name: "amount",
            message: "enter your amount",
            type: "number",
        }
    ]);
    // =, -=, +=
    myBalance -= amountAns.amount;
    console.log("Your remaining balance is: " + myBalance);
}
else if (operationAns.operation === "check balance") {
    console.log("your balance is:" + myBalance);
}
else {
    console.log("Incorrect pin number");
}
