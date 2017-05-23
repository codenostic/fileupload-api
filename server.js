var express = require("express"), 
    route = require(process.cwd() + "/app/routes/routes.js");
var app = express();

route(app);

app.listen(process.env.port || 8080, function(err){
    if(err) throw err;
    console.log('node server started on port'+process.env.port);
});