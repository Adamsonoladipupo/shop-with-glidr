import { CategoryIcon } from "../../assets/illustrations";
import styles from "./ProvenMetrics.module.css";

const stats = [
  { value: "26%", label: "Reduction in time waste" },
  { value: "5%",  label: "Increase in sales" },
];

const categories = [
  { key: "all",       label: "Built for all product categories" },
  { key: "grocery",   label: "Food & Grocery" },
  { key: "dairy",     label: "Dairy & Eggs" },
  { key: "kitchen",   label: "Home & Kitchen" },
  { key: "health",    label: "Health & Wellness" },
  { key: "beverages", label: "Beverages" },
];

export default function ProvenMetrics() {
  return (
    <section className={styles.section} aria-labelledby="metrics-heading">
      <div className={styles.container}>
        {/* Left column */}
        <div className={styles.left}>
          <p className={styles.eyebrow}>Proven Metrics</p>
          <h2 id="metrics-heading" className={styles.heading}>
            More on-shelf availability, zero in-store product search.
          </h2>
          <p className={styles.body}>
            When you know exactly where products are, shopping becomes
            faster and stress-free.
          </p>

          <ul className={styles.stats} aria-label="Key metrics">
            {stats.map(({ value, label }) => (
              <li key={label} className={styles.statItem}>
                <span className={styles.statValue}>{value}</span>
                <span className={styles.statLabel}>{label}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right column — categories grid */}
        <ul className={styles.categoryGrid} aria-label="Supported product categories">
          {categories.map(({ key, label }) => (
            <li
              key={key}
              className={`${styles.categoryCard} ${key === "all" ? styles.cardActive : ""}`}
            >
              <CategoryIcon type={key} />
              <span className={styles.categoryLabel}>{label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
