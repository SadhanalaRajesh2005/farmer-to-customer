import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./register.css";
import api from "../api/api";


function Register(){

const navigate = useNavigate();


const [showPassword,setShowPassword] = useState(false);


const [image,setImage] = useState(null);



const [user,setUser]=useState({

name:"",
email:"",
password:"",
role:"customer"

});



const handleChange=(e)=>{

setUser({

...user,

[e.target.name]:e.target.value

});

};





const handleSubmit=async(e)=>{

e.preventDefault();


try{


const formData = new FormData();


formData.append(
"name",
user.name
);


formData.append(
"email",
user.email
);


formData.append(
"password",
user.password
);


formData.append(
"role",
user.role
);



if(image){

formData.append(
"profileImage",
image
);

}



const res = await api.post(

"/auth/register",

formData

);



alert(res.data.message);


navigate("/login");


}
catch(error){


alert(

error.response?.data?.message ||

"Registration Failed"

);


}


};





return(


<div className="register-container">


<h2>
Register
</h2>




<form onSubmit={handleSubmit}>


<input

name="name"

placeholder="Name"

value={user.name}

onChange={handleChange}

/>





<input

name="email"

type="email"

placeholder="Email"

value={user.email}

onChange={handleChange}

/>





<div className="password-box">


<input

name="password"

type={
showPassword
?
"text"
:
"password"
}

placeholder="Password"

value={user.password}

onChange={handleChange}

/>



<button

type="button"

className="show-password"

onClick={()=>setShowPassword(!showPassword)}

>

{

showPassword

?

"Hide"

:

"Show"

}


</button>


</div>







<select

name="role"

value={user.role}

onChange={handleChange}

>


<option value="customer">

Customer

</option>


<option value="farmer">

Farmer

</option>


</select>





{/* Profile Image */}

<input

type="file"

accept="image/*"

onChange={(e)=>setImage(e.target.files[0])}

/>





<button type="submit">

Register

</button>



</form>



</div>


)

}


export default Register;