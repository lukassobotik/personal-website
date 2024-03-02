import styles from "./styles/Home.module.css";
// @ts-ignore
import AOS from 'aos';
import {useCallback, useEffect, useState} from "react";

export interface TimelineItem {
    title: string;
    duration: string;
    description: string;
    percentage: string;
}

export default function Timeline() {
    const [timelineItems, setTimelineItems] = useState<TimelineItem[]>([]);
    const [leftItems, setLeftItems] = useState<TimelineItem[]>([]);
    const [rightItems, setRightItems] = useState<TimelineItem[]>([]);

    const splitItemsEvenly = useCallback(() => {
        let leftItems: TimelineItem[] = [];
        let rightItems: TimelineItem[] = [];

        for (let i = 0; i < timelineItems.length; i++) {
            if (i % 2 === 0) {
                leftItems.push(timelineItems[i]);
            } else {
                rightItems.push(timelineItems[i]);
            }
        }

        setLeftItems(leftItems);
        setRightItems(rightItems);
    }, [timelineItems]);

    useEffect(() => {
        AOS.init();

        if (timelineItems.length > 0) {
            console.log("Timeline items already fetched");
            splitItemsEvenly();
            return;
        }

        fetchData().then((data) => {
            console.log(data);
            setTimelineItems(data);
            splitItemsEvenly();
        });
    }, [splitItemsEvenly, timelineItems.length]);

    async function fetchData() {
        const res = await fetch('/experience.json');
        const data = await res.json();
        return Object.values<TimelineItem>(data);
    }

    return (
        <div data-aos="fade-up" data-aos-once={true}>
            <h1 className={styles.timeline_heading}>Job Experience Timeline</h1>
            <div className={styles.timeline}>
                <div className={styles.timeline_container}>
                    <div>

                    </div>
                </div>
                {rightItems.map((item, index) => {
                    return (
                        <div key={100 + index} style={{top: item.percentage}} className={styles.timeline_item}>
                            <div className={styles.timeline_item_point}>

                            </div>
                            <div className={styles.timeline_right_item_content}>
                                <p className={styles.timeline_item_duration}>{item.duration}</p>
                                <h2>{item.title}</h2>
                                <p className={styles.timeline_item_paragraph}>{item.description}</p>
                            </div>
                        </div>
                    )
                })}
                {leftItems.map((item, index) => {
                    return (
                        <div key={-100 + index} style={{top: item.percentage}} className={styles.timeline_item}>
                            <div className={styles.timeline_item_point}>

                            </div>
                            <div className={styles.timeline_left_item_content}>
                                <p className={styles.timeline_item_duration}>{item.duration}</p>
                                <h2>{item.title}</h2>
                                <p className={styles.timeline_item_paragraph}>{item.description}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}