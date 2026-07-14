import { CartIllustration } from "../../assets/illustrations";
import styles from "./CallToAction.module.css";
import cartIllustration from "../../assets/undraw_empty-cart_574u 1.png"

export default function CallToAction() {
  return (
    <section className={styles.section} aria-labelledby="cta-heading">
      <div className={styles.card}>
        {/* Copy */}
        <div className={styles.copy}>
          <h2 id="cta-heading" className={styles.heading}>
            Shop your product with ease
          </h2>
          <p className={styles.body}>
            Get ₦300 off your first order when you use this promo code!
          </p>
          <a href="https://expo.dev/artifacts/eas/m5K8S9rcl9NoKVefBCIMy5hnHBj_SVXYZg4B2m9MKLA.apk" className={styles.cta}>Shop Now!</a>
        </div>

        {/* Illustration */}
        <div className={styles.illustration} aria-hidden="true">
          {/* <CartIllustration className={styles.illustrationSvg} /> */}
          <img src={cartIllustration} alt="" />
        </div>
      </div>
    </section>
  );
}
