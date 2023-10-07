import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const About = () => {
  return (
    <div className=" border my-5">
      <h1 className="text-center text-4xl underline italic font-semibold">
        About Us
      </h1>
      <div className=" hero-content grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
          <div className="relative mx-4 mt-4 h-80 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
            <img src="https://i.ibb.co/ZJYt3SY/ma.webp" alt="profile-picture" />
          </div>
          <div className="p-6 text-center">
            <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              Efayet Alam
            </h4>
            <p className="block bg-gradient-to-tr from-red-600 to-red-400 bg-clip-text font-sans text-base font-medium leading-relaxed text-transparent antialiased">
              Co-Founder/Marketing and Sales Specialist
            </p>
          </div>
          <div className="flex justify-center gap-7 p-6 pt-2">
            <a className="block text-4xl antialiased">
              <FaFacebook />
            </a>
            <a className="block text-4xl antialiased">
              <FaTwitter />
            </a>
            <a className="block text-4xl antialiased">
              <FaInstagram />
            </a>
          </div>
        </div>
        <div className="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
          <div className="relative mx-4 mt-4 h-80 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
            <img src="https://i.ibb.co/MPJYBmD/fe.jpg" alt="profile-picture" />
          </div>
          <div className="p-6 text-center">
            <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              Faheema Harun
            </h4>
            <p className="block bg-gradient-to-tr from-red-600 to-red-400 bg-clip-text font-sans text-base font-medium leading-relaxed text-transparent antialiased">
              CEO / IT and Website Manager
            </p>
          </div>
          <div className="flex justify-center gap-7 p-6 pt-2">
            <a className="block text-4xl antialiased">
              <FaFacebook />
            </a>
            <a className="block text-4xl antialiased">
              <FaTwitter />
            </a>
            <a className="block text-4xl antialiased">
              <FaInstagram />
            </a>
          </div>
        </div>
        <div className="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
          <div className="relative mx-4 mt-4 h-80 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
            <img src="https://i.ibb.co/MPJYBmD/fe.jpg" alt="profile-picture" />
          </div>
          <div className="p-6 text-center">
            <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              Farhana Harun
            </h4>
            <p className="block bg-gradient-to-tr from-red-600 to-red-400 bg-clip-text font-sans text-base font-medium leading-relaxed text-transparent antialiased">
              Wedding Planner/Coordinator
            </p>
          </div>
          <div className="flex justify-center gap-7 p-6 pt-2">
            <a className="block text-4xl antialiased">
              <FaFacebook />
            </a>
            <a className="block text-4xl antialiased">
              <FaTwitter />
            </a>
            <a className="block text-4xl antialiased">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
