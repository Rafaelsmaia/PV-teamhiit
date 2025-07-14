import React from 'react';

function ProfessionalsSection() {
  const professionals = [
    {
      name: "Dr. João Silva",
      specialty: "Educador Físico",
      image: "/index_files/professor1.jpg",
      description: "Especialista em treinamento funcional com mais de 10 anos de experiência."
    },
    {
      name: "Dra. Maria Santos",
      specialty: "Nutricionista",
      image: "/index_files/professor2.jpg", 
      description: "Mestre em nutrição esportiva, focada em resultados sustentáveis."
    },
    {
      name: "Prof. Carlos Lima",
      specialty: "Personal Trainer",
      image: "/index_files/professor3.jpg",
      description: "Especialista em hipertrofia e emagrecimento, com certificações internacionais."
    }
  ];

  return (
    <section className="elementor-section elementor-top-section elementor-element elementor-element-professionals" data-id="professionals" data-element_type="section">
      <div className="elementor-container elementor-column-gap-default">
        <div className="elementor-column elementor-col-100 elementor-top-column">
          <div className="elementor-widget-wrap elementor-element-populated">
            
            {/* Título da Seção */}
            <div className="elementor-element elementor-widget elementor-widget-heading">
              <div className="elementor-widget-container">
                <h2 className="elementor-heading-title elementor-size-default">
                  Conheça Nossos Especialistas
                </h2>
              </div>
            </div>

            {/* Grid de Profissionais */}
            <div className="professionals-grid">
              {professionals.map((professional, index) => (
                <div key={index} className="professional-card">
                  <div className="professional-image">
                    <img src={professional.image} alt={professional.name} />
                  </div>
                  <div className="professional-info">
                    <h3 className="professional-name">{professional.name}</h3>
                    <p className="professional-specialty">{professional.specialty}</p>
                    <p className="professional-description">{professional.description}</p>
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

export default ProfessionalsSection;