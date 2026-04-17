import { useState, useEffect } from 'react';
import ProjectCard from './assets/components/ProjectCard';

// Importação das imagens
import projt from './assets/projt.jpeg';
import perfil from './assets/perfil.jpeg';
import projt2 from './assets/projt2.jpeg';
import './index.css';

function App() {
  const PHONE_NUMBER = '558681867881';

  useEffect(() => {
    // Menu Mobile
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');

    const toggleMenu = () => navLinks.classList.toggle('active');
    hamburger.addEventListener('click', toggleMenu);

    // Fechar menu ao clicar no link
    const closeMenu = () => navLinks.classList.remove('active');
    document.querySelectorAll('.nav-links li a').forEach(link => {
      link.addEventListener('click', closeMenu);
    });

    // Intersection Observer (Fade Up)
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

    // Scroll Header
    const handleScroll = () => {
      const header = document.querySelector('header');
      if (window.scrollY > 20) {
        header.style.background = 'rgba(8, 10, 18, 0.85)';
        header.style.backdropFilter = 'blur(16px)';
      } else {
        header.style.background = 'rgba(10, 12, 18, 0.75)';
      }
    };
    window.addEventListener('scroll', handleScroll);

    // Cleanup para evitar vazamento de memória
    return () => {
      hamburger.removeEventListener('click', toggleMenu);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    const name = document.getElementById('waName').value.trim();
    const message = document.getElementById('waMessage').value.trim();

    if (!name) {
      alert("Por favor, preencha o seu nome.");
      return;
    }

    const finalText = message 
      ? `Olá! Meu nome é ${name}. ${message}`
      : `Olá! Meu nome é ${name}. Gostaria de saber mais sobre seus serviços.`;

    window.open(`https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(finalText)}`, '_blank');
  };

  return (
    <>
      <header>
        <div className="nav-container">
          <div className="logo">Portifolio</div>
          <div className="hamburger" id="hamburger">
            <i className="fas fa-bars"></i>
          </div>
          <ul className="nav-links" id="navLinks">
            <li><a href="#home">Início</a></li>
            <li><a href="#sobre">Sobre Mim</a></li>
            <li><a href="#projetos">Meus Projetos</a></li>
            <li><a href="#contato">Contato</a></li>
          </ul>
        </div>
      </header>

      <main>
        <section id="home">
          <div className="container">
            <div className="hero">
              <div className="hero-content">
                <h1>Olá, eu sou <span className="moving-font">Fabricio Oliveira</span></h1>
                <div className="tagline">
                  <i className="fas fa-code"></i> <span className="moving-font">Desenvolvedor em Formação</span>
                </div>
                <p className="hero-description">
                  Transformo ideias em animações fluidas e foco em performance.
                </p>
              </div>
              <div className="hero-image">
                <img className="profile-pic" src={perfil} alt="Fabricio" />
              </div>
            </div>
          </div>
        </section>

        <section id="sobre">
          <div className="container fade-up">
            <h2 className="section-title">Sobre Mim</h2>
            <div className="about-content">
              <div className="about-text">
                <p>Sou Fabricio Oliveira Lopes dos Santos, 27 anos, cursando Tecnologia em Sistemas para Internet (UAPI).</p>
                <div className="skill-list">
                  <span className="moving-badge">React</span>
                  <span className="moving-badge">HTML</span>
                  <span className="moving-badge">CSS</span>
                  <span className="moving-badge">JS</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="projetos">
          <div className="container fade-up">
            <h2 className="section-title">Meus Projetos</h2>
            <div className="projects-grid">
              <ProjectCard 
                titulo="Jogo do Mario" 
                descricao="Em andamento" 
                tag="Em Testes" 
                imagem={projt} 
                link="https://github.com/fabricio-00/portifolio" 
              />
              <ProjectCard 
                titulo="Em breve" 
                descricao="Plataforma e-learning" 
                tag="Em desenvolvimento" 
                imagem={projt2} 
                link="https://github.com/fabricio-00/portifolio" 
              />
            </div>
          </div>
        </section>

        <section id="contato">
          <div className="container fade-up">
            <h2 className="section-title">Vamos Conectar</h2>
            <div className="contact-box">
              <div className="contact-links">
                <a href="https://github.com/fabricio-00/portifolio" className="contact-btn github-link"><i className="fab fa-github"></i> GitHub</a>
                <a href={`https://wa.me/${PHONE_NUMBER}`} className="contact-btn whatsapp-link"><i className="fab fa-whatsapp"></i> WhatsApp</a>
              </div>

              <form id="whatsappForm" className="form-wa" onSubmit={handleWhatsAppSubmit}>
                <div className="input-group">
                  <label>Seu nome completo *</label>
                  <input type="text" id="waName" required />
                </div>
                <div className="input-group">
                  <label>Mensagem</label>
                  <textarea id="waMessage" rows="3"></textarea>
                </div>
                <button type="submit" className="contact-btn btn-whatsapp-submit">Enviar via WhatsApp</button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <p>© 2025 Fabricio Oliveira — Todos os direitos reservados.</p>
      </footer>
    </>
  );
}

export default App;