import { useState } from 'react';
import Image from 'next/image';

/**
 * `LazyLoadingImage` is a functional component in React that renders an image with lazy loading.
 * It takes four props: `src`, `alt`, `width`, and `height`.
 * `src` is a string that represents the source URL of the image.
 * `alt` is a string that provides alternative text for the image.
 * `width` is a number that sets the width of the image.
 * `height` is a number that sets the height of the image.
 *
 * @param {Object} props - The properties passed to the component.
 * @param {string} props.src - The source URL of the image.
 * @param {string} props.alt - The alternative text for the image.
 * @param {number} props.width - The width of the image.
 * @param {number} props.height - The height of the image.
 * @returns {JSX.Element} The Image component with the specified properties and loading state.
 */
const LazyLoadingImage = ({ src, alt, width, height }: { src : string, alt : string, width : number, height : number }): JSX.Element => {
    const [isLoaded, setIsLoaded] = useState(false);

    /**
     * `handleImageLoad` is a function that sets the `isLoaded` state to true.
     * This function is triggered when the image has finished loading.
     * It does not take any parameters and does not return any value.
     *
     * @returns {void}
     */
    const handleImageLoad = (): void => {
        setIsLoaded(true);
    };

    return (
        <Image
            className={`fade-in ${isLoaded ? 'loaded' : ''}`}
            src={src}
            alt={alt}
            width={width}
            height={height}
            onLoad={handleImageLoad}
        />
    );
};

export default LazyLoadingImage;