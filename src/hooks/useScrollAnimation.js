import { useEffect, useRef, useState } from 'react';

/**
 * Hook personalizado para animaciones de scroll usando Intersection Observer
 * @param {Object} options - Opciones para el Intersection Observer
 * @param {number} options.threshold - Umbral de visibilidad (0-1)
 * @param {string} options.rootMargin - Margen del root
 * @param {boolean} options.triggerOnce - Si la animación debe ejecutarse solo una vez
 * @returns {Array} [ref, isVisible] - Referencia del elemento y estado de visibilidad
 */
export const useScrollAnimation = (options = {}) => {
    const {
        threshold = 0.1,
        rootMargin = '0px 0px -50px 0px',
        triggerOnce = true
    } = options;

    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    if (triggerOnce) {
                        observer.unobserve(element);
                    }
                } else if (!triggerOnce) {
                    setIsVisible(false);
                }
            },
            {
                threshold,
                rootMargin
            }
        );

        observer.observe(element);

        return () => {
            if (element) {
                observer.unobserve(element);
            }
        };
    }, [threshold, rootMargin, triggerOnce]);

    return [ref, isVisible];
};

/**
 * Hook para animaciones escalonadas de múltiples elementos
 * @param {number} itemCount - Número de elementos
 * @param {number} delay - Delay entre animaciones (ms)
 * @returns {Array} [refs, visibleItems] - Referencias y elementos visibles
 */
export const useStaggeredAnimation = (itemCount, delay = 100) => {
    const [visibleItems, setVisibleItems] = useState(new Set());
    const refs = useRef([]);

    useEffect(() => {
        const observers = [];

        refs.current.forEach((ref, index) => {
            if (!ref) return;

            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                            setVisibleItems(prev => new Set([...prev, index]));
                        }, index * delay);
                        observer.unobserve(ref);
                    }
                },
                {
                    threshold: 0.1,
                    rootMargin: '0px 0px -50px 0px'
                }
            );

            observer.observe(ref);
            observers.push(observer);
        });

        return () => {
            observers.forEach(observer => observer.disconnect());
        };
    }, [itemCount, delay]);

    const setRef = (index) => (element) => {
        refs.current[index] = element;
    };

    return [setRef, visibleItems];
};

/**
 * Hook para detectar scroll y aplicar efectos
 * @returns {Object} Estado del scroll
 */
export const useScrollEffects = () => {
    const [scrollY, setScrollY] = useState(0);
    const [scrollDirection, setScrollDirection] = useState('up');
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        let lastScrollY = window.scrollY;

        const updateScrollState = () => {
            const currentScrollY = window.scrollY;
            
            setScrollY(currentScrollY);
            setIsScrolled(currentScrollY > 50);
            setScrollDirection(currentScrollY > lastScrollY ? 'down' : 'up');
            
            lastScrollY = currentScrollY;
        };

        const throttledUpdateScrollState = throttle(updateScrollState, 10);

        window.addEventListener('scroll', throttledUpdateScrollState);

        return () => {
            window.removeEventListener('scroll', throttledUpdateScrollState);
        };
    }, []);

    return {
        scrollY,
        scrollDirection,
        isScrolled
    };
};

/**
 * Hook para animaciones de entrada de página
 * @param {number} delay - Delay inicial
 */
export const usePageAnimation = (delay = 100) => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoaded(true);
        }, delay);

        return () => clearTimeout(timer);
    }, [delay]);

    return isLoaded;
};

/**
 * Función de throttle para optimizar el rendimiento
 */
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

/**
 * Componente wrapper para animaciones de scroll
 */
export const ScrollAnimationWrapper = ({ 
    children, 
    animation = 'fade-in-on-scroll',
    delay = 0,
    className = '',
    ...props 
}) => {
    const [ref, isVisible] = useScrollAnimation();

    return (
        <div
            ref={ref}
            className={`${animation} ${isVisible ? 'visible' : ''} ${className}`}
            style={{ 
                animationDelay: `${delay}ms`,
                ...props.style 
            }}
            {...props}
        >
            {children}
        </div>
    );
};

export default useScrollAnimation;