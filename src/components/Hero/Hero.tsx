function Hero() {
    return (
        <section id="inicio" className="container py-5 text-center">

            <h1 className="display-3 fw-bold">
                Luan Santos
            </h1>

            <h2 className="h3 text-primary mb-3">
                Desenvolvedor Full Stack
            </h2>

            <p className="lead">
                Python • Django • Java • React • TypeScript • PostgreSQL
            </p>

            <p
                className="text-secondary mx-auto"
                style={{ maxWidth: "750px" }}
            >
                Desenvolvedor apaixonado por tecnologia e pela criação de
                soluções que resolvem problemas reais. Atualmente busco minha
                primeira oportunidade como Desenvolvedor Back-end ou Full Stack,
                desenvolvendo projetos completos para aprimorar minhas
                habilidades em desenvolvimento de software.
            </p>

            <div className="mt-5 d-flex justify-content-center gap-3 flex-wrap">

                <a
                    href="#projetos"
                    className="btn btn-primary btn-lg"
                >
                    Ver Projetos
                </a>

                <a
                    href="https://github.com/Luansantos321"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-dark btn-lg"
                >
                    GitHub
                </a>

                <a
                    href="https://linkedin.com/in/luan-santos-da-silva-1414ab369"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-primary btn-lg"
                >
                    LinkedIn
                </a>

                <a
                    href="#contato"
                    className="btn btn-outline-primary btn-lg"
                >
                    Contato
                </a>

            </div>

        </section>
    );
}

export default Hero;