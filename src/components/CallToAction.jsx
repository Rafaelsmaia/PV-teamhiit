import React from 'react';

function CallToAction() {
  return (
    <section className="elementor-section elementor-top-section elementor-element elementor-element-cta" data-id="cta" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
      <div className="elementor-container elementor-column-gap-default">
        <div className="elementor-column elementor-col-100 elementor-top-column">
          <div className="elementor-widget-wrap elementor-element-populated">
            
            {/* Título Principal */}
            <div className="elementor-element elementor-widget elementor-widget-heading">
              <div className="elementor-widget-container">
                <h2 className="elementor-heading-title elementor-size-default">
                  SEUS TREINOS DISPONÍVEIS 24 horas, 7 dias por semana.
                </h2>
              </div>
            </div>

            {/* Descrição */}
            <div className="elementor-element elementor-widget elementor-widget-text-editor">
              <div className="elementor-widget-container">
                <p>Acesse sua plataforma de treinos a qualquer hora, em qualquer lugar. Transforme seu corpo no seu tempo.</p>
              </div>
            </div>

            {/* Botão de Ação */}
            <div className="elementor-element elementor-widget elementor-widget-button">
              <div className="elementor-widget-container">
                <div className="elementor-button-wrapper">
                  <a className="elementor-button elementor-button-link elementor-size-lg" href="#" role="button">
                    <span className="elementor-button-content-wrapper">
                      <span className="elementor-button-text">ASSINAR AGORA</span>
                    </span>
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default CallToAction;