import { useState } from "react";
import { PhoneAppIllustration } from "../../assets/illustrations";
import styles from "./OurFeatures.module.css";
import cartIllustation from "../../assets/undraw_shopping-app_b80f 1.png"

const features = [
  {
    id: "search",
    label: "Product Search",
    title: "Find products instantly",
    description:
      "Search by name, category, or barcode scan, and know exactly what's in stock before you even walk into the store. No more aisle-wandering.",
  },
  {
    id: "discover",
    label: "Product Discover",
    title: "Discover new favourites",
    description:
      "Browse curated deals, new arrivals, and personalised recommendations based on your shopping history and taste preferences.",
  },
  {
    id: "checkout",
    label: "Zero Checkout",
    title: "Skip the queue",
    description:
      "Scan as you shop, pay through the app, and walk straight out. No queues, no waiting just glide to the exit with your receipt already in your pocket.",
  },
];

export default function OurFeatures() {
  const [activeId, setActiveId] = useState("search");
  const active = features.find(f => f.id === activeId);

  return (
    <section id="features" className={styles.section} aria-labelledby="features-heading">
      <div className={styles.card}>
        {/* Header row */}
        <div className={styles.header}>
          <h2 id="features-heading" className={styles.heading}>Our features</h2>

          <div className={styles.tabs} role="tablist" aria-label="Feature categories">
            {features.map(f => (
              <button
                key={f.id}
                role="tab"
                aria-selected={activeId === f.id}
                aria-controls={`feature-panel-${f.id}`}
                id={`feature-tab-${f.id}`}
                className={`${styles.tab} ${activeId === f.id ? styles.tabActive : ""}`}
                onClick={() => setActiveId(f.id)}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div
          className={styles.content}
          role="tabpanel"
          id={`feature-panel-${active.id}`}
          aria-labelledby={`feature-tab-${active.id}`}
        >
          <div className={styles.featureCard}>
            <h3 className={styles.featureTitle}>{active.title}</h3>
            <p className={styles.featureDesc}>{active.description}</p>
            <a href="#" className={styles.learnMore}>Learn More →</a>
          </div>

          <div className={styles.illustration} aria-hidden="true">
            {/* <PhoneAppIllustration className={styles.illustrationSvg} /> */}
            <img src={cartIllustation} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
