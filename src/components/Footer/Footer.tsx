import {
    FaGithub,
    FaLinkedin,
    FaEnvelope
} from "react-icons/fa";

import "./Footer.css";

function Footer() {
    return (
        <footer className="footer">

            <div className="container">

                <h3>Luan Santos</h3>

                <p>
                    Desenvolvedor Full Stack | Python • Django • Java • React
                </p>

                <div className="footer-links">

                    <a
                        href="https://github.com/Luansantos321"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaGithub />
                    </a>

                    <a
                        href="https://linkedin.com/in/luan-santos-da-silva-1414ab369"
                        title="LinkedIn"
                    >
                        <FaLinkedin />
                    </a>

                    <a
                        href="#contato"
                        title="Contato"
                    >
                        <FaEnvelope />
                    </a>

                </div>

                <hr />

                <p className="copyright">
                    © 2026 Luan Santos. Todos os direitos reservados.
                </p>

            </div>

        </footer>
    );
}

export default Footer;