import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight, FaTimes, FaDownload } from "react-icons/fa";

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
        'img/gallery/img18.jpeg',
        'img/gallery/img19.jpeg',
        'img/gallery/img20.jpeg',
        'img/gallery/img21.jpeg',
        'img/gallery/img22.jpeg',
        'img/gallery/img23.jpeg',
        'img/gallery/img24.jpeg',
        'img/gallery/img25.jpeg',
        'img/gallery/img26.jpeg',
        'img/gallery/img27.jpeg',
        'img/gallery/img28.jpeg',
        'img/gallery/img29.jpeg',
        'img/gallery/img30.jpeg',
    ];

    const [currentIndex, setCurrentIndex] = useState(null);

    const openLightbox = (index) => {
        setCurrentIndex(index);
    };

    const closeLightbox = () => {
        setCurrentIndex(null);
    };

    const showNextImage = () => {
        setCurrentIndex((currentIndex + 1) % imgURL.length);
    };

    const showPrevImage = () => {
        setCurrentIndex((currentIndex - 1 + imgURL.length) % imgURL.length);
    };

    const downloadImage = () => {
        const a = document.createElement("a");
        a.href = imgURL[currentIndex];
        a.download = `Image_${currentIndex + 1}.jpg`;
        a.click();
    };

    return (
        <div className="container mx-auto mt-24">
            <h2 className="text-center font-handWriting md:text-5xl text-4xl tracking-wider md:pb-14 pb-6">
                Image Gallery
            </h2>

            {/* Gallery Grid */}
            <div className="imgWrapper mt-10 px-6 md:px-0 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7">
                {imgURL.map((url, index) => (
                    <img
                        key={index}
                        className="rounded-2xl shadow-md shadow-themeColor cursor-pointer object-cover w-full h-auto"
                        src={url}
                        alt={`Gallery ${index + 1}`}
                        onClick={() => openLightbox(index)}
                    />
                ))}
            </div>

            {/* Lightbox */}
            {currentIndex !== null && (
                <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black bg-opacity-80">
                    {/* Close Button */}
                    <button
                        className="absolute top-5 right-5 text-white text-3xl"
                        onClick={closeLightbox}
                    >
                        <FaTimes />
                    </button>

                    {/* Image Counter */}
                    <div className="absolute top-5 left-5 text-white text-lg">
                        {currentIndex + 1}/{imgURL.length}
                    </div>

                    {/* Image Display */}
                    <img
                        src={imgURL[currentIndex]}
                        alt={`Lightbox ${currentIndex + 1}`}
                        className="max-w-full max-h-screen rounded-lg"
                    />

                    {/* Download Button */}
                    <button
                        className="absolute bottom-20 text-white text-2xl bg-themeColor p-2 rounded-full hover:bg-opacity-90"
                        onClick={downloadImage}
                    >
                        <FaDownload />
                    </button>

                    {/* Navigation Buttons */}
                    <div className="w-full flex justify-between items-center mt-4 md:mt-8">
                        {/* For Large Screens (Buttons on Image Level) */}
                        <button
                            className={`${window.innerWidth >= 1024
                                ? "absolute left-5 top-1/2 transform -translate-y-1/2"
                                : "relative mt-4"
                                } text-white text-3xl bg-gray-700 p-3 rounded-full hover:bg-gray-600`}
                            onClick={showPrevImage}
                        >
                            <FaArrowLeft />
                        </button>
                        <button
                            className={`${window.innerWidth >= 1024
                                ? "absolute right-5 top-1/2 transform -translate-y-1/2"
                                : "relative mt-4"
                                } text-white text-3xl bg-gray-700 p-3 rounded-full hover:bg-gray-600`}
                            onClick={showNextImage}
                        >
                            <FaArrowRight />
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default GalleryComponent;
