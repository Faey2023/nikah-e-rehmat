const Header = () => {
  return (
    <div>
      <section
        className="hero min-h-[calc(100vh-60px)] mb-5"
        style={{
          backgroundImage: "url(https://i.ibb.co/MgHFqvD/2.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-xl">
            <h1 className="mb-5 text-3xl font-extrabold">
              In the Name of Allah. <br /> Crafting Your Blessed Wedding.
            </h1>
            <p className="mb-5 text-2xl font-semibold">
              And one of His signs is that He has created for you, spouses from
              amongst yourselves so that you might take comfort in them and He
              has placed between you, love and mercy. In this there is surely
              evidence (of the truth) for the people who carefully think.
              (30:21)
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;
