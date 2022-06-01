# Banking App

See it live: [Banking App](https://phenomenal-kleicha-8b80f2.netlify.app)

## Test Accounts
Please use the following login credentials to be able for testing/demo purposes
1. Username: jsmith  
   Password: 111
2. Username: lorgana  
   Password: 222
3. Username: gorwell  
   Password: 333


## Description
This app is meant to simulate what a user might see when they log in to their online banking. It allows users to do the following things:
* log in to their account using a mock username and password
* view their current bank balance
* view their six most recent money transactions (deposits/withdrawals) as well as a total of all deposits and all withdrawals
* transfer a desired amount to another user
* request a loan and have it either approved or denied (the loan is approved as long as at least one of user's deposits is equal to or is more than 10% of the requested loan amount)

## Background & Motivation
This was a project on one of the Udemy courses I took, which I re-coded completely from scratch to give it my own look and styling as well as to practice many of the higher-order functions used here. I really enjoyed doing this project because of its practicality and utility in the real world.


## Technologies
The current version of this project was done with: 
* HTML 
* CSS
* JavaScript (high-order functions)

This is the sort of app that would be a great candidate for a react project in the future.


## State of Completion
Completed, but not responsive as this was not the primary aim of the project.


## Learning Lessons & Challenges
### new Date, date.toLocaleDateString()
This project first taught me how to format a date based on the user's current location and how to use the options parameter with the date.toLocaleDateString() method.

### Higher Order Methods
This project gave me valuable practice in using the following higher-order methods:
* .filter() &rarr; used to filter out all positive and negative money transactions, so classify them as either deposits or withdrawals 
* .reduce() &rarr; used to add up all the positive and all the negative money transactions
* .some() &rarr; used to check whether at least one of the transactions corresponds to the condition set for loan approval
* .find() &rarr; used to locate correct user account/object based on the username of the user logging in


## Summary
In addition to getting great practice with higher order methods, I really enjoyed creating the look of the UI for this app and was pretty happy with the result!




