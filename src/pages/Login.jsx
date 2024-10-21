import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Login = () => {
  const [state, setState] = useState("Sign Up");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const navigate = useNavigate(); // Initialize useNavigate

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    
    // You can add your authentication logic here (API calls, validations, etc.)
    
    // After successful login/sign-up, redirect to home page
    navigate("/"); // Redirect to the home page or any other desired route
  };

  return (
    <form className="min-h-[80vh] flex items-center" onSubmit={onSubmitHandler}>
      <div className="flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg">
        <p className="text-2xl font-semibold">
          {state === "Sign Up" ? "Create Account" : "Login"}
        </p>
        <p>Please {state === "Sign Up" ? "sign up" : "Log in"} to book appointment</p>
        
        {state === "Sign Up" && (
          <div className="w-full">
            <p>Full Name</p>
            <input
              className="border border-zinc-300 mt-1 rounded w-full pt-2"
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
              required
            />
          </div>
        )}

        <div className="w-full">
          <p>Email</p>
          <input
            className="border border-zinc-300 mt-1 rounded w-full pt-2"
            type="email"
            onChange={(e) => setEmail(e.target.value)} // Fixed onChange
            value={email}
            required
          />
        </div>
        
        <div className="w-full">
          <p>Password</p>
          <input
            className="border border-zinc-300 mt-1 rounded w-full pt-2"
            type="password"
            onChange={(e) => setPassword(e.target.value)} // Fixed onChange
            value={password}
            required
          />
        </div>

        <button className="bg-primary text-white w-full py-2 rounded-md text-base">
          {state === "Sign Up" ? "Create Account" : "Login"}
        </button>
        
        {state === "Sign Up" ? (
          <p>
            Already have an account?{" "}
            <span
              onClick={() => setState("Login")}
              className="text-primary underline cursor-pointer"
            >
              Login here
            </span>
          </p>
        ) : (
          <p>
            Create a new account?{" "}
            <span
              onClick={() => setState("Sign Up")}
              className="text-primary underline cursor-pointer"
            >
              Click here
            </span>
          </p>
        )}
      </div>
    </form>
  );
};

export default Login;
