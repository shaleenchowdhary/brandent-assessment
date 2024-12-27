import { useState, useEffect } from 'react';
import '../App.css';
const images = [
  {
    src: 'https://ekalblspindia.org/wp-content/uploads/2024/08/banner-3-copy.jpg',
    alt: 'Image 1',
  },
  {
    src: 'https://ekalblspindia.org/wp-content/uploads/2023/11/banner-1.jpg',
    alt: 'Image 2',
  },
  {
    src: 'https://ekalblspindia.org/wp-content/uploads/2023/12/hero.jpg',
    alt: 'Image 3',
  },
  {
    src: 'https://ekalblspindia.org/wp-content/uploads/2023/12/banner-3.jpg',
    alt: 'Image 4',
  },
  {
    src: 'https://ekalblspindia.org/wp-content/uploads/2023/12/banner-4.jpg',
    alt: 'Image 5',
  },
];

const SlideShow = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full md:h-[450px] h-36">
      {images.map((image, i) => {
        return (
          <img
            key={i}
            src={image.src}
            alt={image.alt}
            className={`absolute w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
              i === index ? 'opacity-100' : 'opacity-0'
            }`}
          ></img>
        );
      })}
    </div>
  );
};
export default SlideShow;
