import React, { useEffect, useState } from 'react';

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const testimonials = [
    {
      id: 1,
      image: './IMAGENS/depoimento1.png',
      name: 'Luisa Pereira',
      result: 'Eliminou 6 kg'
    },
    {
      id: 2,
      image: './IMAGENS/depoimento2.png',
      name: 'Lucimar Souza',
      result: 'Eliminou 10 kg em 2 meses'
    },
    {
      id: 3,
      image: './IMAGENS/depoimento3.png',
      name: 'Ingrid Barbosa',
      result: 'Eliminou 7kg em 3 meses'
    }
  ];

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
      @keyframes scrollLeft {
        0% { transform: translateX(100%); }
        100% { transform: translateX(-100%); }
      }
      .scrolling-banner {
        animation: scrollLeft 15s linear infinite;
        white-space: nowrap;
      }
      
      .carousel-container {
        position: relative;
        overflow: hidden;
        width: 100%;
      }
      
      .carousel-track {
        display: flex;
        transition: transform 0.5s ease-in-out;
        width: ${testimonials.length * 100}%;
      }
      
      .carousel-slide {
        width: ${100 / testimonials.length}%;
        display: flex;
        justify-content: center;
        gap: 20px;
        padding: 0 20px;
        box-sizing: border-box;
      }
      
      .testimonial-card {
        flex: 0 0 auto;
        text-align: center;
        max-width: 200px;
      }
      
      .testimonial-image {
        width: 200px;
        height: 200px;
        object-fit: cover;
        border-radius: 10px;
        margin-bottom: 15px;
        box-shadow: 0 4px 10px rgba(0,0,0,0.1);
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
        background-color: #e53e3e;
      }
      
      .carousel-arrows {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        background-color: #e53e3e;
        color: white;
        border: none;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        cursor: pointer;
        font-size: 18px;
        font-weight: bold;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10;
        transition: background-color 0.3s ease;
      }
      
      .carousel-arrows:hover {
        background-color: #c53030;
      }
      
      .carousel-prev {
        left: 20px;
      }
      
      .carousel-next {
        right: 20px;
      }
      
      @media (max-width: 768px) {
        .carousel-slide {
          flex-direction: column;
          align-items: center;
        }
        
        .testimonial-card {
          max-width: 100%;
        }
        
        .testimonial-image {
          width: 150px;
          height: 150px;
        }
      }
    `;
    document.head.appendChild(style);

    // Auto-play do carrossel
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
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
      <div style={{
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
          <h1 style={{
            fontSize: '1.8rem',
            fontWeight: 'bold',
            margin: 0,
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif'
          }}>
            <span style={{ color: 'white' }}>Team</span>{' '}
            <span style={{ color: '#17a2b8' }}>HIIT</span>
          </h1>
        </div>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '20px',
          flexShrink: 0
        }}>
          <span style={{
            fontSize: '14px',
            color: 'white',
            fontWeight: '400',
            whiteSpace: 'nowrap'
          }}>
            Já possui uma conta? Faça login
          </span>
          <a 
            href="https://play.weburn.com.br/login" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{
              color: '#007cba',
              textDecoration: 'none',
              padding: '12px 20px',
              border: '2px solid #007cba',
              borderRadius: '6px',
              fontSize: '12px',
              fontWeight: '600',
              backgroundColor: 'white',
              whiteSpace: 'nowrap',
              flexShrink: 0,
              minWidth: '160px',
              textAlign: 'center'
            }}
          >
            ENTRE NA SUA CONTA
          </a>
        </div>
      </div>

      {/* HERO SECTION COM ALTURA FIXA 800px - COMEÇA APÓS O HEADER */}
      <div style={{
        width: '100%',
        height: '800px',
        backgroundImage: 'url("./IMAGENS/IMAGEM BANNER.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        position: 'relative',
        display: 'flex',
        alignItems: 'center'
      }}>
        
        {/* CONTEÚDO PRINCIPAL - CENTRALIZADO */}
        <div style={{
          width: '100%',
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 40px',
          zIndex: 5,
          position: 'relative'
        }}>
          
          {/* CONTAINER DO TEXTO - LADO ESQUERDO */}
          <div style={{
            maxWidth: '600px',
            color: '#333'
          }}>
            <h1 style={{
              fontSize: '2.8rem',
              fontWeight: 'bold',
              lineHeight: '1.1',
              marginBottom: '20px',
              color: '#333'
            }}>
              Entre em forma do<br />
              seu jeito: <span style={{ color: '#e53e3e' }}>em casa</span><br />
              ou <span style={{ color: '#e53e3e' }}>na academia!</span>
            </h1>
            
            <p style={{
              fontSize: '1.1rem',
              color: '#666',
              marginBottom: '30px',
              lineHeight: '1.4',
              fontWeight: '400'
            }}>
              Acesse mais de <strong>20 modalidades e 3.500 treinos</strong><br />
              e transforme sua rotina de exercícios.
            </p>
            
            {/* BOTÃO COM EFEITO 3D */}
            <button style={{
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
            
            {/* WIDGETS PEQUENOS - 4 EM UMA LINHA */}
            <div style={{
              display: 'flex',
              gap: '12px',
              maxWidth: '500px',
              flexWrap: 'nowrap'
            }}>
              <div style={{
                textAlign: 'center',
                padding: '8px 6px',
                backgroundColor: 'white',
                borderRadius: '5px',
                border: '1px solid #e0e0e0',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                flex: '1',
                minWidth: '100px'
              }}>
                <div style={{ fontSize: '1rem', marginBottom: '4px', color: '#007cba' }}>🛡️</div>
                <div style={{ fontSize: '0.65rem', fontWeight: 'bold', color: '#333', lineHeight: '1.1' }}>
                  Compra<br />100% Segura
                </div>
              </div>
              
              <div style={{
                textAlign: 'center',
                padding: '8px 6px',
                backgroundColor: 'white',
                borderRadius: '5px',
                border: '1px solid #e0e0e0',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                flex: '1',
                minWidth: '100px'
              }}>
                <div style={{ fontSize: '1rem', marginBottom: '4px', color: '#e53e3e' }}>📱</div>
                <div style={{ fontSize: '0.65rem', fontWeight: 'bold', color: '#333', lineHeight: '1.1' }}>
                  Acesso Anual<br />100% Online
                </div>
              </div>
              
              <div style={{
                textAlign: 'center',
                padding: '8px 6px',
                backgroundColor: 'white',
                borderRadius: '5px',
                border: '1px solid #e0e0e0',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                flex: '1',
                minWidth: '100px'
              }}>
                <div style={{ fontSize: '1rem', marginBottom: '4px', color: '#28a745' }}>✅</div>
                <div style={{ fontSize: '0.65rem', fontWeight: 'bold', color: '#333', lineHeight: '1.1' }}>
                  Garantia<br />Incondicional
                </div>
              </div>
              
              <div style={{
                textAlign: 'center',
                padding: '8px 6px',
                backgroundColor: 'white',
                borderRadius: '5px',
                border: '1px solid #e0e0e0',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                flex: '1',
                minWidth: '100px'
              }}>
                <div style={{ fontSize: '1rem', marginBottom: '4px', color: '#17a2b8' }}>🔄</div>
                <div style={{ fontSize: '0.65rem', fontWeight: 'bold', color: '#333', lineHeight: '1.1' }}>
                  Renovação anual<br />automática
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Faixa Azul - TEAM HIIT com movimento contínuo */}
      <div style={{
        width: '100%',
        backgroundColor: '#17a2b8',
        color: 'white',
        padding: '12px 0',
        fontSize: '1rem',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        letterSpacing: '2px',
        overflow: 'hidden',
        position: 'relative'
      }}>
        <div className="scrolling-banner">
          ⚡ TEAM HIIT ⚡ TEAM HIIT ⚡ TEAM HIIT ⚡ TEAM HIIT ⚡ TEAM HIIT ⚡ TEAM HIIT ⚡ TEAM HIIT ⚡ TEAM HIIT ⚡ TEAM HIIT ⚡ TEAM HIIT ⚡ TEAM HIIT ⚡ TEAM HIIT ⚡ TEAM HIIT ⚡ TEAM HIIT ⚡ TEAM HIIT ⚡ TEAM HIIT ⚡ TEAM HIIT ⚡ TEAM HIIT ⚡ TEAM HIIT ⚡ TEAM HIIT
        </div>
      </div>

      {/* SEÇÃO DE DEPOIMENTOS COM CARROSSEL */}
      <div style={{
        width: '100%',
        padding: '60px 30px',
        backgroundColor: '#f8f9fa',
        textAlign: 'center'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            marginBottom: '40px',
            color: '#333',
            lineHeight: '1.2'
          }}>
            Mais de <span style={{ color: '#e53e3e' }}>975 mil pessoas</span> alcançaram seus<br />
            resultados em pouco tempo! Agora é a sua vez.
          </h2>
          
          {/* CARROSSEL DE DEPOIMENTOS */}
          <div className="carousel-container" style={{ position: 'relative', marginBottom: '30px' }}>
            <div 
              className="carousel-track" 
              style={{ 
                transform: `translateX(-${currentSlide * (100 / testimonials.length)}%)`,
                display: 'flex',
                transition: 'transform 0.5s ease-in-out'
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={testimonial.id} className="carousel-slide" style={{
                  width: `${100 / testimonials.length}%`,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: '0 20px',
                  boxSizing: 'border-box'
                }}>
                  <div className="testimonial-card" style={{
                    textAlign: 'center',
                    maxWidth: '300px'
                  }}>
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="testimonial-image"
                      style={{
                        width: '250px',
                        height: '250px',
                        objectFit: 'cover',
                        borderRadius: '10px',
                        marginBottom: '20px',
                        boxShadow: '0 4px 15px rgba(0,0,0,0.15)'
                      }}
                    />
                    <h4 style={{ 
                      color: '#333', 
                      marginBottom: '8px', 
                      fontSize: '1.2rem',
                      fontWeight: 'bold'
                    }}>
                      {testimonial.name}
                    </h4>
                    <p style={{ 
                      color: '#e53e3e', 
                      fontWeight: 'bold', 
                      fontSize: '1rem',
                      margin: 0
                    }}>
                      {testimonial.result}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* SETAS DE NAVEGAÇÃO */}
            <button 
              className="carousel-arrows carousel-prev"
              onClick={prevSlide}
              style={{
                position: 'absolute',
                left: '20px',
                top: '50%',
                transform: 'translateY(-50%)',
                backgroundColor: '#e53e3e',
                color: 'white',
                border: 'none',
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                cursor: 'pointer',
                fontSize: '20px',
                fontWeight: 'bold',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 10,
                transition: 'background-color 0.3s ease'
              }}
            >
              ‹
            </button>
            <button 
              className="carousel-arrows carousel-next"
              onClick={nextSlide}
              style={{
                position: 'absolute',
                right: '20px',
                top: '50%',
                transform: 'translateY(-50%)',
                backgroundColor: '#e53e3e',
                color: 'white',
                border: 'none',
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                cursor: 'pointer',
                fontSize: '20px',
                fontWeight: 'bold',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 10,
                transition: 'background-color 0.3s ease'
              }}
            >
              ›
            </button>
          </div>
          
          {/* INDICADORES DE SLIDE */}
          <div className="carousel-dots" style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '10px',
            marginBottom: '30px'
          }}>
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
                style={{
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  backgroundColor: index === currentSlide ? '#e53e3e' : '#ddd',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'background-color 0.3s ease'
                }}
              />
            ))}
          </div>
          
          <p style={{
            fontSize: '1rem',
            color: '#666',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: '1.5'
          }}>
            Essas são pessoas reais, <strong>assim como você</strong>, que superaram seus<br />
            limites e alcançaram o corpo dos sonhos.
          </p>
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

      {/* SEÇÃO "OU VOCÊ MUDA SEU CORPO" */}
      <div style={{
        width: '100%',
        padding: '60px 30px',
        backgroundColor: '#ffffff',
        textAlign: 'center'
      }}>
        <div style={{
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          <h2 style={{
            fontSize: '2.2rem',
            fontWeight: 'bold',
            marginBottom: '30px',
            color: '#333',
            lineHeight: '1.2'
          }}>
            Ou você muda seu corpo, ou a Team HIIT te paga.
          </h2>
          
          <div style={{
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            backgroundColor: '#17a2b8',
            margin: '0 auto 20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '3px solid #007cba'
          }}>
            <div style={{
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              backgroundColor: '#007cba',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '1.5rem',
              fontWeight: 'bold'
            }}>
              🛡️
            </div>
          </div>
          
          <p style={{
            fontSize: '1rem',
            color: '#666',
            marginBottom: '10px',
            lineHeight: '1.4'
          }}>
            Temos tanta certeza de que você vai alcançar seus resultados que oferecemos uma <strong style={{ color: '#e53e3e' }}>garantia incondicional de 7 dias</strong>. Se por qualquer motivo você não estiver satisfeito, devolvemos 100% do seu dinheiro.
          </p>
          
          <p style={{
            fontSize: '0.9rem',
            color: '#999',
            fontStyle: 'italic'
          }}>
            Sem perguntas, sem complicações. Sua satisfação é nossa prioridade.
          </p>
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