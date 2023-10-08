import { useLocation, useNavigate } from "react-router-dom";
import UseAuth from "../../../custom hooks/UseAuth";
import toast from "react-hot-toast";

const SocialButton = () => {
  const currentLocation = useLocation();
  const destinedLocation = useNavigate();
  // console.log(currentLocation);

  const { googleLogin } = UseAuth();
  const handleLogin = (data) => {
    data()
      .then((response) => {
        toast.success("User created successfully!!!");
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
      <div className=" divider ">Or</div>

      {/* google button */}
      <button
        onClick={() => handleLogin(googleLogin)}
        className="btn bg-neutral text-white w-full"
      >
        <div className="flex gap-3">
          <img
            className=" w-[29px] h-[29px] rounded-full"
            src="https://i.ibb.co/dMy26rb/g.png"
          />
          <p className="text-center mt-2">SignUp with Google</p>
        </div>
      </button>
    </div>
  );
};

export default SocialButton;
