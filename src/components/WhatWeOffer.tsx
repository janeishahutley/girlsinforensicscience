import { GiChemicalDrop } from 'react-icons/gi';
import { MdArrowRight, MdFamilyRestroom, MdGirl, MdSchool } from 'react-icons/md';

export default function WhatWeOffer() {
  const offers = [
    {
      title: "Crime Scene Investigation",
      text: "Learn how to assess, document, and process real crime scenes — collecting and preserving evidence like the pros.",
      image: "crime-scene.jpeg",
    },
    {
      title: "DNA Analysis",
      text: "Extract and analyze DNA profiles to link suspects and victims to a crime scene.",
      image: "samples.jpeg",
    },
    {
      title: "Fingerprint Analysis",
      text: "Dust, lift, and compare fingerprints to identify suspects and solve the case.",
      image: "fingerprint.jpeg",
    },
    {
      title: "Forensic Toxicology",
      text: "Run chemical tests on evidence to determine if a victim was drugged — just like a real forensic toxicologist.",
      image: "tox.jpeg",
    },
    {
      title: "Body Fluid Analysis",
      text: "Perform serological tests on biological evidence to support criminal investigations.",
      image: "blood.jpeg",
    },
    {
      title: "Questioned Document",
      text: "Examine handwriting to detect forgeries and authenticate documents.",
      image: "document.jpeg",
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
        <div className="offersMeta">
          <div className="offersMeta__item">
            <span className="offersMeta__value">9<span className="offersMeta__unit"> Week</span></span>
            <span className="offersMeta__label">Program</span>
          </div>
          <div className="offersMeta__item">
            <span className="offersMeta__value">90<span className="offersMeta__unit"> Min</span></span>
            <span className="offersMeta__label">Per Class</span>
          </div>
          <div className="offersMeta__item">
            <span className="offersMeta__value">$300</span>
            <span className="offersMeta__label">Per Child</span>
          </div>
        </div>
        <div className="offersCallouts">
          <div className="offersCallout__item">
            <MdGirl  size={22} color="#2e7c83" />
            <span>For girls ages 8–17</span>
          </div>
          <div className="offersCallout__item">
            <GiChemicalDrop size={22} color="#2e7c83" />
            <span>Forensic kits included</span>
          </div>
          <div className="offersCallout__item">
            <MdSchool size={22} color="#888" />
            <span>Held at local schools, childcare programs, & summer camps</span>
          </div>
          <div className="offersCallout__item">
            <MdFamilyRestroom size={22} color="#d73332" />
            <span>Final showcase for families</span>
          </div>
        </div>

        <div className="offersCarousel">
          {offers.map((offer) => (
            <div className="offersCarousel__slide" key={offer.title}>
              <div className="offersCard">
                <img
                  // src={offer.image}
                  src={`${import.meta.env.BASE_URL}/${offer.image}`}
                  alt={offer.title}
                  className="offersCard__image"
                />

                <h3 className="offersCard__title">{offer.title}</h3>

                <p className="offersCard__text">{offer.text}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="offersSection__hint">
          Swipe to explore the exciting topics we will learn            
          <MdArrowRight size={28} color={"#2e7c83"} />
        </p>
      </div>
    </section>
  );
}