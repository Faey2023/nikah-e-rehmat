import toast from "react-hot-toast";
import UseAuth from "../custom hooks/UseAuth";
import SocialButton from "../Components/Shared/SocialButton/SocialButton";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const { loginUser } = UseAuth();
  const currentLocation = useLocation();
  const destinedLocation = useNavigate();
  // console.log(location, "ekhane ami");

  const handleLogin = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    loginUser(email, password)
      .then((response) => {
        toast.success("Login successfully!!!");
        console.log(response.user);
        // go to the route after login
        destinedLocation(currentLocation?.state ? currentLocation.state : "/");
      })
      .catch((error) => {
        toast.error(error.code);
      });
  };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center ">
            <h1 className="text-3xl font-bold">Login now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                  name="email"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                  name="password"
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-accent text-white">Login</button>
                <p className="mt-4 block text-center font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                  Don&apos;t have an account?
                  <Link
                    className="font-medium text-red-500 transition-colors hover:text-blue-700"
                    to="/register"
                  >
                    Register
                  </Link>
                </p>
              </div>
              <SocialButton />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
