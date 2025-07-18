import React, { useState } from 'react';
import { db } from '../firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';

const PopupForm = ({ isOpen, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    objetivo: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const objetivos = [
    'Perder peso',
    'Ganhar massa muscular',
    'Melhorar condicionamento físico',
    'Reduzir estresse',
    'Melhorar saúde geral',
    'Outro'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Limpar erro do campo quando usuário começar a digitar
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.nome.trim()) {
      newErrors.nome = 'Nome é obrigatório';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email é obrigatório';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email inválido';
    }
    
    if (!formData.telefone.trim()) {
      newErrors.telefone = 'Telefone é obrigatório';
    } else if (!/^\(\d{2}\)\s\d{4,5}-\d{4}$/.test(formData.telefone)) {
      newErrors.telefone = 'Formato: (11) 99999-9999';
    }
    
    if (!formData.objetivo) {
      newErrors.objetivo = 'Selecione seu objetivo';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const formatPhone = (value) => {
    // Remove tudo que não é número
    const numbers = value.replace(/\D/g, '');
    
    // Aplica a máscara
    if (numbers.length <= 2) {
      return `(${numbers}`;
    } else if (numbers.length <= 6) {
      return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
    } else if (numbers.length <= 10) {
      return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 6)}-${numbers.slice(6)}`;
    } else {
      return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7, 11)}`;
    }
  };

  const handlePhoneChange = (e) => {
    const formatted = formatPhone(e.target.value);
    setFormData(prev => ({
      ...prev,
      telefone: formatted
    }));
    
    if (errors.telefone) {
      setErrors(prev => ({
        ...prev,
        telefone: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Adicionar os dados do formulário ao Firestore
      await addDoc(collection(db, "leads"), {
        ...formData,
        timestamp: new Date()
      });
      
      // Chamar função de callback com os dados
      onSubmit(formData);
      
      // Fechar o modal
      onClose();
      
      // Resetar formulário
      setFormData({
        nome: "",
        email: "",
        telefone: "",
        objetivo: ""
      });
    } catch (error) {
      console.error("Erro ao enviar dados para o Firestore:", error);
      alert("Ocorreu um erro ao enviar seus dados. Por favor, tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000,
      padding: '20px',
      boxSizing: 'border-box'
    }}>
      <div style={{
        backgroundColor: 'white',
        borderRadius: '15px',
        padding: '40px',
        maxWidth: '500px',
        width: '100%',
        maxHeight: '90vh',
        overflowY: 'auto',
        position: 'relative',
        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
        animation: 'slideIn 0.3s ease-out'
      }}>
        {/* Botão de fechar */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '15px',
            right: '15px',
            background: 'none',
            border: 'none',
            fontSize: '24px',
            cursor: 'pointer',
            color: '#999',
            width: '30px',
            height: '30px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '50%',
            transition: 'all 0.2s ease'
          }}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = '#f0f0f0';
            e.target.style.color = '#333';
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = 'transparent';
            e.target.style.color = '#999';
          }}
        >
          ×
        </button>

        {/* Cabeçalho */}
        <div style={{ textAlign: 'center', marginBottom: '30px' }}>
          <h2 style={{
            fontSize: '1.8rem',
            fontWeight: 'bold',
            color: '#333',
            marginBottom: '10px',
            lineHeight: '1.2'
          }}>
            🎯 Quase lá!
          </h2>
          <p style={{
            color: '#666',
            fontSize: '1rem',
            lineHeight: '1.4',
            margin: 0
          }}>
            Preencha seus dados para garantir sua <strong style={{ color: '#17a2b8' }}>oferta especial</strong> e começar sua transformação hoje mesmo!
          </p>
        </div>

        {/* Formulário */}
        <form onSubmit={handleSubmit}>
          {/* Nome */}
          <div style={{ marginBottom: '20px' }}>
            <label style={{
              display: 'block',
              marginBottom: '8px',
              fontWeight: '600',
              color: '#333',
              fontSize: '0.9rem'
            }}>
              Nome Completo *
            </label>
            <input
              type="text"
              name="nome"
              value={formData.nome}
              onChange={handleInputChange}
              placeholder="Digite seu nome completo"
              style={{
                width: '100%',
                padding: '12px 15px',
                border: errors.nome ? '2px solid #e74c3c' : '2px solid #e0e0e0',
                borderRadius: '8px',
                fontSize: '1rem',
                boxSizing: 'border-box',
                transition: 'border-color 0.2s ease',
                outline: 'none'
              }}
              onFocus={(e) => {
                if (!errors.nome) {
                  e.target.style.borderColor = '#17a2b8';
                }
              }}
              onBlur={(e) => {
                if (!errors.nome) {
                  e.target.style.borderColor = '#e0e0e0';
                }
              }}
            />
            {errors.nome && (
              <span style={{
                color: '#e74c3c',
                fontSize: '0.8rem',
                marginTop: '5px',
                display: 'block'
              }}>
                {errors.nome}
              </span>
            )}
          </div>

          {/* Email */}
          <div style={{ marginBottom: '20px' }}>
            <label style={{
              display: 'block',
              marginBottom: '8px',
              fontWeight: '600',
              color: '#333',
              fontSize: '0.9rem'
            }}>
              Email *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="seu@email.com"
              style={{
                width: '100%',
                padding: '12px 15px',
                border: errors.email ? '2px solid #e74c3c' : '2px solid #e0e0e0',
                borderRadius: '8px',
                fontSize: '1rem',
                boxSizing: 'border-box',
                transition: 'border-color 0.2s ease',
                outline: 'none'
              }}
              onFocus={(e) => {
                if (!errors.email) {
                  e.target.style.borderColor = '#17a2b8';
                }
              }}
              onBlur={(e) => {
                if (!errors.email) {
                  e.target.style.borderColor = '#e0e0e0';
                }
              }}
            />
            {errors.email && (
              <span style={{
                color: '#e74c3c',
                fontSize: '0.8rem',
                marginTop: '5px',
                display: 'block'
              }}>
                {errors.email}
              </span>
            )}
          </div>

          {/* Telefone */}
          <div style={{ marginBottom: '20px' }}>
            <label style={{
              display: 'block',
              marginBottom: '8px',
              fontWeight: '600',
              color: '#333',
              fontSize: '0.9rem'
            }}>
              WhatsApp *
            </label>
            <input
              type="tel"
              name="telefone"
              value={formData.telefone}
              onChange={handlePhoneChange}
              placeholder="(11) 99999-9999"
              maxLength="15"
              style={{
                width: '100%',
                padding: '12px 15px',
                border: errors.telefone ? '2px solid #e74c3c' : '2px solid #e0e0e0',
                borderRadius: '8px',
                fontSize: '1rem',
                boxSizing: 'border-box',
                transition: 'border-color 0.2s ease',
                outline: 'none'
              }}
              onFocus={(e) => {
                if (!errors.telefone) {
                  e.target.style.borderColor = '#17a2b8';
                }
              }}
              onBlur={(e) => {
                if (!errors.telefone) {
                  e.target.style.borderColor = '#e0e0e0';
                }
              }}
            />
            {errors.telefone && (
              <span style={{
                color: '#e74c3c',
                fontSize: '0.8rem',
                marginTop: '5px',
                display: 'block'
              }}>
                {errors.telefone}
              </span>
            )}
          </div>

          {/* Objetivo */}
          <div style={{ marginBottom: '30px' }}>
            <label style={{
              display: 'block',
              marginBottom: '8px',
              fontWeight: '600',
              color: '#333',
              fontSize: '0.9rem'
            }}>
              Qual seu principal objetivo? *
            </label>
            <select
              name="objetivo"
              value={formData.objetivo}
              onChange={handleInputChange}
              style={{
                width: '100%',
                padding: '12px 15px',
                border: errors.objetivo ? '2px solid #e74c3c' : '2px solid #e0e0e0',
                borderRadius: '8px',
                fontSize: '1rem',
                boxSizing: 'border-box',
                transition: 'border-color 0.2s ease',
                outline: 'none',
                backgroundColor: 'white',
                cursor: 'pointer'
              }}
              onFocus={(e) => {
                if (!errors.objetivo) {
                  e.target.style.borderColor = '#17a2b8';
                }
              }}
              onBlur={(e) => {
                if (!errors.objetivo) {
                  e.target.style.borderColor = '#e0e0e0';
                }
              }}
            >
              <option value="">Selecione seu objetivo</option>
              {objetivos.map((objetivo, index) => (
                <option key={index} value={objetivo}>
                  {objetivo}
                </option>
              ))}
            </select>
            {errors.objetivo && (
              <span style={{
                color: '#e74c3c',
                fontSize: '0.8rem',
                marginTop: '5px',
                display: 'block'
              }}>
                {errors.objetivo}
              </span>
            )}
          </div>

          {/* Botão de envio */}
          <button
            type="submit"
            disabled={isSubmitting}
            style={{
              width: '100%',
              padding: '15px',
              backgroundColor: isSubmitting ? '#ccc' : '#17a2b8',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontSize: '1.1rem',
              fontWeight: 'bold',
              cursor: isSubmitting ? 'not-allowed' : 'pointer',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              transition: 'all 0.3s ease',
              boxShadow: isSubmitting ? 'none' : '0 4px 12px rgba(23, 162, 184, 0.3)'
            }}
            onMouseOver={(e) => {
              if (!isSubmitting) {
                e.target.style.backgroundColor = '#138496';
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 6px 16px rgba(23, 162, 184, 0.4)';
              }
            }}
            onMouseOut={(e) => {
              if (!isSubmitting) {
                e.target.style.backgroundColor = '#17a2b8';
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 4px 12px rgba(23, 162, 184, 0.3)';
              }
            }}
          >
            {isSubmitting ? '⏳ Enviando...' : '🚀 GARANTIR MINHA VAGA!'}
          </button>
        </form>

        {/* Rodapé */}
        <div style={{
          textAlign: 'center',
          marginTop: '20px',
          padding: '15px',
          backgroundColor: '#f8f9fa',
          borderRadius: '8px'
        }}>
          <p style={{
            fontSize: '0.8rem',
            color: '#666',
            margin: 0,
            lineHeight: '1.4'
          }}>
            🔒 **Seus dados estão seguros**<br />
            Utilizamos criptografia SSL para proteger suas informações
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: scale(0.9) translateY(-20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        
        @media (max-width: 768px) {
          div[style*="padding: 40px"] {
            padding: 20px !important;
          }
          
          h2[style*="fontSize: 1.8rem"] {
            fontSize: 1.5rem !important;
          }
          
          p[style*="fontSize: 1rem"] {
            fontSize: 0.9rem !important;
          }
        }
      `}</style>
    </div>
  );
};

export default PopupForm;
