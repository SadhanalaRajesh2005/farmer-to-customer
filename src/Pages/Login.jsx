import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";
import api from "../api/api";


function Login({ setUser }) {


  const navigate = useNavigate();


  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [role, setRole] = useState("");

  const [showPassword, setShowPassword] = useState(false);


  const [error, setError] = useState("");

  const [success, setSuccess] = useState("");




  async function handleLogin(e) {

    e.preventDefault();



    if(!email || !password || !role){

      setError(
        "Please enter email, password and select role"
      );

      setSuccess("");

      return;

    }



    try {


      const response = await api.post(

        "/users/login",

        {
          email,
          password,
          role
        }

      );



      const loginData = response.data;



      // save only user data

      localStorage.setItem(

        "loginData",

        JSON.stringify(loginData.user)

      );



      // update App user state

      setUser(loginData.user);



      setSuccess("Login Successful");

      setError("");




      setTimeout(()=>{


        if(loginData.user.role === "farmer"){


          navigate("/farmer-dashboard");


        }

        else if(loginData.user.role === "customer"){


          navigate("/customer-dashboard");


        }


      },1000);



    }


    catch(error){


      console.log(error);



      setError(

        error.response?.data?.message ||

        "Invalid Email, Password or Role"

      );


      setSuccess("");


    }


  }





  return (

    <div className="login-container">


      <h2>
        🌾 Login
      </h2>



      <form onSubmit={handleLogin}>



        <input

          type="email"

          placeholder="Enter Email"

          value={email}

          onChange={(e)=>setEmail(e.target.value)}

        />




        <div className="password-box">


          <input


            type={
              showPassword
              ?
              "text"
              :
              "password"
            }


            placeholder="Enter Password"


            value={password}


            onChange={(e)=>setPassword(e.target.value)}

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


          value={role}


          onChange={(e)=>setRole(e.target.value)}


        >


          <option value="">

            Select Role

          </option>



          <option value="farmer">

            Farmer

          </option>



          <option value="customer">

            Customer

          </option>



        </select>





        <button


          type="submit"


          className="login-btn"


        >

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

  );


}


export default Login;