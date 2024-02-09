import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
      <div className={styles.top_section}>
        <p className={styles.top_section_text_small}>We build..</p>
        <h1 className={styles.top_section_text}>BIG THINGS</h1>

        <div className={styles.top_section_buttons}>
          <button className={styles.get_in_touch_button}>Get in Touch</button>
          <div className={styles.button_seperator}></div>
          <button className={styles.our_projects_button}>Our Projects</button>
        </div>
      </div>
    </div>
  );
}
