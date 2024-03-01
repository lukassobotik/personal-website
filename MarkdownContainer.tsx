import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import SyntaxHighlighter from 'react-syntax-highlighter';
import styles from "./styles/Home.module.css";
import React, {ReactNode, useEffect, useState} from "react";

export default function MarkdownContainer({data}: {data: any}) {
    const [ style, setStyle ] = useState({})
    useEffect(() => {
        import('react-syntax-highlighter/dist/esm/styles/prism/material-dark')
            .then(mod => setStyle(mod.default));
    })

    function getHeadingId(children: ReactNode) {
        const text = React.Children.toArray(children).join('');
        const cleanedText = text.replace(/[^a-z0-9\s]/gi, '');
        return cleanedText.toLowerCase().replace(/ /g, "-");
    }

    return (
        <>
            <div className="readme-container" id={"readme_container"}>
                <ReactMarkdown remarkPlugins={[remarkGfm]} skipHtml={true} components={{
                    ol: ({node, ...props}) => {
                        return <ol {...props} style={{marginLeft: "2rem"}} />
                    },
                    ul: ({node, ...props}) => {
                        return <ul {...props} style={{marginLeft: "2rem"}} />
                    },
                    h1: ({node, children, ...props}) => {
                        return <h1 {...props} style={{marginTop: "2rem"}}>{children}</h1>
                    },
                    h2: ({node, children, ...props}) => {
                        return <h2 {...props} id={getHeadingId(children)} style={{marginTop: "2rem"}}>{children}</h2>
                    },
                    h3: ({node, children, ...props}) => {
                        return <h3 {...props} style={{marginTop: "2rem"}}>{children}</h3>
                    },
                    code: ({node, inline, className, children, ...props}) => {
                        const match = /language-(\w+)/.exec(className || '')
                        return !inline && match ? (
                            <SyntaxHighlighter
                                {...props}
                                style={style}
                                customStyle={{ borderRadius: '6px' }}
                                language={match[1]}
                                PreTag="div">
                                {String(children + match[1]).replace(/\n$/, '')}
                            </SyntaxHighlighter>
                        ) : (
                            <code {...props} className={styles.inline_code}>
                                {children}
                            </code>
                        )
                    },
                    a: ({node, ...props}) => {
                        return <a {...props} style={{ color: "#2f81f7" }} className={styles.url} />
                    },
                    p: ({node, ...props}) => {
                        return <p {...props} style={{ marginTop: ".5rem" }} />
                    },
                    blockquote: ({node, ...props}) => {
                        return <blockquote {...props} style={{ display: "none" }} />
                    }
                }}>{data?.readmeContents ? data?.readmeContents : null}</ReactMarkdown>
            </div>
        </>
    )
}