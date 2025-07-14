import React from 'react';

function Header() {
  return (
    <div className="elementor-element elementor-element-3df5dc3 e-flex e-con-boxed e-con e-parent" data-id="3df5dc3" data-element_type="container">
      <div className="e-con-inner">
        <div className="elementor-element elementor-element-ad17128 e-con-full e-flex e-con e-child" data-id="ad17128" data-element_type="container">
          <div className="elementor-element elementor-element-f1c394c elementor-widget elementor-widget-image" data-id="f1c394c" data-element_type="widget" data-widget_type="image.default">
            <div className="elementor-widget-container">
              {/* Se a imagem não carregar, mostra o texto */}
              <img 
                src="/index_files/logoweburn-1.webp" 
                alt="Weburn" 
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'block';
                }}
                style={{ maxHeight: '60px', width: 'auto' }}
              />
              <h1 style={{ 
                display: 'none', 
                color: '#e53e3e', 
                fontSize: '2rem', 
                fontWeight: 'bold',
                margin: 0 
              }}>
                weburn
              </h1>
            </div>
          </div>
        </div>
        <div className="elementor-element elementor-element-9eff2f8 e-con-full e-flex e-con e-child" data-id="9eff2f8" data-element_type="container">
          <div className="elementor-element elementor-element-cc21c34 elementor-widget elementor-widget-heading" data-id="cc21c34" data-element_type="widget" data-widget_type="heading.default">
            <div className="elementor-widget-container">
              <h2 className="elementor-heading-title elementor-size-default" style={{ fontSize: '14px', color: '#666', margin: 0, fontWeight: 400 }}>
                Já possui uma conta? Faça login
              </h2>
            </div>
          </div>
          <div className="elementor-element elementor-element-78d2525 elementor-widget elementor-widget-heading" data-id="78d2525" data-element_type="widget" data-widget_type="heading.default">
            <div className="elementor-widget-container">
              <h2 className="elementor-heading-title elementor-size-default" style={{ margin: 0 }}>
                <a 
                  href="https://play.weburn.com.br/login" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{
                    color: '#007cba',
                    textDecoration: 'none',
                    padding: '10px 20px',
                    border: '2px solid #007cba',
                    borderRadius: '5px',
                    fontSize: '16px',
                    fontWeight: '600',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseOver={(e) => {
                    e.target.style.backgroundColor = '#007cba';
                    e.target.style.color = 'white';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.backgroundColor = 'transparent';
                    e.target.style.color = '#007cba';
                  }}
                >
                  ENTRE NA SUA CONTA
                </a>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;