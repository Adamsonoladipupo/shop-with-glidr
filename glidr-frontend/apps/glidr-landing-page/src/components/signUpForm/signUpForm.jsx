import { useState } from "react";
import styles from "./signUpForm.module.css";

const COUNTRY_CODES = [
  { code: "NG", dial: "+234", flag: "🇳🇬" },
  { code: "GH", dial: "+233", flag: "🇬🇭" },
  { code: "KE", dial: "+254", flag: "🇰🇪" },
  { code: "ZA", dial: "+27",  flag: "🇿🇦" },
  { code: "GB", dial: "+44",  flag: "🇬🇧" },
  { code: "US", dial: "+1",   flag: "🇺🇸" },
];

export default function SignUpForm() {
  const [fields, setFields] = useState({
    supermarketName: "",
    supermarketAddress: "",
    phone: "",
    countryCode: COUNTRY_CODES[0],
    acceptTerms: true,
  });
  const [errors, setErrors] = useState({});
  const [countryOpen, setCountryOpen] = useState(false);

  const update = (key, value) => {
    setFields(prev => ({ ...prev, [key]: value }));
    if (errors[key]) setErrors(prev => ({ ...prev, [key]: "" }));
  };

  const validate = () => {
    const next = {};
    if (!fields.supermarketName.trim())    next.supermarketName    = "Supermarket name is required.";
    if (!fields.supermarketAddress.trim()) next.supermarketAddress = "Address is required.";
    if (!fields.phone.trim())              next.phone              = "Phone number is required.";
    else if (!/^\d{7,15}$/.test(fields.phone.replace(/\s/g, "")))
                                           next.phone              = "Enter a valid phone number.";
    if (!fields.acceptTerms)              next.acceptTerms        = "You must accept the T&C.";
    return next;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    /* submit logic here */
    console.log("Form submitted:", fields);
  };

  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <h1 className={styles.title}>Let's Get You Started!</h1>

        <form className={styles.form} onSubmit={handleSubmit} noValidate>

          {/* Supermarket Name */}
          <div className={styles.field}>
            <label className={styles.label} htmlFor="supermarketName">
              Supermarket Name
            </label>
            <input
              id="supermarketName"
              type="text"
              className={`${styles.input} ${errors.supermarketName ? styles.inputError : ""}`}
              placeholder="Your Supermarket Name"
              value={fields.supermarketName}
              onChange={e => update("supermarketName", e.target.value)}
              autoComplete="organization"
            />
            {errors.supermarketName && (
              <span className={styles.error} role="alert">{errors.supermarketName}</span>
            )}
          </div>

          {/* Supermarket Address */}
          <div className={styles.field}>
            <label className={styles.label} htmlFor="supermarketAddress">
              Supermarket Address
            </label>
            <input
              id="supermarketAddress"
              type="text"
              className={`${styles.input} ${errors.supermarketAddress ? styles.inputError : ""}`}
              placeholder="Your Supermarket Address"
              value={fields.supermarketAddress}
              onChange={e => update("supermarketAddress", e.target.value)}
              autoComplete="street-address"
            />
            {errors.supermarketAddress && (
              <span className={styles.error} role="alert">{errors.supermarketAddress}</span>
            )}
          </div>

          {/* Phone row */}
          <div className={styles.field}>
            <div className={`${styles.phoneRow} ${errors.phone ? styles.phoneRowError : ""}`}>
              {/* Country code picker */}
              <div className={styles.countryWrapper}>
                <button
                  type="button"
                  className={styles.countryBtn}
                  onClick={() => setCountryOpen(o => !o)}
                  aria-haspopup="listbox"
                  aria-expanded={countryOpen}
                  aria-label="Select country code"
                >
                  <span className={styles.flag}>{fields.countryCode.flag}</span>
                  <span className={styles.dial}>{fields.countryCode.dial}</span>
                  <svg
                    className={`${styles.chevron} ${countryOpen ? styles.chevronOpen : ""}`}
                    width="12" height="12" viewBox="0 0 12 12" fill="none"
                    aria-hidden="true"
                  >
                    <path d="M2 4 L6 8 L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>

                {countryOpen && (
                  <ul className={styles.dropdown} role="listbox" aria-label="Country codes">
                    {COUNTRY_CODES.map(c => (
                      <li
                        key={c.code}
                        role="option"
                        aria-selected={fields.countryCode.code === c.code}
                        className={`${styles.dropdownItem} ${fields.countryCode.code === c.code ? styles.dropdownItemActive : ""}`}
                        onClick={() => {
                          update("countryCode", c);
                          setCountryOpen(false);
                        }}
                      >
                        <span>{c.flag}</span>
                        <span>{c.dial}</span>
                        <span className={styles.countryName}>{c.code}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Divider */}
              <div className={styles.phoneDivider} aria-hidden="true" />

              {/* Phone input */}
              <input
                id="phone"
                type="tel"
                className={styles.phoneInput}
                placeholder="8023456789"
                value={fields.phone}
                onChange={e => update("phone", e.target.value.replace(/[^\d\s]/g, ""))}
                autoComplete="tel-national"
                aria-label="Phone number"
              />
            </div>
            {errors.phone && (
              <span className={styles.error} role="alert">{errors.phone}</span>
            )}
          </div>

          {/* Terms & Conditions */}
          <div className={styles.termsRow}>
            <button
              type="button"
              role="checkbox"
              aria-checked={fields.acceptTerms}
              className={`${styles.checkbox} ${fields.acceptTerms ? styles.checkboxChecked : ""}`}
              onClick={() => update("acceptTerms", !fields.acceptTerms)}
              aria-label="Accept terms and conditions"
            >
              {fields.acceptTerms && (
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                  <path d="M2 6 L5 9 L10 3" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </button>
            <span className={styles.termsText}>
              I hereby accept the{" "}
              <a href="#" className={styles.termsLink}>T&C</a>
              {" "}of Liquid
            </span>
          </div>
          {errors.acceptTerms && (
            <span className={`${styles.error} ${styles.errorTerms}`} role="alert">
              {errors.acceptTerms}
            </span>
          )}

          {/* Submit */}
          <button type="submit" className={styles.submitBtn}>
            Sign Up
          </button>

          {/* Login link */}
          <p className={styles.loginText}>
            Already have an account?{" "}
            <a href="#" className={styles.loginLink}>Log in</a>
          </p>

        </form>
      </div>
    </div>
  );
}