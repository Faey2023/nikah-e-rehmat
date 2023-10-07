const Faq = () => {
  return (
    <>
      <section className=" my-5">
        <h1 className=" my-5 text-center text-4xl underline italic font-semibold">
          Frequently asked Questions
        </h1>
        <div className=" my-5 join join-vertical w-full">
          {/* question-1  */}
          <div className="join-item border border-base-300">
            <details className="collapse ">
              <summary className="collapse-title text-xl font-medium">
                What Makes Your Islamic Wedding Services Unique?
              </summary>
              <div className="collapse-content">
                <p>
                  Our team is dedicated to preserving the cultural and spiritual
                  significance of Islamic weddings. We specialize in seamlessly
                  blending tradition with modernity, ensuring that your wedding
                  reflects your faith and values while offering a unique and
                  memorable experience for you and your guests.
                </p>
              </div>
            </details>
          </div>
          {/* question-2  */}
          <div className="join-item border border-base-300">
            <details className="collapse ">
              <summary className="collapse-title text-xl font-medium">
                How Do I Customize My Wedding Package?
              </summary>
              <div className="collapse-content">
                <p>
                  We understand that every couple&apos;s needs and preferences
                  are unique. You can customize your wedding package by choosing
                  from our range of services and tailoring them to suit your
                  requirements. Our experienced team will work closely with you
                  to create a personalized package that aligns with your vision
                  and budget.
                </p>
              </div>
            </details>
          </div>
          {/* question-3  */}
          <div className="join-item border border-base-300">
            <details className="collapse ">
              <summary className="collapse-title text-xl font-medium">
                Can You Assist with Destination Islamic Weddings?
              </summary>
              <div className="collapse-content">
                <p>
                  Absolutely! We have experience in planning destination Islamic
                  weddings and can assist you in selecting the perfect location
                  that respects Islamic customs and provides the ambiance you
                  desire. Whether you dream of a destination wedding or a local
                  celebration, we are here to make it a reality.
                </p>
              </div>
            </details>
          </div>
          {/* question-4  */}
          <div className="join-item border border-base-300">
            <details className="collapse ">
              <summary className="collapse-title text-xl font-medium">
                Do You Offer Pre-Marital Counseling Services?
              </summary>
              <div className="collapse-content">
                <p>
                  Yes, we believe in supporting couples not only on their
                  wedding day but also in their journey together. We provide
                  pre-marital counseling services conducted by qualified
                  professionals who can offer guidance and advice on building a
                  strong foundation for a happy and lasting marriage.
                </p>
              </div>
            </details>
          </div>
          {/* question-5  */}
          <div className="join-item border border-base-300">
            <details className="collapse ">
              <summary className="collapse-title text-xl font-medium">
                How Far in Advance Should I Book Your Services?
              </summary>
              <div className="collapse-content">
                <p>
                  We recommend booking our services as early as possible,
                  ideally 6 to 12 months in advance. This allows us to secure
                  your preferred date and venues, ensuring a stress-free
                  planning process. However, we can also accommodate last-minute
                  requests based on availability, so feel free to reach out to
                  discuss your specific needs.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>
    </>
  );
};

export default Faq;
