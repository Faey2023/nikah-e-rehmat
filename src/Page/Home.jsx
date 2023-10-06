import AosImages from "../Components/Aos/AosImages";
import Header from "../Components/Header/Header";
import Gallery from "../Components/gallery/Gallery";
import Services from "./Services.jsx/Services";

const Home = () => {
  return (
    <div className=" space-y-5">
      <Header />
      <AosImages />
      <Services />
      <Gallery />
    </div>
  );
};

export default Home;
