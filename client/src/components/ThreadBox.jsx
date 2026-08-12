import styles from './ThreadBox.module.css';

export default function ThreadBox({ output, querying, elapsed }) {
  return (
    <div className={styles.thread}>
      {!output && !querying && (
        <p className={styles.empty}>Ask something below to see a response here.</p>
      )}

      {querying && (
        <div className={styles.loading} role="status" aria-live="polite">
          <span className={styles.loadingDot} />
          <span className={styles.loadingDot} />
          <span className={styles.loadingDot} />
          <span className={styles.loadingLabel}>Querying model…</span>
        </div>
      )}

      {!querying && output && (
        <div className={styles.response}>
          <p className={styles.responseText}>{output}</p>
          {elapsed !== null && <p className={styles.meta}>time elapsed: {elapsed}s</p>}
        </div>
      )}
    </div>
  );
}
