import { useParams, Link } from "react-router-dom";
import projetos from "../data/projetosData";

import "./ProjetoDetalhes.css";


function ProjetoDetalhes() {
    const { slug } = useParams();

    const projeto = projetos.find(
        (p) => p.slug === slug
    );

    if (!projeto) {
        return (
            <section className="projeto-detalhes">
                <div className="container">

                    <h2>Projeto não encontrado.</h2>

                    <Link to="/">
                        Voltar para a página inicial
                    </Link>

                </div>
            </section>
        );
    }

    return (
        <section className="projeto-detalhes">

            <div className="container">

                <Link
                    to="/"
                    className="voltar"
                >
                    ← Voltar
                </Link>

                <header className="cabecalho-projeto">

                    <h1>{projeto.nome}</h1>

                    <span className="status">
                        {projeto.status}
                    </span>

                    <p>
                        {projeto.descricao}
                    </p>

                </header>

                <section className="card-detalhes">

                    <h2>Tecnologias Utilizadas</h2>

                    <div className="tecnologias">

                        {projeto.tecnologias.map((tecnologia) => (
                            <span key={tecnologia}>
                                {tecnologia}
                            </span>
                        ))}

                    </div>

                </section>

                <section className="card-detalhes">

                    <h2>Objetivo do Projeto</h2>

                    <p>
                        Este projeto foi desenvolvido com o objetivo de aplicar
                        conhecimentos em desenvolvimento web, arquitetura de
                        software, banco de dados e boas práticas de programação.
                    </p>

                </section>

                <section className="card-detalhes">

                    <h2>Principais Funcionalidades</h2>

                    <ul>

                        <li>Autenticação de usuários.</li>

                        <li>CRUD completo.</li>

                        <li>Validação de dados.</li>

                        <li>Banco de dados relacional.</li>

                        <li>Interface responsiva.</li>

                    </ul>

                </section>

                <section className="card-detalhes">

                    <h2>Aprendizados</h2>

                    <p>
                        Durante o desenvolvimento deste projeto foram
                        aprofundados conhecimentos em organização de código,
                        desenvolvimento Full Stack, versionamento com Git e
                        modelagem de banco de dados.
                    </p>

                </section>

                <div className="acoes">

                    <a
                        href={projeto.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-github"
                    >
                        Ver repositório no GitHub
                    </a>

                </div>

            </div>

        </section>
    );
}

export default ProjetoDetalhes;