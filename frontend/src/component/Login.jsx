import React, { useContext, useState } from "react";
import { AuthContext } from "../contects/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";


const Login = () => {



      const { login , signInWithGoogle} = useContext(AuthContext);
      const [error, setError] = useState("");
      const location = useLocation();
      const navigate = useNavigate();
      const from = location.state?.from?.pathname || "/";
    
      const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        
        // Validate the form data
        if (!email || !password) {
          setError("Email and password are required.");
          return;
        }
    
        if (password.length < 6) {
          setError("Password must be at least 6 characters.");
          return;
        }
        login(email, password)  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    alert("Login Successfully !!!")
    navigate(from,{replace:true})
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
 }


    
      //signup using google account 
      const handelRegister=()=>{
        signInWithGoogle().then((result)=>{
          const user= result.user
          alert("signup successfully by google");
          navigate(from,{replace:true})
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setError(errorMessage);  // Set the error message
          });
      }


  return (
        <div>
      <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
          <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
            <div className="max-w-md mx-auto">
              <div>
                <h1 className="text-2xl font-semibold">Log-in form</h1>
              </div>
              <form onSubmit={handleLogin} className="divide-y divide-gray-200">
                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                  <div className="relative">
                    <input
                      id="email"
                      name="email"
                      type="text"
                      className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                      placeholder="Email address"
                    />
                  </div>
                  <div className="relative">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                      placeholder="Password"
                    />
                  </div>
                  
                  {error && <p className="text-red-500">{error}</p>}  {/* Display error message */}
                  <p>if you have not an account please click  <Link to="/sign-up" className="text-blue-700 underline">Sign-up </Link> here </p>

                  <div className="flex justify-center items-center h-full capitalize">
                    <button className="bg-blue-500 text-white rounded-md px-4 py-2 pointer ">
                      Log-in 
                    </button>
                  </div>
                  <hr />
                  <div className="flex flex-col justify-center">
                    <button onClick={handelRegister} className="flex items-center justify-center  text-black capitalize text-2xl p-3 rounded-lg  transition duration-300">
                      <img className="h-7 mr-2" src="data:image/png;base64,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" alt="" />
                    <p>login with google</p>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login