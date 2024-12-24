// types.ts
export interface TimelineItem {
    title: string;
    date: string;
    type: 'work' | 'project';
    first?: null | boolean;
}

// Timeline.tsx
import React, {useEffect, useRef} from 'react';
import styles from '/styles/timeline.module.css';

const timelineData: TimelineItem[] = [
    {
        title: "VBA Macro Developer, I-Xon a.s.",
        date: "Now",
        type: "work",
    },
    {
        title: "Excel Sheet Enhancements for a Private Client",
        date: "June 2024",
        type: "work"
    },
    {
        title: "Excel Sheet Enhancements for a Private Client",
        date: "May 2024",
        type: "work"
    },
    {
        title: "Internship - Web Developer",
        date: "Apr 2024",
        type: "work"
    },
    {
        title: "CropThatImage!",
        date: "Feb 2024",
        type: "project"
    },
    {
        title: "SightlessKnight",
        date: "Oct 2023",
        type: "project"
    },
    {
        title: "Content Curator",
        date: "Oct 2023",
        type: "work",
        first: true
    },
    {
        title: "WidgetSchedule",
        date: "Jun 2023",
        type: "project"
    },
    {
        title: "Schedule Change Notifier",
        date: "Jan 2023",
        type: "project"
    },
    {
        title: "MyFavMovies",
        date: "Dec 2022",
        type: "project"
    },
    {
        title: "myQuotes",
        date: "Sep 2022",
        type: "project"
    }
];

const Timeline: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const workExperienceLineRef = useRef<HTMLDivElement>(null);

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

    useEffect(() => {
        // Initial calculation
        updateLinePosition();

        // Add resize event listener
        const handleResize = () => {
            updateLinePosition();
        };

        window.addEventListener('resize', handleResize);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []); // Empty dependency array ensures it runs only once

    return (
        <div className={styles.timelineContainer} ref={containerRef}>
            <div className={styles.mainLine} />
            <div className={styles.workExperienceLine} ref={workExperienceLineRef} />

            {timelineData.map((item, index) => (
                <div key={index} className={styles.timelineItem}>
                    <div className={item.type === "work" ? styles.workContent : styles.content}>
                        <div className={styles.textContent}>
                            <h3 className={styles.title}>{item.title}</h3>
                            <p className={styles.date}>{item.date}</p>
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