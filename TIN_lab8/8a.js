const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/hello', (req, res) => res.send('Hello World!'));

app.get('/form', (req, res) => {
	res.send(
	`
	<html>
	<head>
		<title>Form</title>
	</head>
	<body>
		<form method="POST" action="/formdata">
			<table align="center">
				<tr>
					<th align="left"><label for="nickname">Nickname</label></th>
					<td><input name="nickname" type="text" id="nickname" /></td>
				</tr>
				<tr>
					<th align="left"><label for="login" >Login:</label></th>
					<td><input name="login" type="text" id="login" /></td>
				</tr>
				<tr>
					<th align="left"><label for="password">Password:</label></th>
					<td><input name="password" type="password" id="password" /></td>
				</tr>
				<tr>
					<td><button type="submit">Submit</button></td>
				</tr>
			</table>
		</form>
	</body>
	</html>
	`
	);
});

app.post("/formdata", (req, res) => {
  res.send(
    `
	<html>
    <head>
        <title>Form</title>
    </head>
    <body>
        <table align="center">
			<tr>
				<th align="left">Nickname: ${req.body.nickname}</th>
			</tr>
			<tr>
				<th align="left">Login: ${req.body.login}</th>
			</tr>
			<tr>
				<th align="left">Password: ${req.body.password}</th>
			</tr>
		</table>
    </body>
    </html>
	`
  );
});

/** sample JSON sending format:
{
    "nickname": "nick",
    "login": "login",
    "password": "password"
}
*/
app.post("/jsondata", (req, res) => {
	console.log(req.body);
	res.send(
	`
	<html>
    <head>
        <title>Form</title>
    </head>
    <body>
        <table align="center">
			<tr>
				<th align="left">Nickname: ${req.body.nickname}</th>
			</tr>
			<tr>
				<th align="left">Login: ${req.body.login}</th>
			</tr>
			<tr>
				<th align="left">Password: ${req.body.password}</th>
			</tr>
		</table>
    </body>
    </html>
	`
	);
});

app.listen(3000, () => console.log('Example app listening on port 3000'))