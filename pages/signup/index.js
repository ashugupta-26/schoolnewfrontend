import React from 'react'
import styles from './styles.module.css';
const index = () => {
    return (
        <div className={styles.signup}>
            <div className={styles.container}>
                <h1 className={styles.title}>Signup</h1>
                <div className={styles.form}>
                    <label htmlFor="">Name:</label>
                    <input name="name" type="text" placeholder='Enter your name' />
                    <label htmlFor="">Email:</label>
                    <input name="email" type="email" placeholder='Enter your email' />
                    <label htmlFor="">Phone no:</label>
                    <input name="phone" type="number" placeholder='Enter your phone no' />
                    <label htmlFor="">Password:</label>
                    <input name="password" type="password" placeholder='Enter your password' />
                    <button type='submit'>Sign up</button>
                </div>
            </div>
        </div>
    )
}

export default index