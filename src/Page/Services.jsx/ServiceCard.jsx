import PropTypes from "prop-types";

const ServiceCard = ({ event }) => {
  const { name, image, price, description } = event || {};
  return (
    <div className="my-5">
      <div className="card bg-red-500 shadow-xl w-full h-[400px]">
        <figure className="px-10 pt-10">
          <img src={image} alt={name} className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title italic underline text-xl">{name}</h2>
          <p>
            Starting form <span>{price}</span>
          </p>
          <p>{description.slice(0, 100)}...</p>
          <button>Details...</button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
ServiceCard.propTypes = {
  event: PropTypes.object,
};
