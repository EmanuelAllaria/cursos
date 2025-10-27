import React from 'react';

function CourseCard({ course, isFavorite, onToggleFavorite }) {
  return (
    <div className="course-card card hover-lift fade-in-up">
      <div className="course-card-media">
        <img src={course.image} alt={course.title} className="course-card-image" />
        {course.tag && <span className="course-card-badge">{course.tag}</span>}
        <button
          className={`course-fav-btn ${isFavorite ? 'active' : ''}`}
          aria-label={isFavorite ? 'Quitar de favoritos' : 'Agregar a favoritos'}
          onClick={() => onToggleFavorite(course.id)}
          title={isFavorite ? 'Quitar de favoritos' : 'Agregar a favoritos'}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill={isFavorite ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </button>
      </div>

      <div className="course-card-body">
        <h3 className="course-card-title">{course.title}</h3>
        <div className="course-card-meta">
          <span className="meta-chip">{course.category}</span>
          <span className="meta-dot" />
          <span className="meta-chip">{course.level}</span>
          <span className="meta-dot" />
          <span className="meta-chip">{course.language}</span>
        </div>
        <div className="course-card-stats">
          <span className="stat">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polygon points="12 2 15 9 22 9 17 14 19 21 12 17 5 21 7 14 2 9 9 9 12 2"/>
            </svg>
            {course.rating} ({course.reviews})
          </span>
          <span className="stat">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
            </svg>
            {course.duration}
          </span>
          <span className="stat">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
            </svg>
            {course.lessons} lecciones
          </span>
        </div>

        <div className="course-card-footer">
          <div className="course-card-price">
            {course.price === 0 ? 'Gratis' : `$${course.price}`}
          </div>
          <a href="/curso" className="btn btn-primary btn-sm">Ver más</a>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;