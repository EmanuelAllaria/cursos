import React, { useState, useEffect } from 'react';
import './css/Banner.css';

function Banner() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

    const slides = [
        {
            title: "Domina las Tecnologías del Futuro",
            subtitle: "Aprende programación, desarrollo web y más con nuestros cursos especializados",
            description: "Únete a miles de estudiantes que ya han transformado su carrera profesional",
            cta: "Comenzar Ahora",
            ctaSecondary: "Ver Cursos",
            background: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
        },
        {
            title: "Instructores Expertos",
            subtitle: "Aprende de profesionales con años de experiencia en la industria",
            description: "Contenido actualizado y metodología práctica para el mundo real",
            cta: "Conocer Instructores",
            ctaSecondary: "Ver Testimonios",
            background: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        },
        {
            title: "Certificación Profesional",
            subtitle: "Obtén certificados reconocidos por la industria",
            description: "Valida tus habilidades y destaca en el mercado laboral",
            cta: "Ver Certificados",
            ctaSecondary: "Más Información",
            background: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        }
    ];

    useEffect(() => {
        setIsVisible(true);
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 6000);

        return () => clearInterval(interval);
    }, [slides.length]);

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const currentSlideData = slides[currentSlide];

    return (
        <section className="hero-banner">
            {/* Background con overlay */}
            <div className="hero-background">
                <img 
                    src={currentSlideData.background} 
                    alt="Hero background"
                    className="hero-bg-image"
                />
                <div className="hero-overlay"></div>
            </div>

            {/* Contenido principal */}
            <div className="hero-content">
                <div className="container">
                    <div className="hero-text-content">
                        <div className={`hero-badge ${isVisible ? 'animate' : ''}`}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                            </svg>
                            Educación de Calidad Premium
                        </div>
                        
                        <h1 className={`hero-title ${isVisible ? 'animate' : ''}`}>
                            {currentSlideData.title}
                        </h1>
                        
                        <p className={`hero-subtitle ${isVisible ? 'animate' : ''}`}>
                            {currentSlideData.subtitle}
                        </p>
                        
                        <p className={`hero-description ${isVisible ? 'animate' : ''}`}>
                            {currentSlideData.description}
                        </p>

                        <div className={`hero-actions ${isVisible ? 'animate' : ''}`}>
                            <a href="/curso" className="btn btn-primary hero-cta-primary">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M5 12h14M12 5l7 7-7 7"/>
                                </svg>
                                {currentSlideData.cta}
                            </a>
                            <a href="#course" className="btn btn-secondary hero-cta-secondary">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <polygon points="5,3 19,12 5,21"/>
                                </svg>
                                {currentSlideData.ctaSecondary}
                            </a>
                        </div>

                        {/* Estadísticas */}
                        <div className={`hero-stats ${isVisible ? 'animate' : ''}`}>
                            <div className="stat-item">
                                <div className="stat-number">10K+</div>
                                <div className="stat-label">Estudiantes</div>
                            </div>
                            <div className="stat-item">
                                <div className="stat-number">50+</div>
                                <div className="stat-label">Cursos</div>
                            </div>
                            <div className="stat-item">
                                <div className="stat-number">95%</div>
                                <div className="stat-label">Satisfacción</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Controles del slider */}
            <div className="hero-controls">
                <button className="hero-nav-btn prev" onClick={prevSlide} aria-label="Slide anterior">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M15 18l-6-6 6-6"/>
                    </svg>
                </button>
                
                <div className="hero-indicators">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            className={`indicator ${index === currentSlide ? 'active' : ''}`}
                            onClick={() => goToSlide(index)}
                            aria-label={`Ir al slide ${index + 1}`}
                        />
                    ))}
                </div>
                
                <button className="hero-nav-btn next" onClick={nextSlide} aria-label="Slide siguiente">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M9 18l6-6-6-6"/>
                    </svg>
                </button>
            </div>

            {/* Scroll indicator */}
            <div className="scroll-indicator">
                <div className="scroll-text">Desliza para explorar</div>
                <div className="scroll-arrow">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M7 13l3 3 7-7"/>
                        <path d="M12 17V3"/>
                    </svg>
                </div>
            </div>
        </section>
    );
}

export default Banner;