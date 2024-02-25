'use client'
import { auth } from '@/configFirebase'
import { onAuthStateChanged } from 'firebase/auth'
import Link from 'next/link'
import { useEffect, useState } from 'react'
const Header = () => {
    const [authUser, setAuthUser] = useState(null)
    useEffect(() => {
        const listener = onAuthStateChanged(auth, user => {
            if (user) {
                setAuthUser(user)
            } else {
                setAuthUser(null)
            }
        })
        return () => {
            listener()
        }
    }, [])

    console.log(authUser)

    return (
        <header className='w-full flex justify-center items-center h-12 bg-slate-600 '>
            <div className='sm:container sm:mx-auto w-full flex justify-between items-center space-x-5 px-3'>
                <Link href='/' className='text-white text-2xl font-bold  '>
                    YOU LOGO
                </Link>
                <div className='flex items-center space-x-5'>
                    {authUser ? (
                        <>
                            <span>{authUser.email}</span>
                            <Link
                                href='/login'
                                className='text-white cursor-pointer'
                                onClick={() => auth.signOut()}
                            >
                                Log Out
                            </Link>
                        </>
                    ) : (
                        <Link
                            href='/login'
                            className='text-white cursor-pointer'
                        >
                            Log In
                        </Link>
                    )}
                    {!authUser ? (
                        <Link
                            href='/singup'
                            className='text-white cursor-pointer'
                        >
                            Sing Up
                        </Link>
                    ) : null}
                </div>
            </div>
        </header>
    )
}

export default Header
