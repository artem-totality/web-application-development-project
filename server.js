const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const { initApi } = require('./api/api');

const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(bodyParser.urlencoded({ extended: false }));

initApi(app);

app.use(express.static('public', { index: 'index.html', extensions: ['html'] }));

app.listen(PORT, (error) => {
	if (!error) {
		console.log('Server is Successfully Running, and App is listening on port: ' + PORT);
		return;
	}

	console.log("Error occurred, server can't start", error);
});
