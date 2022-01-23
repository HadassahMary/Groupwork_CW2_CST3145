
//importing the express module
var express = require('express');

var app = express();
const port = 3000;

//lesson array
const courses = [
    { "topic" : "math", "location" : "London", "price" : 100},
    { "topic" : "math", "location" : "Liverpool", "price" : 80},
    { 'topic' : 'math', 'location' : 'Oxford', 'price' : 90},
    { 'topic' : 'math', 'location' : 'Bristol', 'price' : 120},
];

//user array
const users = [
    { 'email' : 'steve@gmail.com', 'password' : 'Seteve1'},
    { 'email' : 'Beryl@gmail.com', 'password' : 'Beryl-1998'},
    { 'email' : 'Khristine@gmail.com', 'password' : 'Khristine!'},
    { 'email' : 'Hadassah@gmail.com', 'password' : 'Hadassah00'},
];

// when /lesson is acessed, the lesson array is sent as the response
app.get("/lessons", function(req, res){
    
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.writeHead(200, {'Content-Type' : 'text/plain'});
    res.end(JSON.stringify(courses));
});

//when /user is accessed, the users array is sent as the response
app.get("/user", function(req, res){
    
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.writeHead(200, {'Content-Type' : 'text/plain'});
    res.end(JSON.stringify(users));
});

//incase of any error
app.use(function(request, response){
    response.status(404).send("Page not found. Enter /lessons  or /users");

});

//running the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
})

//end of code