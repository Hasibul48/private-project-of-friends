import React from 'react'
import { Link } from 'react-router-dom'

function Perpose() {
    return (
        <div className='mt-40 container mx-auto'>
            <h2 className='text-center font-handWriting md:text-5xl text-4xl tracking-wider md:pb-14 pb-6'>ওয়েবসাইটটি বানানোর উদ্দেশ্য</h2>
            <div className="md:flex justify-center items-center">

                <div className="flex-1 px-10 pt-10">
                    <img className='rounded-3xl mx-auto lg:w-3/4' src="img/profileImage3.jpg" alt="image missing..." />
                </div>

                <div className="flex-1 px-7 mt-14 md:mt-0">
                    <p>ওয়েবসাইট সম্পর্কে,</p>
                    <p>এটি একটি স্বতন্ত্র ওয়েবসাইট, যা বানানো হয়েছে কেবলমাত্র ছাত্রদের যোগাযোগ রক্ষা করার সুবিধার্থে। ওয়েবসাইটের সাথে কোন সার্ভার সংযুক্ত না থাকায় ওয়েবসাইটটি দ্বারা কোন ধরনের আর্থিক লেনদেন করা সম্ভব নয়। এটি একটি ব্যক্তিগত ওয়েবসাইট যা ব্যবহার করা হবে একান্ত ব্যক্তিগতভাবে, কোন ধরনের সাধারণ ব্যবহারকারীদের জন্য এটি প্রযোজ্য নয় ওয়েব সাইটটি সম্পূর্ণ নির্মাণ করেছেন <Link className='text-yellow-300' to={'http://hmhasibul.vercel.app'}>হাসিবুল ইসলাম</Link> । আপনার সুস্থতা কামনা করে সমাপ্ত করছি -- ধন্যবাদ</p>
                </div>

            </div>
        </div>
    )
}

export default Perpose