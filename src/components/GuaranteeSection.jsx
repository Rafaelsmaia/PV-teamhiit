import React from 'react';

function GuaranteeSection() {
  return (
    <section className="elementor-section elementor-top-section elementor-element elementor-element-guarantee" data-id="guarantee" data-element_type="section">
      <div className="elementor-container elementor-column-gap-default">
        <div className="elementor-column elementor-col-100 elementor-top-column">
          <div className="elementor-widget-wrap elementor-element-populated">
            
            {/* Título Principal */}
            <div className="elementor-element elementor-widget elementor-widget-heading">
              <div className="elementor-widget-container">
                <h2 className="elementor-heading-title elementor-size-default">
                  Ou você muda seu corpo, ou a Weburn te paga.
                </h2>
              </div>
            </div>

            {/* Ícone de Garantia */}
            <div className="guarantee-icon">
              <i className="fas fa-shield-alt"></i>
            </div>

            {/* Descrição da Garantia */}
            <div className="elementor-element elementor-widget elementor-widget-text-editor">
              <div className="elementor-widget-container">
                <p>
                  Temos tanta certeza de que você vai alcançar seus resultados que oferecemos uma 
                  <strong> garantia incondicional de 7 dias</strong>. Se por qualquer motivo você não 
                  estiver satisfeito, devolvemos 100% do seu dinheiro.
                </p>
                <p>
                  Sem perguntas, sem complicações. Sua satisfação é nossa prioridade.
                </p>
              </div>
            </div>

            {/* Selo de Garantia */}
            <div className="guarantee-seal">
              <img src="/index_files/garantia-7-dias.png" alt="Garantia de 7 dias" />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default GuaranteeSection;