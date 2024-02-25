import Link from 'next/link'

const Header = () => {
    return (
        <header className='w-full flex justify-center items-center h-12 bg-slate-600 '>
            <div className='sm:container sm:mx-auto w-full flex justify-between items-center space-x-5 px-3'>
                <Link href='/' className='text-white text-2xl font-bold  '>
                    YOU LOGO
                </Link>
                <div className='flex items-center space-x-5'>
                    <Link href='/login' className='text-white cursor-pointer'>
                        Log In
                    </Link>
                    <Link href='/singup' className='text-white cursor-pointer'>
                        Sing Up
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default Header
