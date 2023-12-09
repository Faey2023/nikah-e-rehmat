import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import ServiceDetailCard from "./ServiceDetailCard";

const ServiceDetail = () => {

  const [event, setEvent] = useState({});
  const events = useLoaderData();
  const { id } = useParams();
  useEffect(() => {
    const findEvents = events?.find((e) => e.id == id);
    setEvent(findEvents);
  }, [id, events]);

  return (
    <div>
      <h1 className="text-center text-4xl underline italic font-semibold">
        Service Details
      </h1>
      <ServiceDetailCard event={event} />
    </div>
  );
};

export default ServiceDetail;
