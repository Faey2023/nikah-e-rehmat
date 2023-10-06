import AOS from "aos";
import "aos/dist/aos.css";
const AosImages = () => {
  AOS.init();
  return (
    <div className="w-full h-full grid grid-col-1 md:grid-col-2 lg:grid-cols-3 gap-3 mb-5">
      <div
        className="card"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/6wn24bt/6840acaad92327ed2e551385e355b97d.jpg)",
        }}
        data-aos="fade-left"
      >
        <div className="h-64 w-64">hello</div>
      </div>
      <div
        className="card"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/09JvH5W/b8ace3942d6f23f6a83ad384ce02a0b1.jpg)",
        }}
        data-aos="fade-down"
      >
        <div className="h-64 w-64">hello</div>
      </div>

      <div
        className="card"
        style={{
          backgroundImage: "url(https://i.ibb.co/J5LkyvM/Anais-Events-6.jpg)",
        }}
        data-aos="fade-right"
        data-aos-delay="300"
      >
        <div className="h-64 w-64">hello</div>
      </div>
    </div>
  );
};

export default AosImages;
