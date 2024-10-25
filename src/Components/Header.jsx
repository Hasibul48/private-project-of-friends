import React from 'react'

function Header() {
    return (
        <div className='md:flex md:py-32 justify-center container p-10 items-center mt-16 md:mt-0'>
            <div className="flex-1">
                <img className={'rounded-3xl mx-auto lg:w-3/4'} src="img/profileImage.jpeg" alt="image missing..." />
            </div>
            <div className="flex-1 md:ml-16 md:mt-0 mt-20 text-center leading-8 md:leading-10">
                <h1 className='text-themeColor font-bold md:text-xl'>On behalf of</h1>
                <h2 className='font-handWriting md:text-4xl text-3xl tracking-wider'>Class Ten (Dakhil 2025)</h2>
                <p className='font-extralight tracking-widest'>Jabal-e-Noor Dakhil Madrasah</p>
            </div>
        </div>
    )
}

export default Header