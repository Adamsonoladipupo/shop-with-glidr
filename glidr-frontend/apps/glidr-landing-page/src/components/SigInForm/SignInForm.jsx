import { useState } from "react";
import styles from "./SignInForm.module.css";

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

export default function SignInForm() {
    const [form, setForm] = useState({
        email: "",
        password: "",
        rememberMe: false,
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

        if (!form.email.trim()) {
            next.email = "Email is required.";
        } else if (!emailRegex.test(form.email)) {
            next.email = "Enter a valid email address.";
        }

        if (!form.password.trim()) {
            next.password = "Password is required.";
        }

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
            email: form.email,
            password: form.password,
        };

        console.log(payload);

        // TODO:
        // await loginStore(payload);
    };

    return (
        <div className={styles.page}>
            <div className={styles.card}>

                <h1 className={styles.title}>
                    Welcome Back
                </h1>

                <p className={styles.subtitle}>
                    Sign in to manage your store and inventory.
                </p>

                <form
                    className={styles.form}
                    onSubmit={handleSubmit}
                >

                    <Input
                        label="Email Address"
                        type="email"
                        placeholder="store@email.com"
                        value={form.email}
                        error={errors.email}
                        onChange={(e) =>
                            update("email", e.target.value)
                        }
                    />

                    <Input
                        label="Password"
                        type="password"
                        placeholder="Enter your password"
                        value={form.password}
                        error={errors.password}
                        onChange={(e) =>
                            update("password", e.target.value)
                        }
                    />

                    <div className={styles.options}>

                        <label className={styles.remember}>
                            <input
                                type="checkbox"
                                checked={form.rememberMe}
                                onChange={() =>
                                    update(
                                        "rememberMe",
                                        !form.rememberMe
                                    )
                                }
                            />
                            Remember Me
                        </label>

                        <a
                            href="#"
                            className={styles.forgot}
                        >
                            Forgot Password?
                        </a>

                    </div>

                    <button
                        type="submit"
                        className={styles.button}
                    >
                        Log In
                    </button>

                    <p className={styles.footer}>
                        Don't have an account?{" "}
                        <a href="store">
                            Create Store Account
                        </a>
                    </p>

                </form>

            </div>
        </div>
    );
}