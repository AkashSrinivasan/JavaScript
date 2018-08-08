var dataBase = [
		{
			username : "akash",
			password : "12345"
		},
	
		{
			username : "mohan",
			password : "55555"
		},
		{
			username : "harish",
			password : "66666"
		},
];
var newsFeed = [
		{
			username : "uncle",
			news : "all are worst in everything"

		},
		{
			username : "daddy",
			news : "i love everything"
		}
];

var userNamePrompt = prompt("enter ur user name");
var passwordPrompt = prompt("enter ur password");
function isValid(username,password)
{
	for(var i=0 ; i < dataBase.length ; i++)
	{
		if(username === dataBase[i].username && password === dataBase[i].password){
		return true;
	}
	}
	return false;
}


function signIN(user ,pass)
{
	if(isValid(user,pass)){
		console.log(newsFeed);
	}else
	{
		alert("oops...!! sorry wrong username and password");
	}
}
signIN(userNamePrompt,passwordPrompt)
