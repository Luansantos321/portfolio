import projetos from "../../data/projetosData";
import ProjectCard from "./ProjectsCard";
import "./Projects.css";

function Projects() {
    return (
        <section id="projetos" className="projects">

            <div className="container">

                <div className="titulo-section">

                    <h2>Projetos</h2>

                    <p>
                        Alguns projetos que desenvolvi para aplicar conhecimentos
                        em desenvolvimento web, arquitetura de software e boas
                        práticas de programação.
                    </p>

                </div>

                <div className="projects-grid">

                    {projetos.map((projeto) => (
                        <ProjectCard
                            key={projeto.nome}
                            projeto={projeto}
                        />
                    ))}

                </div>

            </div>

        </section>
    );
}

export default Projects;