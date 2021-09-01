let http = require("http");
let express = require("express");
let app = express();

app.use(express.json());
let userInfo = [
	{
		id: 1,
		username: "prem",
		fullname: "prem p",
	},
	{
		id: 2,
		username: "akash12",
		fullname: "akash s",
	},
	{
		id: 3,
		username: "shareef",
		fullname: "shareef u",
	},
	{
		id: 4,
		username: "jasi",
		fullname: "jaisal m",
	},
	{
		id: 5,
		username: "ijas",
		fullname: "ijas m",
	},
];
//To get All users
//http://localhost:3000/user
app.get("/user", (req, res) => {
	res.json(userInfo);
});

//get query limit
//http://localhost:3000/user/amount?limit=2
app.get("/user/amount", (req, res) => {
	const limit = req.query.limit;
	const startindex = 0;
	const endindex = limit;
	const resultuser = userInfo.slice(startindex, endindex);
	res.json(resultuser);
});

//to get a specified user
//http://localhost:3000/user/2
app.get("/user/:id", function (req, res) {
	let found = userInfo.find(function (item) {
		return item.id === parseInt(req.params.id);
	});
	res.json(found);
});

// to post a new  userinfo
//post-//http://localhost:3000/user

app.post("/user", (req, res) => {
	let newuser = {
		id: userInfo.length + 1,
		username: req.body.username,
		fullname: req.body.fullname,
	};
	userInfo.push(newuser);
	res.json(newuser);
});

//to update a user
//Put- //http://localhost:3000/user/5
app.put("/user/:id", function (req, res) {
	let found = userInfo.find(function (item) {
		return item.id === parseInt(req.params.id);
	});
	found.username = req.body.username;
	found.fullname = req.body.fullname;
	res.json(found);
});

app.listen(3000);
