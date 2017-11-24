var express = require('express');
var router = express.Router();

var controller = require('../controllers/controller');
router.route('/image')
.post(controller.postImage)
.get(controller.getImages);

module.exports = router;