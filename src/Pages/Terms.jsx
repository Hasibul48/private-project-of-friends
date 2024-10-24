import React from 'react'

function Terms() {
    return (
        <div className='shadow-lg shadow-gray-700 border-themeColor border rounded-2xl mt-20 md:mt-28  container mx-auto px-7 py-4 flex flex-col gap-5'>
            <h1 className='text-2xl text-center mb-6 mt-5'>শর্তাবলী (Terms & Conditions)</h1>

            <div className="textSection">

                <p>
                    এই ওয়েবসাইটটি শুধুমাত্র আমাদের ক্লাসের সদস্যদের ব্যবহারের জন্য এবং ব্যক্তিগত তথ্য ভাগ করে নেওয়ার জন্য তৈরি করা হয়েছে। এই সাইট ব্যবহার করার মাধ্যমে, আপনি নিম্নলিখিত শর্তাবলী মেনে চলতে সম্মত হচ্ছেন:
                </p>
            </div>

            <div className="textSection">
                <b>ব্যবহারের শর্ত:</b>
                <p>
                    এই ওয়েবসাইটে প্রদানকৃত তথ্য শুধুমাত্র আমাদের কাজে ব্যবহার করা হবে। এটি অন্য কোথাও ব্যবহারের জন্য অনুমোদিত নয়।
                </p>
            </div>

            <div className="textSection">
                <b>গোপনীয়তা রক্ষা:</b>
                <p>ব্যবহারকারীরা নিজেদের তথ্য শেয়ার করলেও অন্যের তথ্য গোপন রাখা বাধ্যতামূলক। কোনো ব্যবহারকারী অন্যের ব্যক্তিগত তথ্য তৃতীয় পক্ষের সঙ্গে শেয়ার করতে পারবে না।</p>
            </div>

            <div className="textSection">
                <b>অবৈধ কার্যক্রম: </b>
                <p>এই সাইটের মাধ্যমে কোনো অবৈধ কার্যক্রম বা ক্ষতিকারক কার্যক্রম চালানো সম্পূর্ণ নিষিদ্ধ।</p>
            </div>

            <div className="textSection">
                <b>পরিবর্তন</b>
                <p>
                    ওয়েবসাইটের নিয়ম ও শর্তাবলী যে কোনো সময় পরিবর্তন করা হতে পারে, এবং ব্যবহারকারীদের সেই পরিবর্তিত শর্ত মেনে চলতে হবে।</p>
            </div>
        </div>
    )
}

export default Terms