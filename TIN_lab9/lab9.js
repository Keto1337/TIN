const express = require('express');
const path = require("path");
const app = express();
const bodyParser = require('body-parser');
const cors = require("cors");

var port = 3000;

app.use(express.urlencoded({extended: true,}));
app.use(bodyParser.json());
app.use(cors({origin: "*",}));

/** sample JSON sending format:
{
    "number1": 2,
    "operator": "+",
    "number2": 5
}
*/
app.post("/calculate", (req, res) => {
	const HEADER = {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
	};
	console.log(req.body);
	
	if (req.body.number1 === undefined || req.body.operator === undefined || req.body.number2 === undefined) {
		res.json({result: "incorrect formatting.."});
	}
	
	var statement = "";
	var num1 = req.body.number1;
	var num2 = req.body.number2;
	var operator = req.body.operator;
	switch(operator) {
		case '+':
			var result = parseInt(num1) + parseInt(num2);
			break;
		case '-':
			var result = parseInt(num1) - parseInt(num2);
			break;
		case '*':
			var result = parseInt(num1) * parseInt(num2);
			break;
		case '/':
			var result = parseInt(num1) / parseInt(num2);
			break;
		default:
			statement = "incorrect formatting.. " + 
						"As operator try using (\"+\", \"-\", \"/\", \"*\")\n";
	}
	
	if(statement === "")
		res.json({ number1: num1, operator: operator, number2: num2, result: result});
	else
		res.json({ result: statement });
	
});

app.listen(port, () => console.log(`Example app listening on port ${port}`));