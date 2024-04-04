import inquirer from "inquirer";
let myBalance = 10000;
let myPin = 6789;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "Enter your pin"
    }
]);
if (pinAnswer.pin === myPin) {
    console.log("correct pin code");
    let optionAnswer = await inquirer.prompt([
        {
            name: "option",
            message: "Select an option",
            type: "list",
            choices: ["Withdraw", "check balance", "fast Cash"]
        }
    ]);
    if (optionAnswer.option === "fast Cash") {
        let fastCashAnswer = await inquirer.prompt([
            {
                name: "fastCash",
                message: "Select the desired amount",
                type: "list",
                choices: ["50", "100", "500"]
            }
        ]);
        if (fastCashAnswer.fastCash === "50") {
            myBalance -= fastCashAnswer.fastCash;
            console.log(`remaining Balance is: ${myBalance}`);
        }
        else if (fastCashAnswer.fastCash === "100") {
            myBalance -= fastCashAnswer.fastCash;
            console.log(`remaining Balance is ${myBalance}`);
        }
        else if (fastCashAnswer.fastCash === "500") {
            myBalance -= fastCashAnswer.fastCash;
            console.log(`remaining Balance is: ${myBalance}`);
        }
    }
    if (optionAnswer.option === "check balance") {
        console.log(`Your balance is: ${myBalance}`);
    }
    else if (optionAnswer.option === "Withdraw") {
        let amountAnswer = await inquirer.prompt([
            {
                name: "amount",
                message: "Enter amount",
                type: "number"
            }
        ]);
        if (amountAnswer.amount > myBalance) {
            console.log("Sorry insufficient funds to proceed with your request");
        }
        else {
            myBalance -= amountAnswer.amount;
            console.log(`Your remaining Balance: ${myBalance}`);
        }
        ;
    }
}
else {
    console.log("incorrect pin number");
}
