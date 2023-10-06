import AOS from "aos";
import "aos/dist/aos.css";
const AosImages = () => {
  AOS.init();
  return (
    <div className=" ">
      <div
        className="w-full h-full"
        data-aos="fade-up"
        style={{
          backgroundImage: "url(https://i.ibb.co/ZJtJ3W7/t.jpg)",
        }}
      >
        <h1>hello trying</h1>
      </div>
    </div>
  );
};

export default AosImages;
