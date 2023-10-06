import UseAuth from "../../../custom hooks/UseAuth";

const SocialButton = () => {
  const { googleLogin } = UseAuth();
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
          <p>SignUp with Google</p>
        </div>
      </button>
    </div>
  );
};

export default SocialButton;
