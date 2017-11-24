var Image = require('../models/image');
var base64Img = require('base64-img');
var fs = require('fs');

exports.postImage = function (req, res) {
    var image = new Image({
        name: req.body.name,
       path:"/images/"+req.body.name
    });
    var imageDecode = Buffer.from(req.body.base64textString, 'base64');
    fs.writeFile("/home/user/Music/image-upload/backend/images/"+image.name, imageDecode, function(err) {}); 
    image.save(function (error, response) {
        if (error) {
            res.json({
                "success": false,
                "error": error
            })
           
        }
        else {
            res.json({
                "success": true,
                "body": response
            })
          
        }
    });
}
exports.getImages = function (req, res) {
    Image.find({}, function (err, response) {
        
       
        if (err) {
            res.json({
                "success": false,
                "error": err
            })
        }
        for( var i = 0 ; i < response.length; i++){
            response[i].path = "http://localhost:2000" + response[i].path
        }
       res.json(response);
    })
}
