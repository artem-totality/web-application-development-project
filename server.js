const express = require('express');
const path = require('path');
const { initApi } = require('./api/api');
const { initPages } = require('./pages/pages');

const app = express();
const PORT = 3000;

// Set EJS as the template engine
app.set('view engine', 'ejs');

// Set the views directory
app.set('views', path.join(__dirname, 'static'));

initApi(app);

initPages(app);

app.use(express.static('static', { index: 'index.html', extensions: ['html'] }));

// //Create a connection to the MySQL database
// const connection = mysql.createConnection({
// 	host: 'localhost',
// 	user: 'root',
// 	password: 'root',
// 	database: 'G00473379',
// });

// app.get('/movie/:id', (req, res) => {
// 	const { id } = req.params;
// 	connection.query('SELECT * FROM movies WHERE ID = ?', [id], function (err, rows, fields) {
// 		if (err) {
// 			console.error('Error retrieving data from database: ', err);
// 			res.status(500).send('Error retrieving data from database');
// 		} else if (rows.length === 0) {
// 			console.error(`No rows found for ID ${id}`);
// 			res.status(404).send(`No product found for ID ${id}`);
// 		} else {
// 			res.send(rows);
// 		}
// 	});
// });

// Connect to the database
// connection.connect((err) => {
// 	if (err) {
// 		console.error('Error connecting to database: ', err);
// 	} else {
// 		console.log('Connected to database!');
// 	}
// });

// Run server

app.listen(PORT, (error) => {
	if (!error) console.log('Server is Successfully Running, and App is listening on port ' + PORT);
	else console.log("Error occurred, server can't start", error);
});
