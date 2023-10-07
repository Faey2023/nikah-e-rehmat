import Marquee from "react-fast-marquee";
import moment from "moment";
import UseAuth from "../../custom hooks/UseAuth";

const Profile = () => {
  const { user } = UseAuth();
  return (
    <div className=" hero-content text-center items-center flex-col">
      <div className=" card max-h-80 border space-y-5">
        <h1 className="text-2xl text-center ">
          Hello
          <span className="ml-1">
            {user?.displayName ? <span>{user?.displayName}</span> : "User"}
          </span>
        </h1>
        <div className="w-20 mx-auto">
          {user.photoURL ? (
            <img
              className="rounded-full items-center"
              src={user?.photoURL}
              alt=""
            />
          ) : (
            <img
              className="rounded-full items-center"
              src="https://i.ibb.co/Mp6JjWt/user.webp"
            />
          )}
        </div>
        <p>
          {moment().format("dddd, MMMM Do YYYY, h:mm:ss a")}
        </p>

        <Marquee>
          <div className="flex">
            <h3 className=" text-2xl font-semibold">
              Assalamu Alaikum
              <span>
                {" "}
                {user?.displayName ? <span>{user?.displayName}</span> : "User"}.
              </span>
              Welcome to
              <span
                className="
              text-red-500 ml-1"
              >
                Nikah-E-Rehmat
              </span>
              . Thanks for joining us.
            </h3>
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default Profile;
