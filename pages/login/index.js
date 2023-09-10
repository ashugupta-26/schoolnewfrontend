import React from 'react'
import styles from './styles.module.css';
const index = () => {
    return (
        <div className={styles.login}>
            <div className={styles.container}>
                <h1 className={styles.title}>Login</h1>
                <div className={styles.form}>
                    <label htmlFor="">Email:</label>
                    <input name="email" type="email" placeholder='Enter your email' />
                    <label htmlFor="">Password:</label>
                    <input name="password" type="password" placeholder='Enter your password' />
                    <button type='submit'>Login</button>
                </div>
            </div>
        </div>
    )
}

export default index