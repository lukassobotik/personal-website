import {CSSProperties, FC, PropsWithChildren, RefObject, useEffect, useRef, useState} from "react";
import styles from '../styles/Home.module.css'

function useElementOnScreen(
    ref: RefObject<Element>,
    rootMargin = "0px",
) {
    const [isIntersecting, setIsIntersecting] = useState(true);
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsIntersecting(entry.isIntersecting);
            },
            { rootMargin }
        );
        if (ref.current) {
            observer.observe(ref.current);
        }
        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);
    return isIntersecting;
}

const AnimateIn: FC<
    PropsWithChildren<{ from: CSSProperties; to: CSSProperties, className: string | undefined }>
> = ({ from, to, children, className }) => {
    const ref = useRef<HTMLDivElement>(null);
    const onScreen = useElementOnScreen(ref);
    const defaultStyles: CSSProperties = {
        transition: "600ms ease-in-out",
    };
    return (
        <div ref={ref} style={ onScreen ? {...defaultStyles, ...to,} : {...defaultStyles, ...from,} } className={className}>
            {children}
        </div>
    );
};


export const FadeLeft: FC<PropsWithChildren> = ({ children }) => (
    <AnimateIn
        from={{ opacity: 0, translate: "2rem 0" }}
        to={{ opacity: 1, translate: "none" }}
        className={styles.odd_featured_project}>
        {children}
    </AnimateIn>
);

export const FadeRight: FC<PropsWithChildren> = ({ children }) => (
    <AnimateIn
        from={{ opacity: 0, translate: "-2rem 0" }}
        to={{ opacity: 1, translate: "none" }}
        className={styles.even_featured_project}>
        {children}
    </AnimateIn>
);