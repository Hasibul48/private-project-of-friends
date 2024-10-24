import React from 'react'

import AboutComponent from '../Components/About'
import { Link } from 'react-router-dom'
function About() {
    return (
        <>
            <div className='shadow-lg shadow-gray-700 border-themeColor border rounded-2xl mt-20 md:mt-28  container mx-auto py-4 flex flex-col gap-5'>
                <AboutComponent />
                <div className="px-7">

                    <div className="textSection text-start mt-10">
                        <h3 className='flex md:text-2xl text-xl'><span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-themeColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25" />
                        </svg></span>
                            কিছু স্মৃতি :</h3>
                        <p className='md:text-xl text-start flex flex-col gap-5 mt-2'>
                            কিছু স্মৃতির কথা লিখতে গেলে, মনে পড়ে আমাদের ক্লাসের সেই দিনগুলো, যেগুলো শুধুমাত্র পড়াশোনার জন্য নয়, একে অপরের সঙ্গে থাকা, হাসি-কান্না আর মুহূর্তগুলোকে একসঙ্গে উপভোগ করার জন্য।
                        </p>
                    </div>
                    <div className="textSection text-start mt-10">
                        <h3 className='flex md:text-2xl text-xl'><span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-themeColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25" />
                        </svg></span>
                            হাসির ফোয়ারা, ক্লাসের মাঝখানে :</h3>
                        <p className='md:text-xl text-start flex flex-col gap-5 mt-2'>
                            কখনও হঠাৎ করেই ক্লাসের মাঝখানে কেউ একটা মজার কথা বলতো, আর পুরো ক্লাস ভরে উঠতো হাসির ফোয়ারায়। সেই হাসির মুহূর্তগুলো আমাদের সবার মধ্যে যে আন্তরিক বন্ধন তৈরি করেছিল, তা আজীবন থেকে যাবে।
                        </p>
                    </div>
                    <div className="textSection text-start mt-10">
                        <h3 className='flex md:text-2xl text-xl'><span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-themeColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25" />
                        </svg></span>
                            বিরতির আড্ডা, জীবনের গল্প :</h3>
                        <p className='md:text-xl text-start flex flex-col gap-5 mt-2'>
                            ক্লাসের মধ্যবর্তী বিরতিতে বসে আড্ডা দেওয়া, যেখানে একে অপরের জীবনের গল্প শেয়ার করতাম—এগুলো শুধু আড্ডা নয়, ছিল আমাদের হৃদয়ের সংযোগ।
                        </p>
                    </div>

                    <div className="textSection text-center mt-10">
                        <h3 className='flex md:text-2xl text-xl'><span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-themeColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25" />
                        </svg></span>
                            মুহূর্তগুলো যেগুলো আজীবন থাকবে :</h3>
                        <p className='md:text-xl text-start flex flex-col gap-5 mt-2'>
                            সবকিছু পেরিয়ে, আজ আমাদের কাছে যা আছে, তা হল সেই মুহূর্তগুলো। হাসি-কান্না, আনন্দ-বেদনার যে স্মৃতিগুলো একসঙ্গে তৈরি করেছি, সেগুলো আজীবন হৃদয়ে থাকবে।
                        </p>
                    </div>
                    <div className="textSection text-center mt-10">
                        <p className='md:text-xl text-start flex flex-col gap-5 mt-2'>
                            মনে পড়ে প্রথম দিন ক্লাসে সবাই একে অপরের সঙ্গে পরিচিত হওয়ার সেই লাজুক মুহূর্তগুলো। কিন্তু ধীরে ধীরে, আমরা একে অপরের জীবনের অংশ হয়ে উঠলাম।
                            <br />
                            <br />
                            আর মনে পড়ে ক্লাসের পরে একসঙ্গে চা খেতে যাওয়ার কথা, সেই ছোট্ট ব্রেকগুলো যেন আমাদের জীবনের বিশাল উৎসব হয়ে উঠেছিল। পড়ার চাপের মাঝে সেই ছোট্ট হাসির মুহূর্তগুলো যেন সব কষ্ট ভুলিয়ে দিত।
                            <br />
                            <br />
                            কিছু মুহূর্ত কষ্টেরও ছিল—কখনও পরীক্ষার রেজাল্ট নিয়ে, কখনও ব্যক্তিগত জীবনের সমস্যা নিয়ে। কিন্তু সেসব মুহূর্তেও আমরা একে অপরের পাশে দাঁড়িয়েছি। সেই দিনগুলোতে বুঝেছি, আমরা শুধু ক্লাসমেট নই, আমরা একে অপরের জীবনের যাত্রী।
                            <br />
                            <br />
                            স্মৃতির পাতায় রয়ে গেছে আমাদের শেষ দিনের ক্লাস। যখন সবাই একে অপরকে বিদায় বলছিলাম, সেই আবেগঘন মুহূর্তগুলো মনে পড়লে আজও চোখে জল আসে।
                            <br />
                            <br />
                            একসঙ্গে কাটানো সেই সময়গুলো কোনোদিনও ভুলবো না। এই মুহূর্তগুলোই আমাদের জীবনের অমূল্য
                            <br />
                            <br />
                        </p>
                    </div>
                    <div className="textSection text-center mt-10">
                        <h3 className='flex md:text-2xl text-xl'><span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-themeColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25" />
                        </svg></span>
                            যে স্মৃতিগুলো থেকে যাবে, মনের গভীরে :</h3>
                        <p className='md:text-xl text-start flex flex-col gap-5 mt-2'>
                            সসময় কেটে যাবে, জীবন বদলে যাবে, কিন্তু আমাদের এই মুহূর্তগুলো, এই হাসি-কান্নার গল্পগুলো আজীবন মনের গভীরে থেকে যাবে, হৃদয়ে একটা বিশেষ জায়গায়।
                        </p>
                    </div>
                    <div className="textSection text-center mt-10">
                        <p className='md:text-xl text-lg'>
                            "সময় চলে যাবে, কিন্তু আমাদের স্মৃতিগুলো হৃদয়ে এক অমর আখ্যান হয়ে থেকে যাবে।"</p>

                    </div>
                </div>
            </div>
        </>
    )
}

export default About