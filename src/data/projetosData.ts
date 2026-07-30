import type { Projeto } from "../types/Projetos";

const projetos: Projeto[] = [
    {
        slug: "loja-online",

        nome: "Loja Online",

        descricao:
            "Sistema de e-commerce desenvolvido em Django com gerenciamento de produtos, categorias, estoque e autenticação de usuários.",

        tecnologias: [
            "Python",
            "Django",
            "Bootstrap",
            "PostgreSQL",
            "Git"
        ],

        github: "https://github.com/Luansantos321/loja-online",

        status: "Em desenvolvimento",

        objetivo:
            "Desenvolver uma plataforma completa de comércio eletrônico utilizando Django, aplicando boas práticas de arquitetura, banco de dados e desenvolvimento web.",

        funcionalidades: [
            "Cadastro de produtos",
            "Cadastro de categorias",
            "Controle de estoque",
            "Gerenciamento de marcas",
            "Sistema de autenticação",
            "Painel administrativo"
        ],

        aprendizados: [
            "Relacionamentos entre modelos no Django",
            "Controle de estoque",
            "CRUD completo",
            "Versionamento com Git",
            "Organização de projetos em Django"
        ]
    },

    {
        slug: "cepasp",

        nome: "Sistema CEPASP",

        descricao:
            "Sistema web para gestão escolar pública desenvolvido como Trabalho de Conclusão de Curso.",

        tecnologias: [
            "Python",
            "Django",
            "Bootstrap",
            "SQLite"
        ],

        github: "https://github.com/Luansantos321/Sistema-Cepasp",

        status: "Concluído",

        objetivo:
            "Desenvolver um sistema web para auxiliar a gestão escolar, centralizando informações acadêmicas e administrativas.",

        funcionalidades: [
            "Cadastro de alunos",
            "Cadastro de professores",
            "Turmas e disciplinas",
            "Notas",
            "Frequência",
            "Controle acadêmico"
        ],

        aprendizados: [
            "Arquitetura MTV do Django",
            "Modelagem de banco de dados",
            "Autenticação de usuários",
            "Organização de aplicações Django"
        ]
    },

    {
        slug: "polos",

        nome: "Sistema de Polos",

        descricao:
            "Sistema para gerenciamento de polos educacionais, usuários, escolas e permissões.",

        tecnologias: [
            "Python",
            "Django",
            "PostgreSQL"
        ],

        github: "https://github.com/Luansantos321/SistemaDePolos",

        status: "Em análise",

        objetivo:
            "Criar um sistema para gerenciamento de polos educacionais com controle de usuários e permissões.",

        funcionalidades: [
            "Cadastro de polos",
            "Cadastro de escolas",
            "Controle de usuários",
            "Perfis de acesso",
            "Gerenciamento administrativo"
        ],

        aprendizados: [
            "Permissões no Django",
            "Uso do PostgreSQL",
            "Modelagem avançada",
            "Organização de aplicações grandes"
        ]
    },

    {
        slug: "refeitorio",

        nome: "Sistema Refeitório IF",

        descricao:
            "Sistema para controle de reservas, refeições e acesso ao refeitório.",

        tecnologias: [
            "Python",
            "Django",
            "Bootstrap"
        ],

        github: "https://github.com/Luansantos321/refeitorio-if",

        status: "Concluído/entregue",

        objetivo:
            "Automatizar o controle de refeições dos estudantes e facilitar a administração do refeitório.",

        funcionalidades: [
            "Reserva de refeições",
            "Controle de acesso",
            "Gerenciamento de estudantes",
            "Relatórios",
            "Painel administrativo"
        ],

        aprendizados: [
            "Relacionamentos complexos",
            "Regras de negócio",
            "Validação de dados",
            "Boas práticas em Django"
        ]
    }
];

export default projetos;