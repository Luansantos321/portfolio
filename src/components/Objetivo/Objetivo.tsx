import objetivo from "../../data/objetivo";

import "./Objetivo.css";

function Objetivo() {
    return (
        <section
            id="objetivo"
            className="objetivo"
        >
            <div className="container">

                <div className="section-title">

                    <h2>
                        {objetivo.titulo}
                    </h2>

                </div>

                <div className="objetivo-card">

                    <p>
                        {objetivo.texto}
                    </p>

                </div>

            </div>
        </section>
    );
}

export default Objetivo;