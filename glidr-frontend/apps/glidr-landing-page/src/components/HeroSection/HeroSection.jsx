import { useState } from "react";
import { ShopperIllustration } from "../../assets/illustrations";
import styles from "./HeroSection.module.css";

export default function HeroSection() {
  const [query, setQuery] = useState("");

  const handleDiscover = (e) => {
    e.preventDefault();
    /* wire up search logic here */
  };

  return (
    <section className={styles.hero} aria-labelledby="hero-heading">
      {/* Illustrations */}
      <div className={styles.illustrationRow} aria-hidden="true">
        <ShopperIllustration className={styles.illustration} />
        {/* <ForkliftIllustration className={styles.illustration} /> */}
      </div>

      {/* Search bar */}
      <form className={styles.searchBar} onSubmit={handleDiscover} role="search">
        <svg className={styles.searchIcon} viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <circle cx="7" cy="7" r="5" stroke="var(--color-teal)" strokeWidth="1.5" />
          <line x1="11" y1="11" x2="14" y2="14" stroke="var(--color-teal)" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
        <input
          type="search"
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="enter product name"
          className={styles.searchInput}
          aria-label="Search for a product"
        />
        <button type="submit" className={styles.searchBtn}>discover product</button>
      </form>

      {/* Copy */}
      {/* <p className={styles.eyebrow}>
        <span className={styles.eyebrowDot} aria-hidden="true" /> Glidr
      </p> */}
      <h1 id="hero-heading" className={styles.heading}>
        <span className={styles.accent}>Glidr.</span> Simplify shopping experience
        from product discovery to checkout.
      </h1>
      <p className={styles.subheading}>Glide through your favorite store</p>

      <a href="https://expo.dev/artifacts/eas/m5K8S9rcl9NoKVefBCIMy5hnHBj_SVXYZg4B2m9MKLA.apk" className={styles.cta}>Shop Now!</a>
    </section>
  );
}
