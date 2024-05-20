/* tslint:disable */
"use client";
import { useState } from 'react';
import { IoIosCloseCircle } from "react-icons/io";

interface ImageGalleryProps {
  imagePaths: string[];
}

const ImageGallery = ({ imagePaths}: ImageGalleryProps ) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageClick = (imagePath: string) => {
    setSelectedImage(imagePath);
  };

  const handleCloseClick = () => {
    setSelectedImage(null);
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {imagePaths.map((imagePath, index) => (
          <img
            key={index}
            src={imagePath}
            alt={`Image ${index}`}
            className="w-full cursor-pointer transform transition-transform duration-200 hover:scale-105"
            onClick={() => handleImageClick(imagePath)}
          />
        ))}
      </div>

      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50" onClick={handleCloseClick}>
          <div className="relative text-center">
            <IoIosCloseCircle className="absolute -top-8 -right-8 text-white text-4xl transform duration-200 hover:text-primary-0 hover:scale-125 focus:scale-95" onClick={handleCloseClick} />
            <img src={selectedImage} alt="Selected" className="max-w-90vw max-h-90vh border-2 border-black" />
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;

