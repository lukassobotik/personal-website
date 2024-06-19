import styles from "./styles/timeline.module.css";
// @ts-ignore
import AOS from 'aos';
import {useCallback, useEffect, useState} from "react";
import Xarrow, {useXarrow, Xwrapper} from "react-xarrows";
import {format, addMonths, parse, differenceInMonths} from 'date-fns';
import {func} from "prop-types";

export interface TimelineItem {
    title: string;
    start: string;
    end: string;
    singleMonth: boolean;
    description: string;
    branch: string;
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
        let arr : Date[] = [];
        fetchData().then((items) => {
            let strings : string[] = [];
            let containsNow = false;
            items.forEach((item) => {
                arr.push(parse(item.start, 'MMM yyyy', new Date()))
                if (item.start !== "now") strings.push(item.start);
                if (item.end !== "now") strings.push(item.end);
                if (item.end === "now" || item.start === "now") containsNow = true;
            })
            if (containsNow) strings.push(format(new Date(), "MMM yyyy"));

            arr?.sort((a, b) => a.getTime() - b.getTime());
            console.log("arr: ", arr);
            console.log("strings: ", strings);

            setMonths(Array.from(new Set(strings)));
        })
    }, []);

    function dateCheck(date : string) : string{
        if (date === "now") {
            return format(new Date(), "MMM yyyy")
        } else {
            return date;
        }
    }
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
                    {months?.length !== 0 ? <Xwrapper>
                        <div className={styles.months}>
                            {months.map((month, id) => {
                                return (<div key={id}>
                                    <div className={styles.month_parent}>
                                        <div id={month}>{month}</div>
                                        <div id={month + "_text_a"} className={styles.month_text_branch_left}> . </div>
                                        <div id={month + "_text_b"} className={styles.month_text_branch_right}> . </div>
                                    </div>
                                    <div className={styles.month}>
                                        <div id={month + "_a"} className={styles.month_branch_left}> . </div>
                                        <div id={month + "_b"} className={styles.month_branch_right}> . </div>
                                    </div>
                                </div>)
                            })}
                        </div>
                        {timelineItems?.map((item, id) => {
                            if (!item.singleMonth) return (<div key={id}>
                                <Xarrow color="#0089ff" strokeWidth={10} showHead={false} start={dateCheck(item.start)} end={dateCheck(item.start) + "_" + item.branch} endAnchor={"top"}/>
                                <Xarrow color="#0089ff" strokeWidth={10} showHead={false} start={dateCheck(item.start) + "_" + item.branch} end={item.end === "now" ? (dateCheck(item.end) + "_" + item.branch) : dateCheck(item.end)} startAnchor={"bottom"}/>
                            </div>)
                            else return (<div key={id}>
                                <Xarrow color="#0089ff" strokeWidth={10} showHead={false} start={dateCheck(item.start)} end={dateCheck(item.start) + "_text_" + item.branch} startAnchor={"top"} endAnchor={"top"}/>
                                <Xarrow color="#0089ff" strokeWidth={10} showHead={false} start={dateCheck(item.start) + "_text_" + item.branch} end={item.end === "now" ? (dateCheck(item.end) + "_" + item.branch) : dateCheck(item.end)} startAnchor={"bottom"} endAnchor={"bottom"}/>
                            </div>)
                        })}
                    </Xwrapper> : null}
                </div>
                {rightItems.map((item, index) => {
                    return (
                        <div key={100 + index} style={{top: item.percentage}} className={styles.timeline_item}>
                            <div className={styles.timeline_item_point}>

                            </div>
                            <div className={styles.timeline_right_item_content}>
                                <p className={styles.timeline_item_duration}>{item.start}</p>
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
                                <p className={styles.timeline_item_duration}>{item.start}</p>
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