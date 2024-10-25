import React from 'react'

function GalleryComponent() {

    const imgURL = [
        'img/gallery/img1.jpg',
        'img/gallery/img2.jpg',
        'img/gallery/img3.jpg',
        'img/gallery/img4.jpg',
        'img/gallery/img5.jpg',
        'img/gallery/img6.jpg',
        'img/gallery/img7.jpg',
        'img/gallery/img8.jpg',
        'img/gallery/img9.jpg',
        'img/gallery/img10.jpg',
        'img/gallery/img11.jpg',
        'img/gallery/img12.jpg',
        'img/gallery/img13.jpg',
        'img/gallery/img14.jpg',
        'img/gallery/img15.jpg',
        'img/gallery/img16.jpg',
        'img/gallery/img17.jpg',
    ];
    return (
        <div className='container mx-auto mt-24'>
            <h2 className='text-center font-handWriting md:text-5xl text-4xl tracking-wider md:pb-14 pb-6'>Image Gallery</h2>
            <div className="imgWrapper mt-10 px-6 md:px-0 grid grid-cols-2 md:grid-cols-3  lg:grid-cols-4 gap-7">

                {
                    imgURL.map(url => <a href={url}>
                        <img className='rounded-2xl shadow-md shadow-themeColor' src={url} alt="Image not found!" />
                    </a>)
                }


            </div>
        </div>
    )
}

export default GalleryComponent