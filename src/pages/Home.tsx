import React from "react";
import "./Home.css"; // opcjonalnie osobny plik CSS

const Home: React.FC = () => {
  return (
    <section className="home">
      <div className="home-hero">
        <h1>Biuro Rachunkowe LuxTax</h1>
        <p>Twój partner w biznesie. Zaufaj profesjonalistom.</p>
        <a href="/offer" className="btn-primary">
          Poznaj naszą ofertę
        </a>
      </div>

      <div className="home-intro">
        <h2>Dlaczego LuxTax?</h2>
        <p>
          Od lat wspieramy przedsiębiorców w Polsce, oferując kompleksową
          obsługę księgową, doradztwo podatkowe i kadry. Nasz zespół ekspertów
          dba o Twoje bezpieczeństwo finansowe, tak abyś Ty mógł skupić się na
          rozwoju firmy.
        </p>
      </div>

      <div className="home-values">
        <div className="value-card">
          <h3>Doświadczenie</h3>
          <p>
            Ponad 10 lat praktyki w branży finansowej i setki zadowolonych
            klientów.
          </p>
        </div>
        <div className="value-card">
          <h3>Zaufanie</h3>
          <p>
            Bezpieczeństwo danych i pełna dyskrecja — zawsze na pierwszym
            miejscu.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Home;
