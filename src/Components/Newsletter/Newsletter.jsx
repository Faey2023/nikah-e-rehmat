const Newsletter = () => {
  return (
    <div className=" max-h-fit mx-auto">
      <h1 className="text-center text-4xl underline italic font-semibold my-5">
        Stay connected through email.
      </h1>
      <div
        className="hero"
        style={{
          backgroundImage: "url(https://i.ibb.co/Y8TWCdw/n.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-3xl font-semibold text-white">
              Subscribe to our newsletter for upcoming discount and offers.
            </h1>
            <div className="mb-5">
              <div className="join">
                <input
                  className="input input-bordered join-item"
                  placeholder="Enter your email"
                />
                <button className="btn join-item rounded-lg">Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
