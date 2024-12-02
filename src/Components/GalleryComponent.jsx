import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight, FaTimes, FaDownload } from "react-icons/fa";

function GalleryComponent() {
    const imgURL = Array.from({ length: 30 }, (_, i) =>
        `img/gallery/img${i + 1}.${i >= 17 ? "jpeg" : "jpg"}`
    );

    const [currentIndex, setCurrentIndex] = useState(null);
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    const sound = new Audio("/sounds/jumping-on-wooden-floor-41234.mp3"); // Add your sound file path here

    // Play sound function
    const playSound = () => {
        sound.currentTime = 0; // Reset the sound if it was already playing
        sound.play();
    };

    useEffect(() => {
        const handleResize = () => setIsSmallScreen(window.innerWidth < 1024);
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const openLightbox = (index) => setCurrentIndex(index);
    const closeLightbox = () => {
        playSound();  // Play sound on close
        setCurrentIndex(null);
    };
    const showNextImage = () => {
        playSound();  // Play sound on next
        setCurrentIndex((prev) => (prev + 1) % imgURL.length);
    };
    const showPrevImage = () => {
        playSound();  // Play sound on previous
        setCurrentIndex((prev) => (prev - 1 + imgURL.length) % imgURL.length);
    };
    const downloadImage = () => {
        playSound();  // Play sound on download
        const a = document.createElement("a");
        a.href = imgURL[currentIndex];
        a.download = `Image_${currentIndex + 1}.jpg`;
        a.click();
    };

    return (
        <div className="container mx-auto mt-24">
            <h2 className="text-center font-handWriting text-4xl md:text-5xl tracking-wider pb-6 md:pb-14">
                Image Gallery
            </h2>

            <div className="imgWrapper mt-10 px-6 md:px-0 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7">
                {imgURL.map((url, index) => (
                    <img
                        key={index}
                        className="rounded-2xl shadow-md shadow-themeColor cursor-pointer object-cover w-full h-auto hover:scale-105 transition-transform"
                        src={url}
                        alt={`Gallery ${index + 1}`}
                        onClick={() => openLightbox(index)}
                    />
                ))}
            </div>

            {currentIndex !== null && (
                <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black bg-opacity-80">
                    <button
                        className="absolute top-5 right-5 text-white text-3xl"
                        onClick={closeLightbox}
                    >
                        <FaTimes />
                    </button>

                    {/* Image Indicator */}
                    <div className="absolute top-5 left-5 text-white text-xl">
                        Image {currentIndex + 1} out of {imgURL.length}
                    </div>

                    <img
                        src={imgURL[currentIndex]}
                        alt={`Lightbox ${currentIndex + 1}`}
                        className="max-w-full max-h-screen rounded-lg"
                    />

                    <button
                        className="absolute bottom-20 text-white text-2xl bg-themeColor p-2 rounded-full hover:bg-opacity-90"
                        onClick={downloadImage}
                    >
                        <FaDownload />
                    </button>

                    <div
                        className={`flex w-full justify-between items-center ${isSmallScreen ? "mt-8 px-6" : "absolute top-1/2 left-0 right-0 -translate-y-1/2"}`}
                    >
                        <button
                            className="text-white text-3xl bg-gray-700 p-3 rounded-full hover:bg-gray-600"
                            onClick={showPrevImage}
                        >
                            <FaArrowLeft />
                        </button>
                        <button
                            className="text-white text-3xl bg-gray-700 p-3 rounded-full hover:bg-gray-600"
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
