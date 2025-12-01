import './Footer.css';

export const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer-content">
          <h2 className="footer-title">Vamos Conversar?</h2>
          
          <div className="footer-links">
            {/* E-mail */}
            <a href="mailto:guilherme.romero074@gmail.com" className="footer-link">
              Email
            </a>

            {/* GitHub Principal */}
            <a 
              href="https://github.com/GuigoDev" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="footer-link"
            >
              GitHub (GuigoDev)
            </a>

            {/* GitHub Secundário */}
            <a 
              href="https://github.com/TheRomeroGuilherme" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="footer-link"
            >
              GitHub (Romero)
            </a>

            {/* LinkedIn (Adicione seu link aqui quando tiver) */}
            <a 
              href="https://www.linkedin.com/in/seu-linkedin" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="footer-link"
            >
              LinkedIn
            </a>
          </div>

          <p className="footer-copy">
            &copy; {new Date().getFullYear()} Guilherme Romero. Desenvolvido com React e .NET.
          </p>
        </div>
      </div>
    </footer>
  );
};