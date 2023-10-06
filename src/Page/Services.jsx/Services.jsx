import { useEffect } from "react";
import { useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    fetch("/public/data/data.json")
      .then((res) => res.json())
      .then((data) => setEvents(data));
  }, []);
  return (
    <div>
      <div className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {events?.map((event) => (
          <ServiceCard key={event.id} event={event}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
