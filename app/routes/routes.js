var multer = require("multer");
var upload = multer({dest: './uploads/'});

module.exports = function(app){
    
    app.route('/')
        .get(function(req, res){
            res.sendFile(process.cwd()+"/public/index.html");
        })
        .post(upload.single('myfile'), function (req, res){
            // console.log(req.body);
            res.json({"size": req.file.size});
        });
};