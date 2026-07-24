import { Navigate } from "react-router-dom";


function ProtectedRoute({ children, user, role }) {


    const token = 
    localStorage.getItem("token");



    // User login check

    if(!token || !user){


        return (

            <Navigate

                to="/login"

                replace

            />

        );


    }





    // Role Based Authorization

    if(role && user.role !== role){


        return (

            <Navigate

                to="/"

                replace

            />

        );


    }





    // Access allowed

    return children;


}


export default ProtectedRoute;