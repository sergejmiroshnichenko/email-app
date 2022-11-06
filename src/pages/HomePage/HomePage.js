import React from "react";
import styles from './HomePage.module.scss';
import {useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";


const HomePage = ({setIsLoggedIn, setUserName}) => {
    const navigate = useNavigate();
    const {
        register,
        formState: {
            errors, isValid
        },
        handleSubmit,
        reset,
    } = useForm({
        mode: 'onChange'
    });

    const onSubmit = (data) => {
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('userName', data.login);
        setUserName(data.login);
        setIsLoggedIn(true);
        navigate('./email');
        reset();
    }
    return (
        <section className='background'>
            <form className={styles.authorisation} onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.input}>
                    <input
                        {...register('login', {
                            required: 'please enter your name',
                            minLength: {
                                value: 3,
                                message: 'at least 3 english letters'
                            },
                            maxLength: {
                                value: 9,
                                message: 'not more 9 english letters'
                            },
                            pattern: {
                                value: /^[a-zA-Z]+$/g,
                                message: 'only english letters'
                            }
                        })}
                        className={styles.placeholder}
                        type="text"
                        placeholder='Enter your name...'
                    />

                    <input
                        {...register('password', {
                            required: 'please enter a number',
                            minLength: {
                                value: 3,
                                message: 'at least 3 numbers',
                            },
                            maxLength: {
                                value: 9,
                                message: 'not more 9 numbers',
                            },
                            pattern: {
                                value: /^[0-9]+$/,
                                message: 'please enter a number',
                            },
                        })}
                        className={styles.placeholder}
                        type="number"
                        placeholder='Enter your password...'
                    />

                    <p className={styles.errorLogin}>{errors?.login && errors?.login?.message}</p>
                    <p className={styles.errorPassword}>{errors?.password && errors?.password?.message}</p>
                </div>
                <button className={styles.submit}
                        type="submit"
                        disabled={!isValid}>Submit
                </button>
            </form>
        </section>
    )
}

export default HomePage;