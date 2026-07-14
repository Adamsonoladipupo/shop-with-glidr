import { useState } from "react";
import { SearchManIllustration } from "../../assets/illustrations";
import styles from "./ShopSmarter.module.css";
import girlIllustration from "../../assets/undraw_searching.png"
import girlIllustration2 from "../../assets/Group.png"

const slides = [
  {
    label: "01",
    heading: "Glidr has you covered!",
    body: "Looking for a product? Planning your shopping trip? Trying to avoid long searches and checkout queues? Glidr helps you find products, navigate stores, and shop smarter — all in one seamless experience.",
  },
  {
    label: "02",
    heading: "Navigate any store with ease",
    body: "Glidr maps your optimal route based on your shopping list, so you spend less time walking in circles and more time doing what you actually love.",
  },
  {
    label: "03",
    heading: "Checkout lives in your pocket",
    body: "Pay, receive your digital receipt, and track your spending — all without touching a physical queue. Shopping has never felt this effortless.",
  },
];

export default function ShopSmarter() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const slide = slides[activeIndex];

  return (
    <section className={styles.section} aria-labelledby="shopsmarter-heading">
      <div className={styles.card}>
        {/* Illustration */}
        <div className={styles.illustrationWrapper} aria-hidden="true">
          {/* <SearchManIllustration className={styles.illustration} /> */}
          <img src={girlIllustration2} alt="" className={styles.illustration}/>
        </div>

        {/* Text side */}
        <div className={styles.content}>
          {/* Dot nav */}
          <div className={styles.dotRow} role="tablist" aria-label="Slide navigation">
            <button
              className={styles.playBtn}
              onClick={() => setIsPlaying(p => !p)}
              aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
            >
              {isPlaying ? (
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                  <rect x="2" y="1" width="2.5" height="8" fill="rgba(255,255,255,0.9)" rx="1" />
                  <rect x="5.5" y="1" width="2.5" height="8" fill="rgba(255,255,255,0.9)" rx="1" />
                </svg>
              ) : (
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                  <path d="M3 2 L8 5 L3 8 Z" fill="rgba(255,255,255,0.9)" />
                </svg>
              )}
            </button>

            {slides.map((s, i) => (
              <button
                key={s.label}
                role="tab"
                aria-selected={activeIndex === i}
                aria-label={`Slide ${s.label}`}
                className={`${styles.dot} ${activeIndex === i ? styles.dotActive : ""}`}
                onClick={() => setActiveIndex(i)}
              >
                {s.label}
              </button>
            ))}

            <span className={styles.dotRing} aria-hidden="true">
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <circle cx="5" cy="5" r="4" stroke="rgba(255,255,255,0.5)" strokeWidth="1.2" />
              </svg>
            </span>
          </div>

          <h2 id="shopsmarter-heading" className={styles.heading}>
            {slide.heading}
          </h2>
          <p className={styles.body}>{slide.body}</p>
        </div>
      </div>
    </section>
  );
}
