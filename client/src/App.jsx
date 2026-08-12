import { useRef, useState } from "react";
import ThreadBox from "./components/ThreadBox";
import PromptBox from "./components/PromptBox";
import styles from "./App.module.css";

export default function App() {
    const [prompt, setPrompt] = useState("");
    const [output, setOutput] = useState("");
    const [querying, setQuerying] = useState(false);
    const [elapsed, setElapsed] = useState(null);
    const abortRef = useRef(null);

    const handleSubmit = () => {
        if (querying || !prompt.trim()) return;

        setQuerying(true);
        setOutput("");
        setElapsed(null);

        const start = Date.now();
        const controller = new AbortController();
        abortRef.current = controller;

        fetch(`/query?prompt=${encodeURIComponent(prompt)}`, {
            signal: controller.signal,
        })
            .then((res) => {
                if (!res.ok) {
                    throw new Error(`Server returned ${res.status}`);
                }

                return res.text();
            })
            .then((modelOutput) => {
                setElapsed(((Date.now() - start) / 1000).toFixed(2));
                setOutput(modelOutput);
            })
            .catch((err) => {
                if (err.name !== "AbortError") {
                    console.error("Error:", err);
                    setOutput(
                        "Could not reach the model. Check that the server is running and try again.",
                    );
                }
            })
            .finally(() => {
                setQuerying(false);
                abortRef.current = null;
            });
    };

    const handleHalt = () => {
        abortRef.current?.abort();
        setQuerying(false);
    };

    return (
        <div className={styles.app}>
            <main className={styles.main}>
                <header className={styles.brand}>
                    <svg
                        viewBox='0 0 32 32'
                        className={styles.spotIcon}
                        aria-hidden='true'
                    >
                        <circle cx='16' cy='16' r='13' fill='var(--lb-text)' />
                        <line
                            x1='16'
                            y1='4'
                            x2='16'
                            y2='28'
                            stroke='var(--lb-surface)'
                            strokeWidth='1.5'
                        />
                        <circle
                            cx='11'
                            cy='12'
                            r='2.1'
                            fill='var(--lb-surface)'
                        />
                        <circle
                            cx='21'
                            cy='12'
                            r='2.1'
                            fill='var(--lb-surface)'
                        />
                        <circle
                            cx='11'
                            cy='21'
                            r='2.1'
                            fill='var(--lb-surface)'
                        />
                        <circle
                            cx='21'
                            cy='21'
                            r='2.1'
                            fill='var(--lb-surface)'
                        />
                    </svg>
                    <h1 className={styles.wordmark}>
                        Lady<span className={styles.wordmarkAccent}>Bug</span>
                    </h1>
                </header>

                <ThreadBox
                    output={output}
                    querying={querying}
                    elapsed={elapsed}
                />

                <PromptBox
                    prompt={prompt}
                    setPrompt={setPrompt}
                    onSubmit={handleSubmit}
                    onHalt={handleHalt}
                    querying={querying}
                />
            </main>
        </div>
    );
}
