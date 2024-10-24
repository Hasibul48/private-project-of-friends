import React from 'react'
import { Link } from 'react-router-dom'

function AboutDeveloper() {
    return (
        <div className='mt-40 container mx-auto'>
            <h2 className='text-center font-handWriting md:text-5xl text-4xl tracking-wider '>About The Developer</h2>
            <div className="md:flex justify-center items-center">
                <div className="flex-1 px-7">
                    <h2 className='text-themeColor font-extrabold md:text-xl md:text-start mt-7'>Who is Hasibul?</h2>
                    <p className='font-extralight tracking-widest md:text-start'>Hasibul Islam is the one and only developer of this website who is proficient in mongoDB NodeJS ExpressJS and reactJS. For any kind of information about me you can check out my <Link className='text-yellow-300' to={'http://hmhasibul.netlify.app'}>portfolio</Link> website.</p>
                </div>

                <div className="flex-1 px-10 pt-10">
                    <img className='headerImg mx-auto md:w-3/4 shadow-2xl shadow-gray-700 border-4 border-themeColor' src="img/hasibul.jpeg" alt="image missing..." />
                </div>

            </div>
        </div>
    )
}

export default AboutDeveloper