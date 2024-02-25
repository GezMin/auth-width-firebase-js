'use client'
import { useState } from 'react'

const SingIn = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    return (
        <div className='w-full h-[90vh] flex justify-center items-center '>
            <div className='flex flex-col justify-center item-center gap-3 border w-[320px] border-slate-600 p-10 m-3'>
                <h1 className='text-2xl'>Log In</h1>
                <input className='p-2' type='email' placeholder='Email' />
                <input className='p-2' type='password' placeholder='Password' />
                <button className='p-2 bg-slate-600 text-white hover:bg-slate-700'>
                    SingIn
                </button>
            </div>
        </div>
    )
}

export default SingIn
