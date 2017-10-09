/**
 * @author Morgan, Tyler (morgant@student.ncmich.edu)
 * @version 1
 * @summary Tyler Morgan's Project 3 || created: 10.9.2017
 */

/** This is the pragma and library call section of the program*/
"use strict";
const PROMPT = require('readline-sync');

/** This is the global factor section of the program*/
let continueResponse;
let currentYear, policyNumber,customerBirthdate, atFaultAccidents, totalPremium;
let customerLastName, customerFirstName, premiumDueDate;

/** This section contains the dispatch method of the program*/
function main() {
    process.stdout.write('\x1Bc'); //Clears the screen
    if (continueResponse == null) {
        setContinueResponse();
    }
    if (continueResponse === 1) {
        setCurrentYear();
        setPolicyNumber();
        setCustomerLastName();
        setCustomerFirstName();
        setCustomerBirthdate();
        setPremiumDueDate();
        setAtFaultAccidents();
        setTotalPremium();
        printTotalPremium();
        setContinueResponse();
        return main();
    }
    printGoodbye();
}

/** This is the mutator and utility section of the program*/
main();

function setContinueResponse() {
    if (continueResponse === 1) {
        continueResponse = Number(PROMPT.question(`\nDo you want to continue? (0=no, 1=yes): `));
        if (continueResponse !== 0 && continueResponse !== 1) {
            console.log(`${continueResponse} is an incorrect value. Please try again.`);
            continueResponse = 1;
            setContinueResponse();
        }
    }
    else {
        continueResponse = 1;
    }
}

function setCurrentYear() {
    currentYear = Number(2017);
}

function setPolicyNumber() {
    policyNumber = Math.floor((Math.random() * 30) + 1); //demonstrating use of JavaScript random number generator (1-30)
}

function setCustomerLastName() {
    customerLastName = PROMPT.question(`\nPlease enter your last name: `);
}

function setCustomerFirstName() {
    customerFirstName = PROMPT.question(`\nPlease enter your first name: `);
}

function setCustomerBirthdate() {
    customerBirthdate = Number(PROMPT.question(`\nPlease enter the year you were born: `));
}

function setPremiumDueDate() {
    premiumDueDate = PROMPT.question(`\nPlease enter the year your premium is due: `);
}

function setAtFaultAccidents() {
    atFaultAccidents = Number(PROMPT.question(`\nPlease Enter The Amount of At Fault Accidents you've had in the last three years: `));
}

function setTotalPremium() { //This section is where formulas and base prices are listed for DriveRiteInsurance
    totalPremium = 0;
    let atFaultAccidentsCost = atFaultAccidents * 50;
    let age = currentYear - customerBirthdate;
    const basePrice = 100,
        fifteenToThirtyFee = 20,
        thirtyToFortyFiveFee = 10,
        fortyFiveToSixtyFee = 0,
        sixtyOrAboveFee = 30,
        fifteenToThirtyAge = 30,
        thirtyToFortyFiveAge = 45,
        fortyFiveToSixtyAge = 60;
    if (age > 14) {
        if (age > 14 && age < fifteenToThirtyAge) {
            totalPremium = basePrice + fifteenToThirtyFee + atFaultAccidentsCost;
        } else if (age < thirtyToFortyFiveAge) {
            totalPremium = basePrice + thirtyToFortyFiveFee + atFaultAccidentsCost;
        } else if (age < fortyFiveToSixtyAge) {
            totalPremium = basePrice + fortyFiveToSixtyFee + atFaultAccidentsCost;
        } else {
            totalPremium = basePrice + sixtyOrAboveFee + atFaultAccidentsCost;
        }
    }
}

function printTotalPremium() {
    process.stdout.write('\x1Bc');
    console.log(`\n\t${customerFirstName} ${customerLastName}'s premium: \$${totalPremium}. Customer#: ${policyNumber}`);
}

function printGoodbye() {
    process.stdout.write('\x1Bc');
    console.log(`\n\tGoodbye.`)
}

/*
This program is designed to prompt a customer for basic information relating to automobile
insurance, and then use said information to output the total bill.
 */