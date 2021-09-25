require('dotenv').config()
const express = require('express')
const router = express.Router()
const Subscriber = require('../Models/Subscriber')
const mysql = require('mysql');

var db = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
	database: "NODE"
});

router.get('/', async (req, res) => {

	try {
		db.connect(function (err) {
			db.query("SELECT * FROM SUBSCRIBERS", function (err, result) {
				//if (err) throw err;
				console.log(result);
				res.status(200).json(result)
				//res.status(result)
			});
		});
		
	} catch (error) {
		res.status(500).json({ message: error.message })
	}

	/*try{
		const subscribers = await Subscriber.find()
		res.json(subscribers)
	}catch(error){
		res.status(500).json({message: error.message})
	}*/
})

router.get('/:id', (req, res) => {
	var id = req.url.replace('/','')

	try {
		db.connect(function (err) {
			db.query(`SELECT * FROM SUBSCRIBERS WHERE ID = ${id}`, function (err, result) {
				console.log(result);
				res.status(200).json(result)
			});
		});
		
	} catch (error) {
		res.status(500).json({ message: error.message })
	}
})

router.post('/', async (req, res) => {

	try {
		db.connect(function (err) {
			//if (err) throw err;
			var sql = `INSERT INTO SUBSCRIBERS (nome) VALUES ('${req.body.userName}')`;
			db.query(sql, function (err, result) {
				if (err) throw err;
				res.status(201).json('Criado')
			});
		});
	} catch (error) {
		res.status(500).json({ message: error.message })
	}

	/*const subscriber = new Subscriber({
		userName: req.body.userName,
		userChannel: req.body.userChannel
	})

	try{
		const newSubscriber = await subscriber.save()
		res.status(201).json(newSubscriber)
	}catch(error){
		res.status(400).json({message: error.message})
	}*/

})

//para mudar alguma informação (nao necessariamente todas)
router.patch('/:id', (req, res) => {

})

router.delete('/:id', (req, res) => {
	var id = req.url.replace('/','')

	try {
		db.connect(function (err) {
			db.query(`DELETE FROM SUBSCRIBERS WHERE ID = ${id}`, function (err, result) {
				console.log(result);
				res.status(200).json("Registro Deletado!")
			});
		});
		
	} catch (error) {
		res.status(500).json({ message: error.message })
	}

})

module.exports = router