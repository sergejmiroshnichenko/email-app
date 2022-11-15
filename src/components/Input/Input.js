import React, {forwardRef} from "react";
import styles from "./Input.module.scss";
import classNames from "classnames";


const Input = forwardRef(({ variant, error, label, className, choice, userSelect, catchError,  ...props}, ref) => {
    return (
        <div
            className={classNames(styles.wrap,
            variant === 'primary' ? styles.wrap : styles.wraps,
        )}>
            <div className={styles.label}>{label}</div>
            <input
                {...props}
                className={classNames(
                    styles.input,
                    variant === 'primary' ? styles.primary : styles.secondary,
                    userSelect === 'fromEmail' && styles.fromEmail
                )}
                ref={ref}
            />
            <span>{catchError}</span>
            {error && <p className={classNames(
                styles.error,
                choice === 'error' ? styles.error : styles.errorSecondary,
            )}>{error}</p>}
        </div>
    )
})

export default Input