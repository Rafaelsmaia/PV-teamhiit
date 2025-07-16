import React, { useEffect, useState } from 'react';

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  // Atualizando para usar as novas imagens de provas sociais
  const testimonials = [
    {
      id: 1,
      image: './IMAGENS/PROVAS SOCIAIS/PS1.png'
    },
    {
      id: 2,
      image: './IMAGENS/PROVAS SOCIAIS/PS2.png'
    },
    {
      id: 3,
      image: './IMAGENS/PROVAS SOCIAIS/PS3.png'
    },
    {
      id: 4,
      image: './IMAGENS/PROVAS SOCIAIS/PS4.png'
    },
    {
      id: 5,
      image: './IMAGENS/PROVAS SOCIAIS/PS5.png'
    }
  ];

  // Carrossel infinito - agora com 5 slides (uma imagem por vez)
  const totalSlides = testimonials.length;

  useEffect(() => {
    // Garantir que html e body ocupem 100% da largura sem overflow
    document.documentElement.style.width = '100%';
    document.documentElement.style.overflowX = 'hidden';
    document.documentElement.style.margin = '0';
    document.documentElement.style.padding = '0';
    
    document.body.style.width = '100%';
    document.body.style.overflowX = 'hidden';
    document.body.style.margin = '0';
    document.body.style.padding = '0';
    // Usando as mesmas fontes da referência
    document.body.style.fontFamily = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif';
    document.body.style.backgroundColor = '#ffffff';

    // Adicionar CSS para animação da faixa e carrossel
    const style = document.createElement('style');
    style.textContent = `
      @keyframes marqueeScroll {
        0% { transform: translateX(100%); }
        100% { transform: translateX(-100%); }
      }
      
         .marquee-container {
          overflow: hidden;
          white-space: nowrap;
          width: 100%;
        }
        
        .marquee-text {
          display: inline-block;
          animation: marquee 40s linear infinite;
          font-size: 1.2rem;
          font-weight: bold;
          letter-spacing: 2px;
        }
        
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }overflow: hidden;
        width: 100%;
        max-width: 800px;
        margin: 0 auto;
      }
      
      .carousel-images {
        display: flex;
        transition: opacity 0.6s ease-in-out, transform 0.6s ease-in-out;
        justify-content: center;
        align-items: flex-start;
        gap: 10px;
        padding: 0 10px;
        box-sizing: border-box;
        flex-direction: row;
      }
      
      .carousel-images.transitioning {
        opacity: 0.7;
        transform: scale(0.98);
      }
      
      .testimonial-card {
        flex: 0 0 calc(50% - 5px);
        text-align: center;
        max-width: calc(50% - 5px);
        transition: transform 0.3s ease;
      }
      
      .testimonial-image {
        width: 100%;
        height: 200px;
        max-width: 150px;
        object-fit: cover;
        border-radius: 8px;
        margin-bottom: 15px;
        box-shadow: 0 4px 15px rgba(0,0,0,0.15);
        transition: transform 0.3s ease;
      }
      
      .carousel-dots {
        display: flex;
        justify-content: center;
        gap: 8px;
        margin-top: 20px;
      }
      
      .carousel-dot {
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background-color: #ddd;
        cursor: pointer;
        transition: background-color 0.3s ease;
      }
      
      .carousel-dot.active {
        background-color: #17a2b8;
      }
      
      .carousel-arrows {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        background-color: #17a2b8;
        color: white;
        border: none;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        cursor: pointer;
        font-size: 20px;
        font-weight: bold;
        display: flex;
        alignItems: 'center';
        justifyContent: 'center';
        z-index: 10;
        transition: all 0.3s ease;
      }
      
      .carousel-arrows:hover {
        background-color: #138496;
        transform: translateY(-50%) scale(1.1);
      }
      
      .carousel-prev {
        left: -25px;
      }
      
      .carousel-next {
        right: -25px;
      }
      
      @media (max-width: 768px) {
        .carousel-images {
          flex-direction: row !important;
          align-items: flex-start !important;
          gap: 10px !important;
          justify-content: center !important;
          padding: 0 10px !important;
        }
        
        .testimonial-card {
          max-width: 48% !important;
          flex: 0 0 48% !important;
        }
        
        .testimonial-image {
          width: 100% !important;
          height: 200px !important;
          max-width: 150px !important;
          border-radius: 8px !important;
        }
        
        .carousel-container {
          max-width: 100% !important;
          padding: 0 5px !important;
        }
        
        .carousel-prev {
          left: 5px !important;
          width: 40px !important;
          height: 40px !important;
          font-size: 16px !important;
        }
        
        .carousel-next {
          right: 5px !important;
          width: 40px !important;
          height: 40px !important;
          font-size: 16px !important;
        }
        
        .testimonials-title {
          font-size: 1.4rem !important;
          line-height: 1.3 !important;
          text-align: center !important;
          margin: 0 auto 30px auto !important;
          padding: 0 10px !important;
          max-width: 100% !important;
          width: 100% !important;
          box-sizing: border-box !important;
        }
        
        .testimonials-section {
          padding: 40px 0px !important;
          margin: 0 !important;
          width: 100% !important;
          box-sizing: border-box !important;
        }
        
        .testimonials-description {
          font-size: 0.85rem !important;
          line-height: 1.4 !important;
          padding: 0 10px !important;
          margin-top: 20px !important;
        }
        
        .carousel-dots {
          margin-top: 15px !important;
          margin-bottom: 15px !important;
        }
        
        .carousel-dot {
          width: 8px !important;
          height: 8px !important;
        }
        
        .marquee-text {
          font-size: 1.2rem;
          letter-spacing: 3px;
        }
        
        .features-section {
          padding: 60px 15px !important;
          margin: 0 !important;
          width: 100% !important;
          box-sizing: border-box !important;
        }
        
        .features-title {
          font-size: 1.8rem !important;
          line-height: 1.3 !important;
          text-align: center !important;
          margin: 0 auto 40px auto !important;
          padding: 0 10px !important;
          max-width: 100% !important;
          width: 100% !important;
          box-sizing: border-box !important;
        }
        
        .feature-card-horizontal {
          flex-direction: column !important;
          gap: 15px !important;
          padding: 20px !important;
          text-align: center !important;
        }
        
        .feature-icon-container {
          margin: 0 auto !important;
        }
        
        .feature-text-container {
          text-align: center !important;
        }
        
        .feature-text-container h3 {
          font-size: 1.2rem !important;
          margin-bottom: 10px !important;
        }
        
        .feature-text-container p {
          font-size: 0.9rem !important;
        }

        .hero-section-background {
          background-image: url("./IMAGENS/banner mobile.png") !important;
          background-position: center center !important;
          height: calc(100vw * 1.875) !important;
          min-height: calc(100vw * 1.875) !important;
          max-height: calc(100vh - 80px) !important;
        }

        .hero-content-container {
          padding: 20px !important;
          text-align: center !important;
          justify-content: center !important;
          align-items: center !important;
          padding-top: 80px !important;
          padding-bottom: 40px !important;
        }

        .hero-text-container {
          max-width: 100% !important;
          text-align: center !important;
        }

        .hero-title {
          font-size: 1.8rem !important;
          line-height: 1.2 !important;
          margin-bottom: 15px !important;
        }

        .hero-subtitle {
          font-size: 0.95rem !important;
          margin-bottom: 25px !important;
          line-height: 1.3 !important;
        }

        .hero-button {
          font-size: 0.9rem !important;
          padding: 15px 30px !important;
          margin-bottom: 25px !important;
          width: 100% !important;
          max-width: 280px !important;
        }

        .hero-widgets {
          justify-content: center !important;
          max-width: 100% !important;
          gap: 8px !important;
          margin-bottom: 5px !important;
        }

        .hero-widget {
          padding: 10px 8px !important;
          min-width: 90px !important;
          flex: 1 !important;
        }

        .hero-widget-icon {
          font-size: 0.9rem !important;
          margin-bottom: 6px !important;
        }

        .hero-widget-text {
          font-size: 0.6rem !important;
          line-height: 1.2 !important;
        }

        .header-mobile {
          padding: 15px 20px !important;
          flex-direction: row !important; 
          justify-content: space-between !important; 
          align-items: center !important;
          gap: 0 !important; 
        }

        .header-title {
          font-size: 1.5rem !important;
        }

        .header-login-section {
          flex-direction: column !important;
          gap: 2px !important;
          align-items: flex-end !important;
        }

        .header-login-text {
          font-size: 10px !important; 
          white-space: normal !important; 
          text-align: right !important; 
          line-height: 1.2 !important;
        }

        .header-login-button {
          font-size: 10px !important; 
          padding: 8px 12px !important; 
          min-width: 120px !important; 
        }
      }
    `;
    document.head.appendChild(style);

    // Auto-play do carrossel
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % totalSlides);
    }, 4000);

    return () => clearInterval(interval);
  }, [totalSlides]);

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide(prev => (prev + 1) % totalSlides);
      setIsTransitioning(false);
    }, 300);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide(prev => (prev - 1 + totalSlides) % totalSlides);
      setIsTransitioning(false);
    }, 300);
  };

  const goToSlide = (index) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide(index);
      setIsTransitioning(false);
    }, 300);
  };

  // Função para obter as duas imagens a serem exibidas
  const getCurrentImages = () => {
    const firstIndex = currentSlide;
    const secondIndex = (currentSlide + 1) % testimonials.length;
    return [testimonials[firstIndex], testimonials[secondIndex]];
  };

  return (
    <div style={{
      width: '100%',
      minHeight: '100vh',
      margin: 0,
      padding: 0,
      backgroundColor: '#ffffff',
      overflowX: 'hidden'
    }}>
      
      {/* HEADER SÓLIDO CINZA - MAIS ESPESSO COMO NA REFERÊNCIA */}
      <div className="header-mobile" style={{
        width: '100%',
        backgroundColor: '#2c2c2c',
        padding: '20px 40px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'relative',
        zIndex: 10,
        boxSizing: 'border-box',
        minHeight: '70px'
      }}>
        <div style={{ flexShrink: 0 }}>
          <h1 className="header-title" style={{
            fontSize: '1.8rem',
            fontWeight: 'bold',
            margin: 0,
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif'
          }}>
            <span style={{ color: 'white' }}>Team</span>{' '}
            <span style={{ color: '#17a2b8' }}>HIIT</span>
          </h1>
        </div>
        <div className="header-login-section" style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          gap: '2px',
          flexShrink: 0
        }}>
          <span className="header-login-text" style={{
            fontSize: '10px',
            color: 'white',
            fontWeight: '400',
            whiteSpace: 'normal',
            textAlign: 'right',
            lineHeight: '1.2'
          }}>
            Já possui uma conta? Faça login
          </span>
          <a 
            href="https://play.weburn.com.br/login" 
            target="_blank" 
            rel="noopener noreferrer"
            className="header-login-button"
            style={{
              color: '#007cba',
              textDecoration: 'none',
              padding: '8px 12px',
              border: '2px solid #007cba',
              borderRadius: '6px',
              fontSize: '10px',
              fontWeight: '600',
              backgroundColor: 'white',
              whiteSpace: 'nowrap',
              flexShrink: 0,
              minWidth: '120px',
              textAlign: 'center'
            }}
          >
            ENTRE NA SUA CONTA
          </a>
        </div>
      </div>

      {/* HERO SECTION - TODOS OS ELEMENTOS SOBRE O BANNER */}
      <div className="hero-section-background" style={{
        width: '100%',
        height: '70vh',
        backgroundImage: 'url("./IMAGENS/IMAGEM BANNER.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        position: 'relative',
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
        margin: 0,
        padding: 0,
        boxSizing: 'border-box'
      }}>
        {/* TODOS OS ELEMENTOS CENTRALIZADOS SOBRE A IMAGEM */}
        <div style={{
          textAlign: 'center',
          zIndex: 5,
          maxWidth: '600px',
          padding: '0 20px 40px 20px',
          width: '100%'
        }}>
          <h1 className="hero-title" style={{
            fontSize: '2.8rem',
            fontWeight: 'bold',
            lineHeight: '1.1',
            marginBottom: '20px',
            color: '#333'
          }}>
            Entre em forma do<br />
            seu jeito: <span style={{ color: '#17a2b8' }}>no conforto<br />
            da sua casa!</span>
          </h1>
          
          <p className="hero-subtitle" style={{
            fontSize: '1.1rem',
            color: '#666',
            marginBottom: '30px',
            lineHeight: '1.4',
            fontWeight: '400'
          }}>
            Descubra treinos que se encaixam na sua vida e conquiste o corpo que você sempre quis, com a flexibilidade que você precisa.
          </p>
          
          {/* BOTÃO COM EFEITO 3D */}
          <button className="hero-button" style={{
            backgroundColor: '#17a2b8',
            color: 'white',
            padding: '18px 40px',
            border: 'none',
            borderRadius: '6px',
            fontSize: '1.1rem',
            fontWeight: 'bold',
            cursor: 'pointer',
            marginBottom: '30px',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            boxShadow: '0 6px 12px rgba(23, 162, 184, 0.3), 0 4px 8px rgba(0,0,0,0.2)',
            transition: 'all 0.3s ease',
            transform: 'translateY(-2px)'
          }}
          onMouseOver={(e) => {
            e.target.style.transform = 'translateY(-4px)';
            e.target.style.boxShadow = '0 8px 16px rgba(23, 162, 184, 0.4), 0 6px 12px rgba(0,0,0,0.3)';
          }}
          onMouseOut={(e) => {
            e.target.style.transform = 'translateY(-2px)';
            e.target.style.boxShadow = '0 6px 12px rgba(23, 162, 184, 0.3), 0 4px 8px rgba(0,0,0,0.2)';
          }}
          >
            QUERO COMEÇAR
          </button>
          
          {/* WIDGETS PEQUENOS - 3 EM UMA LINHA */}
          <div className="hero-widgets" style={{
            display: 'flex',
            gap: '12px',
            maxWidth: '400px',
            flexWrap: 'nowrap',
            marginBottom: '5px',
            justifyContent: 'center',
            margin: '0 auto 5px auto'
          }}>
            <div className="hero-widget" style={{
              textAlign: 'center',
              padding: '8px 6px',
              backgroundColor: 'white',
              borderRadius: '5px',
              border: '1px solid #e0e0e0',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
              flex: '1',
              minWidth: '100px'
            }}>
              <div className="hero-widget-icon" style={{ fontSize: '1rem', marginBottom: '4px', color: '#007cba' }}>🛡️</div>
              <div className="hero-widget-text" style={{ fontSize: '0.65rem', fontWeight: 'bold', color: '#333', lineHeight: '1.1' }}>
                Compra<br />100% Segura
              </div>
            </div>
            
            <div className="hero-widget" style={{
              textAlign: 'center',
              padding: '8px 6px',
              backgroundColor: 'white',
              borderRadius: '5px',
              border: '1px solid #e0e0e0',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
              flex: '1',
              minWidth: '100px'
            }}>
              <div className="hero-widget-icon" style={{ fontSize: '1rem', marginBottom: '4px', color: '#17a2b8' }}>📱</div>
              <div className="hero-widget-text" style={{ fontSize: '0.65rem', fontWeight: 'bold', color: '#333', lineHeight: '1.1' }}>
                Acesso Anual<br />100% Online
              </div>
            </div>
            
            <div className="hero-widget" style={{
              textAlign: 'center',
              padding: '8px 6px',
              backgroundColor: 'white',
              borderRadius: '5px',
              border: '1px solid #e0e0e0',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
              flex: '1',
              minWidth: '100px'
            }}>
              <div className="hero-widget-icon" style={{ fontSize: '1rem', marginBottom: '4px', color: '#17a2b8' }}>🔄</div>
              <div className="hero-widget-text" style={{ fontSize: '0.65rem', fontWeight: 'bold', color: '#333', lineHeight: '1.1' }}>
                Renovação anual<br />automática
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Faixa Azul - TEAM HIIT com movimento MARQUEE INFINITO - SEM ESPAÇO */}
      <div style={{
        width: '100%',
        backgroundColor: '#17a2b8',
        color: 'white',
        padding: '18px 0',
        position: 'relative',
        margin: 0
      }}>
        <div className="marquee-container">
          <div className="marquee-text">
            ⚡ TEAM HIIT ⚡ TEAM HIIT ⚡ TEAM HIIT ⚡ TEAM HIIT ⚡ TEAM HIIT ⚡ TEAM HIIT ⚡ TEAM HIIT ⚡ TEAM HIIT ⚡ TEAM HIIT ⚡ TEAM HIIT ⚡ TEAM HIIT ⚡ TEAM HIIT ⚡ TEAM HIIT ⚡ TEAM HIIT ⚡ TEAM HIIT ⚡ TEAM HIIT ⚡ TEAM HIIT ⚡ TEAM HIIT ⚡ TEAM HIIT ⚡ TEAM HIIT ⚡ TEAM HIIT ⚡ TEAM HIIT ⚡ TEAM HIIT ⚡ TEAM HIIT ⚡ TEAM HIIT ⚡ TEAM HIIT ⚡ TEAM HIIT ⚡ TEAM HIIT ⚡ TEAM HIIT ⚡ TEAM HIIT ⚡ TEAM HIIT ⚡ TEAM HIIT ⚡ TEAM HIIT ⚡ TEAM HIIT ⚡ TEAM HIIT ⚡ TEAM HIIT ⚡ TEAM HIIT ⚡ TEAM HIIT ⚡ TEAM HIIT ⚡ TEAM HIIT
          </div>
        </div>
      </div>

      {/* SEÇÃO DE DEPOIMENTOS COM CARROSSEL INFINITO - DUAS IMAGENS POR VEZ, UMA IMAGEM POR TRANSIÇÃO */}
      <div className="testimonials-section" style={{
        width: '100%',
        padding: '60px 0px',
        backgroundColor: '#f8f9fa',
        textAlign: 'center',
        margin: 0,
        boxSizing: 'border-box'
      }}>
        <div style={{
          maxWidth: '100%',
          margin: '0 auto',
          textAlign: 'center',
          padding: '0 15px',
          boxSizing: 'border-box'
        }}>
          <h2 className="testimonials-title" style={{
            fontSize: '1.6rem',
            fontWeight: 'bold',
            marginBottom: '30px',
            color: '#333',
            lineHeight: '1.3',
            textAlign: 'center',
            margin: '0 auto 30px auto',
            maxWidth: '100%',
            padding: '0 10px',
            width: '100%',
            boxSizing: 'border-box'
          }}>
            Já são <span style={{ color: '#17a2b8' }}>MILHARES DE PESSOAS</span><br />
            que alcançaram seus resultados em pouco tempo! Agora é a sua vez.
          </h2>
          
          {/* CARROSSEL INFINITO COM TRANSIÇÃO SUAVE - DUAS IMAGENS POR VEZ, UMA TRANSIÇÃO POR VEZ */}
          <div className="carousel-container" style={{ 
            position: 'relative', 
            marginBottom: '20px',
            maxWidth: '100%',
            padding: '0 5px'
          }}>
            <div className={`carousel-images ${isTransitioning ? 'transitioning' : ''}`}>
              {getCurrentImages().map((testimonial, index) => (
                <div key={`${testimonial.id}-${index}`} className="testimonial-card">
                  <img 
                    src={testimonial.image} 
                    alt={`Prova social ${testimonial.id}`}
                    className="testimonial-image"
                  />
                </div>
              ))}
            </div>
            
            {/* SETAS DE NAVEGAÇÃO */}
            <button 
              className="carousel-arrows carousel-prev"
              onClick={prevSlide}
              style={{
                position: 'absolute',
                left: '5px',
                top: '50%',
                transform: 'translateY(-50%)',
                backgroundColor: '#17a2b8',
                color: 'white',
                border: 'none',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                cursor: 'pointer',
                fontSize: '16px',
                fontWeight: 'bold',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 10,
                transition: 'all 0.3s ease'
              }}
            >
              ‹
            </button>
            <button 
              className="carousel-arrows carousel-next"
              onClick={nextSlide}
              style={{
                position: 'absolute',
                right: '5px',
                top: '50%',
                transform: 'translateY(-50%)',
                backgroundColor: '#17a2b8',
                color: 'white',
                border: 'none',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                cursor: 'pointer',
                fontSize: '16px',
                fontWeight: 'bold',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 10,
                transition: 'all 0.3s ease'
              }}
            >
              ›
            </button>
          </div>
          
          {/* INDICADORES DE SLIDE - AGORA COM 5 DOTS */}
          <div className="carousel-dots" style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '8px',
            marginBottom: '15px',
            marginTop: '15px'
          }}>
            {Array.from({ length: totalSlides }, (_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  backgroundColor: index === currentSlide ? '#17a2b8' : '#ddd',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'background-color 0.3s ease'
                }}
              />
            ))}
          </div>
          
          <p className="testimonials-description" style={{
            fontSize: '0.85rem',
            color: '#666',
            maxWidth: '100%',
            margin: '0 auto',
            lineHeight: '1.4',
            textAlign: 'center',
            padding: '0 10px',
            marginTop: '20px'
          }}>
            Essas são pessoas reais, <strong>assim como você</strong>, que superaram seus desafios e transformaram seus corpos com nossos programas. Cada jornada é única, mas todos podem alcançar resultados incríveis.
          </p>
        </div>
      </div>

      {/* Segunda Faixa Azul - TEAM HIIT com movimento MARQUEE INFINITO - ENTRE SEÇÕES */}
      <div style={{
        width: '100%',
        backgroundColor: '#17a2b8',
        color: 'white',
        padding: '18px 0',
        position: 'relative',
        margin: 0
      }}>
        <div className="marquee-container">
          <div className="marquee-text">
            ⚡ TEAM HIIT ⚡ TEAM HIIT ⚡ TEAM HIIT ⚡ TEAM HIIT ⚡ TEAM HIIT ⚡ TEAM HIIT ⚡ TEAM HIIT ⚡ TEAM HIIT ⚡ TEAM HIIT ⚡ TEAM HIIT ⚡ TEAM HIIT ⚡ TEAM HIIT ⚡ TEAM HIIT ⚡ TEAM HIIT ⚡ TEAM HIIT ⚡ TEAM HIIT ⚡ TEAM HIIT ⚡ TEAM HIIT ⚡ TEAM HIIT ⚡ TEAM HIIT ⚡ TEAM HIIT ⚡ TEAM HIIT ⚡ TEAM HIIT ⚡ TEAM HIIT ⚡ TEAM HIIT ⚡ TEAM HIIT ⚡ TEAM HIIT ⚡ TEAM HIIT ⚡ TEAM HIIT ⚡ TEAM HIIT ⚡ TEAM HIIT ⚡ TEAM HIIT ⚡ TEAM HIIT ⚡ TEAM HIIT ⚡ TEAM HIIT ⚡ TEAM HIIT ⚡ TEAM HIIT ⚡ TEAM HIIT ⚡ TEAM HIIT ⚡ TEAM HIIT
          </div>
        </div>
      </div>

      {/* NOVA SEÇÃO: O QUE VOCÊ ENCONTRA NA TEAM HIIT? - AGORA APÓS O CARROSSEL */}
      <div style={{
        width: '100%',
        padding: '80px 20px',
        backgroundColor: '#f8f9fa',
        textAlign: 'center',
        margin: 0,
        boxSizing: 'border-box'
      }}>
        <div style={{
          maxWidth: '800px',
          margin: '0 auto',
          padding: '0 15px',
          boxSizing: 'border-box'
        }}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            marginBottom: '60px',
            color: '#333',
            lineHeight: '1.2',
            textAlign: 'center',
            margin: '0 auto 60px auto',
            maxWidth: '100%'
          }}>
            O que <span style={{ color: '#17a2b8' }}>você encontra</span> na Team HIIT?
          </h2>
          
          {/* LISTA DE FEATURES EM CARDS HORIZONTAIS */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            marginBottom: '40px'
          }}>
            
            {/* PROGRAMAS PARA TODOS OS NÍVEIS */}
            <div className="feature-card-horizontal" style={{
              display: 'flex',
              alignItems: 'flex-start',
              backgroundColor: 'white',
              borderRadius: '15px',
              padding: '25px',
              boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
              border: '1px solid #e9ecef',
              textAlign: 'left',
              gap: '20px'
            }}>
              <div className="feature-icon-container" style={{
                width: '60px',
                height: '60px',
                borderRadius: '12px',
                overflow: 'hidden',
                flexShrink: 0,
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
              }}>
                <img 
                  src="./IMAGENS/ICONES/icon1.webp" 
                  alt="Programas para todos os níveis"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </div>
              <div className="feature-text-container" style={{ flex: 1 }}>
                <h3 style={{
                  fontSize: '1.3rem',
                  fontWeight: 'bold',
                  marginBottom: '8px',
                  color: '#333',
                  lineHeight: '1.3'
                }}>
                  Programas para todos os níveis
                </h3>
                <p style={{
                  color: '#666',
                  fontSize: '0.95rem',
                  lineHeight: '1.5',
                  margin: 0
                }}>
                  Desde quem está começando até quem quer se superar, com treinos de musculação, funcional, HIIT, yoga, corrida e muito mais.
                </p>
              </div>
            </div>

            {/* FLEXIBILIDADE TOTAL */}
            <div className="feature-card-horizontal" style={{
              display: 'flex',
              alignItems: 'flex-start',
              backgroundColor: 'white',
              borderRadius: '15px',
              padding: '25px',
              boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
              border: '1px solid #e9ecef',
              textAlign: 'left',
              gap: '20px'
            }}>
              <div className="feature-icon-container" style={{
                width: '60px',
                height: '60px',
                borderRadius: '12px',
                overflow: 'hidden',
                flexShrink: 0,
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
              }}>
                <img 
                  src="./IMAGENS/ICONES/icon2.webp" 
                  alt="Flexibilidade total"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </div>
              <div className="feature-text-container" style={{ flex: 1 }}>
                <h3 style={{
                  fontSize: '1.3rem',
                  fontWeight: 'bold',
                  marginBottom: '8px',
                  color: '#333',
                  lineHeight: '1.3'
                }}>
                  Flexibilidade total
                </h3>
                <p style={{
                  color: '#666',
                  fontSize: '0.95rem',
                  lineHeight: '1.5',
                  margin: 0
                }}>
                  Exercícios pensados para caber na sua rotina.
                </p>
              </div>
            </div>

            {/* NUTRIÇÃO PRÁTICA E ACESSÍVEL */}
            <div className="feature-card-horizontal" style={{
              display: 'flex',
              alignItems: 'flex-start',
              backgroundColor: 'white',
              borderRadius: '15px',
              padding: '25px',
              boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
              border: '1px solid #e9ecef',
              textAlign: 'left',
              gap: '20px'
            }}>
              <div className="feature-icon-container" style={{
                width: '60px',
                height: '60px',
                borderRadius: '12px',
                overflow: 'hidden',
                flexShrink: 0,
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
              }}>
                <img 
                  src="./IMAGENS/ICONES/icon3.webp" 
                  alt="Nutrição prática e acessível"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </div>
              <div className="feature-text-container" style={{ flex: 1 }}>
                <h3 style={{
                  fontSize: '1.3rem',
                  fontWeight: 'bold',
                  marginBottom: '8px',
                  color: '#333',
                  lineHeight: '1.3'
                }}>
                  Nutrição prática e acessível
                </h3>
                <p style={{
                  color: '#666',
                  fontSize: '0.95rem',
                  lineHeight: '1.5',
                  margin: 0
                }}>
                  Cardápios reais, fáceis de seguir, que aceleram seus resultados sem complicação.
                </p>
              </div>
            </div>

            {/* COMUNIDADE E SUPORTE */}
            <div className="feature-card-horizontal" style={{
              display: 'flex',
              alignItems: 'flex-start',
              backgroundColor: 'white',
              borderRadius: '15px',
              padding: '25px',
              boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
              border: '1px solid #e9ecef',
              textAlign: 'left',
              gap: '20px'
            }}>
              <div className="feature-icon-container" style={{
                width: '60px',
                height: '60px',
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
              }}>
                <img 
                  src="./IMAGENS/ICONES/icon4.webp" 
                  alt="Comunidade e suporte"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </div>
              <div className="feature-text-container" style={{ flex: 1 }}>
                <h3 style={{
                  fontSize: '1.3rem',
                  fontWeight: 'bold',
                  marginBottom: '8px',
                  color: '#333',
                  lineHeight: '1.3'
                }}>
                  Comunidade e suporte
                </h3>
                <p style={{
                  color: '#666',
                  fontSize: '0.95rem',
                  lineHeight: '1.5',
                  margin: 0
                }}>
                  Você nunca está sozinho, conta com o apoio dos maiores especialistas do Brasil e uma rede de pessoas que vibra com as suas conquistas.
                </p>
              </div>
            </div>

            {/* FOCO NO SEU BEM-ESTAR */}
            <div className="feature-card-horizontal" style={{
              display: 'flex',
              alignItems: 'flex-start',
              backgroundColor: 'white',
              borderRadius: '15px',
              padding: '25px',
              boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
              border: '1px solid #e9ecef',
              textAlign: 'left',
              gap: '20px'
            }}>
              <div className="feature-icon-container" style={{
                width: '60px',
                height: '60px',
                borderRadius: '12px',
                overflow: 'hidden',
                flexShrink: 0,
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
              }}>
                <img 
                  src="./IMAGENS/ICONES/icon5.webp" 
                  alt="Foco no seu bem-estar"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </div>
              <div className="feature-text-container" style={{ flex: 1 }}>
                <h3 style={{
                  fontSize: '1.3rem',
                  fontWeight: 'bold',
                  marginBottom: '8px',
                  color: '#333',
                  lineHeight: '1.3'
                }}>
                  Foco no seu bem-estar
                </h3>
                <p style={{
                  color: '#666',
                  fontSize: '0.95rem',
                  lineHeight: '1.5',
                  margin: 0
                }}>
                  Saúde e movimento para você se sentir bem, com leveza, sem padrões inalcançáveis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CALL TO ACTION AZUL */}
      <div style={{
        width: '100%',
        backgroundColor: '#17a2b8',
        color: 'white',
        padding: '60px 30px',
        textAlign: 'center'
      }}>
        <div style={{
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          <h2 style={{
            fontSize: '2.2rem',
            fontWeight: 'bold',
            marginBottom: '20px',
            lineHeight: '1.2'
          }}>
            SEUS TREINOS DISPONÍVEIS 24 horas, 7 dias por semana.
          </h2>
          
          <p style={{
            fontSize: '1.1rem',
            marginBottom: '30px',
            opacity: 0.95,
            lineHeight: '1.4'
          }}>
            Acesse sua plataforma de treinos a qualquer hora, em qualquer lugar. Transforme seu corpo no seu tempo.
          </p>
          
          <button style={{
            backgroundColor: 'white',
            color: '#17a2b8',
            padding: '15px 40px',
            border: 'none',
            borderRadius: '6px',
            fontSize: '1rem',
            fontWeight: 'bold',
            cursor: 'pointer',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
          }}>
            ASSINAR AGORA
          </button>
        </div>
      </div>

      {/* SEÇÃO DE PROGRAMAS */}
      <div style={{
        width: '100%',
        padding: '60px 30px',
        backgroundColor: '#f8f9fa'
      }}>
        <div style={{
          maxWidth: '1000px',
          margin: '0 auto',
          textAlign: 'center'
        }}>
          <h2 style={{
            fontSize: '2rem',
            fontWeight: 'bold',
            marginBottom: '40px',
            color: '#333'
          }}>
            Veja alguns dos programas mais populares
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '20px'
          }}>
            {[
              { title: 'Treino em Casa', desc: 'Exercícios sem equipamentos' },
              { title: 'Academia Completa', desc: 'Treinos com equipamentos' },
              { title: 'Yoga & Pilates', desc: 'Flexibilidade e bem-estar' },
              { title: 'Cardio Intenso', desc: 'Queima de gordura acelerada' }
            ].map((program, index) => (
              <div key={index} style={{
                backgroundColor: 'white',
                borderRadius: '10px',
                padding: '25px 15px',
                textAlign: 'center',
                border: '1px solid #e0e0e0',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
              }}>
                <div style={{
                  fontSize: '2.5rem',
                  marginBottom: '15px'
                }}>
                  💪
                </div>
                <h3 style={{
                  fontSize: '1.1rem',
                  fontWeight: 'bold',
                  marginBottom: '10px',
                  color: '#333'
                }}>
                  {program.title}
                </h3>
                <p style={{
                  color: '#666',
                  fontSize: '0.9rem'
                }}>
                  {program.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div style={{
        width: '100%',
        backgroundColor: '#333',
        color: 'white',
        padding: '40px 30px',
        textAlign: 'center'
      }}>
        <div style={{
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          <h3 style={{
            fontSize: '1.5rem',
            marginBottom: '15px'
          }}>
            <span style={{ color: 'white' }}>Team</span>{' '}
            <span style={{ color: '#17a2b8' }}>HIIT</span>
          </h3>
          <p style={{
            color: '#ccc',
            marginBottom: '20px',
            fontSize: '0.95rem'
          }}>
            Transforme seu corpo com treinos personalizados e nutrição prática.
          </p>
          <p style={{
            color: '#999',
            fontSize: '0.8rem'
          }}>
            &copy; 2024 Team HIIT. Todos os direitos reservados.
          </p>
        </div>
      </div>

    </div>
  );
}

export default App;


