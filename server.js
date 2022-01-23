var express = require('express');

var app = express();
const port = 3000;

const courses = [
    { "topic" : "math", "location" : "London", "price" : 100},
    { "topic" : "math", "location" : "Liverpool", "price" : 80},
    { 'topic' : 'math', 'location' : 'Oxford', 'price' : 90},
    { 'topic' : 'math', 'location' : 'Bristol', 'price' : 120},
];
const users = [
    { 'email' : 'steve@gmail.com', 'password' : 'Seteve1'},
    { 'email' : 'Beryl@gmail.com', 'password' : 'Beryl-1998'},
    { 'email' : 'Khristine@gmail.com', 'password' : 'Khristine!'},
    { 'email' : 'Hadassah@gmail.com', 'password' : 'Hadassah00'},
];
app.get("/lessons", function(req, res){
    
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.writeHead(200, {'Content-Type' : 'text/plain'});
    res.end(JSON.stringify(courses));
});
app.get("/user", function(req, res){
    
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.writeHead(200, {'Content-Type' : 'text/plain'});
    res.end(JSON.stringify(users));
});
app.use(function(request, response){
    response.status(404).send("Page not found. Enter /lessons  or /users");

});
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
})