import React from 'react';

function Footer() {
  return (
    <footer className="elementor-section elementor-top-section elementor-element elementor-element-footer" data-id="footer" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
      <div className="elementor-container elementor-column-gap-default">
        
        {/* Seção Principal do Footer */}
        <div className="footer-main">
          <div className="footer-column">
            <div className="footer-logo">
              <img src="/index_files/logoweburn-1.webp" alt="Weburn Logo" />
            </div>
            <p>Transforme seu corpo com treinos personalizados e nutrição prática.</p>
          </div>

          <div className="footer-column">
            <h4>Links Úteis</h4>
            <ul>
              <li><a href="#">Sobre Nós</a></li>
              <li><a href="#">Como Funciona</a></li>
              <li><a href="#">Planos</a></li>
              <li><a href="#">Suporte</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Contato</h4>
            <ul>
              <li><i className="fas fa-envelope"></i> contato@weburn.com.br</li>
              <li><i className="fas fa-phone"></i> (11) 9999-9999</li>
              <li><i className="fas fa-map-marker-alt"></i> São Paulo, SP</li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Redes Sociais</h4>
            <div className="social-links">
              <a href="#" className="social-link">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social-link">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="social-link">
                <i className="fab fa-youtube"></i>
              </a>
              <a href="#" className="social-link">
                <i className="fab fa-tiktok"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Seção de Copyright */}
        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>&copy; 2024 Weburn. Todos os direitos reservados.</p>
          </div>
          <div className="footer-legal">
            <a href="#">Termos de Uso</a>
            <a href="#">Política de Privacidade</a>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;