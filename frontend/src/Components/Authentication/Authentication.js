import React from 'react'
import styles from './Authentication.module.css'
export default function Authentication() {
    function submit(e) {
        e.preventDefault()
        
    }
    return (
        <>
            <div className={styles.Logincontainer}>
                <form>
                    <input
                        type='text'
                        className='name'
                        name='name'
                        placeholder='Enter Name'
                    />

                    <input
                        type='email'
                        className='email'
                        name='email'
                        placeholder='Enter Email'
                    />
                    <input
                        type='password'
                        className='password'
                        name='password'
                        placeholder='Enter Password'
                    />
                    <button className='register' onSubmit={submit}>Register</button>
                </form>
            </div>
        </>
    )
}
