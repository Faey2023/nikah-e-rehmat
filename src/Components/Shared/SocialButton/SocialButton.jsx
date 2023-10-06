import UseAuth from "../../custom hooks/UseAuth";

const SocialButton = () => {
  const { googleLogin, githubLogin, twitLogin, facebookLogin } = UseAuth();
  const handleLogin = (data) => {
    data()
      .then((res) => {
        console.log(res.user);
      })
      .catch((err) => {
        console.log(err.code);
      });
  };
  return (
    <div>
      <div className=" divider ">Or</div>
      <div className="grid grid-cols-2 gap-5">
        {/* google button */}
        <button
          onClick={() => handleLogin(googleLogin)}
          className="btn bg-neutral text-white"
        >
          <div className="flex gap-3">
            <img
              className=" w-[29px] h-[29px] rounded-full"
              src="https://i.ibb.co/dMy26rb/g.png"
            />
            <p>SignUp with Google</p>
          </div>
        </button>
        {/* git button */}
        <button
          onClick={() => handleLogin(githubLogin)}
          className="btn bg-neutral text-white"
        >
          <div className="flex gap-3">
            <img
              className=" w-[29px] h-[29px] rounded-full"
              src="https://i.ibb.co/P4tq506/git.png"
            />
            <p>SignUp with Github</p>
          </div>
        </button>
        {/* twit button */}
        <button
          onClick={() => handleLogin(twitLogin)}
          className="btn bg-neutral text-white"
        >
          <div className="flex gap-3">
            <img
              className=" w-[29px] h-[29px] rounded-full"
              src="https://i.ibb.co/Qfn425f/t.png"
            />
            <p>SignUp with Twitter</p>
          </div>
        </button>
        {/* facebook button */}
        <button
          onClick={() => handleLogin(facebookLogin)}
          className="btn bg-neutral text-white"
        >
          <div className="flex gap-3">
            <img
              className=" w-[29px] h-[29px] rounded-full"
              src="https://i.ibb.co/LJVhKm4/f.png"
            />
            <p>SignUp with Facebook</p>
          </div>
        </button>
      </div>
    </div>
  );
};

export default SocialButton;
