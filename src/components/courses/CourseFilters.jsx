import React from 'react';

function CourseFilters({
  query,
  category,
  level,
  language,
  onlyFavs,
  sortBy,
  onChange,
}) {
  return (
    <div className="course-filters card fade-in">
      <div className="filters-row">
        <div className="filter-item">
          <label htmlFor="query">Buscar</label>
          <input
            id="query"
            type="text"
            className="filter-input"
            placeholder="Buscar cursos..."
            value={query}
            onChange={(e) => onChange({ query: e.target.value })}
          />
        </div>

        <div className="filter-item">
          <label htmlFor="category">Categoría</label>
          <select
            id="category"
            className="filter-input"
            value={category}
            onChange={(e) => onChange({ category: e.target.value })}
          >
            <option value="">Todas</option>
            <option value="Idiomas">Idiomas</option>
            <option value="Programación">Programación</option>
            <option value="Diseño">Diseño</option>
            <option value="Marketing">Marketing</option>
          </select>
        </div>

        <div className="filter-item">
          <label htmlFor="level">Nivel</label>
          <select
            id="level"
            className="filter-input"
            value={level}
            onChange={(e) => onChange({ level: e.target.value })}
          >
            <option value="">Todos</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>
        </div>

        <div className="filter-item">
          <label htmlFor="language">Idioma</label>
          <select
            id="language"
            className="filter-input"
            value={language}
            onChange={(e) => onChange({ language: e.target.value })}
          >
            <option value="">Todos</option>
            <option value="ES">ES</option>
            <option value="EN">EN</option>
          </select>
        </div>

        <div className="filter-item">
          <label htmlFor="sortBy">Ordenar</label>
          <select
            id="sortBy"
            className="filter-input"
            value={sortBy}
            onChange={(e) => onChange({ sortBy: e.target.value })}
          >
            <option value="relevance">Relevancia</option>
            <option value="rating_desc">Mejor calificados</option>
            <option value="price_asc">Precio: menor a mayor</option>
            <option value="price_desc">Precio: mayor a menor</option>
            <option value="title_asc">Título (A-Z)</option>
          </select>
        </div>

        <div className="filter-item fav-only">
          <label className="switch">
            <input
              type="checkbox"
              checked={onlyFavs}
              onChange={(e) => onChange({ onlyFavs: e.target.checked })}
            />
            <span className="slider" />
          </label>
          <span className="switch-label">Solo favoritos</span>
        </div>
      </div>
    </div>
  );
}

export default CourseFilters;