import React from 'react';
import styles from './Modal.module.scss';
import classNames from "classnames";
import {MdOutlineClose} from 'react-icons/md'



const Modal = ({active, setActive, children, title, minWidth, changeFormValidation, isLoadedIn}) => {

    //     useEffect(() => {
//         document.body.classList.add('scroll-lock');
//         return () => {
//             document.body.classList.remove('scroll-lock');
//         }
//     }, [])
    const option = minWidth === 'post' ? 'Send' : 'Ok'

    return (
        <div className={classNames(styles.background, active && styles.active )}>
            <div className={classNames(
                styles.content,
                active && styles.active,
                minWidth === 'post' ? styles.post : styles.confirm
            )}>
                <div className={styles.title}>
                    <h3 className={styles.confirmation}>{title}</h3>
                    {minWidth === 'post' ? <MdOutlineClose className={styles.cross} onClick={() => setActive(false)}/> : ''}
                </div>
                <div className={styles.block}>
                    {children}
                </div>
                <div className={styles.btnBlock}>
                    <button className={styles.btnSuccess} type='button' onClick={() => { !isLoadedIn &&
                    changeFormValidation();
                    setActive(false);
                    }}>{option}</button>
                </div>
            </div>
        </div>
    )
};

export default Modal;