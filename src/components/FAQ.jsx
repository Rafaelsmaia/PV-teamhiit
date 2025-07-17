import React, { useState } from 'react';

const FAQ = () => {
  const [openItems, setOpenItems] = useState({});

  const faqData = [
    {
      id: 1,
      question: "Tenho acesso a todos os programas dentro do app?",
      answer: "Sim! Com sua assinatura, você tem acesso completo a todos os programas disponíveis na plataforma Team HIIT, incluindo treinos de musculação, funcional, HIIT e muito mais. Novos programas são adicionados regularmente."
    },
    {
      id: 2,
      question: "Para quem o aplicativo da Team HIIT é indicado?",
      answer: "O Team HIIT é indicado para pessoas de todos os níveis de condicionamento físico, desde iniciantes até avançados. Nossos programas são adaptáveis e você pode escolher a intensidade que melhor se adequa ao seu perfil e objetivos."
    },
    {
      id: 3,
      question: "Sou iniciante. Vou conseguir fazer as aulas?",
      answer: "Absolutamente! Temos programas específicos para iniciantes, com progressão gradual e explicações detalhadas. Nossos instrutores oferecem modificações para todos os exercícios, garantindo que você possa participar independentemente do seu nível atual."
    },
    {
      id: 4,
      question: "Após realizar a compra, o que eu vou receber?",
      answer: "Após a compra, você receberá imediatamente o acesso completo à plataforma Team HIIT, incluindo todos os programas de treino, planos nutricionais, acesso à comunidade exclusiva e suporte direto com nossos especialistas."
    },
    {
      id: 5,
      question: "Como funciona a garantia incondicional de 7 dias?",
      answer: "Oferecemos 7 dias de garantia incondicional. Se por qualquer motivo você não ficar satisfeito com a plataforma, basta entrar em contato conosco dentro deste prazo e faremos o reembolso integral, sem perguntas ou burocracias."
    },
    {
      id: 6,
      question: "Eu já treino na academia. Os programas servem para mim?",
      answer: "Sim! Nossos programas são complementares ao treino de academia. Você pode usar nossos treinos em casa nos dias que não for à academia, ou como aquecimento e finalização dos seus treinos. Também temos programas específicos para quem já tem experiência com musculação."
    },
    {
      id: 7,
      question: "Quais as formas de pagamento disponíveis?",
      answer: "Aceitamos todas as principais formas de pagamento: cartão de crédito (Visa, Mastercard, Elo), cartão de débito, PIX e boleto bancário. O pagamento é processado de forma 100% segura através de nossa plataforma criptografada."
    }
  ];

  const toggleItem = (id) => {
    setOpenItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div style={{
      width: '100%',
      padding: '80px 20px',
      backgroundColor: '#f8f9fa',
      margin: 0,
      boxSizing: 'border-box'
    }}>
      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
        textAlign: 'center'
      }}>
        <div style={{
          textAlign: 'center',
          marginBottom: '30px'
        }}>
          <h1 style={{
            fontSize: '4rem',
            fontWeight: 'bold',
            color: '#17a2b8',
            margin: '0 0 10px 0',
            letterSpacing: '2px'
          }}>
            FAQ
          </h1>
          <h2 style={{
            fontSize: '1.8rem',
            fontWeight: 'bold',
            color: '#333',
            margin: '0'
          }}>
            Perguntas Frequentes
          </h2>
        </div>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '15px',
          textAlign: 'left'
        }}>
          {faqData.map((item) => (
            <div
              key={item.id}
              style={{
                backgroundColor: 'white',
                borderRadius: '12px',
                border: '1px solid #e9ecef',
                boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                overflow: 'hidden'
              }}
            >
              <button
                onClick={() => toggleItem(item.id)}
                style={{
                  width: '100%',
                  padding: '20px 25px',
                  backgroundColor: 'transparent',
                  border: 'none',
                  textAlign: 'left',
                  cursor: 'pointer',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  color: '#333',
                  lineHeight: '1.4'
                }}
              >
                <span style={{ flex: 1, paddingRight: '20px' }}>
                  {item.question}
                </span>
                <span style={{
                  fontSize: '1.5rem',
                  color: '#17a2b8',
                  fontWeight: 'bold',
                  transform: openItems[item.id] ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 0.3s ease'
                }}>
                  ▼
                </span>
              </button>

              {openItems[item.id] && (
                <div style={{
                  padding: '0 25px 25px 25px',
                  borderTop: '1px solid #f0f0f0'
                }}>
                  <p style={{
                    margin: '15px 0 0 0',
                    color: '#666',
                    fontSize: '1rem',
                    lineHeight: '1.6'
                  }}>
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div style={{
          marginTop: '50px',
          textAlign: 'center'
        }}>
          <p style={{
            fontSize: '1.1rem',
            color: '#666',
            marginBottom: '20px'
          }}>
            Ainda tem dúvidas? Estamos aqui para ajudar!
          </p>
          <button style={{
            backgroundColor: '#17a2b8',
            color: 'white',
            padding: '15px 30px',
            border: 'none',
            borderRadius: '8px',
            fontSize: '1rem',
            fontWeight: 'bold',
            cursor: 'pointer',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            boxShadow: '0 4px 12px rgba(23, 162, 184, 0.3)'
          }}>
            Entre em Contato
          </button>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
