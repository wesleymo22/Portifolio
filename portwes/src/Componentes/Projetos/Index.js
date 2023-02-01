import CardProjetos from '../CardProjetos/Index'
import './Projetos.css'
import React, { useState } from 'react';

const Projetos = () => {

    const listaProjetos = [
        {
            nome: "CCZ Copiadoras",
            descricao: "Trabalho Freelance de um site corporativo de manutenção de impressoras",
            tecnologias: "HTML, CSS e ReactJS",
            imagem: "Imagens/ccz.png",
            git: "https://github.com/wesleymo22/CCZ-Copiadoras",
            link: "https://cczcopiadoras.com.br"
        },
        {
            nome: "Organo",
            descricao: "Projeto de um site onde voce pode adicionar colaboradores a um time a partir de um formulario",
            tecnologias: "HTML, CSS e ReactJS",
            imagem: "Imagens/organo.png",
            git: "https://github.com/wesleymo22/Primeiro-React",
            link: "https://primeiro-react-nine.vercel.app/"
        },
        {
            nome: "Mochila de Viagem",
            descricao: "Site onde voce pode adicionar itens a mochila, salvando os dados no cache da maquina",
            tecnologias: "HTML, CSS e JavaScript",
            imagem: "Imagens/mochila.png",
            git: "https://github.com/wesleymo22/Mochila-de-viagem",
            link: "https://wesleymo22.github.io/Mochila-de-viagem/"
        },
        {
            nome: "Calculadora",
            descricao: "Calculadora do Windows que raliza todas as operaçoes matematicas",
            tecnologias: "HTML, CSS e JavaScript",
            imagem: "Imagens/calculadora.png",
            git: "https://github.com/wesleymo22/Calculadora",
            link: "https://wesleymo22.github.io/Calculadora/"
        },
        {
            nome: "Jogo da Velha",
            descricao: "Site onde voce pode jogar o jogo da velha em 2 jogadores ou contra IA",
            tecnologias: "HTML, CSS e JavaScript",
            imagem: "Imagens/jogodavelha.png",
            git: "https://github.com/wesleymo22/Jogo_da_Velha",
            link: "https://wesleymo22.github.io/Jogo_da_Velha/"
        },
        {
            nome: "Alura Midi",
            descricao: "Projeto de um Midi musical, ao clicar nos botoes executa um som de cada instrumento",
            tecnologias: "HTML, CSS e JavaScript",
            imagem: "Imagens/aluramidi.png",
            git: "https://github.com/wesleymo22/MIDI",
            link: "https://wesleymo22.github.io/MIDI/"
        },
        {
            nome: "Alura Books",
            descricao: "Site responsivo de uma plataforma de leitura de livros",
            tecnologias: "HTML e CSS",
            imagem: "Imagens/alurabooks.png",
            git: "https://github.com/wesleymo22/Alura-Books",
            link: "https://wesleymo22.github.io/Alura-Books/"
        },
        {
            nome: "Alura Plus",
            descricao: "Site desenvolvido totalmente em HTML e CSS utilizando varios recursos",
            tecnologias: "HTML e CSS",
            imagem: "Imagens/aluraplus.png",
            git: "https://github.com/wesleymo22/Alura-Plus",
            link: "https://wesleymo22.github.io/Alura-Plus/"
        },
        {
            nome: "HCZ",
            descricao: "Site de uma plataforma de videos e imagens, focado em grid e flex do CSS",
            tecnologias: "HTML e CSS",
            imagem: "Imagens/hcz.png",
            git: "https://github.com/wesleymo22/Grid-e-Flex",
            link: "https://wesleymo22.github.io/Grid-e-Flex/"
        }
    ];



    return (
        <section id='projetos'>
            <h2>Projetos</h2>
            <ul>
                {listaProjetos.map(projeto =>
                    <li>
                        <CardProjetos 
                        key={projeto.nome} 
                        titulo={projeto.nome} 
                        descricao={projeto.descricao}
                        tecnologias={projeto.tecnologias}
                        imagem={projeto.imagem}
                        git={projeto.git}
                        link={projeto.link}
                        />
                    </li>
                )};
            </ul>
        </section>
    )
}

export default Projetos
