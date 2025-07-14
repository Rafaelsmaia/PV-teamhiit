import React from 'react';

function HeroSection() {
  const handleCTAClick = (e) => {
    e.preventDefault();
    console.log('Botão QUERO COMEÇAR clicado');
    // Aqui você pode adicionar lógica para redirecionar ou abrir modal
  };

  return (
    <section 
      id="hero" 
      style={{
        background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
        padding: '80px 0',
        textAlign: 'center'
      }}
    >
      <div className="elementor-container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          
          {/* Título Principal */}
          <h1 style={{
            fontSize: '3rem',
            fontWeight: '700',
            color: '#1e293b',
            marginBottom: '30px',
            lineHeight: '1.2'
          }}>
            Entre em forma do seu jeito: em casa ou na academia!
          </h1>

          {/* Descrição */}
          <p style={{
            fontSize: '1.25rem',
            color: '#64748b',
            marginBottom: '40px',
            lineHeight: '1.6'
          }}>
            Transforme seu corpo com treinos personalizados, nutrição prática e o suporte de uma comunidade que te motiva todos os dias.
          </p>

          {/* Botão Principal */}
          <button 
            onClick={handleCTAClick}
            style={{
              background: 'linear-gradient(135deg, #007cba, #0ea5e9)',
              color: 'white',
              padding: '18px 40px',
              border: 'none',
              borderRadius: '8px',
              fontSize: '1.1rem',
              fontWeight: '600',
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              marginBottom: '40px'
            }}
            onMouseOver={(e) => {
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 8px 24px rgba(0, 124, 186, 0.3)';
            }}
            onMouseOut={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = 'none';
            }}
          >
            QUERO COMEÇAR
          </button>

          {/* Ícones de Garantia */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '24px',
            marginTop: '40px'
          }}>
            {[
              { icon: '🛡️', text: 'Compra 100% Segura' },
              { icon: '⏰', text: 'Acesso Anual 100% Online' },
              { icon: '🏆', text: 'Garantia Incondicional' },
              { icon: '🔄', text: 'Renovação anual automática' }
            ].map((item, index) => (
              <div key={index} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                background: 'rgba(255, 255, 255, 0.9)',
                padding: '12px 20px',
                borderRadius: '8px',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                transition: 'all 0.3s ease'
              }}>
                <span style={{ fontSize: '1.25rem' }}>{item.icon}</span>
                <span style={{ fontWeight: '500', color: '#1e293b', fontSize: '0.9rem' }}>
                  {item.text}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

export default HeroSection;