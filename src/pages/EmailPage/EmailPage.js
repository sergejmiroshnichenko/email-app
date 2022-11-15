import React, {useState} from "react";
import styles from './EmailPage.module.scss';
import Header from "../../components/Header/Header";
import Modal from '../../components/Modal/Modal'
import {BsPencilFill} from 'react-icons/bs';
import {FiSend} from 'react-icons/fi';
import Input from '../../components/Input/Input';
import Form from '../../components/Form/Form';
import {useForm} from 'react-hook-form';
import RichTextEditor from '../../components/RichTextEditor/RichTextEditor';
// import {ReactComponent as Email} from "../../assets/email.svg";
import {ReactComponent as Email1} from "../../assets/email1.svg";
import {ReactComponent as Email2} from "../../assets/email2.svg";


const EmailPage = ({isLoadedIn, setIsLoggedIn, userName, setUserName, setUserEmail, userEmail, setUserPassword}) => {

    const [modalActive, setModalActive] = useState(false);

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

    return (
        <div className={styles.emailPage}>
            <Header isLoadedIn={isLoadedIn}
                    setIsLoggedIn={setIsLoggedIn}
                    userName={userName}
                    userEmail={userEmail}
                    setUserEmail={setUserEmail}
                    setUserPassword={setUserPassword}
                    setUserName={setUserName}/>
            <main className={styles.container}>
                <Email1/>
                <Email2/>
                <Modal userName={userName} userEmail={userEmail} active={modalActive} setActive={setModalActive}
                       title={'New message'} minWidth={'post'}>
                    <Form className={styles.formSend}>
                        <div>
                            <span className={styles.from}>From : </span>
                            <Input label={userName} value={userEmail} userSelect={'fromEmail'} disabled/>
                        </div>
                        <div>
                            <span className={styles.to}>To : </span>
                            <Input
                                {...register('email', {
                                    required: 'email is require field',
                                    pattern: {
                                        value: /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/,
                                        message: 'please enter a valid email'
                                    }
                                })}
                                type="text"
                                placeholder='enter email...'
                                variant={'secondary'}
                                choice={'errorSecondary'}
                                error={String(errors?.email ? errors?.email?.message : '')}
                            />

                            <div>
                                <span className={styles.to}>Subject : </span>
                                <Input
                                    {...register('subject', {
                                        required: 'message subject is require field',
                                        minLength: {
                                            value: 3,
                                            message: 'at least 3 english letters'
                                        },
                                        maxLength: {
                                            value: 30,
                                            message: 'not more 30 english letters'
                                        },
                                        pattern: {
                                            value: /^[a-zA-Z]+$/g,
                                            message: 'only english letters'
                                        }
                                    })}
                                    variant={'secondary'}
                                    choice={'errorSecondary'}
                                    type="text"
                                    placeholder='message subject...'
                                    error={String(errors?.subject ? errors?.subject?.message : '')}
                                />
                            </div>
                            <RichTextEditor/>
                        </div>
                    </Form>
                </Modal>
                <button className={styles.write} onClick={() => setModalActive(true)}><BsPencilFill/> &nbsp; Write
                </button>
                <button className={styles.sent}><FiSend/> &nbsp; Sent letters</button>
            </main>
        </div>
    )
}

export default EmailPage;