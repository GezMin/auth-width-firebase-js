'use client'
import { useState } from 'react'
import { auth } from '@/configFirebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { useRouter } from 'next/navigation'

const SingUp = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [copyPassword, setCopyPassword] = useState('')
    const [error, setError] = useState('')
    const router = useRouter()

    const registerUser = e => {
        e.preventDefault()

        if (password !== copyPassword) {
            setError('Passwords do not match')
            return
        }

        createUserWithEmailAndPassword(auth, email, password)
            .then(userCredential => {
                // Signed in
                const user = userCredential.user
                setEmail('')
                setPassword('')
                setCopyPassword('')
                setError('')
                router.push('/login')
                // console.log(user)
            })
            .catch(error => {
                setError(error.message)
            })
    }

    return (
        <div className='w-full h-[90vh] flex justify-center items-center '>
            <div className='flex flex-col justify-center item-center gap-3 border w-[320px] border-slate-600 p-10 m-3'>
                <h1 className='text-2xl'>Registration</h1>
                <input
                    value={email}
                    className='p-2 text-black'
                    type='email'
                    placeholder='Email'
                    onChange={e => setEmail(e.target.value)}
                />
                <input
                    value={password}
                    className='p-2 text-black'
                    type='password'
                    placeholder='Password'
                    onChange={e => setPassword(e.target.value)}
                />
                <input
                    value={copyPassword}
                    className='p-2 text-black'
                    type='password'
                    placeholder='Password'
                    onChange={e => setCopyPassword(e.target.value)}
                />

                <button
                    className='p-2 bg-slate-600 text-white hover:bg-slate-700'
                    onClick={registerUser}
                >
                    SingUp
                </button>
                {error ? <p className='text-red-500'>{error}</p> : null}
            </div>
        </div>
    )
}

export default SingUp
