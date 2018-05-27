// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var friends = require("../data/friends.js");

//Get Route
module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
    res.json(friends);
    });
};

//Post Route 
// Create New Friend Profile - takes in JSON input
// app.post("/api/friends", function(req, res) {
//     //return user input and app user total (newFriend.friendAns):
//     var userInput = req.body
//     var userInputTotal = "";

//     //loop through all friends 
//     //loop through each friend's ans 
//     for (var i=0; i<friendArray.length; i++) {
//         for (var j=0; j<friendAns.length; j++) {
//             console.log(friendAns.length[j]);
//         }
//     }
    
//     //display match with friend who has the smallest difference
//     var matchName = "";
//     var matchImg = "";
    
//     //add up total of each friendAns array
//     console.log("stored totals: ", )
    
//     //compare totals of each friend with the current user 
    

    

//     //push result into the survey page 
//     friends.push(req.body);
// });