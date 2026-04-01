export default function WhatWeOffer() {
  const offers = [
    {
      image: "fingerprint.jpeg",
      title: "Hands-On Activities",
      text: "Students participate in engaging forensic science activities.",
    },
    {
      image: "blood.jpeg",
      title: "STEM Exposure",
      text: "Girls gain early exposure to science in a practical way.",
    },
    {
      image: "crime-scene.jpeg",
      title: "Confidence Building",
      text: "Students build confidence through problem-solving and exploration.",
    },
    {
      image: "evidence.jpeg",
      title: "Team Collaboration",
      text: "Students work together to investigate and think critically.",
    },
  ];

  return (
    <section id="offers" className="offersSection">
      <div className="offersSection__inner">
        <h2 className="offersSection__title">What We Offer</h2>
        <div className="offersSection__dots">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="offersCarousel">
          {offers.map((offer) => (
            <div className="offersCarousel__slide" key={offer.title}>
              <div className="offersCard">
                <img
                  // src={offer.image}
                  src={`${import.meta.env.BASE_URL}fingerprint.jpeg`}
                  alt={offer.title}
                  className="offersCard__image"
                />

                <h3 className="offersCard__title">{offer.title}</h3>

                <p className="offersCard__text">{offer.text}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="offersSection__hint">Swipe to explore →</p>
      </div>
    </section>
  );
}