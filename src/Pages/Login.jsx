import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./login.css";
import api from "../api/api";


function Login({ setUser }) {


  const navigate = useNavigate();


  const [email,setEmail] = useState("");

  const [password,setPassword] = useState("");

  const [showPassword,setShowPassword] = useState(false);

  const [error,setError] = useState("");

  const [success,setSuccess] = useState("");




  async function handleLogin(e){

    e.preventDefault();



    if(!email || !password){


      setError(
        "Please enter email and password"
      );

      setSuccess("");

      return;

    }



    try{


      const response = await api.post(

        "/auth/login",

        {
          email,
          password
        }

      );



      // User data

      const userData =
      response.data.user;



      // JWT Token

      const token =
      response.data.token;




      // Save JWT Token

      localStorage.setItem(

        "token",

        token

      );




      // Save Login User

      localStorage.setItem(

        "loginData",

        JSON.stringify(userData)

      );




      // Update App State

      setUser(userData);




      setSuccess(

        "Login Successful"

      );


      setError("");





      setTimeout(()=>{



        if(userData.role === "farmer"){


          navigate(
            "/farmer-dashboard"
          );


        }


        else if(userData.role === "admin"){


          navigate(
            "/admin-dashboard"
          );


        }


        else{


          navigate(
            "/customer-dashboard"
          );


        }



      },1000);






    }

    catch(error){


      setError(

        error.response?.data?.message ||

        "Invalid Login Details"

      );


      setSuccess("");

    }


  }







  return(


    <div className="login-container">



      <h2>
        🌾 Login
      </h2>




      <form onSubmit={handleLogin}>


        <input


          type="email"


          placeholder="Enter Email"


          value={email}


          onChange={
            (e)=>setEmail(e.target.value)
          }


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


            onChange={
              (e)=>setPassword(e.target.value)
            }


          />





          <button


            type="button"


            className="show-password"


            onClick={
              ()=>setShowPassword(!showPassword)
            }


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






        <button


          type="submit"


          className="login-btn"


        >

          Login

        </button>






        <Link


          to="/forgot-password"


          className="forgot-password"


        >

          Forgot Password?

        </Link>




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