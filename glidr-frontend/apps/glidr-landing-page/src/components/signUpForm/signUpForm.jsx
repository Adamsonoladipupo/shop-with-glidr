import { useState } from "react";
import styles from "./signUpForm.module.css";

function Input({
  label,
  type = "text",
  placeholder = "",
  value,
  error,
  onChange,
}) {
  return (
    <div className={styles.field}>
      <label className={styles.label}>
        {label}
      </label>

      <input
        type={type}
        value={value}
        placeholder={placeholder}
        className={`${styles.input} ${error ? styles.inputError : ""
          }`}
        onChange={onChange}
      />

      {error && (
        <span className={styles.error}>
          {error}
        </span>
      )}
    </div>
  );
}

export default function SignUpForm() {
  const [form, setForm] = useState({
    businessName: "",
    ownerName: "",

    street: "",
    city: "",
    state: "",
    country: "",
    postalCode: "",

    email: "",
    phoneNumber: "",

    password: "",
    confirmPassword: "",

    acceptTerms: false,
  });

  const [errors, setErrors] = useState({});

  const emailRegex =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const update = (field, value) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));

    if (errors[field]) {
      setErrors((prev) => ({
        ...prev,
        [field]: "",
      }));
    }
  };

  const validate = () => {
    const next = {};

    if (!form.businessName.trim())
      next.businessName = "Business name is required.";

    if (!form.ownerName.trim())
      next.ownerName = "Owner name is required.";

    if (!form.street.trim())
      next.street = "Street address is required.";

    if (!form.city.trim())
      next.city = "City is required.";

    if (!form.state.trim())
      next.state = "State is required.";

    if (!form.country.trim())
      next.country = "Country is required.";

    if (!form.email.trim())
      next.email = "Email is required.";
    else if (!emailRegex.test(form.email))
      next.email = "Enter a valid email.";

    if (!form.phoneNumber.trim())
      next.phoneNumber = "Phone number is required.";

    if (form.password.length < 8)
      next.password = "Password must be at least 8 characters.";

    if (form.confirmPassword !== form.password)
      next.confirmPassword = "Passwords do not match.";

    if (!form.acceptTerms)
      next.acceptTerms =
        "You must accept the Terms & Conditions.";

    return next;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validation = validate();

    if (Object.keys(validation).length) {
      setErrors(validation);
      return;
    }

    const payload = {
      businessName: form.businessName,
      ownerName: form.ownerName,
      email: form.email,
      phoneNumber: form.phoneNumber,
      password: form.password,

      businessType: "SUPERMARKET",

      address: {
        street: form.street,
        city: form.city,
        state: form.state,
        country: form.country,
        postalCode: form.postalCode,
      },
    };

    console.log(payload);

    /**
     * TODO
     *
     * await registerStore(payload);
     */
  };

  <Input
    label="Business Name"
    value={form.businessName}
    error={errors.businessName}
    onChange={(e) =>
      update("businessName", e.target.value)
    }
  />


  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <h1 className={styles.title}>
          Create Your Store Account
        </h1>

        <p className={styles.subtitle}>
          Join Glidr and connect your supermarket
          with thousands of customers.
        </p>

        <form
          onSubmit={handleSubmit}
          className={styles.form}
        >

          <h2 className={styles.sectionTitle}>
            Business Information
          </h2>

          <div className={styles.row}>
            <Input
              label="Business Name"
              placeholder="ABC Supermarket"
            />

            <Input
              label="Owner Name"
              placeholder="John Doe"
            />
          </div>


          <h2 className={styles.sectionTitle}>
            Business Address
          </h2>

          <Input
            label="Street Address"
            placeholder="12 Allen Avenue"
          />

          <div className={styles.row}>
            <Input
              label="City"
              placeholder="Ikeja"
            />

            <Input
              label="State"
              placeholder="Lagos"
            />
          </div>

          <div className={styles.row}>
            <Input
              label="Country"
              placeholder="Nigeria"
            />

            <Input
              label="Postal Code"
              placeholder="100271"
            />
          </div>


          <h2 className={styles.sectionTitle}>
            Account Information
          </h2>

          <Input
            label="Email Address"
            type="email"
            placeholder="store@email.com"
          />

          <Input
            label="Phone Number"
            placeholder="08012345678"
          />

          <div className={styles.row}>
            <Input
              label="Password"
              type="password"
            />

            <Input
              label="Confirm Password"
              type="password"
            />
          </div>


          <div className={styles.terms}>
            <input
              type="checkbox"
              checked={form.acceptTerms}
              onChange={() =>
                update(
                  "acceptTerms",
                  !form.acceptTerms
                )
              }
            />

            <span>
              I agree to the{" "}
              <a href="#">Terms & Conditions</a>
            </span>
          </div>

          {errors.acceptTerms && (
            <span className={styles.error}>
              {errors.acceptTerms}
            </span>
          )}

          <button
            type="submit"
            className={styles.button}
          >
            Create Store Account
          </button>

          <p className={styles.footer}>
            Already have an account?{" "}
            <a href="store_in">Log In</a>
          </p>
        </form>
      </div>
    </div>
  );
}