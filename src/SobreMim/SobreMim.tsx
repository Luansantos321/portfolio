import sobreMim from "../data/sobreMim";
import "./SobreMim.css";

function SobreMim() {
    return (
        <section id="sobre" className="sobre">

            <div className="container">

                <div className="sobre-container">

                    <div className="sobre-texto">

                        <span className="section-tag">
                            SOBRE MIM
                        </span>

                        <h2>{sobreMim.nome}</h2>

                        <h4>{sobreMim.profissao}</h4>

                        <p>{sobreMim.descricao}</p>



                    </div>

                </div>

            </div>

        </section>
    );
}

export default SobreMim;