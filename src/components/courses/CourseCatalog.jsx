import React, { useEffect, useMemo, useState } from "react";
import coursesData from "../../data/courses";
import CourseFilters from "./CourseFilters";
import CourseCard from "./CourseCard";
import "../css/Courses.css";

const FAVORITES_KEY = "favoriteCourses";

function CourseCatalog() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("");
  const [level, setLevel] = useState("");
  const [language, setLanguage] = useState("");
  const [onlyFavs, setOnlyFavs] = useState(false);
  const [sortBy, setSortBy] = useState("relevance");
  const [favorites, setFavorites] = useState(() => {
    try {
      const raw = localStorage.getItem(FAVORITES_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
    } catch {}
  }, [favorites]);

  const onFiltersChange = (patch) => {
    if (patch.query !== undefined) setQuery(patch.query);
    if (patch.category !== undefined) setCategory(patch.category);
    if (patch.level !== undefined) setLevel(patch.level);
    if (patch.language !== undefined) setLanguage(patch.language);
    if (patch.onlyFavs !== undefined) setOnlyFavs(patch.onlyFavs);
    if (patch.sortBy !== undefined) setSortBy(patch.sortBy);
  };

  const toggleFavorite = (courseId) => {
    setFavorites((prev) =>
      prev.includes(courseId)
        ? prev.filter((id) => id !== courseId)
        : [...prev, courseId]
    );
  };

  const filteredCourses = useMemo(() => {
    let list = [...coursesData];

    if (query.trim()) {
      const q = query.toLowerCase();
      list = list.filter(
        (c) =>
          c.title.toLowerCase().includes(q) ||
          c.category.toLowerCase().includes(q) ||
          (c.tag || "").toLowerCase().includes(q)
      );
    }

    if (category) list = list.filter((c) => c.category === category);
    if (level) list = list.filter((c) => c.level === level);
    if (language) list = list.filter((c) => c.language === language);
    if (onlyFavs) list = list.filter((c) => favorites.includes(c.id));

    switch (sortBy) {
      case "rating_desc":
        list.sort((a, b) => b.rating - a.rating);
        break;
      case "price_asc":
        list.sort((a, b) => a.price - b.price);
        break;
      case "price_desc":
        list.sort((a, b) => b.price - a.price);
        break;
      case "title_asc":
        list.sort((a, b) => a.title.localeCompare(b.title));
        break;
      default:
        // relevance: mantener orden base
        break;
    }

    return list;
  }, [query, category, level, language, onlyFavs, sortBy, favorites]);

  return (
    <div className="course-catalog">
      <CourseFilters
        query={query}
        category={category}
        level={level}
        language={language}
        onlyFavs={onlyFavs}
        sortBy={sortBy}
        onChange={onFiltersChange}
      />

      <div className="catalog-meta">
        <span className="results-count">
          {filteredCourses.length} resultados
        </span>
        {onlyFavs && <span className="fav-indicator">Viendo favoritos</span>}
      </div>

      {filteredCourses.length === 0 ? (
        <div className="empty-state card fade-in">
          <div className="empty-icon" aria-hidden>
            <svg
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </div>
          <h3 className="empty-title">Sin resultados</h3>
          <p className="empty-desc">
            No encontramos cursos que coincidan. Intenta limpiar o cambiar los
            filtros.
          </p>
          <button
            className="btn btn-secondary"
            onClick={() =>
              onFiltersChange({
                query: "",
                category: "",
                level: "",
                language: "",
                onlyFavs: false,
                sortBy: "relevance",
              })
            }
          >
            Limpiar filtros
          </button>
        </div>
      ) : (
        <div className="courses-grid grid grid-cols-3">
          {filteredCourses.map((c) => (
            <CourseCard
              key={c.id}
              course={c}
              isFavorite={favorites.includes(c.id)}
              onToggleFavorite={toggleFavorite}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default CourseCatalog;
