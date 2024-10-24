import React from 'react'
import { Link } from 'react-router-dom'

function About() {
    return (
        <div className='mt-10 container mx-auto'>
            <h2 className='text-center font-handWriting md:text-5xl text-4xl tracking-wider md:pb-14 pb-6'>The Perpose of this Website</h2>
            <div className="md:flex justify-center items-center">
                <div className="flex-1 px-7">
                    <p className='font-extralight tracking-widest md:text-start'>This project is designed to keep our class connected by organizing and sharing each student's data in a fun and interactive way.The project is fully made by <Link className='text-yellow-300' to={"http://hmhasibul.netlify.app"}>Hasibul Islam</Link>. It’s all about building a sense of community, helping us stay in touch, and getting to know each other better. This project is just for us, making it easier to stay connected togather!</p>
                </div>

                <div className="flex-1 px-10 pt-10">
                    <img className='rounded-3xl mx-auto lg:w-3/4' src="img/profileImage2.jpeg" alt="image missing..." />
                </div>

            </div>
        </div>
    )
}

export default About