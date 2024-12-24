'use client';
import { MermaidDiagram } from '@lightenna/react-mermaid-diagram';
import styles from "/styles/Home.module.css";

export default function Mermaid() {
    return <div className={styles.experience_graph_parent}>
        <MermaidDiagram className={styles.experience_graph}>{
            // chart
            `%%{init: { 'logLevel': 'debug', 'theme': 'base', 'themeVariables': {
              'commitLabelColor': '#ffffff',
              'commitLabelBackground': '#171717',
              'commitLabelFontSize': '16px'}, 'gitGraph': {'showBranches': true, 'showCommitLabel':true,'mainBranchName': 'Significant Projects', 'rotateCommitLabel': false, 'labelPosition': 'center', 'useMaxWidth': true, 'wrap': true}} }%%
                  gitGraph BT:
                    commit id:"myQuotes - Sep 2022"
                    commit id:"MyFavMovies - Dec 2022"
                    commit id:"Schedule Change Notifier - Jan 2023"
                    commit id:"WidgetSchedule - Jun 2023"                    
                    branch "Work Experience"
                    commit id:"Content Curator"
                    checkout "Significant Projects"
                    commit id:"SightlessKnight - Oct 2023"
                    commit id:"CropThatImage! - Feb 2024"
                    checkout "Work Experience"
                    commit id:"Internship - Web Developer - Apr 2024"
                    commit id:"Excel Sheet Enhancements for a Private Client - May 2024"
                    commit id:"Excel Sheet Enhancements for a Private Client - June 2024"
                    commit id:"VBA Macro Developer, I-Xon a.s."
                    checkout "Significant Projects"
                    commit id:"Now"
            `
        }</MermaidDiagram>
    </div> ;
}