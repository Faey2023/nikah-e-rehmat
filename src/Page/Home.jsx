// import AosImages from "../Components/Aos/AosImages";
import Faq from "../Components/FAQ/Faq";
import Header from "../Components/Header/Header";
import Gallery from "../Components/gallery/Gallery";
import Services from "./Services.jsx/Services";

const Home = () => {
  return (
    <div className=" space-y-5">
      <Header />
      {/* <AosImages /> */}
      <Services />
      <Gallery />
      <Faq />
    </div>
  );
};

export default Home;
