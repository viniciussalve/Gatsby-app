import React from 'react'
import Link from 'gatsby-link'
import { FaHtml5, FaGithub, FaBehance, FaLinkedin, FaRobot, FaPen, FaLaptop } from 'react-icons/fa'

const IndexPage = () => (
  <div>
    <div className="Hero">
      <div className="Container">
        <div className="HeroGroup">
          <div className="HeroText">
            <h1>Olá, tudo bem?!</h1>
            <h3>Meu nome é Vinicius e esse é o Alley!</h3>
            <p>Tenho 20 anos e e aqui é onde posto um pouco do que sei!
        Sou Desenvolvedor Web, atualmente focado em ReactJs, React Native e NodeJs. Me interessei por essa área a mais ou menos 2 anos e resolvi criar esse site para postar um pouco da minha experiência! Espero que goste.</p>

            <div className="LinkGroup">
              <div className="Social">
                <FaGithub />
                <a href="https://github.com/viniciussalve">Github
              </a>
              </div>

              <div className="Social">
                <FaBehance />
                <a href="https://www.behance.net/viniciusalvess">Behance
              </a>
              </div>

              <div className="Social">
                <FaLinkedin />
                <a href="https://www.linkedin.com/">
                  Linkedin
              </a>
              </div>
            </div>
          </div>
          <div className="HeroImage">
            <div className="Tabs">
              <div className="Tab"><FaLaptop /><p>Develop</p></div>
              <div className="Tab"><FaPen /><p>Design</p></div>
            </div>
            <div className="Code">
              <div className="ProjectName"><FaHtml5 /><p>website.html</p></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default IndexPage
