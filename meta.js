var express     = require('express');
var app         = express();
var multer      = require('multer');
var upload      = multer({ dest: './public/uploads/' });

var size;

app.set('view engine', 'jade');




app.get('/',function(req,res){
    res.render('index.jade');
});


//routes

app.post('/',upload.single('myfile'), function (req, res) {
   
    size    = 'the size is '+req.file.size;
    res.render('index.jade',{message:size});
   
});





var port = process.env.PORT || 8080;
app.listen(port,  function () {
	console.log('Node.js listening on port ' + port + '...');
});