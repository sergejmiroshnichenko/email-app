import React, {useState} from "react";
import styles from './HomePage.module.scss';
import {useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import {FaRegEye, FaRegEyeSlash} from "react-icons/fa";
import Input from '../../components/Input/Input';
import Form from '../../components/Form/Form';
import Modal from '../../components/Modal/Modal'
import axios, { AxiosRequestConfig } from 'axios';


const HomePage = ({setIsLoggedIn, setUserName, setUserEmail, setUserPassword, isLoadedIn}) => {

    const [showPassword, setShowPassword] = useState(false);
    const [catchError, setCatchError] = useState(null);
    const [modalActive, setModalActive] = useState(false);

    const changeFormValidation = () => {
        setIsLoggedIn(!isLoadedIn);
    }

    const check = isLoadedIn ? 'Submit' : 'Continue'
    const title = isLoadedIn ? 'Sign in' : 'Create account'

    const togglePassword = () => {
        setShowPassword(prev => !prev)
    }

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


    // const axiosInstance = axios.create({
    //     baseURL: 'http://68.183.74.14:4005/api',
    //     headers: {
    //         Accept: 'application/json',
    //         'Content-Type': 'application/json',
    //     },
    // });
    //
    // const fetchUserData = async (username, password) => {
    //     const requestConfig: AxiosRequestConfig = {
    //         headers: { Authorization: `Basic ${btoa(`${username}:${password}`)}`},
    //         url: '/users/current/',
    //         method: 'get',
    //     };
    //
    //     const response = await axiosInstance.request(requestConfig);
    //     response.data.then(res => console.log(res.json()));
    //     return response.data.then(res => res.json());
    // };

    const send = (userName, userEmail, userPassword) => {
        const user = 'dev_1';
        const password = 'AggC21223';
        const token = btoa(`${user}:${password}`);
        axios({
            method: 'POST',
            url: 'http://68.183.74.14:4005/api/users/',
            data: {
                username: `${userName}`, email: `${userEmail}`, password: `${userPassword}`
            },
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Basic ${token}`,
            },
        }).then(response => console.log(response.data))
            .catch(error => setCatchError(error.response.data.username.join()))
    }

    const onSubmit = (data) => {
        console.log('data',data)
        send(data.username, data.email, data.password);
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('userName', data.username);
        localStorage.setItem('userPassword', data.password);
        localStorage.setItem('userEmail', data.email);
        setUserName(data.username);
        setUserPassword(data.password);
        setUserEmail(data.email);
        setIsLoggedIn(true);
        // navigate('./email')
        reset();
    }
    return (
        <>
            <Form className={styles.authorisation} onSubmit={handleSubmit(onSubmit)}>
                <p className={styles.signIn}>{title}</p>
                <div className={styles.input}>
                    <Input
                        {...register('username', {
                            required: 'please enter your name',
                            minLength: {
                                value: 1,
                                message: 'at least 1 character'
                            },
                            maxLength: {
                                value: 150,
                                message: '150 characters or fewer'
                            },
                            pattern: {
                                value: /^[\w.@+-]+$/g,
                                message: 'english letters, digits and @/./+/-/_ only'
                            }
                        })}
                        // catchError={catchError}
                        variant={'primary'}
                        choice={'error'}
                        type="text"
                        placeholder='Enter your name...'
                        error={String(errors?.username ? errors?.username?.message : '')}
                    />
                    <div className={styles.passwordInput}>
                        <Input
                            {...register('password', {
                                required: 'please enter password',
                                minLength: {
                                    value: 1,
                                    message: 'at least 1 english letters',
                                },
                                maxLength: {
                                    value: 128,
                                    message: 'not more 128 english letters'
                                },
                                pattern: {
                                    value: /^[a-zA-Z]+$/g,
                                    message: 'only english letters',
                                },
                            })}
                            variant={'primary'}
                            choice={'error'}
                            type={!showPassword ? "password" : "text"}
                            placeholder='Enter your password...'
                            error={String(errors?.password ? errors?.password?.message : '')}
                        />
                        <button className={styles.iconEye} onClick={togglePassword} type='button'>
                            {showPassword ? <FaRegEye/> : <FaRegEyeSlash/>}
                        </button>
                    </div>

                    {!isLoadedIn && <Input
                        {...register('email', {
                            required: 'email is require field',
                            pattern: {
                                value: /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/,
                                message: 'please enter a valid email'
                            },
                            maxLength: {
                                value: 254,
                                message: 'not more 254 characters or fewer'
                            },
                        })}
                        variant={'primary'}
                        choice={'error'}
                        type="text"
                        placeholder='Enter your email...'
                        error={String(!isLoadedIn && errors?.email ? errors?.email?.message : '')}
                    />}
                </div>

                <button className={styles.submit}
                        type="submit"
                        onClick={() => { catchError ? navigate('./email') : setModalActive(true)
                        }}
                        disabled={!isValid}>{check}
                </button>
                {!isLoadedIn &&
                <p className={styles.register}>Already have an account?
                    <span onClick={changeFormValidation}> Sign in</span>
                </p>}
            </Form>
            <Modal active={modalActive}
                   isLoadedIn={isLoadedIn}
                   changeFormValidation={changeFormValidation}
                   setActive={setModalActive}
                   minWidth={'confirm'}
                   title={'Confirmation'}>
                <p className={styles.performAuth}>{catchError}</p>
            </Modal>
        </>
    )
}

export default HomePage;