var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/api', function(req, res, next) {
  res.json({
    "driving_license": req.body.dl_num,
    "national_insurance": req.body.ni_num,
    "postcode": req.body.postcode
  })
})

module.exports = router;
