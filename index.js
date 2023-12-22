const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

const USERS =[];

const QUESTIONS =[
    {
        title: "Two states",
        discription:"Given an array, the maximum of the array?",
        testCases:[{
            input: "[1,2,3,4,5]",
            output:"5"
        }]
    }
];

const SUBMISSION =[
    {
        userId:"1",
        questionId:"1",
        status:"accepted"
    },
    {
        userId:"1",
        questionId:"2",
        status:"rejected"
    },
]

app.post('/signup', (req, res) => {
    //Add logic to decode body
    // body should have email and password



    // store email and password (as is for now) in the Users array above (only if the user with the given email doesnot exit ) 


    //return back 200 status code to the client
    res.send("signup")
});

app.post('/login', (req, res) => {
    // Add logic to decode body 
    //  body should have email and password


    // Check if the user with the given email exits in the USER array
    // Also ensure that the passwrod is the same


    // If the password is the same, return back 200 status code to the client
    // Also send back a token (any random string will do for now)
    // If the passwrod is not the same, return back 401 status code to the client 



    res.send('login');
});

app.get('/questions', (req, res) => {
    // return the user all the question sin the Qureions array
    res.send('quesions');
});

app.get('/submissions', (req, res) => {
    // return the users submission for this problem
    res.send('submission');
});
app.get('/submissions', (req, res) => {
    // let the user submit a problem, randomly accept or reject the solution
    // Store the submission in the SUBMISSION array
    res.send('submission');
});

app.get('/chat', (req, res) => {
    // Use path.join to get the correct file path
    res.sendFile(path.join(__dirname, 'src', 'index.html'));
});

// leaving as hard todos
// Create a route that lets an admin add a new problem 
// ensure that only admins can do that.

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
