import styles from "./image_carousel.module.css";
import React, { useState, useEffect } from 'react';

let imageNumber: number = 1;

const ImageCarousel = () => {
    useEffect(() => {
        const intervalId = setInterval(() => {
          if (imageNumber < 3) {
            imageNumber += 1;
          }
          console.log(imageNumber)
        }, 1500);
      
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className={styles.images}>
            {imageNumber === 1 ? (
                <img src="laptop_photo_one.png" className={styles.image} />
            ) : (
                <div></div>
            )}

            {imageNumber === 2 ? (
                <img src="laptop_photo_two.png" className={styles.image} />
            ) : (
                <div></div>
            )}

            {imageNumber === 3 ? (
                <img src="laptop_photo_three.png" className={styles.image} />
            ) : (
                <div></div>
            )}
            
        </div>
    );
};

export default ImageCarousel;
