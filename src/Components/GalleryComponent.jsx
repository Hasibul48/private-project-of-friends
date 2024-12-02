import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight, FaTimes, FaDownload } from "react-icons/fa";

function GalleryComponent() {
    // Array of image URLs, dynamically created with filenames based on index.
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

    // State hooks to manage current image index and screen size condition
    const [currentIndex, setCurrentIndex] = useState(null); // Tracks the currently viewed image index
    const [isSmallScreen, setIsSmallScreen] = useState(false); // Detects if the screen is small (below 1024px)

    // Audio element for the sound effect, load the sound file to be used on button clicks
    const sound = new Audio("/sounds/jumping-on-wooden-floor-41234.mp3"); // Add your sound file path here

    // Play sound function, to play the sound when called
    const playSound = () => {
        sound.currentTime = 0; // Reset the sound to the start if it's already playing
        sound.play(); // Play the sound
    };

    // Effect hook to manage screen resize and apply logic for small screens
    useEffect(() => {
        const handleResize = () => setIsSmallScreen(window.innerWidth < 1024); // Set screen size condition
        handleResize(); // Initial check on component mount
        window.addEventListener("resize", handleResize); // Listen for resize events
        return () => window.removeEventListener("resize", handleResize); // Cleanup listener on unmount
    }, []);

    // Function to open the lightbox by setting the current image index
    const openLightbox = (index) => setCurrentIndex(index);

    // Function to close the lightbox
    const closeLightbox = () => {
        playSound();  // Play sound when closing the lightbox
        setCurrentIndex(null); // Reset the current index, thus closing the lightbox
    };

    // Function to navigate to the next image
    const showNextImage = () => {
        playSound();  // Play sound when navigating to the next image
        setCurrentIndex((prev) => (prev + 1) % imgURL.length); // Increment the index, loop around at the end
    };

    // Function to navigate to the previous image
    const showPrevImage = () => {
        playSound();  // Play sound when navigating to the previous image
        setCurrentIndex((prev) => (prev - 1 + imgURL.length) % imgURL.length); // Decrement index with wraparound
    };

    // Function to download the current image
    const downloadImage = () => {
        playSound();  // Play sound when starting image download
        const a = document.createElement("a"); // Create a temporary anchor element
        a.href = imgURL[currentIndex]; // Set the href attribute to the current image URL
        a.download = `Image_${currentIndex + 1}.jpg`; // Set the download filename
        a.click(); // Programmatically trigger the click to download the image
    };

    return (
        <div className="container mx-auto mt-24">
            {/* Heading for the gallery */}
            <h2 className="text-center font-handWriting text-4xl md:text-5xl tracking-wider pb-6 md:pb-14">
                Image Gallery
            </h2>

            {/* Image Grid */}
            <div className="imgWrapper mt-10 px-6 md:px-0 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7">
                {imgURL.map((url, index) => (
                    <img
                        key={index} // Unique key for each image element
                        className="rounded-2xl shadow-md shadow-themeColor cursor-pointer object-cover w-full h-auto"
                        src={url} // Image source URL
                        alt={`Gallery ${index + 1}`} // Accessible alt text
                        onClick={() => openLightbox(index)} // Open lightbox on click
                    />
                ))}
            </div>

            {/* Lightbox to view images */}
            {currentIndex !== null && (
                <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black bg-opacity-80">
                    {/* Close button */}
                    <button
                        className="absolute top-5 right-5 text-white text-3xl"
                        onClick={closeLightbox} // Close the lightbox when clicked
                    >
                        <FaTimes />
                    </button>

                    {/* Image being viewed in the lightbox */}
                    <img
                        src={imgURL[currentIndex]}
                        alt={`Lightbox ${currentIndex + 1}`}
                        className="max-w-full max-h-screen rounded-lg"
                    />

                    {/* Download button */}
                    <button
                        className="absolute bottom-20 text-white text-2xl bg-themeColor p-2 rounded-full hover:bg-opacity-90"
                        onClick={downloadImage} // Trigger download when clicked
                    >
                        <FaDownload />
                    </button>

                    {/* Navigation buttons (previous/next) */}
                    <div
                        className={`flex w-full justify-between items-center ${isSmallScreen ? "mt-8 px-6" : "absolute top-1/2 left-0 right-0 -translate-y-1/2"}`}
                    >
                        <button
                            className="text-white text-3xl bg-gray-700 p-3 rounded-full hover:bg-gray-600"
                            onClick={showPrevImage} // Show previous image when clicked
                        >
                            <FaArrowLeft />
                        </button>
                        <button
                            className="text-white text-3xl bg-gray-700 p-3 rounded-full hover:bg-gray-600"
                            onClick={showNextImage} // Show next image when clicked
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
