import { useState } from "react";
import api from "../api/api";
import './forgotpassword.css'


function ForgotPassword(){


const [email,setEmail]=useState("");

const [password,setPassword]=useState("");

const [message,setMessage]=useState("");





async function handleSubmit(e){


e.preventDefault();



try{


const response=await api.put(

"/users/change-password",

{
email,
password
}

);



setMessage(
response.data.message
);



}

catch(error){


setMessage(

error.response?.data?.message ||

"Password update failed"

);


}



}





return(


<div className="forgot-container">


<h2>
🔐 Change Password
</h2>




<form onSubmit={handleSubmit}>


<input

type="email"

placeholder="Enter Email"

value={email}

onChange={(e)=>setEmail(e.target.value)}

/>




<input

type="password"

placeholder="Enter New Password"

value={password}

onChange={(e)=>setPassword(e.target.value)}

/>





<button>

Update Password

</button>



</form>




<p>
{message}
</p>


</div>


);


}


export default ForgotPassword;