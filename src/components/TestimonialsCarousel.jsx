import React, { useState, useEffect } from 'react';

function TestimonialsCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Depoimentos de exemplo (você pode substituir por imagens reais)
  const testimonials = [
    { id: 1, text: "Perdi 15kg em 3 meses com a Weburn!", author: "Maria Silva" },
    { id: 2, text: "Nunca me senti tão bem com meu corpo!", author: "João Santos" },
    { id: 3, text: "Os treinos são perfeitos para minha rotina!", author: "Ana Costa" }
  ];

  // Auto-play do carrossel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section style={{ 
      padding: '60px 0', 
      backgroundColor: '#f8fafc',
      textAlign: 'center'
    }}>
      <div className="elementor-container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        
        {/* Título da Seção */}
        <h2 style={{ 
          fontSize: '2.5rem', 
          fontWeight: '700',
          marginBottom: '40px',
          color: '#1e293b'
        }}>
          Mais de 975 mil pessoas alcançaram seus resultados em pouco tempo! Agora é a sua vez.
        </h2>

        {/* Carrossel */}
        <div style={{
          background: 'white',
          borderRadius: '12px',
          padding: '40px',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
          maxWidth: '600px',
          margin: '0 auto'
        }}>
          <div style={{
            fontSize: '1.25rem',
            fontStyle: 'italic',
            color: '#64748b',
            marginBottom: '20px',
            minHeight: '60px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            "{testimonials[currentSlide].text}"
          </div>
          <div style={{
            fontSize: '1rem',
            fontWeight: '600',
            color: '#007cba'
          }}>
            - {testimonials[currentSlide].author}
          </div>
        </div>
        
        {/* Indicadores */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '12px',
          marginTop: '24px'
        }}>
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              style={{
                width: '14px',
                height: '14px',
                borderRadius: '50%',
                border: 'none',
                backgroundColor: index === currentSlide ? '#007cba' : '#d1d5db',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default TestimonialsCarousel;