import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ServiceCard = ({ event }) => {
  const { id, name, image, description } = event || {};
  return (
    <div className="my-5">
      <div className="card bg-base-200 shadow-xl w-full h-[400px]">
        <figure className="px-10 pt-10">
          <img src={image} alt={name} className="rounded-xl h-full w-full" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title italic underline text-xl">{name}</h2>
          <p>{description.slice(0, 100)}...</p>
          <Link className="btn btn-outline " to={`/event/${id}`}>
            Details...
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
ServiceCard.propTypes = {
  event: PropTypes.object,
};
