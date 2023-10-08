import PropTypes from "prop-types";
import swal from "sweetalert";

const ServiceDetailCard = ({ event }) => {
  const { name, image, price, description } = event || {};
  //   console.log(event);
  const handleBooking = () => {
    swal("Thanks for trusting us!!", "We will contact you soon.", "success");
  };
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

        <div className=" mt-10 card bg-base-200">
          <div className=" card-body">
            <h1 className=" text-4xl font-bold">{name}</h1>
            <p className="text-[#0b0b0bb3] text-lg font-medium italic">
              {description}
            </p>
            <p className=" text-xl font-extrabold">
              Price: <span className=" text-red-500">{price}</span>{" "}
            </p>
            <button
              onClick={handleBooking}
              className=" w-[110px] h-[48px] bg-red-500 text-white my-auto text-xl font-medium"
            >
              Book Now
            </button>
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
