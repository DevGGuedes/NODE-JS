require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const mysql = require('mysql')

/*mongoose.connect("mongodb://localhost/subscribers", { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
db.on('error', (err) => console.log(err))
db.once('open', () => console.log('Database Connected'))*/

var db = mysql.createConnection({
	host: process.env.SERVER,
	user: process.env.USER,
	password: ""
});

db.connect(function (err) {
	if (err) throw err;
	console.log("Database Connected!");
});

app.use(express.json())

const subscribersRouter = require('./routes/subscribers')
app.use('/subscribers', subscribersRouter)

app.listen(3000, () => console.log('Server Running'))