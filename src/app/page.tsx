'use client'

import { useState, useEffect } from 'react';
import styles from "./page.module.css";

import { IoIosArrowDown } from "react-icons/io";

export default function Home() {
  const words: string = ["MOBILE APPS", "DESKTOP APPS", "WEB-BASED APPS"];
  
  const [currentIndex, setCurrentIndex] = useState(0);

  const rotateWords = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
  };

  useEffect(() => {
    const interval = setInterval(rotateWords, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className={styles.image_background}>
        <img src="hero_background.png" alt="Background Image" className={styles.background_image} />
      </div>

      <div className={styles.top_section}>
        <p className={styles.top_section_text_small}>We Develop</p>
        <h1 className={styles.top_section_text}>{words[currentIndex]} <a className={styles.white_dot}>.</a></h1>
        <p className={styles.top_section_text_medium}>To Resolve Problems.</p>
        
        <div className={styles.top_section_buttons}>
          <button className={styles.get_in_touch_button}>Get in Touch</button>
          <div className={styles.button_seperator}></div>
          <button className={styles.view_examples_button}>View Examples</button>
        </div>
      </div>

      <div className={styles.middle_section}>
        <h1><IoIosArrowDown /></h1>
      </div>

      <div className={styles.examples_section}>
        <h1 className={styles.header_text}>PROJECTS</h1>
        <p className={styles.description_text}>Our previous & current projects.</p>
        
        <div className={styles.header_seperator}></div>

        <div className={styles.solvio}>
          <div className={styles.example_top_section}>
            <div className={styles.image_container}>
              <img src="solvio_website.png" className={styles.website_screenshot}/>
            </div>

            <h1 className={styles.example_header_text}>SOLVIO</h1>          
            {/* <a href='https://solvio.app' className={styles.url}>
              <p className={styles.example_text_url}>solvio.app</p>
            </a> */}
          </div>
        </div>
      </div>
    </div>
  );
}
