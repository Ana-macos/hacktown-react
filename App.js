import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [timeFilter, setTimeFilter] = useState('');
  const [rating, setRating] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const activities = [
    {
      id: 1,
      title: "O Futuro da Inteligência Artificial",
      speaker: "Dr. Ana Silva",
      time: "09:00 - 10:30",
      category: "tecnologia",
      period: "manha",
      location: "Auditório Principal",
      rating: 4.8,
      favorite: false
    },
    {
      id: 2,
      title: "Estratégias de Marketing Digital",
      speaker: "Carlos Santos",
      time: "11:00 - 12:30",
      category: "marketing",
      period: "manha",
      location: "Sala A",
      rating: 4.5,
      favorite: true
    },
    {
      id: 3,
      title: "Inovação em Startups",
      speaker: "Maria Oliveira",
      time: "14:00 - 15:30",
      category: "inovacao",
      period: "tarde",
      location: "Sala B",
      rating: 4.7,
      favorite: false
    },
    {
      id: 4,
      title: "Liderança no Século XXI",
      speaker: "João Pereira",
      time: "16:00 - 17:30",
      category: "negocios",
      period: "tarde",
      location: "Auditório Principal",
      rating: 4.6,
      favorite: true
    }
  ];

  const aiRecommendations = [
    {
      id: 5,
      title: "Machine Learning na Prática",
      speaker: "Prof. Roberto Lima",
      time: "10:00 - 11:30",
      reason: "Baseado no seu interesse em IA"
    },
    {
      id: 6,
      title: "Blockchain e Criptomoedas",
      speaker: "Fernanda Costa",
      time: "15:00 - 16:30",
      reason: "Recomendado para profissionais de tecnologia"
    }
  ];

  const filteredActivities = activities.filter(activity => {
    const matchesSearch = activity.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         activity.speaker.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !categoryFilter || activity.category === categoryFilter;
    const matchesTime = !timeFilter || activity.period === timeFilter;
    return matchesSearch && matchesCategory && matchesTime;
  });

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'auto' });
    setMenuOpen(false);
  };

  const showNotification = (message) => {
    // Implementação simplificada de notificação
    alert(message);
  };

  const toggleFavorite = (activityId) => {
    showNotification('Atividade favoritada!');
  };

  const addToAgenda = (activityId) => {
    showNotification('Atividade adicionada à sua agenda personalizada!');
  };

  return (
    <div className="App">
      {/* Header */}
      <header className="header">
        <nav className="navbar">
          <div className="nav-brand">
            <i className="fas fa-calendar-alt"></i>
            <span>HACKTOWN SRS</span>
          </div>
          <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
            <li><a href="#home" onClick={() => scrollToSection('home')}>Início</a></li>
            <li><a href="#features" onClick={() => scrollToSection('features')}>Recursos</a></li>
            <li><a href="#agenda" onClick={() => scrollToSection('agenda')}>Agenda</a></li>
            <li><a href="#map" onClick={() => scrollToSection('map')}>Mapa</a></li>
            <li><a href="#contact" onClick={() => scrollToSection('contact')}>Contato</a></li>
          </ul>
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section id="home" className="hero">
          <div className="hero-content">
            <h1>HACKTOWN SRS</h1>
            <p>Acompanhe toda a programação, monte sua agenda personalizada e descubra as melhores atividades com nossa IA avançada</p>
            <div className="cta-buttons">
              <button className="btn-primary">Começar Agora</button>
              <button className="btn-secondary">Ver Demo</button>
            </div>
          </div>
          <div className="hero-image">
            <i className="fas fa-mobile-alt"></i>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="features">
          <div className="container">
            <h2>Recursos Principais</h2>
            <div className="features-grid">
              <div className="feature-card">
                <i className="fas fa-heart"></i>
                <h3>Favoritar Atividades</h3>
                <p>Marque suas palestras e atividades favoritas para criar sua agenda personalizada</p>
              </div>
              <div className="feature-card">
                <i className="fas fa-robot"></i>
                <h3>Recomendações IA</h3>
                <p>Nossa IA analisa seu perfil e recomenda as melhores atividades para você</p>
              </div>
              <div className="feature-card">
                <i className="fas fa-search"></i>
                <h3>Busca Avançada</h3>
                <p>Encontre rapidamente atividades e palestras com filtros inteligentes</p>
              </div>
              <div className="feature-card">
                <i className="fas fa-map-marked-alt"></i>
                <h3>Mapa Interativo</h3>
                <p>Navegue pelo evento e acompanhe o translado em tempo real</p>
              </div>
              <div className="feature-card">
                <i className="fas fa-star"></i>
                <h3>Avaliações</h3>
                <p>Avalie palestras e compartilhe sua experiência com outros participantes</p>
              </div>
              <div className="feature-card">
                <i className="fas fa-calendar-check"></i>
                <h3>Agenda Personalizada</h3>
                <p>Monte sua programação ideal com notificações e lembretes</p>
              </div>
            </div>
          </div>
        </section>

        {/* Agenda Section */}
        <section id="agenda" className="agenda-section">
          <div className="container">
            <h2>Sua Agenda Personalizada</h2>
            
            <div className="search-filters">
              <div className="search-bar">
                <i className="fas fa-search"></i>
                <input 
                  type="text" 
                  placeholder="Buscar atividades, palestrantes..." 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="filters">
                <select value={categoryFilter} onChange={(e) => setCategoryFilter(e.target.value)}>
                  <option value="">Todas as categorias</option>
                  <option value="tecnologia">Tecnologia</option>
                  <option value="negocios">Negócios</option>
                  <option value="inovacao">Inovação</option>
                  <option value="marketing">Marketing</option>
                </select>
                <select value={timeFilter} onChange={(e) => setTimeFilter(e.target.value)}>
                  <option value="">Todos os horários</option>
                  <option value="manha">Manhã</option>
                  <option value="tarde">Tarde</option>
                  <option value="noite">Noite</option>
                </select>
              </div>
            </div>

            <div className="ai-recommendations">
              <h3><i className="fas fa-magic"></i> Recomendações para Você</h3>
              <div className="recommendations-list">
                {aiRecommendations.map(rec => (
                  <div key={rec.id} className="recommendation-card">
                    <h4>{rec.title}</h4>
                    <p><i className="fas fa-user"></i> {rec.speaker}</p>
                    <p><i className="fas fa-clock"></i> {rec.time}</p>
                    <p className="ai-reason"><i className="fas fa-lightbulb"></i> {rec.reason}</p>
                    <button className="btn-secondary" onClick={() => addToAgenda(rec.id)}>
                      Adicionar
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="activities-list">
              {filteredActivities.map(activity => (
                <div key={activity.id} className="activity-card">
                  <div className="activity-header">
                    <h3>{activity.title}</h3>
                    <button 
                      className={`favorite-btn ${activity.favorite ? 'active' : ''}`}
                      onClick={() => toggleFavorite(activity.id)}
                    >
                      <i className="fas fa-heart"></i>
                    </button>
                  </div>
                  <div className="activity-info">
                    <p><i className="fas fa-user"></i> {activity.speaker}</p>
                    <p><i className="fas fa-clock"></i> {activity.time}</p>
                    <p><i className="fas fa-map-marker-alt"></i> {activity.location}</p>
                    <div className="activity-rating">
                      <i className="fas fa-star"></i>
                      <span>{activity.rating}</span>
                    </div>
                  </div>
                  <div className="activity-actions">
                    <button className="btn-primary" onClick={() => addToAgenda(activity.id)}>
                      Adicionar à Agenda
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section id="map" className="map-section">
          <div className="container">
            <h2>Mapa do Evento</h2>
            <div className="map-container">
              <div className="map-placeholder">
                <i className="fas fa-map"></i>
                <p>Mapa Interativo do Evento</p>
                <div className="transport-info">
                  <h4>Translado em Tempo Real</h4>
                  <div className="transport-status">
                    <div className="bus-info">
                      <i className="fas fa-car"></i>
                      <span>Carro A - Chegando em 5 min</span>
                    </div>
                    <div className="bus-info">
                      <i className="fas fa-car"></i>
                      <span>Carro B - Chegando em 12 min</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Evaluation Section */}
        <section className="evaluation-section">
          <div className="container">
            <h2>Avalie as Palestras</h2>
            <div className="evaluation-card">
              <h3>Palestra: "O Futuro da IA"</h3>
              <div className="rating">
                <span>Sua avaliação:</span>
                <div className="stars">
                  {[1, 2, 3, 4, 5].map(star => (
                    <i 
                      key={star}
                      className={`fas fa-star ${star <= rating ? 'active' : ''}`}
                      onClick={() => setRating(star)}
                    ></i>
                  ))}
                </div>
              </div>
              <textarea placeholder="Deixe seu comentário sobre a palestra..."></textarea>
              <button className="btn-primary">Enviar Avaliação</button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>HACKTOWN SRS</h3>
              <p>Transformando a experiência em eventos com tecnologia inteligente</p>
            </div>
            <div className="footer-section">
              <h4>Recursos</h4>
              <ul>
                <li>Agenda Personalizada</li>
                <li>Recomendações IA</li>
                <li>Mapa Interativo</li>
                <li>Avaliações</li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Contato</h4>
              <p>suporte@hacktown-srs.com</p>
              <p>(11) 9999-9999</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 HACKTOWN SRS. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;