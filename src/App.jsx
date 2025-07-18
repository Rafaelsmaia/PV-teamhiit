import React, { useEffect, useState } from 'react';
import FAQ from './components/FAQ';
import PopupForm from './components/PopupForm';


function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  
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

      /* Estilos para o vídeo na seção HERO */
      .hero-video-container {
        position: relative;
        width: 80%; /* Aumentado para 80% */
        max-width: 500px;
        aspect-ratio: 16/9;
        z-index: 3;
        border-radius: 12px;
        overflow: hidden;
        box-shadow: 0 8px 32px rgba(0,0,0,0.3);
        margin-bottom: 20px; /* Espaço entre o vídeo e o conteúdo abaixo */
      }

      .hero-video-iframe {
        width: 100%;
        height: 100%;
        border: none;
      }

      /* Overlay escuro para destacar o vídeo */
      .hero-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.1);
        z-index: 2;
      }

      /* Ajustes para o conteúdo de texto */
      .hero-content-wrapper {
        position: relative;
        z-index: 4;
      padding: 20px;        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        width: 100%;
        max-width: 600px;
      }

      /* Header Transparente */
      .header-transparent {
        background-color: transparent !important;
        position: absolute !important;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 10;
       padding: 20px;
        box-sizing: border-box;
        min-height: auto;
        display: flex;
        justify-content: flex-start !important;
        align-items: center;
      }

      .header-transparent .header-login-section {
        display: flex;
        flex-direction: row !important;
        align-items: center !important;
        gap: 15px !important;
      }

      .header-transparent .header-login-text {
        display: none !important;
      }

      .header-transparent .header-login-button {
        background-color: transparent !important; /* Transparente */
        color: white !important; /* Texto branco */
        border: 1px solid white !important; /* Contorno branco fino */
        padding: 8px 15px !important;
        font-size: 1rem !important;
        font-weight: 300 !important; /* Fonte fina */
        border-radius: 6px !important;
        text-transform: uppercase;
        text-decoration: none !important; /* Sem sublinhado */
        box-shadow: none !important; /* Sem sombra */
        margin-right: 0 !important; /* Remove margem extra */
      }

      .header-transparent .header-title span {
        color: white !important;
      }

      .header-transparent .header-title span:last-child {
        color: #17a2b8 !important;
      }

      /* Ajustes para o título da HERO */
      .hero-title {
        font-size: 2.8rem;
        font-weight: bold;
        line-height: 1.1;
        margin-bottom: 20px;
        color: white;
        text-shadow: 2px 2px 4px rgba(0,0,0,0.7);
        z-index: 5;
        text-align: center;
        max-width: 80%;
        white-space: nowrap; /* Garante que a primeira linha não quebre */
      }

      .hero-title span {
        white-space: nowrap; /* Garante que a segunda linha não quebre */
        color: white !important; /* Texto branco */
        text-shadow: 1px 1px 2px rgba(0,0,0,0.5); /* Sombra clara para contraste */
      }

      /* Ajuste da altura da seção HERO para se adequar à imagem */
      .hero-section-background {
        height: auto; /* Altura automática */
        min-height: 100vh; /* Garante que ocupe pelo menos a altura da viewport */
        padding-bottom: 50px; /* Adiciona um padding para o conteúdo abaixo */
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
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
          flex-direction: row !important; /* Garante que o botão fique na mesma linha da logo */
          align-items: center !important;
          gap: 0 !important; /* Remove gap */
        }

        .header-login-button {
          font-size: 10px !important; 
          padding: 8px 12px !important; 
          min-width: auto !important; /* Permite que o botão se ajuste ao conteúdo */
          margin-right: 0 !important; /* Garante que não haja sobra */
          width: auto !important; /* Ajusta a largura automaticamente */
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
          justify-content: center !important;
          gap: 8px !important;
          flex-direction: row !important;
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

        /* Correções específicas para mobile */
        .hero-title {
          font-size: 1.6rem; /* Ajusta o tamanho da fonte para mobile */
          line-height: 1.2; /* Ajusta o espaçamento entre linhas */
          white-space: nowrap; /* Garante que o texto não quebre */
          max-width: 100%; /* Permite que o texto ocupe toda a largura disponível */
          padding: 0 10px; /* Adiciona padding para evitar que o texto encoste nas bordas */
          box-sizing: border-box; /* Garante que o padding não aumente a largura total */
        }

        .hero-title span {
          white-space: nowrap; /* Garante que a segunda linha não quebre */
        }

        .hero-section-background {
          min-height: auto; /* Remove min-height fixo para mobile */
          height: 100vh; /* Usa 100vh para garantir que ocupe a tela */
        background-image: url("./IMAGENS/banner mobile.png");
          background-size: cover; /* Garante que a imagem cubra toda a área */
          background-position: center; /* Centraliza a imagem */
        }

        .header-login-button {
          margin-right: 0 !important; /* Remove margem extra */
          padding: 6px 10px !important; /* Ajusta o padding */
          font-size: 0.8rem !important; /* Ajusta o tamanho da fonte */
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

  // Funções do Pop-up
  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const handleFormSubmit = (formData) => {
    // Aqui você pode enviar os dados para uma API se necessário
    console.log('Dados do formulário:', formData);
    
    // Redirecionar para o checkout
    window.open('https://payfast.greenn.com.br/81004/offer/gt8O6K', '_blank');
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
      
      {/* HEADER TRANSPARENTE */}
      <div className="header-mobile header-transparent">
        <div>
          <img src="./IMAGENS/fina.png" alt="Team HIIT Logo" style={{ height: '20px' }} />
        </div>
        <div className="header-login-section">
          <a 
            href="javascript:void(0)" 
            onClick={(e) => e.preventDefault()}
            style={{ cursor: 'not-allowed' }}
            className="header-login-button"
          >
            ENTRAR
          </a>
        </div>
      </div>

      {/* SEÇÃO HERO MODIFICADA COM VÍDEO */}
      <div className="hero-section-background" style={{
        width: '100%',
        paddingTop: '80px', // Adicionado padding-top para afastar os elementos do header
      }}>
        {/* Overlay escuro para destacar o vídeo */}
        <div className="hero-overlay"></div>

        <h1 className="hero-title">
          TRANSFORME O SEU CORPO<br />
          <span style={{ color: 'white', textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>E MUDE A SUA VIDA!</span>
        </h1>
        <div className="hero-video-container">
          <iframe 
            className="hero-video-iframe"
            src="https://www.youtube.com/embed/pYEj4i98vzI?autoplay=1&loop=1&playlist=pYEj4i98vzI&controls=1&showinfo=0&rel=0"
            title="Team HIIT - Vídeo de Apresentação"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        {/* Conteúdo de texto reposicionado (subtítulo, botão, widgets) */}
        <div className="hero-content-wrapper" style={{
          position: 'relative',
          bottom: 'auto',
          left: 'auto',
          right: 'auto',
          marginTop: '20px',
          zIndex: 5,
          padding: '0 20px',
          width: '100%',
          maxWidth: '600px',
        }}>
          <p className="hero-subtitle" style={{
            fontSize: '1.1rem',
            color: 'white',
            marginBottom: '25px',
            lineHeight: '1.4',
            fontWeight: '400',
            textShadow: '1px 1px 2px rgba(0,0,0,0.7)'
          }}>
            Descubra treinos que se encaixam na sua vida e conquiste o corpo que você sempre quis, com a flexibilidade que você precisa.
          </p>
          
          <button 
            onClick={openPopup}
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
              marginBottom: '25px',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              boxShadow: '0 6px 12px rgba(23, 162, 184, 0.3), 0 4px 8px rgba(0,0,0,0.2)',
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
          </button>
          
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

      <div style={{
        width: '100%',
        padding: '40px 20px',
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

      <div style={{ textAlign: 'center', margin: '20px 0' }}>
        <button 
          onClick={openPopup}
          style={{
            backgroundColor: '#17a2b8',
            color: 'white',
            padding: '18px 40px',
            border: 'none',
            borderRadius: '6px',
            fontSize: '1.1rem',
            fontWeight: 'bold',
            cursor: 'pointer',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            boxShadow: '0 6px 12px rgba(23, 162, 184, 0.3), 0 4px 8px rgba(0,0,0,0.2)',
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
          QUERO RESULTADOS ASSIM
        </button>
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
        padding: '60px 20px',
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
            O que <span style={{ color: '#17a2b8' }}>você encontra</span> no Team HIIT?
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
                  Desde quem está começando até quem quer se superar, com treinos de musculação, funcional, HIIT e muito mais.
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
                flexShrink: 0,
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
                  Você nunca está sozinho, conta com o apoio de uma equipe especializada e uma rede de pessoas que vibra com as suas conquistas.
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

      <div style={{
        width: '100%',
        padding: '60px 20px',
        backgroundColor: '#000000',
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
            marginBottom: '20px',
            color: '#ffffff',
            lineHeight: '1.2',
            textAlign: 'center',
            maxWidth: '100%'
          }}>
            SEUS TREINOS DISPONÍVEIS<br />
            <span style={{ color: '#17a2b8' }}>24 horas, 7 dias por semana.</span>
          </h2>
          <p style={{
            fontSize: '1.1rem',
            color: '#cccccc',
            marginBottom: '40px',
            lineHeight: '1.5',
            textAlign: 'center'
          }}>
            Assinando HOJE, você garante seu <strong style={{ color: '#ffffff' }}>MAIOR ALIADO</strong> para atingir o resultado que <strong style={{ color: '#ffffff' }}>SEMPRE DESEJOU!</strong> Pronto para te guiar todos os dias, a qualquer hora.
          </p>
          
          <div style={{
            marginBottom: '40px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <img 
              src="./IMAGENS/COLMEIA VERTICAL.png" 
              alt="Treinos Disponíveis"
              style={{
                maxWidth: '100%',
                height: 'auto',
                // Removido borderRadius e boxShadow para tirar o fundo branco
              }}
            />
          </div>

          <button 
            onClick={openPopup}
            style={{
              backgroundColor: '#17a2b8',
              color: 'white',
              padding: '18px 40px',
              border: 'none',
              borderRadius: '6px',
              fontSize: '1.1rem',
              fontWeight: 'bold',
              cursor: 'pointer',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              boxShadow: '0 6px 12px rgba(23, 162, 184, 0.3), 0 4px 8px rgba(0,0,0,0.2)',
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
            QUERO INICIAR MINHA JORNADA!
          </button>
        </div>
      </div>

      <FAQ style={{
        backgroundColor: '#000000',
        color: '#ffffff'
      }} />

      <div className="footer-section" style={{
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
            © 2024 Team HIIT
          </p>
        </div>
      </div>

      {/* Componente PopupForm */}
      <PopupForm 
        isOpen={isPopupOpen}
        onClose={closePopup}
        onSubmit={handleFormSubmit}
      />
    </div>
  );
}

export default App;

