import React from "react";

const Offer: React.FC = () => (
  <section className="hero">
    <h2>Profesjonalne usługi księgowe dla Twojej firmy</h2>
    <p>
      Zapewniamy kompleksową obsługę rachunkową, doradztwo podatkowe i pełną
      transparentność.
    </p>
    <button className="btn-primary">Skontaktuj się z nami</button>

    <section className="services" style={{ marginTop: "3rem" }}>
      <h3>Nasze usługi</h3>
      <ul>
        <li>Pełna księgowość</li>
        <li>Rozliczenia podatkowe</li>
        <li>Obsługa kadrowo-płacowa</li>
        <li>Porady finansowe</li>
      </ul>
    </section>
  </section>
);

export default Offer;
