var express = require('express')
	,accounts = require('../models/accounts.json')
	,transactions = require('../models/transactions.json')
	,router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});
router.get('/accounts/:user', function(req, res) {
	//check user id
	res.send(accounts);
});

router.get('/transactions/:user', function(req, res) {
	//check user id
	res.send(transactions);
});

module.exports = router;
