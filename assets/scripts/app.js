var btn = document.querySelector("button");
	avatar = document.querySelector("img#avatar");
	fullName = document.querySelector("div#fullname"),
	userName = document.querySelector("div#username"),
	email = document.querySelector("span#email"),
	city = document.querySelector("span#city");


btn.addEventListener("click", function(){
	var url = "https://randomuser.me/api/";
	fetch(url)
	.then(handleErrors)
	.then(parseJSON)
	.then(updateProfile)
	.catch(printError)
});

function handleErrors(response){
	if(!response.ok){
		throw Error(response.status);
	}
	return response;
}

function parseJSON(response){
	return response.json();	
}

function updateProfile(data){
	userInfo = data.results[0];
	avatar.src = userInfo.picture.large;
	fullName.textContent = userInfo.name.first + " " +  userInfo.name.last;
	userName.textContent = userInfo.login.username;
	email.textContent = userInfo.email;
	city.textContent = userInfo.location.city;	
}

function printError(err){
	console.log("Inside Print Errors")
	console.log(err);
}
