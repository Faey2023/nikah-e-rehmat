import PropTypes from "prop-types";

const ServiceCard = ({ event }) => {
  const { name, image, description } = event || {};
  return (
    <div className="my-5">
      <div className="card bg-base-100 shadow-xl w-full h-[400px]">
        <figure className="px-10 pt-10">
          <img src={image} alt={name} className="rounded-xl  " />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>{description.slice(0, 100)}...</p>
          <button>Read more...</button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
ServiceCard.propTypes = {
  event: PropTypes.object,
};
