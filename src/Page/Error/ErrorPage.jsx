import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/tQNz6Qc/circle-scatter-haikei.png)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">404</h1>
            <p className="mb-5">Sorry the page you requested was not found.</p>
            <button className="btn btn-accent">
              <Link to="/">Go to Home</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
