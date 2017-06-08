var express = require('express');
var router = express.Router();

const foo = (args) => {
  console.log(args);
};

foo('bar', 123);

router.get('/', function(req, res){
  console.log('data route');
});

module.exports = router;
