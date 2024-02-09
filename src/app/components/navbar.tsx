import styles from "./navbar.module.css";

export default function NavBar() {
  return (
    <div className={styles.navbar}>
        <div className={styles.navbar_components}>
            <h1 className={styles.resolvo_text}>RESOLVO</h1>

            <div className={styles.navbar_buttons}>
                <button className={styles.get_in_touch_button}>Contact Us</button>
                <div className={styles.button_seperator}></div>
                <button className={styles.our_projects_button}>Our Projects</button>
            </div>
        </div>
    </div>
  );
}
