import styles from "./styles/timeline.module.css";
// @ts-ignore
import AOS from 'aos';
import {useCallback, useEffect, useState} from "react";
import Xarrow, {useXarrow, Xwrapper} from "react-xarrows";
import { format, addMonths, parse } from 'date-fns';

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
    const [months, setMonths] = useState<string[]>([]);

    const updateXarrow = useXarrow();

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

    useEffect(() => {
        getMonthsUntilNow("Jan 2024");
    }, []);

    async function fetchData() {
        const res = await fetch('/experience.json');
        const data = await res.json();
        return Object.values<TimelineItem>(data);
    }

    const getMonthsUntilNow = (startDate: string): string[] => {
        // Parse the input start date
        const parsedDate = parse(startDate, 'MMM yyyy', new Date());
        const result: string[] = [];

        let currentDate = parsedDate;
        const now = new Date();

        while (currentDate <= now) {
            // Format the current date to 'MMM yyyy'
            const formattedDate = format(currentDate, 'MMM_yyyy');
            result.push(formattedDate);
            currentDate = addMonths(currentDate, 1);
        }

        const returnValue = Array.from(new Set(result));
        setMonths(returnValue);
        return returnValue;
    };

    return (
        <div data-aos="fade-up" data-aos-once={true}>
            <h1 className={styles.timeline_heading}>Job Experience Timeline</h1>
            <div className={styles.timeline}>
                <div className={styles.timeline_container}>
                    {months !== null && months.length !== 0 ? <Xwrapper>
                        <div className={styles.months}>
                            {months.map((month, id) => {
                                return (<div key={id}>
                                    <div id={month}>{month}</div>
                                    <div className={styles.month}>
                                        <div className={styles.month_branch_left}> . </div>
                                        <div id={month + "_b"} className={styles.month_branch_right}> . </div>
                                    </div>
                                </div>)
                            })}
                            <Xarrow showHead={false} start="Jan_2024" end="Jan_2024_b"/>
                            <Xarrow showHead={false} start="Jan_2024_b" end="Apr_2024_b"/>
                            <Xarrow showHead={false} start="Apr_2024_b" end="May_2024"/>
                        </div>
                    </Xwrapper> : null}
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