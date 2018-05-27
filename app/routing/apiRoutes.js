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


    //Post Route 
    // Create New Friend Profile - takes in JSON input
    app.post("/api/friends", function(req, res) {
        //return user input and app user total 
        var newFriend = req.body;
        var newFriendAns = req.body.friendAns;
        var totals = [];
        var difference = 0;
        var matchInd = 0;
        var matchName = "";
        var matchPhoto = "";
        

        //loop through all friends 
        //loop through friend's ans 
        //math.abs = always reutrns an absolute value 
        //push the difference of each friend's score against new friend into a separate array 
        //find the match by going through the totals array to find the smallest number 

        for (var i=0; i<friendsArray.length; i++) {
            for (var j=0; j<newFriendAns.length; j++) {
                difference += (Math.abs(parseInt(friendsArray[i].friendAns[j]) - parseInt(newFriendAns[j])));
            }
            totals.push(difference)
        }

        console.log ("array of totals: ", totals)

        for (var i=0; i<totals.length; i++) {
            if(totals[i]<= total[matchInd]);
            matchInd = i;
                //display match with friend who has the smallest difference
                matchName = friendsArray[matchInd].friendName;
                matchPhoto = friendsArray[matchInd].friendPhoto;
        }

    
        //push result into the survey page 
        friends.push(req.body);
        res.json({matchName:matchName, matchPhoto:matchPhoto});
    });

};