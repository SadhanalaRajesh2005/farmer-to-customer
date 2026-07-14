import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";


function Login({setUser}) {


const navigate = useNavigate();


const [email,setEmail] = useState("");

const [password,setPassword] = useState("");

const [error,setError] = useState("");

const [success,setSuccess] = useState("");



function handleLogin(e){

e.preventDefault();



if(email === "" || password === ""){


setError("Please enter email and password");

setSuccess("");

return;


}



// Save Login Data in Local Storage

const loginData = {

email: email,

role: "farmer"

};



localStorage.setItem(

"loginData",

JSON.stringify(loginData)

);




// Update App State

setUser(loginData);



setSuccess("Login Successful");

setError("");



// Redirect to Farmer Dashboard

setTimeout(()=>{


navigate("/farmer-dashboard");


},1000);



}




return(


<div className="login-container">



<h2>
🌾 Farmer Login
</h2>



<form onSubmit={handleLogin}>


<input

type="email"

placeholder="Enter Email"

value={email}

onChange={(e)=>setEmail(e.target.value)}

/>


<br/><br/>



<input

type="password"

placeholder="Enter Password"

value={password}

onChange={(e)=>setPassword(e.target.value)}

/>



<br/><br/>



<button type="submit">

Login

</button>



</form>



{

error &&

<p className="error">

{error}

</p>

}




{

success &&

<p className="success">

{success}

</p>

}




</div>


)

}


export default Login;