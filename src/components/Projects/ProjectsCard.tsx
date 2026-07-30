import type { Projeto } from "../../types/Projetos";
import { Link } from "react-router-dom";
import {FaGithub} from "react-icons/fa"

interface Props {
    projeto: Projeto;
}

function ProjectCard({ projeto }: Props) {
    return (
        <div className="project-card">

            <div className="project-content">

                <h3>{projeto.nome}</h3>

                <p>{projeto.descricao}</p>

                <div className="project-tech">

                    {projeto.tecnologias.map((tecnologia) => (
                        <span key={tecnologia}>
                            {tecnologia}
                        </span>
                    ))}

                </div>

                <div className="project-footer">

                    <span className="status">
                        {projeto.status}
                    </span>

                    <div className="project-buttons">

                        <Link
                            to={`/projetos/${projeto.slug}`}
                            className="btn-detalhes"
                        >
                            Ver detalhes
                        </Link>

                        <a
                            href={projeto.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-github"
                        >
                       <FaGithub />  
                                GitHub
                        </a>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default ProjectCard;