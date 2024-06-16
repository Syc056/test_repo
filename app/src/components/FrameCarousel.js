import React, { useState, useRef, useEffect } from 'react';
import './FrameCarousel.css'

const FrameCarousel = ({ images,handleClick ,clickedTitles}) => {
    const carouselRef = useRef(null);
    const [isDown, setIsDown] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    useEffect(() => {
        const carousel = carouselRef.current;

        const handleMouseDown = (e) => {
            setIsDown(true);
            if (carousel) {
                setStartX(e.pageX - carousel.offsetLeft);
                setScrollLeft(carousel.scrollLeft);
            }
        };

        const handleMouseLeave = () => {
            setIsDown(false);
        };

        const handleMouseUp = () => {
            setIsDown(false);
        };

        const handleMouseMove = (e) => {
            if (!isDown) return;
            e.preventDefault();
            if (carousel) {
                const x = e.pageX - carousel.offsetLeft;
                const walk = (x - startX) * 3; // Scroll speed
                carousel.scrollLeft = scrollLeft - walk;
            }
        };

        if (carousel) {
            carousel.addEventListener('mousedown', handleMouseDown);
            carousel.addEventListener('mouseleave', handleMouseLeave);
            carousel.addEventListener('mouseup', handleMouseUp);
            carousel.addEventListener('mousemove', handleMouseMove);
        }

        return () => {
            if (carousel) {
                carousel.removeEventListener('mousedown', handleMouseDown);
                carousel.removeEventListener('mouseleave', handleMouseLeave);
                carousel.removeEventListener('mouseup', handleMouseUp);
                carousel.removeEventListener('mousemove', handleMouseMove);
            }
        };
    }, [isDown, startX, scrollLeft]);

    return (
        <div 
        className='frame-carousel-container'
        ref={carouselRef}>
        <div
        className='frame-carousel-imgs'
        >
            {images.map((img, index) => (
                <img
                className={`frame-carousel-img ${clickedTitles.includes(img.title)?"clicked":""}`}
                onClick={() => handleClick(index,img.title)}
                key={index} src={img.photo_full} alt={`Image ${index + 1}`} />
            ))}
        </div>
    </div>
    );
};

export default FrameCarousel;
