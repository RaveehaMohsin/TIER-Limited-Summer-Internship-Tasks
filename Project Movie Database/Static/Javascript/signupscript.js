const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

const signupname = document.getElementById('signupname');
const signupemail = document.getElementById('signupemail');
const signuppassword = document.getElementById('signuppassword');
const signupuser = document.getElementById('signupbutton');

const signinemail = document.getElementById('signinemail');
const signinpassword = document.getElementById('signinpassword');
const signinuser = document.getElementById('signinbutton');

const messageDiv = document.getElementById("message2");
const messageDiv1 = document.getElementById("message");

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

signupuser.addEventListener("click", (e)=>{
	if(signupname.value !="" && signupemail.value !="" && signuppassword.value !="")
	{		
		const newuser ={name:signupname.value , email:signupemail.value , password:signuppassword.value };
		const Users = JSON.parse(localStorage.getItem('Users')) || [];
		const userExists = Users.some(user => user.email === newuser.email);
        if(!userExists)
	    {
			Users.push(newuser);
			localStorage.setItem('Users', JSON.stringify(Users));
			messageDiv1.textContent = "Sign up successful!";
            messageDiv1.className = "success"; 
            messageDiv1.style.display = "block";
	    }
		else
		{
			messageDiv1.textContent = "Email Already Exits!";
            messageDiv1.className = "error"; 
            messageDiv1.style.display = "block"; 
		}
		
	}
	else{
		messageDiv1.textContent = "Kindly fill all the fields";
		messageDiv1.className = "error"; 
		messageDiv1.style.display = "block";
	}

});


signinuser.addEventListener("click" , (e)=>{
	if(signinemail.value != "" && signinpassword.value != "")
	{
		const Users = JSON.parse(localStorage.getItem('Users')) || [];
		const userExists = Users.some(user => user.email === signinemail.value && user.password === signinpassword.value);
        if(userExists)
	    {			
			messageDiv.textContent = "Sign in successful!";
            messageDiv.className = "success"; 
            messageDiv.style.display = "block"; 
			setTimeout(() => {
				const encodedEmail = encodeURIComponent(signinemail.value); // Encode the email to make it URL-safe
				window.location.href = `/Templates/home.html?email=${encodedEmail}`;
			}, 500);
	    }
		else{
			messageDiv.textContent = "Incorrect email or password.";
			messageDiv.className = "error"; 
			messageDiv.style.display = "block"; 
		}
	}
	else{
		messageDiv.textContent = "Kindly fill all the fields";
		messageDiv.className = "error"; 
		messageDiv.style.display = "block";
	}

});

