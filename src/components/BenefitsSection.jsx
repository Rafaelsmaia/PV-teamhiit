import React from 'react';

function BenefitsSection() {
  const benefits = [
    {
      icon: '💪',
      title: 'Programas para todos os níveis',
      description: 'Do iniciante ao avançado, temos o treino perfeito para você.'
    },
    {
      icon: '⏰',
      title: 'Flexibilidade total',
      description: 'Treine quando e onde quiser, no seu ritmo.'
    },
    {
      icon: '🍎',
      title: 'Nutrição prática e acessível',
      description: 'Receitas simples e planos alimentares personalizados.'
    },
    {
      icon: '👥',
      title: 'Comunidade e suporte',
      description: 'Faça parte de uma comunidade que te motiva todos os dias.'
    },
    {
      icon: '❤️',
      title: 'Foco no seu bem-estar',
      description: 'Cuidamos da sua saúde física e mental.'
    }
  ];

  return (
    <section style={{ padding: '60px 0', backgroundColor: 'white' }}>
      <div className="elementor-container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        
        {/* Título da Seção */}
        <h2 style={{ 
          textAlign: 'center', 
          fontSize: '2.5rem', 
          fontWeight: '700',
          marginBottom: '60px',
          color: '#1e293b'
        }}>
          O que você encontra na Weburn?
        </h2>

        {/* Grid de Benefícios */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '32px'
        }}>
          {benefits.map((benefit, index) => (
            <div key={index} style={{
              textAlign: 'center',
              padding: '40px 24px',
              borderRadius: '16px',
              background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
              border: '1px solid #e2e8f0',
              transition: 'all 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px)';
              e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 124, 186, 0.15)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}>
              
              <div style={{
                fontSize: '3.5rem',
                marginBottom: '24px'
              }}>
                {benefit.icon}
              </div>
              
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: '600',
                marginBottom: '16px',
                color: '#1e293b',
                lineHeight: '1.3'
              }}>
                {benefit.title}
              </h3>
              
              <p style={{
                color: '#64748b',
                lineHeight: '1.7',
                fontSize: '1rem'
              }}>
                {benefit.description}
              </p>
              
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default BenefitsSection;