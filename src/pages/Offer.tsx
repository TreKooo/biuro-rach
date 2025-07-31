import React from "react";
import "./Offer.css"; // jeśli chcesz trzymać style oddzielnie

const Offer: React.FC = () => {
  return (
    <section className="offer">
      <div className="offer-hero">
        <h2>Nasza Oferta</h2>
        <p>
          W LuxTax wierzymy w przejrzystość, profesjonalizm i indywidualne
          podejście. Sprawdź, jak możemy pomóc rozwinąć Twój biznes.
        </p>
      </div>

      <div className="offer-services">
        <div className="service-card">
          <h3>Pełna księgowość</h3>
          <p>
            Kompleksowa obsługa rachunkowa — od prowadzenia ksiąg, przez
            sprawozdania finansowe, po reprezentację przed urzędami.
          </p>
        </div>

        <div className="service-card">
          <h3>Kadry i płace</h3>
          <p>
            Obsługa listy płac, rozliczenia umów, dokumentacja pracownicza —
            wszystko zgodnie z obowiązującymi przepisami.
          </p>
        </div>

        <div className="service-card">
          <h3>Doradztwo podatkowe</h3>
          <p>
            Optymalizacja kosztów, planowanie podatkowe i bieżące konsultacje z
            ekspertem.
          </p>
        </div>

        <div className="service-card">
          <h3>Start-up i doradztwo</h3>
          <p>
            Pomoc przy zakładaniu działalności, wyborze formy opodatkowania i
            wsparcie na starcie.
          </p>
        </div>
      </div>

      <div className="offer-cta">
        <h4>Masz pytania?</h4>
        <p>
          Skontaktuj się z nami i umów bezpłatną konsultację — razem znajdziemy
          najlepsze rozwiązanie.
        </p>
        <button className="btn-primary">Skontaktuj się</button>
      </div>
    </section>
  );
};

export default Offer;
