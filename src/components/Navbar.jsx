import { NavLink } from "react-router-dom";
import "./navbar.css";


function Navbar({ user, logout }) {


  return (

    <nav className="navbar">


      <div className="nav-links">


        <NavLink to="/">
          Home
        </NavLink>



        <NavLink to="/products">
          Products
        </NavLink>





        {/* FARMER MENU */}

        {
          user?.role === "farmer" &&

          <>

            <NavLink to="/farmer-dashboard">
              Farmer Dashboard
            </NavLink>


            <NavLink to="/add-product">
              Add Product
            </NavLink>


            <NavLink to="/farmer-orders">
              Farmer Orders
            </NavLink>


          </>

        }








        {/* CUSTOMER MENU */}

        {
          user?.role === "customer" &&

          <>

            <NavLink to="/customer-dashboard">
              Customer Dashboard
            </NavLink>


            <NavLink to="/cart">
              Cart
            </NavLink>


            <NavLink to="/orders">
              My Orders
            </NavLink>


          </>

        }








        {/* ADMIN MENU */}

        {
          user?.role === "admin" &&

          <>

            <NavLink to="/admin-dashboard">
              Admin Dashboard
            </NavLink>


          </>

        }



      </div>









      <div className="user-section">


        {

          user ?


          (


          <>


            <img

              className="profile-image"

              src={

                user.profileImage

                ?

                `http://localhost:3000/${user.profileImage}`

                :

                "/default-profile.png"

              }

              alt="profile"

            />





            <span className="welcome">

              Welcome, {user.name}

            </span>






            <button

              className="logout-btn"

              onClick={logout}

            >

              Logout

            </button>



          </>


          )



          :



          (


          <>


            <NavLink to="/login">

              Login

            </NavLink>




            <NavLink to="/register">

              Register

            </NavLink>



          </>


          )


        }



      </div>




    </nav>


  );


}


export default Navbar;