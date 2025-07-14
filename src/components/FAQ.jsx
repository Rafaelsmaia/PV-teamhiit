import React, { useState } from 'react';

function FAQ() {
  const [openQuestion, setOpenQuestion] = useState(null);

  const faqData = [
    {
      question: "Como funciona a plataforma Weburn?",
      answer: "A Weburn é uma plataforma online completa com treinos personalizados, planos nutricionais e acompanhamento profissional. Você acessa tudo pelo seu celular, tablet ou computador."
    },
    {
      question: "Preciso de equipamentos para treinar?",
      answer: "Não! Temos treinos para casa sem equipamentos e também opções para quem tem acesso à academia. Você escolhe o que funciona melhor para você."
    },
    {
      question: "Quanto tempo dura cada treino?",
      answer: "Os treinos variam de 15 a 45 minutos, dependendo do seu nível e objetivo. Você pode escolher treinos mais curtos para dias corridos ou mais longos quando tiver mais tempo."
    },
    {
      question: "Posso cancelar a qualquer momento?",
      answer: "Sim! Você pode cancelar sua assinatura a qualquer momento através da plataforma, sem taxas ou multas."
    },
    {
      question: "Como funciona a garantia?",
      answer: "Oferecemos garantia incondicional de 7 dias. Se você não estiver satisfeito por qualquer motivo, devolvemos 100% do seu dinheiro."
    }
  ];

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  return (
    <section className="elementor-section elementor-top-section elementor-element elementor-element-faq" data-id="faq" data-element_type="section">
      <div className="elementor-container elementor-column-gap-default">
        <div className="elementor-column elementor-col-100 elementor-top-column">
          <div className="elementor-widget-wrap elementor-element-populated">
            
            {/* Título da Seção */}
            <div className="elementor-element elementor-widget elementor-widget-heading">
              <div className="elementor-widget-container">
                <h2 className="elementor-heading-title elementor-size-default">
                  Perguntas Frequentes
                </h2>
              </div>
            </div>

            {/* Lista de Perguntas */}
            <div className="faq-list">
              {faqData.map((item, index) => (
                <div key={index} className={`faq-item ${openQuestion === index ? 'active' : ''}`}>
                  <button 
                    className="faq-question"
                    onClick={() => toggleQuestion(index)}
                  >
                    <span>{item.question}</span>
                    <i className={`fas fa-chevron-${openQuestion === index ? 'up' : 'down'}`}></i>
                  </button>
                  <div className={`faq-answer ${openQuestion === index ? 'open' : ''}`}>
                    <p>{item.answer}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQ;