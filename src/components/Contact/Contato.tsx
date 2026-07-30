import {
    FaGithub,
    FaLinkedin,
    FaEnvelope,
    FaWhatsapp
} from "react-icons/fa";

import "./Contato.css";

function Contato() {
    return (
        <section
            id="contato"
            className="contato"
        >

            <div className="container">

                <div className="section-title">

                    <h2>Contato</h2>

                    <p>
                        Estou em busca da minha primeira oportunidade como
                        Desenvolvedor Back-end ou Full Stack. Será um prazer
                        conversar sobre oportunidades, projetos ou tecnologia.
                    </p>

                </div>

                <div className="contato-grid">

                    <a
                        href="mailto:luansantosdasilva77@gmail.com"
                        className="contato-card"
                    >
                        <FaEnvelope />

                        <h3>E-mail</h3>

                        <span>
                            luansantosdasilva77@gmail.com
                        </span>

                    </a>

                    <a
                        href="https://github.com/Luansantos321"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contato-card"
                    >
                        <FaGithub />

                        <h3>GitHub</h3>

                        <span>
                            github.com/Luansantos321
                        </span>

                    </a>

                    <a
                        href="https://linkedin.com/in/luan-santos-da-silva-1414ab369"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contato-card"
                    >
                        <FaLinkedin />

                        <h3>LinkedIn</h3>

                        <span>
                            Luan Santos da Silva
                        </span>

                    </a>

                    <a
                        href="https://wa.me/5577991485293"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contato-card"
                    >
                        <FaWhatsapp />

                        <h3>WhatsApp</h3>

                        <span>
                            Conversar
                        </span>

                    </a>

                </div>

            </div>

        </section>
    );
}

export default Contato;