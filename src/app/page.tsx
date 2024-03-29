'use client'

import { useState, useEffect } from 'react';
import styles from "./page.module.css";
import { IoIosArrowDown } from "react-icons/io";

export default function Home() {
  const words: string[] = ["MOBILE APPS", "DESKTOP APPS", "WEB-BASED APPS"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true); 

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsAnimating(false);
    }, 1000); 

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <div className={styles.container}>
      <div className={styles.image_background}>
        <img src="hero_background.png" alt="Background Image" className={styles.background_image} />
      </div>

      <div className={`${styles.content} ${isAnimating ? styles.fadeIn : ''}`}>
        <div className={styles.top_section}>
          <p className={styles.top_section_text_small}>we develop</p>
          <h1 className={styles.top_section_text}>
            {words[currentIndex]} <a className={styles.white_dot}>.</a>
          </h1>
          <p className={styles.top_section_text_medium}>to &quot;resolve&quot; problems.</p>
          
          <div className={styles.top_section_buttons}>
            <button className={styles.get_in_touch_button}>Get in Touch</button>
            <div className={styles.button_seperator}></div>
            <button className={styles.view_examples_button}>View Work</button>
          </div>
        </div>

        <div className={styles.middle_section}>
          <h1><IoIosArrowDown /></h1>
        </div>

        <div className={styles.resolve_problems}>
          <h1 className={styles.solve_once_text}>Resolve Problems, Don't Re-Solve.</h1>
          <p className={styles.solve_once_description}>Problems should only have to be solved once and once only.</p>
          <p className={styles.solve_once_description}>Our code is designed to last from the beginning.</p>

          <img className={styles.code_editor_image} src="code_editor.png"/>
        </div>

        <div className={styles.contact_us}>
          <h1 className={styles.contact_us_text}>Need to Contact Us?</h1>
          <p className={styles.contact_us_description}>Have a very specific query or even just a quick question?</p>
          <p className={styles.contact_us_description}>feel free to email us.</p>

          <div className={styles.email_button_us_container}>
            <a className={styles.email_us_button} href="mailto:hello@resolvo.dev">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.at_icon}>
                <path d="M21 12C21 10.1195 20.411 8.28625 19.3156 6.7577C18.2203 5.22915 16.6736 4.08209 14.893 3.47763C13.1123 2.87316 11.187 2.84166 9.38744 3.38754C7.58792 3.93341 6.00459 5.02925 4.85982 6.52115C3.71505 8.01304 3.06635 9.82604 3.00482 11.7055C2.94329 13.585 3.47203 15.4366 4.51677 17.0001C5.56152 18.5637 7.06979 19.7608 8.82975 20.4232C10.5897 21.0856 12.513 21.18 14.3294 20.6933" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round"/>
                <circle cx="12" cy="12" r="4" stroke="#FFFFFF" stroke-width="2"/>
                <path d="M16 9V13.5C16 14.8807 17.1193 16 18.5 16V16C19.8807 16 21 14.8807 21 13.5V12" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round"/>
              </svg>

              Email Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
