import tecnologias from "../../data/tecnologias";
import TecnologiaCard from "./TecnologiaCard";
import "./Tecnologias.css";

function Tecnologias() {
    return (
        <section id="tecnologias" className="tecnologias">

            <div className="container">

                <div className="titulo-section">

                    <h2>Tecnologias</h2>

                    <p>
                        Tecnologias que utilizo para desenvolver aplicações web
                        modernas, escaláveis e de alta qualidade.
                    </p>

                </div>

                <div className="tecnologias-grid">

                    {tecnologias.map((tecnologia) => (
                        <TecnologiaCard
                            key={tecnologia.nome}
                            tecnologia={tecnologia}
                        />
                    ))}

                </div>

            </div>

        </section>
    );
}

export default Tecnologias;