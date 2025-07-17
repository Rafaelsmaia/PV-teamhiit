import React, { useEffect, useState } from 'react';
import FAQ from './components/FAQ';

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
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

  const totalSlides = testimonials.length;

  useEffect(() => {
    document.documentElement.style.width = '100%';
    document.documentElement.style.overflowX = 'hidden';
    document.documentElement.style.margin = '0';
    document.documentElement.style.padding = '0';
    
    document.body.style.width = '100%';
    document.body.style.overflowX = 'hidden';
    document.body.style.margin = '0';
    document.body.style.padding = '0';
    document.body.style.fontFamily = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif';
    document.body.style.backgroundColor = '#ffffff';

    const style = document.createElement('style');
    style.textContent = `
      @keyframes marqueeScroll {
        0% { transform: translateX(0%); }
        100% { transform: translateX(-100%); }
      }
      
      .marquee-container {
        overflow: hidden;
        white-space: nowrap;
        position: relative;
        width: 100%;
      }
      
      .marquee-text {
        display: inline-block;
        animation: marqueeScroll 60s linear infinite;
        font-size: 1.5rem;
        font-weight: bold;
        text-transform: uppercase;
        letter-spacing: 4px;
        white-space: nowrap;
        padding-right: 100%; /* Para garantir que o texto não desapareça antes de uma nova cópia aparecer */
      }
      
      .carousel-images {
        display: flex;
        transition: opacity 0.6s ease-in-out, transform 0.6s ease-in-out;
        justify-content: center;
        align-items: flex-start;
        gap: 15px; 
        padding: 0 10px;
        box-sizing: border-box;
        flex-direction: row;
        flex-wrap: nowrap; 
      }
      
      .carousel-images.transitioning {
        opacity: 0.7;
        transform: scale(0.98);
      }
      
      .testimonial-card {
        flex: 0 0 calc(50% - 7.5px); 
        text-align: center;
        max-width: calc(50% - 7.5px); 
        transition: transform 0.3s ease;
        min-width: 0; 
      }
      
      .testimonial-image {
        width: 100%;
        height: auto;
        display: block; 
        object-fit: cover;
        border-radius: 8px;
        margin-bottom: 15px;
        box-shadow: 0 4px 15px rgba(0,0,0,0.15);
        transition: transform 0.3s ease;
        max-height: 400px;
      }
      
      .carousel-container {
        max-width: 800px;
        margin: 0 auto;
      }
      
      .carousel-images {
        max-width: 100%;
        justify-content: center;
      }
      
      .testimonial-card {
        max-width: 300px;
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
        align-items: center;
        justify-content: center;
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
          gap: 10px !important;
        }
        
        .testimonial-card {
          max-width: 48% !important;
          flex: 0 0 48% !important;
        }
        
        .testimonial-image {
          width: 100% !important;
          height: auto !important;
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
        
        .features-grid {
          grid-template-columns: 1fr !important;
          gap: 30px !important;
        }
        
        .feature-card {
          max-width: 100% !important;
        }

        .hero-section-background {
          background-image: url("./IMAGENS/banner mobile.png") !important;
          background-position: center !important;
          height: 100vh !important;
          min-height: 600px !important;
        }

        .hero-content-container {
          padding: 20px !important;
          text-align: center !important;
          justify-content: center !important;
          align-items: center !important;
          padding-top: 10vh !important;
          padding-bottom: 5vh !important;
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
          margin-bottom: 0px !important;
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

        .treinos-section-title {
          font-size: 1.6rem !important;
          line-height: 1.3 !important;
          padding: 0 15px !important;
          text-align: center !important;
          margin-bottom: 15px !important;
        }

        .treinos-section-text {
          font-size: 0.95rem !important;
          padding: 0 15px !important;
          line-height: 1.4 !important;
          text-align: center !important;
        }

        .colmeia-image {
          max-width: 90% !important;
          padding: 0 15px !important;
          margin: 0 !important;
        }

        .treinos-section {
          padding: 20px 15px !important;
          text-align: center !important;
          margin: 0 !important;
          width: 100% !important;
          box-sizing: border-box !important;
        }

        .treinos-cta-button {
          font-size: 0.85rem !important;
          padding: 12px 20px !important;
          max-width: 280px !important;
          margin: 0 auto 20px auto !important;
          display: block !important;
        }

        .treinos-widgets {
          gap: 8px !important;
          flex-direction: row !important;
          justify-content: center !important;
          max-width: 100% !important;
          padding: 0 10px !important;
          flex-wrap: nowrap !important;
        }

        .treinos-widget {
          min-width: 100px !important;
          max-width: 100px !important;
          width: 100px !important;
          padding: 10px 8px !important;
          flex: 0 0 100px !important;
          height: 80px !important;
          display: flex !important;
          flex-direction: column !important;
          justify-content: center !important;
          align-items: center !important;
        }

        .treinos-widget-icon {
          font-size: 1rem !important;
          margin-bottom: 4px !important;
        }

        .treinos-widget-text {
          font-size: 0.65rem !important;
          line-height: 1.1 !important;
        }

        /* Rodapé responsivo */
        footer, .footer-section {
          padding: 15px 10px !important;
          text-align: center !important;
          margin: 0 !important;
          width: 100% !important;
          box-sizing: border-box !important;
        }

        .footer-container {
          max-width: 100% !important;
          margin: 0 auto !important;
          padding: 0 15px !important;
          text-align: center !important;
        }

        .footer-title {
          font-size: 1.1rem !important;
          margin-bottom: 8px !important;
          text-align: center !important;
        }

        .footer-description {
          font-size: 0.8rem !important;
          margin-bottom: 10px !important;
          line-height: 1.3 !important;
          text-align: center !important;
        }

        .footer-copyright {
          font-size: 0.7rem !important;
          margin: 0 !important;
          text-align: center !important;
        }
      }
    `;
    document.head.appendChild(style);

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

      <div className="hero-section-background" style={{
        width: '100%',
        height: '70vh',
        backgroundImage: 'url("./IMAGENS/IMAGEM BANNER.png"  )',
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
          
          <a 
            href="https://payfast.greenn.com.br/81004/offer/gt8O6K"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-button" 
            style={{
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
              boxShadow: '0 6px 12px rgba(23, 162, 184, 0.3 ), 0 4px 8px rgba(0,0,0,0.2)',
              transition: 'all 0.3s ease',
              transform: 'translateY(-2px)',
              textDecoration: 'none',
              display: 'inline-block'
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
          </a>
          
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

      <div style={{
        width: '100%',
        padding: '40px 20px',
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
          
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            marginBottom: '40px'
          }}>
            
            <div className="feature-card-horizontal" style={{
              display: 'flex',
              alignItems: 'center',
              backgroundColor: 'white',
              borderRadius: '15px',
              padding: '15px',
              boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
              border: '1px solid #e9ecef',
              textAlign: 'left',
              gap: '15px'
            }}>
              <div className="feature-icon-container" style={{
                width: '40px',
                height: '40px',
                borderRadius: '8px',
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
                  fontSize: '1rem',
                  fontWeight: 'bold',
                  marginBottom: '4px',
                  color: '#333',
                  lineHeight: '1.3'
                }}>
                  Programas para todos os níveis
                </h3>
                <p style={{
                  color: '#666',
                  fontSize: '0.8rem',
                  lineHeight: '1.5',
                  margin: 0
                }}>
                  Desde quem está começando até quem quer se superar, com treinos de musculação, funcional, HIIT, yoga, corrida e muito mais.
                </p>
              </div>
            </div>

            <div className="feature-card-horizontal" style={{
              display: 'flex',
              alignItems: 'center',
              backgroundColor: 'white',
              borderRadius: '15px',
              padding: '15px',
              boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
              border: '1px solid #e9ecef',
              textAlign: 'left',
              gap: '15px'
            }}>
              <div className="feature-icon-container" style={{
                width: '40px',
                height: '40px',
                borderRadius: '8px',
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
                  fontSize: '1rem',
                  fontWeight: 'bold',
                  marginBottom: '4px',
                  color: '#333',
                  lineHeight: '1.3'
                }}>
                  Flexibilidade total
                </h3>
                <p style={{
                  color: '#666',
                  fontSize: '0.8rem',
                  lineHeight: '1.5',
                  margin: 0
                }}>
                  Exercícios pensados para caber na sua rotina.
                </p>
              </div>
            </div>

            <div className="feature-card-horizontal" style={{
              display: 'flex',
              alignItems: 'center',
              backgroundColor: 'white',
              borderRadius: '15px',
              padding: '15px',
              boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
              border: '1px solid #e9ecef',
              textAlign: 'left',
              gap: '15px'
            }}>
              <div className="feature-icon-container" style={{
                width: '40px',
                height: '40px',
                borderRadius: '8px',
                overflow: 'hidden',
                flexShrink: 0,
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
              }}>
                <img 
                  src="./IMAGENS/ICONES/icon4.webp" 
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
                  fontSize: '1rem',
                  fontWeight: 'bold',
                  marginBottom: '4px',
                  color: '#333',
                  lineHeight: '1.3'
                }}>
                  Nutrição prática e acessível
                </h3>
                <p style={{
                  color: '#666',
                  fontSize: '0.8rem',
                  lineHeight: '1.5',
                  margin: 0
                }}>
                  Cardápios reais, fáceis de seguir, que aceleram seus resultados sem complicação.
                </p>
              </div>
            </div>

            <div className="feature-card-horizontal" style={{
              display: 'flex',
              alignItems: 'center',
              backgroundColor: 'white',
              borderRadius: '15px',
              padding: '15px',
              boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
              border: '1px solid #e9ecef',
              textAlign: 'left',
              gap: '15px'
            }}>
              <div className="feature-icon-container" style={{
                width: '40px',
                height: '40px',
                borderRadius: '8px',
                overflow: 'hidden',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
              }}>
                <img 
                  src="./IMAGENS/ICONES/icon3.webp" 
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
                  fontSize: '1rem',
                  fontWeight: 'bold',
                  marginBottom: '4px',
                  color: '#333',
                  lineHeight: '1.3'
                }}>
                  Comunidade e suporte
                </h3>
                <p style={{
                  color: '#666',
                  fontSize: '0.8rem',
                  lineHeight: '1.5',
                  margin: 0
                }}>
                  Você nunca está sozinho, conta com o apoio dos maiores especialistas do Brasil e uma rede de pessoas que vibra com as suas conquistas.
                </p>
              </div>
            </div>

            <div className="feature-card-horizontal" style={{
              display: 'flex',
              alignItems: 'center',
              backgroundColor: 'white',
              borderRadius: '15px',
              padding: '15px',
              boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
              border: '1px solid #e9ecef',
              textAlign: 'left',
              gap: '15px'
            }}>
              <div className="feature-icon-container" style={{
                width: '40px',
                height: '40px',
                borderRadius: '8px',
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
                  fontSize: '1rem',
                  fontWeight: 'bold',
                  marginBottom: '4px',
                  color: '#333',
                  lineHeight: '1.3'
                }}>
                  Foco no seu bem-estar
                </h3>
                <p style={{
                  color: '#666',
                  fontSize: '0.8rem',
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

      <div className="treinos-section" style={{
        width: '100%',
        backgroundColor: '#f8f9fa',
        padding: '20px 30px',
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
          <h2 className="treinos-section-title" style={{
            fontSize: '2rem',
            fontWeight: '800',
            marginBottom: '20px',
            lineHeight: '1.3',
            color: '#333',
            textAlign: 'center'
          }}>
            SEUS TREINOS DISPONÍVEIS<br />
            <span style={{ color: '#17a2b8' }}>24 horas, 7 dias por semana.</span>
          </h2>
          
          <p className="treinos-section-text" style={{
            fontSize: '1.1rem',
            marginBottom: '40px',
            lineHeight: '1.4',
            color: '#333',
            textAlign: 'center' // Alterado para centralizar
          }}>
            Assinando HOJE, você garante seu <strong>MAIOR ALIADO PARA ATINGIR O RESULTADO QUE SEMPRE DESEJOU!</strong> Pronto para te guiar todos os dias, a qualquer hora.
          </p>
          
          <div style={{
            maxWidth: '600px',
            margin: '0 auto',
            textAlign: 'center',
            padding: '0 10px',
            boxSizing: 'border-box'
          }}>
            <img 
              src="./IMAGENS/COLMEIA VERTICAL.png" 
              alt="Programas de treino disponíveis"
              style={{
                width: '100%',
                maxWidth: '500px',
                height: 'auto',
                display: 'block',
                margin: '0 auto 40px auto'
              }}
            />
            
            {/* Botão CTA */}
            <a 
              href="https://payfast.greenn.com.br/81004/offer/gt8O6K"
              target="_blank"
              rel="noopener noreferrer"
              className="treinos-cta-button" 
              style={{
                backgroundColor: '#17a2b8',
                color: 'white',
                padding: '18px 40px',
                border: 'none',
                borderRadius: '8px',
                fontSize: '1.1rem',
                fontWeight: 'bold',
                cursor: 'pointer',
                marginBottom: '30px',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                boxShadow: '0 6px 12px rgba(23, 162, 184, 0.3 )',
                transition: 'all 0.3s ease',
                width: '100%',
                maxWidth: '400px',
                textDecoration: 'none',
                display: 'inline-block',
                textAlign: 'center'
              }}
            >
              QUERO INICIAR MINHA JORNADA!
            </a>
            
            {/* Widgets de confiança */}
            <div className="treinos-widgets" style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '15px',
              maxWidth: '500px',
              margin: '0 auto',
              flexWrap: 'wrap'
            }}>
              <div className="treinos-widget" style={{
                textAlign: 'center',
                padding: '15px 10px',
                backgroundColor: 'white',
                borderRadius: '8px',
                border: '2px solid #e0e0e0',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                flex: '1',
                minWidth: '140px',
                maxWidth: '160px'
              }}>
                <div className="treinos-widget-icon" style={{ 
                  fontSize: '1.5rem', 
                  marginBottom: '8px', 
                  color: '#e91e63' 
                }}>✓</div>
                <div className="treinos-widget-text" style={{ 
                  fontSize: '0.8rem', 
                  fontWeight: 'bold', 
                  color: '#333', 
                  lineHeight: '1.2' 
                }}>
                  Compra 100% Segura
                </div>
              </div>
              
              <div className="treinos-widget" style={{
                textAlign: 'center',
                padding: '15px 10px',
                backgroundColor: 'white',
                borderRadius: '8px',
                border: '2px solid #e0e0e0',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                flex: '1',
                minWidth: '140px',
                maxWidth: '160px'
              }}>
                <div className="treinos-widget-icon" style={{ 
                  fontSize: '1.5rem', 
                  marginBottom: '8px', 
                  color: '#e91e63' 
                }}>♥</div>
                <div className="treinos-widget-text" style={{ 
                  fontSize: '0.8rem', 
                  fontWeight: 'bold', 
                  color: '#333', 
                  lineHeight: '1.2' 
                }}>
                  Garantia Incondicional
                </div>
              </div>
              
              <div className="treinos-widget" style={{
                textAlign: 'center',
                padding: '15px 10px',
                backgroundColor: 'white',
                borderRadius: '8px',
                border: '2px solid #e0e0e0',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                flex: '1',
                minWidth: '140px',
                maxWidth: '160px'
              }}>
                <div className="treinos-widget-icon" style={{ 
                  fontSize: '1.5rem', 
                  marginBottom: '8px', 
                  color: '#e91e63' 
                }}>🔄</div>
                <div className="treinos-widget-text" style={{ 
                  fontSize: '0.8rem', 
                  fontWeight: 'bold', 
                  color: '#333', 
                  lineHeight: '1.2' 
                }}>
                  Renovação anual automática
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Seção FAQ */}
      <FAQ />

      <div className="footer-section" style={{
        width: '100%',
        backgroundColor: '#333',
        color: 'white',
        padding: '40px 30px',
        textAlign: 'center'
      }}>
        <div className="footer-container" style={{
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          <h3 className="footer-title" style={{
            fontSize: '1.5rem',
            marginBottom: '15px'
          }}>
            <span style={{ color: 'white' }}>Team</span>{' '}
            <span style={{ color: '#17a2b8' }}>HIIT</span>
          </h3>
          <p className="footer-description" style={{
            color: '#ccc',
            marginBottom: '20px',
            fontSize: '0.95rem'
          }}>
            Transforme seu corpo com treinos personalizados e nutrição prática.
          </p>
          <p className="footer-copyright" style={{
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


