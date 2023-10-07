import PropTypes from "prop-types";


const ServiceDetailCard = ({ event }) => {
  const { name, image, price, description } = event || {};
  //   console.log(event);
  return (
    <div>
      <div className="container mx-auto my-5">
        <div>
          <img
            className="w-screen h-[70vh] rounded-lg"
            src={image}
            alt={name}
          />
        </div>
        <div className="relative -mt-20 bg-[#0b0b0b80]">
          <button // onClick={handleBooking}
            className=" w-[110px] h-[48px] bg-red-500 text-white my-auto text-xl font-medium ml-4"
          >
            Book Now
          </button>
        </div>
        <div className=" mt-10 card bg-base-200">
          <div className=" card-body">
            <h1 className=" text-4xl font-bold">{name}</h1>
            <p className="text-[#0b0b0bb3] text-lg font-medium italic">
              {description}
            </p>
            <p className=" text-xl font-extrabold">
              Price: <span className=" text-red-500">{price}</span>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailCard;
ServiceDetailCard.propTypes = {
  event: PropTypes.object,
};