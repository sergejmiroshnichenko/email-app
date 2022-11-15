import React from 'react';
// import styles from "./Form.module.scss";

const Form = ({children, width,...props}) => {
    return (
        <form  noValidate {...props}>{children}</form>
    )
}

export default Form