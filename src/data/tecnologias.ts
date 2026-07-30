import type { Tecnologia } from "../types/Tecnologia";

const tecnologias: Tecnologia[] = [
    {
        nome: "Python",
        categoria: "Back-end",
        descricao: "Desenvolvimento de aplicações web, APIs REST e automações.",
        icone: "devicon-python-plain"
    },
    {
        nome: "Django",
        categoria: "Framework",
        descricao: "Construção de sistemas web completos utilizando arquitetura MTV.",
        icone: "devicon-django-plain"
    },
    {
        nome: "Java",
        categoria: "Back-end",
        descricao: "Estudando desenvolvimento orientado a objetos e Spring Boot.",
        icone: "devicon-java-plain"
    },
    {
        nome: "React",
        categoria: "Front-end",
        descricao: "Criação de interfaces modernas utilizando componentes reutilizáveis.",
        icone: "devicon-react-original"
    },
    {
        nome: "PostgreSQL",
        categoria: "Banco de Dados",
        descricao: "Modelagem e gerenciamento de bancos de dados relacionais.",
        icone: "devicon-postgresql-plain"
    },
    {
        nome: "Git",
        categoria: "Versionamento",
        descricao: "Controle de versão e colaboração utilizando Git e GitHub.",
        icone: "devicon-git-plain"
    }
];

export default tecnologias;