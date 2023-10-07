import Marquee from "react-fast-marquee";
import moment from "moment";
import UseAuth from "../../custom hooks/UseAuth";

const Profile = () => {
  const { user } = UseAuth();
  return (
    <div className=" hero-content text-center items-center flex-col">
      <div className=" card max-h-80 border space-y-12">
        <h1 className="text-2xl text-center">Hello User</h1>
        <h1>{user?.displayName}</h1>
        <img
          className="rounded-full items-center"
          src={user?.photoURL}
          alt=""
        />

        {moment().format("dddd, MMMM Do YYYY, h:mm:ss a")}
        <Marquee>
          <h3 className=" text-2xl font-semibold">
            Assalamu Alaikum <span> {user?.displayName}.</span> Welcome to
            Nikah-E-Rehmat. Thanks for joining us.
          </h3>
        </Marquee>
      </div>
    </div>
  );
};

export default Profile;
