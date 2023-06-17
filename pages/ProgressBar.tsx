import styles from "../styles/Home.module.css";

export default function ProgressBar({progress, color, showPercentage}: {progress: number, color: string, showPercentage: boolean}) {
    return (
        <>
            <div className={styles.progressbar}>
                <div className={styles.progressbar_parent}>
                    <div className={styles.progressbar_outline}/>
                    <div className={styles.progressbar_progress} style={{width: `${progress}%`, backgroundColor: color}}/>
                </div>
                {showPercentage ? <div>{progress}%</div> : null}
            </div>
        </>
    )
}