import React from 'react';
import classNames from "classnames";

const Button = ({children, className, ...props}) => {
    return(
        <button {classNames(styles.button, className)}>
            {children}
        </button>
    )
}

export default Button

