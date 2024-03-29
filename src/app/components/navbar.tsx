'use client'

import styles from "./navbar.module.css";
import { handleScrollToContact } from '@/functions/scroll';

export default function NavBar() {
  return (
    <div className={styles.navbar}>
        <div className={styles.navbar_components}>
            <h1 className={styles.resolvo_text}>RESOLVO</h1>

            <div className={styles.navbar_buttons}>
                <button className={styles.contact_us_button} onClick={handleScrollToContact}>Contact Us</button>
                <div className={styles.button_seperator}></div>
                <button className={styles.our_projects_button}>Previous Work</button>
            </div>
        </div>
    </div>
  );
}
