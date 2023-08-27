import { useState } from 'react';
import Image from 'next/image';

const LazyLoadingImage = ({ src, alt, width, height }: { src : string, alt : string, width : number, height : number }) => {
    const [isLoaded, setIsLoaded] = useState(false);

    const handleImageLoad = () => {
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