import AOS from "aos";
import "aos/dist/aos.css";
const Gallery = () => {
  AOS.init();
  return (
    <>
      <section className=" max-w-7xl mx-auto my-5">
        <h1 className="text-center text-4xl underline italic font-semibold my-5">
          Featured images from our previous wedding events.
        </h1>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div
            data-aos="flip-down"
            data-aos-easing="linear"
            data-aos-duration="3000"
          >
            <img
              className="h-full w-full rounded-lg"
              src="https://i.ibb.co/Jct8DXV/11.jpg"
              alt=""
            />
          </div>
          <div
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <img
              className="h-full w-full rounded-lg"
              src="https://i.ibb.co/nj7V1nX/e15646e87b67282c936af6e7e414ddf0.jpg"
              alt=""
            />
          </div>
          <div
            data-aos="flip-down"
            data-aos-easing="linear"
            data-aos-duration="3000"
          >
            <img
              className="h-full w-full rounded-lg"
              src="https://i.ibb.co/09JvH5W/b8ace3942d6f23f6a83ad384ce02a0b1.jpg"
              alt=""
            />
          </div>
          <div
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <img
              className="h-full w-full rounded-lg"
              src="https://i.ibb.co/6wn24bt/6840acaad92327ed2e551385e355b97d.jpg"
              alt=""
            />
          </div>
          <div
            data-aos="flip-down"
            data-aos-easing="linear"
            data-aos-duration="3000"
          >
            <img
              className="h-full w-full rounded-lg"
              src="https://i.ibb.co/St7bkSj/8-2.webp"
              alt=""
            />
          </div>
          <div
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <img
              className="h-full w-full rounded-lg"
              src="https://i.ibb.co/pZSzbmv/12.jpg"
              alt=""
            />
          </div>
          <div
            data-aos="flip-down"
            data-aos-easing="linear"
            data-aos-duration="3000"
          >
            <img
              className="h-full w-full rounded-lg"
              src="https://i.ibb.co/F4QnLVX/2.jpg"
              alt=""
            />
          </div>
          <div
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <img
              className="h-full w-full rounded-lg"
              src="https://i.ibb.co/6gTJ1tC/3.jpg"
              alt=""
            />
          </div>
          <div
            data-aos="flip-down"
            data-aos-easing="linear"
            data-aos-duration="3000"
          >
            <img
              className="h-full w-full rounded-lg"
              src="https://i.ibb.co/6wBKrZF/5.jpg"
              alt=""
            />
          </div>
          <div
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <img
              className="h-full w-full rounded-lg"
              src="https://i.ibb.co/gSZ9nwN/7.jpg"
              alt=""
            />
          </div>
          <div
            data-aos="flip-down"
            data-aos-easing="linear"
            data-aos-duration="3000"
          >
            <img
              className="h-full w-full rounded-lg"
              src="https://i.ibb.co/s9tmDWD/9.jpg"
              alt=""
            />
          </div>
          <div
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <img
              className="h-full w-full rounded-lg"
              src="https://i.ibb.co/54rTYZH/10.jpg"
              alt=""
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
