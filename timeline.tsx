// types.ts
export interface TimelineItem {
    title: string;
    date: string;
    description: string;
    type: 'work' | 'project';
    first?: null | boolean;
}

// Timeline.tsx
import React, {useEffect, useRef, useState} from 'react';
import styles from '/styles/timeline.module.css';

const Timeline: React.FC = () => {
    const [timelineData, setTimelineData] = useState<TimelineItem[]>([]);
    const containerRef = useRef<HTMLDivElement>(null);
    const workExperienceLineRef = useRef<HTMLDivElement>(null);

    async function fetchData() {
        const res = await fetch('/experience.json');
        const data = await res.json();
        return Object.values<TimelineItem>(data);
    }

    useEffect(() => {
        const updateLinePosition = () => {
            if (containerRef.current && workExperienceLineRef.current) {
                const workItems = timelineData.filter(item => item.type === 'work');
                if (workItems.length > 0) {
                    const container = containerRef.current;
                    const allItems = container.querySelectorAll(`.${styles.timelineItem}`);

                    // Find the indices of the first and last work items
                    const firstWorkIndex = timelineData.findIndex(item => item.type === 'work');
                    const lastWorkIndex = timelineData.length - 1 - [...timelineData].reverse().findIndex(item => item.type === 'work');

                    const firstWorkItem = allItems[firstWorkIndex] as HTMLElement;
                    const lastWorkItem = allItems[lastWorkIndex] as HTMLElement;

                    if (firstWorkItem && lastWorkItem) {
                        const lineEnd = lastWorkItem.offsetTop + lastWorkItem.offsetHeight / 2;

                        const line = workExperienceLineRef.current;
                        line.style.top = `0px`;
                        line.style.height = `${lineEnd}px`;
                    }
                }
            }
        };
        
        fetchData().then((data) => {
            console.log(data);
            setTimelineData(data);

            updateLinePosition();
        });

        const handleResize = () => {
            updateLinePosition();
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [timelineData]);
    return (
        <div className={styles.timelineContainer} ref={containerRef}>
            <div className={styles.mainLine} />
            <div className={styles.workExperienceLine} ref={workExperienceLineRef} />

            {timelineData.map((item, index) => (
                <div key={index} className={styles.timelineItem}>
                    <div className={item.type === "work" ? styles.workContent : styles.content}>
                        <div className={styles.textContent}>
                            <p className={styles.date}>{item.date}</p>
                            <h3 className={styles.title}>{item.title}</h3>
                            <p className={styles.date}>{item.description}</p>
                        </div>
                        {item.type !== "work" && <div className={styles.dot} />}
                    </div>
                    {item.type === "work" && (
                        <>
                            {item.first === true && <div className={styles.workConnector} />}
                            <div className={styles.workDot} />
                        </>
                    )}
                </div>
            ))}

            <div className={styles.legend}>
                <div className={styles.legendItem}>
                    <div className={`${styles.legendDot} ${styles.legendDotYellow}`} />
                    <span className={styles.legendText}>Significant Projects</span>
                </div>
                <div className={styles.legendItem}>
                    <div className={`${styles.legendDot} ${styles.legendDotPurple}`} />
                    <span className={styles.legendText}>Work Experience</span>
                </div>
            </div>
        </div>
    );
};
export default Timeline;